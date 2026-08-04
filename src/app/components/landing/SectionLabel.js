export default function SectionLabel({ children }) {
  return (
    <p className="mb-5 inline-flex items-center gap-3 rounded-md border border-[#1677ff]/25 bg-[#031833]/55 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2d8cff]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#f4c21d]" aria-hidden="true" />
      {children}
    </p>
  );
}
