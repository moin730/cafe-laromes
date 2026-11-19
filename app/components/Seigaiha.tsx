export function SeigaihaDefs({ id, bg, fg }: { id: string; bg: string; fg: string }) {
  const rings = (cx: number, cy: number, k: string) => (
    <g key={k}>
      <circle cx={cx} cy={cy} r="20" fill={bg} stroke={fg} strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r="15" fill="none" stroke={fg} strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r="10" fill="none" stroke={fg} strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r="5" fill="none" stroke={fg} strokeWidth="1.2" />
    </g>
  );
  return (
    <defs>
      <pattern id={id} width="40" height="20" patternUnits="userSpaceOnUse">
        <rect width="40" height="20" fill={bg} />
        {rings(0, 0, "a")}
        {rings(40, 0, "b")}
        {rings(20, 10, "c")}
        {rings(0, 20, "d")}
        {rings(40, 20, "e")}
      </pattern>
    </defs>
  );
}

export function WaveBand({ className = "", height = 36 }: { className?: string; height?: number }) {
  return (
    <svg className={className} width="100%" height={height} aria-hidden>
      <SeigaihaDefs id="band" bg="#2338a0" fg="#fff" />
      <rect width="100%" height="100%" fill="url(#band)" />
    </svg>
  );
}
