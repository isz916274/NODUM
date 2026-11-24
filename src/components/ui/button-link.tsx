import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
  size?: "default" | "small";
  showArrow?: boolean;
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  size = "default",
  showArrow = true,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`button button-${variant}${size === "small" ? " button-small" : ""}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" /> : null}
    </Link>
  );
}
