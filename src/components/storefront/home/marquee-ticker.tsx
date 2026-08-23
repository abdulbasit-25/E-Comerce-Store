const DEFAULT_ITEMS = [
  "SLOW-MADE",
  "HAND-THROWN",
  "PAY ON DELIVERY",
  "SMALL BATCH",
  "SHIPPED WORLDWIDE",
];

type MarqueeTickerProps = {
  items?: string[];
};

export function MarqueeTicker({ items = DEFAULT_ITEMS }: MarqueeTickerProps) {
  return (
    <div className="rule-top overflow-hidden border-b border-border/60 bg-olive-soft py-3">
      <div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        style={{ animation: "sorrel-marquee 22s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="label-caps flex items-center gap-10 text-olive">
            {item}
            <span className="h-1 w-1 rounded-full bg-olive/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
