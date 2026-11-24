import Link from "next/link";

export function Brand() {
  return (
    <Link aria-label="NODUM, inicio" className="brand" href="/">
      <span aria-hidden="true" className="brand-mark">
        <svg fill="none" viewBox="0 0 28 28">
          <path
            d="M4 23V5l20 18V5"
            stroke="currentColor"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="2.2"
          />
          <path d="M4 5h6v6" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      </span>
      <span>NODUM</span>
    </Link>
  );
}
