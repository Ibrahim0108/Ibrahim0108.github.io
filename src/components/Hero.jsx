import { heroData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      className="
        relative
        z-10
        min-h-[50vh]
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div className="text-center">
        {/* NAME */}
        <h1
          className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            font-bold
            tracking-tight
          "
        >
          {heroData.name}
        </h1>

        {/* ROLE */}
        <h2
          className="
            mt-4
            text-purple-400
            text-xl
            sm:text-2xl
          "
        >
          {heroData.role}
        </h2>

        {/* DIVIDER */}
        <div
          className="
            mt-8
            mx-auto
            h-px
            w-24
            bg-purple-400/40
          "
        />

        {/* SKILLS */}
        <p
          className="
            mt-6
            text-sm
            sm:text-base
            text-gray-300
            tracking-widest
            uppercase
          "
        >
          {heroData.description}
        </p>
      </div>
    </section>
  );
}
