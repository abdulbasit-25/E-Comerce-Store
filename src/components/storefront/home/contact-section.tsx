import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { createContactMessage } from "@/lib/contact-server";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const result = await createContactMessage({
        data: {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          subject: String(data.get("subject") ?? ""),
          message: String(data.get("message") ?? ""),
        },
      });
      if (!result.success) {
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative overflow-hidden border-t border-border/60">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-olive/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-olive/5 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-[1500px] gap-6 px-5 py-16 md:px-10 md:py-24">
        {/* Spine label — desktop only */}
        <div className="hidden shrink-0 md:flex md:w-10 md:items-start md:justify-center">
          <span className="label-caps origin-top-left translate-y-full -rotate-90 whitespace-nowrap text-olive">
            Contact — Sorrel Atelier — 2026
          </span>
        </div>

        <div className="grid flex-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Intro */}
          <div className="rise md:col-span-5 md:pt-8">
            <p className="label-caps flex items-center gap-2 text-olive">
              <span className="h-px w-6 bg-olive" />
              Say hello
            </p>

            <h2 className="display-xl mt-5">
              Let’s make
              <br />
              <em className="italic">something</em> quiet.
            </h2>

            <p className="mt-6 max-w-md text-muted-foreground md:mt-8">
              Questions about an order, a piece from the collection, or something you have in mind?
              We’d love to hear from you.
            </p>

            <div className="mt-8 space-y-5 md:mt-10">
              <a href="mailto:hello@sorrelatelier.com" className="group flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 transition-colors group-hover:border-olive group-hover:bg-olive/5">
                  <Mail className="h-4 w-4 text-olive" />
                </span>

                <span className="text-sm transition-colors group-hover:text-olive">
                  hello@sorrelatelier.com
                </span>
              </a>

              <a href="tel:+1234567890" className="group flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 transition-colors group-hover:border-olive group-hover:bg-olive/5">
                  <Phone className="h-4 w-4 text-olive" />
                </span>

                <span className="text-sm transition-colors group-hover:text-olive">
                  +1 234 567 890
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60">
                  <MapPin className="h-4 w-4 text-olive" />
                </span>

                <span className="text-sm text-muted-foreground">The Atelier · London, UK</span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="relative md:col-span-7">
            {/* Offset frame */}
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-sm border border-olive/30 md:block"
            />

            <div className="relative rounded-sm border border-border/60 bg-background p-6 shadow-[var(--shadow-media)] md:p-10">
              <div className="mb-8">
                <p className="label-caps text-olive">Write to the atelier</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We usually reply within one working day.
                </p>
              </div>

              <form className="space-y-7" onSubmit={handleSubmit}>
                <div className="grid gap-7 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="label-caps mb-2 block text-muted-foreground">
                      Phone <span className="normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 234 567 890"
                      className="w-full border-0 border-b border-border/80 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-olive"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="label-caps mb-2 block text-muted-foreground">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full border-0 border-b border-border/80 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-olive"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="label-caps mb-2 block text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full border-0 border-b border-border/80 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-olive"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="label-caps mb-2 block text-muted-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    maxLength={160}
                    className="w-full border-0 border-b border-border/80 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-olive"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label-caps mb-2 block text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={600}
                    placeholder="Tell us a little about what you have in mind..."
                    className="w-full resize-none border-0 border-b border-border/80 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-olive"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="label-caps group inline-flex items-center gap-3 bg-primary px-7 py-4 text-primary-foreground transition-colors hover:bg-olive hover:text-accent-foreground"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                  {status === "sent" ? (
                    <p role="status" className="mt-3 text-sm text-olive">
                      Thanks, your message has been sent.
                    </p>
                  ) : null}
                  {status === "error" ? (
                    <p role="alert" className="mt-3 text-sm text-destructive">
                      Please check your details and try again.
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
