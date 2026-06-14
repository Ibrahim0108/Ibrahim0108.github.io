import { experienceData } from "../../data/portfolioData";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
  return (
    <section className="relative z-10 px-6 py-32 pb-0" id="experience">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-20">
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* TIMELINE LINE */}
        <div
          className="
            absolute
            left-4
            md:left-1/2
            md:-translate-x-1/2
            top-0
            h-full
            w-[2px]
            bg-gradient-to-b
            from-purple-500/40
            via-purple-400/20
            to-transparent
          "
        />

        <div className="space-y-16">
          {experienceData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
