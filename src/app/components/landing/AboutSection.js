import Icon from "./Icon";
import SectionLabel from "./SectionLabel";
import { processSection } from "./landingData";
import Reveal from "./Reveal";

function SystemVisual() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-white/10 bg-[#090b0d] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(22,119,255,0.14),transparent_15rem)]" />
      <div className="relative h-full rounded-md border border-white/[0.08] bg-black/45 p-5 font-mono">
        <div className="flex items-center gap-2 border-b border-white/[0.08] pb-4">
          <span className="h-2 w-2 rounded-full bg-[#f4c21d]" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-3 text-xs text-[#728091]">system-thinking.log</span>
        </div>

        <div className="mt-8 space-y-4 text-sm leading-7 text-[#aab5c1]">
          <p><span className="text-[#2d8cff]">&gt;</span> analizar problema</p>
          <p><span className="text-[#2d8cff]">&gt;</span> diseñar flujo simple</p>
          <p><span className="text-[#2d8cff]">&gt;</span> construir prototipo útil</p>
          <p><span className="text-[#2d8cff]">&gt;</span> conectar software + hardware</p>
        </div>

        <svg className="absolute bottom-7 right-7 h-36 w-36 text-[#1677ff]/60" viewBox="0 0 160 160" fill="none" aria-hidden="true">
          <circle cx="80" cy="80" r="48" stroke="currentColor" />
          <circle cx="80" cy="80" r="6" fill="currentColor" />
          <circle cx="42" cy="52" r="5" fill="currentColor" />
          <circle cx="118" cy="54" r="5" fill="currentColor" />
          <circle cx="110" cy="118" r="5" fill="currentColor" />
          <path d="M42 52L80 80L118 54" stroke="currentColor" strokeOpacity=".55" />
          <path d="M80 80L110 118" stroke="currentColor" strokeOpacity=".55" />
        </svg>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="py-24 sm:py-36"
      aria-labelledby="process-title"
    >
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div>
          <Reveal delay="0ms">
            <SectionLabel>{processSection.label}</SectionLabel>
          </Reveal>
          <Reveal as="h2" delay="80ms" id="process-title" className="text-4xl font-extrabold tracking-normal text-[#f7f9fc] sm:text-5xl">
            {processSection.title}
          </Reveal>
          <Reveal as="p" delay="160ms" className="mt-6 max-w-xl text-lg leading-8 text-[#aab5c1]">
            {processSection.text}
          </Reveal>

          <div className="mt-10 grid gap-3">
            {processSection.principles.map((principle, index) => (
              <Reveal
                key={principle}
                delay={`${220 + index * 80}ms`}
                className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-[#090b0d] px-4 py-4 text-sm font-bold text-[#f7f9fc]"
              >
                <Icon name="arrow" className="h-4 w-4 text-[#f4c21d]" />
                {principle}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="right" delay="180ms">
          <SystemVisual />
        </Reveal>
      </div>
    </section>
  );
}
