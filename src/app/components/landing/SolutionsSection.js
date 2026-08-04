import Icon from "./Icon";
import SectionLabel from "./SectionLabel";
import { pillarsSection } from "./landingData";
import Reveal from "./Reveal";

export default function SolutionsSection() {
  return (
    <section
      id="servicios"
      className="py-24 sm:py-36"
      aria-labelledby="pillars-title"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
        <div className="max-w-3xl">
          <Reveal delay="0ms">
            <SectionLabel>{pillarsSection.label}</SectionLabel>
          </Reveal>
          <Reveal as="h2" delay="80ms" id="pillars-title" className="text-4xl font-extrabold tracking-normal text-[#f7f9fc] sm:text-5xl">
            {pillarsSection.title}
          </Reveal>
          <Reveal as="p" delay="160ms" className="mt-5 text-base leading-7 text-[#aab5c1]">
            {pillarsSection.description}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {pillarsSection.items.map((pillar, index) => (
            <Reveal
              as="article"
              key={pillar.title}
              delay={`${120 + index * 70}ms`}
              className="tech-service-card group relative overflow-hidden rounded-lg border border-white/10 bg-[#090b0d] p-5 transition duration-300 hover:-translate-y-[3px] hover:border-[#1677ff]/55 hover:bg-[#0d1117] sm:p-6"
            >
              <p className="absolute right-4 top-4 font-mono text-5xl font-bold text-white/[0.035]">
                {pillar.number}
              </p>
              <div className="relative">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-md border border-[#1677ff]/45 bg-[#031833]/70 text-[#2d8cff] transition duration-300 group-hover:border-[#58a6ff]/80 group-hover:text-[#f4c21d]">
                  <Icon name={pillar.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold leading-6 text-[#f7f9fc]">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#9da8b4]">{pillar.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.08] bg-black/30 px-2.5 py-1 text-[11px] font-medium text-[#9da8b4]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
