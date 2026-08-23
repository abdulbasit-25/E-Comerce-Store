import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { StoreShell } from "@/components/storefront/shell";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

const REASONS = ["General inquiry", "Order support", "Wholesale", "Press"] as const;

function RouteComponent() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Replace with your actual submit call (API route, email service, etc).
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <StoreShell>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="rise max-w-2xl">
          <p className="label-caps text-olive">Get in touch</p>
          <h1 className="display-xl mt-4 text-foreground">Say hello.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Questions about an order, a wholesale account, or just want to talk shop — we read every
            message and reply within one business day.
          </p>
        </div>

        <div className="rule-top mt-16 grid grid-cols-1 gap-16 pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          {/* Info column */}
          <div className="rise space-y-12" style={{ animationDelay: "80ms" }}>
            <div>
              <p className="label-caps text-muted-foreground">Email</p>
              <a
                href="mailto:hello@sorrel.co"
                className="link-underline mt-2 inline-block text-lg text-foreground"
              >
                hello@sorrel.co
              </a>
            </div>

            <div>
              <p className="label-caps text-muted-foreground">Phone</p>
              <a
                href="tel:+18005550142"
                className="link-underline mt-2 inline-block text-lg text-foreground"
              >
                +1 (800) 555-0142
              </a>
            </div>

            <div>
              <p className="label-caps text-muted-foreground">Studio</p>
              <p className="mt-2 text-lg text-foreground">
                412 Havermill Row
                <br />
                Portland, OR 97209
              </p>
            </div>

            <div>
              <p className="label-caps text-muted-foreground">Hours</p>
              <p className="mt-2 text-lg text-foreground">
                Monday – Friday
                <br />
                9:00 – 17:00 PT
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="rise" style={{ animationDelay: "160ms" }}>
            {status === "sent" ? (
              <div className="rule-top flex min-h-[420px] flex-col justify-center pt-16">
                <p className="label-caps text-olive">Message sent</p>
                <h2 className="display-xl mt-4 text-3xl text-foreground sm:text-4xl">Thank you.</h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  We've got your note and will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClasses}
                      placeholder="Jordan Ellis"
                    />
                  </Field>

                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClasses}
                      placeholder="jordan@example.com"
                    />
                  </Field>
                </div>

                <fieldset>
                  <legend className="label-caps text-muted-foreground">Reason</legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {REASONS.map((reason) => (
                      <label
                        key={reason}
                        className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors has-checked:border-olive has-checked:bg-olive-soft has-checked:text-foreground"
                      >
                        <input
                          type="radio"
                          name="reason"
                          value={reason}
                          defaultChecked={reason === REASONS[0]}
                          className="sr-only"
                        />
                        {reason}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us what's on your mind…"
                  />
                </Field>

                <div className="rule-top flex items-center justify-between pt-8">
                  <p className="text-sm text-muted-foreground">
                    By submitting, you agree to be contacted about your inquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="shrink-0 rounded-[var(--radius-sm)] bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </StoreShell>
  );
}

const inputClasses =
  "w-full border-0 border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-olive transition-colors";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="label-caps text-muted-foreground">
        {label}
      </label>
      <div className="mt-3">{children}</div>
    </div>
  );
}
