import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { StoreShell } from "@/components/storefront/shell";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

const REASONS = ["General inquiry", "Order support", "Wholesale", "Press"] as const;
const MESSAGE_MAX = 600;

type Status = "idle" | "submitting" | "sent";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name) errors.name = "Enter your name.";

  if (!email) {
    errors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!message) {
    errors.message = "Tell us a little about your inquiry.";
  } else if (message.length > MESSAGE_MAX) {
    errors.message = `Keep it under ${MESSAGE_MAX} characters.`;
  }

  return errors;
}

function RouteComponent() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [messageLength, setMessageLength] = useState(0);

  function clearError(field: keyof FieldErrors) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — real users never fill this in, bots often do.
    if (data.get("company")) {
      setStatus("sent");
      return;
    }

    const nextErrors = validate(data);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");

    // Replace with your actual submit call (API route, email service, etc).
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <StoreShell>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="relative overflow-hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-16 hidden select-none font-display text-[18rem] italic leading-none text-olive/[0.06] sm:block"
          >
            &amp;
          </span>

          <div className="rise relative max-w-2xl">
            <p className="label-caps text-olive">Get in touch</p>
            <h1 className="display-xl mt-4 text-foreground">Say hello.</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Questions about an order, a wholesale account, or just want to talk shop — we read
              every message and reply within one business day.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-olive opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-olive" />
              </span>
              <span className="text-xs text-muted-foreground">Usually replies within 24 hours</span>
            </div>
          </div>
        </div>

        <div className="rule-top mt-16 grid grid-cols-1 gap-16 pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-0">
          {/* Info column */}
          <div className="rise space-y-12" style={{ animationDelay: "80ms" }}>
            <div>
              <p className="label-caps text-muted-foreground">Email</p>
              <a
                href="mailto:abdulbasit.alpha25@gmail.com"
                className="link-underline mt-2 inline-block text-lg text-foreground"
              >
                abdulbasit.alpha25@gmail.com
              </a>
            </div>

            <div>
              <p className="label-caps text-muted-foreground">Phone</p>
              <a
                href="tel:+923415878569"
                className="link-underline mt-2 inline-block text-lg text-foreground"
              >
                +92 341 5878569
              </a>
            </div>

            <div>
              <p className="label-caps text-muted-foreground">Studio</p>
              <p className="mt-2 text-lg text-foreground">
                1234 Sorrel Street
                <br />
                Earth City, EC 12345
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

            <div>
              <p className="label-caps text-muted-foreground">Follow</p>
              <div className="mt-2 flex gap-5 text-lg text-foreground">
                <a href="https://instagram.com" className="link-underline">
                  Instagram
                </a>
                <a href="https://pinterest.com" className="link-underline">
                  Pinterest
                </a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div
            className="rise lg:border-l lg:border-hairline lg:pl-16"
            style={{ animationDelay: "160ms" }}
          >
            {status === "sent" ? (
              <div className="flex min-h-[420px] flex-col justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-soft text-olive">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="label-caps mt-6 text-olive">Message sent</p>
                <h2 className="display-xl mt-4 text-3xl text-foreground sm:text-4xl">Thank you.</h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  We've got your note and will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p aria-live="polite" className="sr-only">
                  {status === "submitting" ? "Sending your message." : ""}
                </p>

                {/* Honeypot — hidden from sighted users and screen readers, catches basic bots. */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />

                <fieldset disabled={status === "submitting"} className="space-y-10">
                  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name" required error={errors.name}>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        onChange={() => clearError("name")}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={inputClasses}
                        placeholder="Jordan Ellis"
                      />
                    </Field>

                    <Field label="Email" htmlFor="email" required error={errors.email}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={() => clearError("email")}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={inputClasses}
                        placeholder="jordan@example.com"
                      />
                    </Field>
                  </div>

                  <div>
                    <legend className="label-caps text-muted-foreground">Reason</legend>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {REASONS.map((reason) => (
                        <label
                          key={reason}
                          className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm text-foreground transition-all duration-200 hover:border-olive/60 has-checked:border-olive has-checked:bg-olive-soft has-checked:shadow-sm"
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
                  </div>

                  <Field
                    label="Message"
                    htmlFor="message"
                    required
                    error={errors.message}
                    hint={`${messageLength}/${MESSAGE_MAX}`}
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      maxLength={MESSAGE_MAX}
                      onChange={(e) => {
                        setMessageLength(e.target.value.length);
                        clearError("message");
                      }}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us what's on your mind…"
                    />
                  </Field>

                  <div className="rule-top flex flex-wrap items-center justify-between gap-4 pt-8">
                    <p className="text-sm text-muted-foreground">
                      By submitting, you agree to be contacted about your inquiry.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-sm)] bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <span>{status === "submitting" ? "Sending" : "Send message"}</span>
                      {status === "submitting" ? (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 animate-spin"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeDasharray="42"
                            strokeDashoffset="14"
                            strokeLinecap="round"
                            opacity="0.9"
                          />
                        </svg>
                      ) : (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          <path
                            d="M1 8h13M9 3l5 5-5 5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </fieldset>
              </form>
            )}
          </div>
        </div>
      </div>
    </StoreShell>
  );
}

const inputClasses =
  "w-full border-0 border-b border-border bg-transparent py-2 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-olive transition-colors disabled:opacity-50";

function Field({
  label,
  htmlFor,
  children,
  error,
  hint,
  required,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error?: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={htmlFor} className="label-caps text-muted-foreground">
          {label}
          {required && (
            <span aria-hidden="true" className="text-olive">
              {" "}
              *
            </span>
          )}
        </label>
        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
      </div>
      <div className="mt-3">{children}</div>
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
