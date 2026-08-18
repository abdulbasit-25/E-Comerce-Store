import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { StoreShell } from "@/components/storefront/shell";

type LegalSection = {
  heading: string;
  body: string[];
};

interface LegalPageProps {
  label?: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  cta?: {
    label: string;
    to: string;
    description?: string;
  };
  footer?: ReactNode;
}

export function LegalPage({
  label = "Legal / Trust",
  title,
  intro,
  sections,
  cta,
  footer,
}: LegalPageProps) {
  return (
    <StoreShell>
      <article className="mx-auto max-w-5xl px-5 py-12 md:px-10 md:py-16">
        <header className="mb-8 md:mb-12">
          <p className="label-caps flex items-center gap-2 text-olive">
            <span className="h-px w-6 bg-olive" />
            {label}
          </p>
          <h1 className="display-xl mt-5 max-w-3xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{intro}</p>
        </header>

        <div className="space-y-6 md:space-y-8">
          {sections.map((section, index) => (
            <section
              key={section.heading}
              className="rounded-sm border border-border/60 bg-surface p-6 sm:p-8"
            >
              <h2 className="text-2xl leading-tight md:text-3xl">
                {index + 1}. {section.heading}
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {cta ? (
          <section className="rule-top mt-10 pt-8 md:mt-12 md:pt-10">
            <div className="flex flex-col gap-4 rounded-sm border border-border/60 bg-olive-soft p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <p className="label-caps text-olive">Need more?</p>
                <h2 className="mt-2 text-3xl leading-tight md:text-4xl">{cta.description ?? "Keep shopping with confidence."}</h2>
              </div>
              <Link
                to={cta.to}
                className="label-caps group inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground"
              >
                {cta.label}
                <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            </div>
          </section>
        ) : null}

        {footer ? <div className="mt-10">{footer}</div> : null}
      </article>
    </StoreShell>
  );
}
