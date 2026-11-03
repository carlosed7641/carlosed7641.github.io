import type { ReactNode } from "react";

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`font-mono text-[12px] font-medium tracking-[0.18em] uppercase ${
        dark ? "text-brand-light" : "text-brand"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`mt-4 text-[34px] leading-[1.12] font-bold tracking-[-0.025em] md:text-[46px] ${className}`}
    >
      {children}
    </h2>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost-dark" | "ghost-light";
  external?: boolean;
};

const variants = {
  primary:
    "bg-brand text-white hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgb(21_128_61/0.6)]",
  "ghost-dark": "border border-cream/25 text-cream hover:border-cream hover:bg-cream/5",
  "ghost-light": "border border-ink/20 text-ink hover:border-ink",
};

export function Button({ href, children, variant = "primary", external = false }: ButtonProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex h-12 items-center gap-2 rounded-xl px-6 text-[15px] font-semibold btn-hover ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export function ArrowLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1.5 text-[15px] font-semibold ${
        dark ? "text-brand-light" : "text-brand"
      }`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  );
}
