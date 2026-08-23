import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Get in touch
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            We’re here to help.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Have a question about an order, product, or delivery? Send us a message and our team
            will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-bold">Contact information</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Our support team is available Monday through Friday, from 9:00 AM to 6:00 PM.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Email</p>
              <a
                href="mailto:support@example.com"
                className="mt-1 block text-lg font-medium text-slate-900 hover:text-sky-600"
              >
                support@example.com
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Phone</p>
              <a
                href="tel:+15551234567"
                className="mt-1 block text-lg font-medium text-slate-900 hover:text-sky-600"
              >
                +1 (555) 123-4567
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Address
              </p>
              <p className="mt-1 text-lg text-slate-900">
                123 Market Street
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        <form
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <h2 className="text-2xl font-bold">Send us a message</h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Name
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium text-slate-700">
            Subject
            <input
              type="text"
              name="subject"
              required
              placeholder="How can we help?"
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </label>

          <label className="mt-5 block text-sm font-medium text-slate-700">
            Message
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Write your message here..."
              className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            Send message
          </button>
        </form>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              [
                "Where is my order?",
                "You can track your order from your shipping confirmation email.",
              ],
              [
                "Can I return an item?",
                "Most products can be returned within 30 days of delivery.",
              ],
              [
                "How quickly do you respond?",
                "Our team typically responds within one business day.",
              ],
            ].map(([question, answer]) => (
              <div key={question} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
