export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        group
        relative
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        hover:scale-[1.02]
        hover:border-cyan-400/40
      "
    >
      {/* IMAGE */}
      <div className="h-40 sm:h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />
      </div>

{/* CONTENT */}
<div
  className="
    p-5
    flex
    flex-col
    h-full
  "
>
<h3 className="text-lg md:text-xl font-semibold">
  {project.title}
</h3>

{/* Description - Minimum 30 characters recommended */}
<p
  className="
    mt-2
    text-[12px]
    sm:text-[13px]
    text-white/70
    leading-relaxed
    line-clamp-3
    min-h-[60px]
  "
>
  {project.description}
</p>

{/* Tech Stack */}
<p
  className="
    mt-3
    text-[11px]
    text-white/50
    leading-relaxed
    line-clamp-2
    min-h-[34px]
  "
>
  {[
    ...project.tech.frontend,
    ...project.tech.backend,
    ...project.tech.db,
  ].join(" • ")}
</p>

  {/* ACTIONS */}
  <div className="pt-5">
    <div className="flex gap-3">
      <button
        className="
          flex-1
          py-2
          rounded-lg
          border
          border-white/10
          bg-white/5
          hover:bg-white/10
          transition
          text-xs sm:text-sm
          font-medium
        "
        onClick={(e) => {
          e.stopPropagation();

          if (project.githubUrl) {
            window.open(project.githubUrl, "_blank");
          }
        }}
      >
        {"</>"} Code
      </button>

      <button
        className="
          flex-1
          py-2.5
          rounded-lg
          border
          border-purple-500/30
          bg-purple-500/10
          hover:bg-purple-500/20
          hover:border-purple-400/50
          transition
          text-sm
          font-medium
          text-purple-200
        "
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        ▶ Preview
      </button>
    </div>
  </div>
</div>
    </div>
  );
}
