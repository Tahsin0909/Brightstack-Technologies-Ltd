// Original line illustrations. Strokes use currentColor so they follow the theme.

const layers = ["Strategy", "Design", "Engineering", "Launch & support"];

/**
 * Hero illustration: four stacked planes, the top one lit.
 * Each face gets a glossy sheen overlay, so faces that render black read as
 * polished black glass while staying fully opaque.
 */
export function HeroStack({ className = "" }: { className?: string }) {
  const cx = 230;
  const a = 190;
  const b = 92;
  const diamond = (cy: number) =>
    `${cx},${cy - b} ${cx + a},${cy} ${cx},${cy + b} ${cx - a},${cy}`;
  const upperEdges = (cy: number) => `${cx - a},${cy} ${cx},${cy - b} ${cx + a},${cy}`;
  return (
    <svg
      viewBox="0 0 600 520"
      role="img"
      aria-label="Four stacked layers labelled strategy, design, engineering, and launch and support"
      className={className}
    >
      <defs>
        {/* Diagonal gloss with a bright reflection streak. */}
        <linearGradient id="hs-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="0.32" stopColor="#fff" stopOpacity="0.04" />
          <stop offset="0.44" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        {/* Thickness edge: lit at the rim, falling into shadow. */}
        <linearGradient id="hs-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.1" />
          <stop offset="1" stopColor="#000" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      {layers.map((name, i) => {
        const cy = 400 - i * 82;
        const top = i === layers.length - 1;
        return (
          <g
            key={name}
            className={top ? "hs-layer hs-layer--top" : "hs-layer"}
            style={{ "--i": i } as React.CSSProperties}
          >
            <polygon
              points={diamond(cy + 16)}
              fill="var(--bg)"
              className="hs-face"
              stroke="currentColor"
              strokeOpacity="0.35"
            />
            <polygon points={diamond(cy + 16)} fill="url(#hs-edge)" />
            <polygon
              points={diamond(cy)}
              fill={top ? "currentColor" : "var(--bg)"}
              className={top ? "hs-top" : "hs-face"}
              stroke="currentColor"
            />
            <polygon points={diamond(cy)} fill="url(#hs-sheen)" />
            <polyline
              points={upperEdges(cy)}
              fill="none"
              stroke="#fff"
              strokeOpacity="0.35"
              strokeWidth="1.25"
            />
            {!top ? (
              <g stroke="currentColor" strokeOpacity="0.22">
                <line x1={cx - a / 2} y1={cy - b / 2} x2={cx + a / 2} y2={cy + b / 2} />
                <line x1={cx + a / 2} y1={cy - b / 2} x2={cx - a / 2} y2={cy + b / 2} />
              </g>
            ) : (
              <circle cx={cx} cy={cy} r="7" fill="var(--signal)" />
            )}
            <line
              x1={cx + a}
              y1={cy}
              x2={cx + a + 34}
              y2={cy}
              stroke="currentColor"
              strokeOpacity="0.5"
            />
            <text
              x={cx + a + 42}
              y={cy + 4}
              fill="currentColor"
              fontFamily="var(--font-mono)"
              fontSize="11"
              letterSpacing="0.08em"
            >
              {name.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

const frame = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  vectorEffect: "non-scaling-stroke" as const,
};

export function ServiceArt({ slug, className = "" }: { slug: string; className?: string }) {
  return (
    <svg viewBox="0 0 400 240" aria-hidden="true" className={className} {...frame}>
      {slug === "web-development" && (
        <>
          <rect x="50" y="30" width="300" height="180" />
          <path d="M50 58h300" />
          <circle cx="66" cy="44" r="3" />
          <circle cx="78" cy="44" r="3" />
          <circle cx="90" cy="44" r="3" />
          <rect x="70" y="78" width="120" height="14" fill="currentColor" />
          <path d="M70 108h110M70 122h90" strokeOpacity="0.5" />
          <rect x="70" y="150" width="60" height="22" />
          <rect x="220" y="78" width="110" height="112" strokeOpacity="0.5" />
          <path d="m220 190 40-48 26 30 18-20 26 38" strokeOpacity="0.5" />
        </>
      )}
      {slug === "custom-software-development" && (
        <>
          <rect x="50" y="40" width="90" height="56" />
          <rect x="155" y="40" width="90" height="56" fill="currentColor" />
          <rect x="260" y="40" width="90" height="56" />
          <rect x="102" y="144" width="90" height="56" />
          <rect x="208" y="144" width="90" height="56" />
          <path d="M95 96v24h105V96M305 96v24H200M147 120v24M253 120v24" strokeOpacity="0.5" />
          <path d="M66 60h40M66 74h58M276 60h40M276 74h58M118 164h40M118 178h58M224 164h40M224 178h58" strokeOpacity="0.5" />
        </>
      )}
      {slug === "mobile-app-development" && (
        <>
          <rect x="112" y="24" width="96" height="192" rx="14" />
          <path d="M146 38h28" />
          <rect x="126" y="56" width="68" height="44" fill="currentColor" />
          <path d="M126 116h68M126 132h46M126 148h58" strokeOpacity="0.5" />
          <rect x="126" y="174" width="68" height="22" rx="11" />
          <rect x="226" y="52" width="80" height="164" rx="12" strokeOpacity="0.5" />
          <path d="M240 80h52M240 96h36M240 150h52M240 166h40" strokeOpacity="0.5" />
          <circle cx="266" cy="124" r="12" strokeOpacity="0.5" />
        </>
      )}
      {slug === "ui-ux-design" && (
        <>
          <rect x="50" y="34" width="190" height="172" />
          <path d="M50 34 240 206M240 34 50 206" strokeOpacity="0.2" />
          <circle cx="145" cy="120" r="48" />
          <path d="M97 120h96M145 72v96" strokeOpacity="0.5" />
          <path d="M270 170c20-70 50-100 90-104" />
          <rect x="266" y="166" width="8" height="8" fill="currentColor" />
          <rect x="356" y="62" width="8" height="8" fill="currentColor" />
          <path d="M270 170l40-30M360 66l-44 6" strokeOpacity="0.5" />
          <circle cx="310" cy="140" r="3" />
          <circle cx="316" cy="72" r="3" />
          <path d="m300 190 8 22 5-9 9-3z" fill="currentColor" />
        </>
      )}
      {slug === "cloud-devops" && (
        <>
          <circle cx="80" cy="70" r="18" />
          <circle cx="200" cy="70" r="18" fill="currentColor" />
          <circle cx="320" cy="70" r="18" />
          <path d="M98 70h84M218 70h84" />
          <path d="m170 64 8 6-8 6M290 64l8 6-8 6" />
          <path d="M80 88v40M200 88v40M320 88v40" strokeOpacity="0.5" />
          <rect x="40" y="128" width="80" height="24" />
          <rect x="40" y="160" width="80" height="24" />
          <rect x="160" y="128" width="80" height="24" />
          <rect x="160" y="160" width="80" height="24" />
          <rect x="280" y="128" width="80" height="24" />
          <rect x="280" y="160" width="80" height="24" />
          <path d="M52 140h6M52 172h6M172 140h6M172 172h6M292 140h6M292 172h6" strokeWidth="3" />
        </>
      )}
      {slug === "ai-automation" && (
        <>
          <path d="M200 76 244 120 200 164 156 120z" fill="currentColor" />
          <circle cx="70" cy="60" r="12" />
          <circle cx="70" cy="180" r="12" />
          <circle cx="330" cy="60" r="12" />
          <circle cx="330" cy="180" r="12" />
          <circle cx="60" cy="120" r="8" strokeOpacity="0.5" />
          <circle cx="340" cy="120" r="8" strokeOpacity="0.5" />
          <path d="M82 64c50 10 60 30 78 52M82 176c50-10 60-30 78-52" strokeOpacity="0.5" />
          <path d="M68 120h88M244 120h88" strokeOpacity="0.5" />
          <path d="M240 116c18-22 28-42 78-52" stroke="var(--signal)" strokeWidth="2" />
          <path d="M240 124c18 22 28 42 78 52" strokeOpacity="0.5" />
          <path d="M200 24v52M200 164v52" strokeOpacity="0.2" strokeDasharray="4 6" />
        </>
      )}
    </svg>
  );
}
