import { aboutData } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative z-10
        px-6
        py-24 sm:py-28 md:py-32
      "
    >
      {/* GLASS PANEL */}
      <div
        className="
          mx-auto max-w-7xl
          rounded-3xl
          border border-white/15
          bg-[#060119]/30
          backdrop-blur-xl
          p-6 sm:p-10 md:p-14
        "
      >
        <div
          className="
            grid items-center
            gap-12 md:grid-cols-2 md:gap-16
          "
        >
          {/* TEXT */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h2
              className="
                text-2xl sm:text-3xl md:text-2xl
                font-bold
              "
            >
              {aboutData.title}
            </h2>

            {aboutData.paragraphs.map((text, i) => (
              <p
                key={i}
                className="
                  text-sm sm:text-base md:text-md
                  leading-relaxed
                  text-white/75
                "
              >
                {text}
              </p>
            ))}
          </div>

          {/* FLOATING IMAGE — hidden on small */}
          <div className="relative hidden md:flex justify-center">
            <div
              className="
                relative
                w-72 lg:w-80
                aspect-square
                rounded-2xl
                overflow-hidden
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                animate-float
              "
            >
              <img
                src={aboutData.image}
                alt={aboutData.imageAlt}
                className="h-full w-full object-cover"
              />

              <div
                className="
                  absolute inset-0
                  shadow-[0_0_60px_rgba(160,100,255,0.25)]
                  pointer-events-none
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
