"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

type LeadFormProps = {
  variant: "contact" | "diagnostic";
};

type FormStatus =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

function isErrorResponse(value: unknown): value is { error: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "error" in value &&
    typeof value.error === "string"
  );
}

function isSuccessResponse(value: unknown): value is { success: true } {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    value.success === true
  );
}

export function LeadForm({ variant }: LeadFormProps) {
  const [status, setStatus] = useState<FormStatus>({ kind: "idle" });
  const isDiagnostic = variant === "diagnostic";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "sending" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let result: unknown;
      try {
        result = await response.json();
      } catch {
        throw new Error(
          "No pudimos interpretar la respuesta. Intenta de nuevo más tarde.",
        );
      }

      if (!response.ok) {
        throw new Error(
          isErrorResponse(result)
            ? result.error
            : "No pudimos enviar tu solicitud. Intenta de nuevo más tarde.",
        );
      }

      if (!isSuccessResponse(result)) {
        throw new Error(
          "El servidor no confirmó tu solicitud. Intenta de nuevo más tarde.",
        );
      }

      form.reset();
      setStatus({
        kind: "success",
        message: "Recibimos tu solicitud. Gracias por escribirnos.",
      });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Ocurrió un error inesperado. Intenta de nuevo más tarde.",
      });
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <input name="type" type="hidden" value={variant} />
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor={`${variant}-name`}>Nombre</label>
          <input
            autoComplete="name"
            id={`${variant}-name`}
            maxLength={120}
            name="name"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor={`${variant}-email`}>Correo de trabajo</label>
          <input
            autoComplete="email"
            id={`${variant}-email`}
            maxLength={254}
            name="email"
            placeholder="nombre@empresa.com"
            required
            type="email"
          />
        </div>
        <div className="form-field">
          <label htmlFor={`${variant}-company`}>Empresa</label>
          <input
            autoComplete="organization"
            id={`${variant}-company`}
            maxLength={160}
            name="company"
            placeholder="Nombre de tu empresa"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor={`${variant}-phone`}>
            Teléfono <span>(opcional)</span>
          </label>
          <input
            autoComplete="tel"
            id={`${variant}-phone`}
            maxLength={40}
            name="phone"
            placeholder="Tu número de contacto"
            type="tel"
          />
        </div>
        {isDiagnostic ? (
          <>
            <div className="form-field form-field-wide">
              <label htmlFor={`${variant}-process`}>
                ¿Qué proceso te gustaría mejorar?
              </label>
              <textarea
                id={`${variant}-process`}
                maxLength={2500}
                name="process"
                placeholder="Cuéntanos cómo funciona hoy y qué te gustaría cambiar."
                required
                rows={4}
              />
            </div>
            <div className="form-field form-field-wide">
              <label htmlFor={`${variant}-context`}>
                Información adicional <span>(opcional)</span>
              </label>
              <textarea
                id={`${variant}-context`}
                maxLength={2500}
                name="context"
                placeholder="Sistemas actuales, personas involucradas u otro contexto útil."
                rows={3}
              />
            </div>
          </>
        ) : (
          <>
            <div className="form-field form-field-wide">
              <label htmlFor={`${variant}-interest`}>¿Qué te interesa?</label>
              <select defaultValue="" id={`${variant}-interest`} name="interest" required>
                <option disabled value="">
                  Selecciona una opción
                </option>
                <option value="wms">WMS para manufactura</option>
                <option value="software">Desarrollo de software</option>
                <option value="web">Desarrollo web</option>
                <option value="applications">Aplicaciones</option>
                <option value="other">Otra necesidad</option>
              </select>
            </div>
            <div className="form-field form-field-wide">
              <label htmlFor={`${variant}-message`}>
                ¿Cómo podemos ayudarte? <span>(opcional)</span>
              </label>
              <textarea
                id={`${variant}-message`}
                maxLength={2500}
                name="message"
                placeholder="Comparte algunos detalles de tu solicitud."
                rows={4}
              />
            </div>
          </>
        )}
      </div>
      <div className="form-footer">
        <p className="form-privacy">
          Evita incluir contraseñas o información confidencial en este
          formulario.
        </p>
        <button
          className="button button-primary"
          disabled={status.kind === "sending"}
          type="submit"
        >
          {status.kind === "sending" ? (
            <>
              Enviando
              <LoaderCircle aria-hidden="true" className="spinner" />
            </>
          ) : (
            <>
              {isDiagnostic ? "Enviar diagnóstico" : "Enviar solicitud"}
              <ArrowRight aria-hidden="true" />
            </>
          )}
        </button>
      </div>
      {status.kind === "error" ? (
        <p aria-live="polite" className="form-status" role="status">
          {status.message}
        </p>
      ) : null}
      {status.kind === "success" ? (
        <p
          aria-live="polite"
          className="form-status form-status-success"
          role="status"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
