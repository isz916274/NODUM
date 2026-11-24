import { NextResponse } from "next/server";

type LeadType = "contact" | "diagnostic";

type LeadSubmission = {
  type: LeadType;
  name: string;
  email: string;
  company: string;
  phone: string;
  interest?: string;
  message?: string;
  process?: string;
  context?: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(
  body: Record<string, unknown>,
  key: string,
  maxLength: number,
): string | null {
  const value = body[key];

  if (typeof value !== "string") {
    return null;
  }

  const text = value.trim();
  return text.length <= maxLength ? text : null;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "El contenido de la solicitud no es válido." },
      { status: 400 },
    );
  }

  if (!isRecord(body)) {
    return NextResponse.json(
      { error: "El contenido de la solicitud no es válido." },
      { status: 400 },
    );
  }

  const type = body.type;
  const name = readText(body, "name", 120);
  const email = readText(body, "email", 254);
  const company = readText(body, "company", 160);
  const phone = readText(body, "phone", 40);

  if (
    (type !== "contact" && type !== "diagnostic") ||
    !name ||
    !email ||
    !company ||
    phone === null ||
    !isEmail(email)
  ) {
    return NextResponse.json(
      { error: "Revisa los campos obligatorios e intenta de nuevo." },
      { status: 400 },
    );
  }

  let submission: LeadSubmission;

  if (type === "contact") {
    const interest = readText(body, "interest", 40);
    const message = readText(body, "message", 2500);

    if (
      !interest ||
      !["wms", "software", "web", "applications", "other"].includes(interest) ||
      message === null
    ) {
      return NextResponse.json(
        { error: "Revisa el tema y el mensaje de tu solicitud." },
        { status: 400 },
      );
    }

    submission = { type, name, email, company, phone, interest, message };
  } else {
    const process = readText(body, "process", 2500);
    const context = readText(body, "context", 2500);

    if (!process || context === null) {
      return NextResponse.json(
        { error: "Revisa la descripción del proceso e intenta de nuevo." },
        { status: 400 },
      );
    }

    submission = { type, name, email, company, phone, process, context };
  }

  const webhook = process.env.LEADS_WEBHOOK_URL;

  if (!webhook) {
    return NextResponse.json(
      {
        error:
          "La recepción de solicitudes aún no está configurada. Intenta de nuevo más tarde.",
      },
      { status: 503 },
    );
  }

  let webhookUrl: URL;
  try {
    webhookUrl = new URL(webhook);
  } catch {
    console.error("LEADS_WEBHOOK_URL must be a valid URL.");
    return NextResponse.json(
      { error: "El servicio de solicitudes no está disponible." },
      { status: 500 },
    );
  }

  if (
    webhookUrl.protocol !== "https:" &&
    !(process.env.NODE_ENV !== "production" && webhookUrl.protocol === "http:")
  ) {
    console.error("LEADS_WEBHOOK_URL must use HTTPS in production.");
    return NextResponse.json(
      { error: "El servicio de solicitudes no está disponible." },
      { status: 500 },
    );
  }

  let upstream: Response;
  try {
    upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
  } catch (error) {
    console.error("Lead webhook request failed.", error);
    return NextResponse.json(
      { error: "No pudimos enviar tu solicitud. Intenta de nuevo más tarde." },
      { status: 502 },
    );
  }

  if (!upstream.ok) {
    console.error(`Lead webhook returned HTTP ${upstream.status}.`);
    return NextResponse.json(
      { error: "No pudimos enviar tu solicitud. Intenta de nuevo más tarde." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
