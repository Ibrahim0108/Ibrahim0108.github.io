export default function ProjectTabs({ tabs, active, setActive }) {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          inline-flex
          items-center
          justify-center
          whitespace-nowrap

          rounded-full
          border border-white/15
          bg-[#060119]/20
          backdrop-blur-md

          px-8 py-3
          gap-16 text-base

          md:gap-12 md:text-sm
          sm:px-6 sm:gap-8 sm:text-xs
          max-sm:px-4 max-sm:gap-4 max-sm:text-[10px]
        "
      >
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`
              relative
              transition
              ${
                active === tab.key
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"
              }
            `}
          >
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.short}</span>

            {active === tab.key && (
              <span
                className="
                  absolute
                  -bottom-1
                  left-1/2
                  -translate-x-1/2
                  w-4
                  h-[2px]
                  bg-purple-400
                  shadow-[0_0_10px_rgba(160,100,255,0.9)]
                "
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
