export default function Blob({ className }) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 select-none rounded-full bg-gradient-to-br from-[#3ab54b]/20 to-[#2d8a3b]/10 blur-3xl ${className}`}
    />
  );
}
