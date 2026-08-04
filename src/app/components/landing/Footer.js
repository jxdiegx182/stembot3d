import Image from "next/image";
import { brandLogo, brandName, footerContent, socialLinks } from "./landingData";
import Reveal from "./Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1677ff]/15 bg-black/35">
      <Reveal className="mx-auto max-w-[1100px] px-5 py-10 text-center sm:px-6" variant="fade">
        <Image
          src={brandLogo.src}
          alt={brandLogo.alt}
          width={brandLogo.width}
          height={brandLogo.height}
          className="mx-auto h-11 w-auto [filter:drop-shadow(0_0_22px_rgba(22,119,255,0.28))]"
        />
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-[#f7f9fc]">
          {footerContent.line}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#aab5c1] transition-colors hover:text-[#f4c21d] focus:outline-none focus:ring-2 focus:ring-[#2d8cff]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-7 text-sm text-[#ffffff] ">
          © {year} {brandName}. Todos los derechos reservados.
        </p>
      </Reveal>
    </footer>
  );
}
