import Image from "next/image";
import Icon from "./Icon";
import { brandLogo, brandMascot, heroContent, whatsappUrl } from "./landingData";
import Reveal from "./Reveal";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-tech-background relative min-h-[720px] overflow-hidden border-b border-white/[0.06] pt-[68px]"
      aria-labelledby="hero-title"
    >
      <div className="hero-dot-wave pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="ambient-glow hero-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="circuit-corner circuit-corner-left pointer-events-none absolute left-0 top-[68px] hidden h-44 w-72 opacity-80 sm:block" aria-hidden="true" />
      <div className="circuit-corner circuit-corner-right pointer-events-none absolute right-0 bottom-0 h-48 w-80 opacity-80" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[652px] max-w-[1100px] flex-col justify-center px-5 pb-24 pt-28 sm:px-6">
        <div className="max-w-[760px]">
          <Reveal delay="0ms" speed="fast" className="mb-8">
            <Image
              src={brandLogo.src}
              alt={brandLogo.alt}
              width={brandLogo.width}
              height={brandLogo.height}
              priority
              className="h-14 w-auto [filter:drop-shadow(0_0_26px_rgba(22,119,255,0.34))] sm:h-16"
            />
          </Reveal>
          <Reveal as="p" delay="80ms" speed="fast" className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-[#2d8cff]">
            {heroContent.label}
          </Reveal>
          <Reveal
            as="h1"
            delay="160ms"
            speed="slow"
            id="hero-title"
            className="max-w-[780px] text-balance text-[40px] font-extrabold leading-[1.05] tracking-normal text-[#f7f9fc] sm:text-[58px] lg:text-[70px]"
          >
            {heroContent.title}
          </Reveal>
          <Reveal as="p" delay="240ms" speed="medium" className="mt-6 max-w-[650px] text-pretty text-base leading-7 text-[#b9c2cc] sm:text-lg">
            {heroContent.description}
          </Reveal>

          <Reveal delay="300ms" speed="medium" className="mt-8 flex flex-wrap gap-2">
            {heroContent.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-md border border-[#1677ff]/35 bg-[#031833]/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#dcecff]"
              >
                {highlight}
              </span>
            ))}
          </Reveal>

          <Reveal delay="360ms" speed="medium" className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1677ff] bg-[#064ea8]/80 px-5 py-3 text-sm font-bold text-[#eef7ff] shadow-[0_0_24px_rgba(22,119,255,0.18)] transition duration-200 hover:-translate-y-px hover:border-[#58a6ff] hover:bg-[#0b63ce] focus:outline-none focus:ring-2 focus:ring-[#2d8cff] focus:ring-offset-4 focus:ring-offset-black"
            >
              <Icon name="terminal" className="h-4 w-4" />
              {heroContent.primaryCta}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-[#090b0d]/72 px-5 py-3 text-sm font-bold text-[#d8e0e8] transition duration-200 hover:-translate-y-px hover:border-[#1677ff] hover:text-[#f4c21d] focus:outline-none focus:ring-2 focus:ring-[#2d8cff] focus:ring-offset-4 focus:ring-offset-black"
            >
              <Icon name="message" className="h-4 w-4" />
              {heroContent.secondaryCta}
            </a>
          </Reveal>

          <Reveal as="p" delay="440ms" speed="fast" variant="fade" className="mt-8 text-xs font-medium tracking-[0.18em] text-[#7f8b98]">
            {heroContent.meta}
          </Reveal>

          <Reveal delay="500ms" speed="medium" variant="scale" className="mt-10 flex justify-center lg:hidden">
            <div className="relative h-44 w-44">
              <div className="absolute inset-4 rounded-full border border-[#1677ff]/45 shadow-[0_0_34px_rgba(22,119,255,0.18)]" aria-hidden="true" />
              <Image
                src={brandMascot.src}
                alt={brandMascot.alt}
                width={brandMascot.width}
                height={brandMascot.height}
                priority
                className="absolute left-1/2 top-1/2 h-36 w-auto -translate-x-1/2 -translate-y-1/2 [filter:drop-shadow(0_18px_24px_rgba(0,0,0,0.55))]"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal
        delay="260ms"
        speed="slow"
        variant="scale"
        className="hero-tux-stage pointer-events-none absolute bottom-10 right-[max(1.25rem,calc((100vw-1100px)/2))] hidden h-[330px] w-[330px] lg:block"
      >
        <div className="absolute inset-4 rounded-full border border-[#1677ff]/55 shadow-[0_0_42px_rgba(22,119,255,0.18)]" aria-hidden="true" />
        <div className="absolute inset-0 rounded-full border border-white/[0.06]" aria-hidden="true" />
        <div className="absolute left-8 top-12 h-px w-28 bg-[#1677ff]/70" aria-hidden="true" />
        <div className="absolute right-2 top-24 h-px w-20 bg-[#1677ff]/55" aria-hidden="true" />
        <Image
          src={brandMascot.src}
          alt={brandMascot.alt}
          width={brandMascot.width}
          height={brandMascot.height}
          priority
          className="absolute left-1/2 top-1/2 h-60 w-auto -translate-x-1/2 -translate-y-1/2 [filter:drop-shadow(0_22px_30px_rgba(0,0,0,0.65))]"
        />
      </Reveal>
    </section>
  );
}
