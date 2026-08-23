export function EditorialBanner() {
  return (
    <section className="mx-auto mt-20 max-w-[1500px] px-5 md:mt-24 md:px-10">
      <div className="relative overflow-hidden rounded-sm bg-olive-soft px-6 py-16 text-center md:px-20 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-olive/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-olive/10 blur-3xl"
        />

        <div className="relative mx-auto mb-6 hidden h-20 w-20 items-center justify-center sm:flex">
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full text-olive/70"
            style={{ animation: "spin 18s linear infinite" }}
          >
            <defs>
              <path id="stampCircle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fontSize="8.2" letterSpacing="2" fill="currentColor">
              <textPath href="#stampCircle">
                HAND MADE • SINCE 2026 • HAND MADE • SINCE 2026 •
              </textPath>
            </text>
          </svg>
          <span className="absolute h-2 w-2 rounded-full bg-olive" />
        </div>

        <p className="label-caps relative text-olive">On payment</p>
        <p className="relative mx-auto mt-6 max-w-2xl font-display text-2xl leading-tight sm:text-3xl md:text-5xl">
          No card, no checkout friction. You pay the courier when the parcel is in your hands.
        </p>
      </div>
    </section>
  );
}
