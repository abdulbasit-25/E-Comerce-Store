import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 300 0000000",
    href: "tel:+923000000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Islamabad, Pakistan",
    href: "#",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-[#090d12] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for new projects
          </div>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Let's build something
            <span className="block text-white/40">worth talking about.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            Have an idea, project, or opportunity in mind? Send a message and let's turn it into
            something meaningful.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Side */}
          <div className="flex flex-col">
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
              <p className="mb-7 text-sm uppercase tracking-[0.2em] text-white/30">
                Contact details
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a key={item.label} href={item.href} className="group flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-colors group-hover:border-amber-400/30 group-hover:bg-amber-400/10">
                        <Icon className="h-5 w-5 text-white/60 transition-colors group-hover:text-amber-400" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/30">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-white/80">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.025] p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10">
                  <Clock3 className="h-5 w-5 text-emerald-400" />
                </div>

                <div>
                  <h3 className="font-medium">Usually respond within 24h</h3>
                  <p className="mt-2 text-sm leading-6 text-white/40">
                    Tell me what you're working on and I'll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-auto pt-10">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">
                Find me online
              </p>

              <div className="flex gap-3">
                {["GitHub", "LinkedIn", "X"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/50 transition-all hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                  >
                    {social}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-[#0e141b] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </div>

                <h2 className="text-2xl font-semibold">Message sent</h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                  Thanks for reaching out. I'll review your message and get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold">Start a conversation</h2>

                  <p className="mt-2 text-sm text-white/40">
                    Fill out the form below and tell me a little about your project.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm text-white/60">
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-amber-400/50 focus:bg-white/[0.04]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm text-white/60">
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-amber-400/50 focus:bg-white/[0.04]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm text-white/60">
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What would you like to discuss?"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-amber-400/50 focus:bg-white/[0.04]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-white/60">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      placeholder="Tell me about your idea, project, or what you need help with..."
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-amber-400/50 focus:bg-white/[0.04]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-amber-400 px-6 py-4 font-medium text-black transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/10"
                  >
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-xs text-white/25">
                    Your information will only be used to respond to your inquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
