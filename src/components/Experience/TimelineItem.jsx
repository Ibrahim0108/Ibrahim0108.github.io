export default function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex w-full">
      {/* TIMELINE DOT */}
      <span
        className="
          absolute
          left-4
          md:left-1/2
          md:-translate-x-1/2
          top-6
          w-4
          h-4
          rounded-full
          bg-purple-400
          shadow-[0_0_20px_rgba(160,100,255,0.8)]
          z-10
        "
      />

      {/* CARD WRAPPER */}
      <div
        className={`
          w-full
          pl-12
          md:pl-0
          md:w-1/2
          ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}
        `}
      >
        <div
          className="
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            transition
            hover:border-purple-400/40
          "
        >
          <h3 className="text-lg sm:text-xl font-semibold">
            {item.role}
          </h3>

          <p className="text-sm text-purple-300 mt-1">
            {item.company}
          </p>

          <p className="text-xs text-white/50 mt-1">
            {item.duration}
          </p>

          <p className="mt-4 text-sm text-white/80">
            {item.description}
          </p>

          {/* TECH STACK */}
          <div
            className={`
              mt-4
              flex
              flex-wrap
              gap-2
              ${isLeft ? "md:justify-end" : ""}
            `}
          >
            {item.tech.map(t => (
              <span
                key={t}
                className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-white/10
                  border border-white/10
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
