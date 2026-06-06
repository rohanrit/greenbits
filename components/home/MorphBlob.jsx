export default function MorphBlob({ gradientFrom, gradientTo, className, duration = '20s', delay = '0s', blur = '60px', opacity = 0.5 }) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 select-none ${className}`}
      style={{
        background: `radial-gradient(circle at 30% 40%, ${gradientFrom}, ${gradientTo})`,
        animation: `blobMorph ${duration} infinite alternate ease-in-out`,
        animationDelay: delay,
        filter: `blur(${blur})`,
        opacity,
      }}
    />
  );
}
