import { useState, useMemo, useEffect } from "react";
import { projectTabs, projects } from "../../data/portfolioData";
import ProjectTabs from "./ProjectTabs";
import ProjectCard from "./ProjectCard";
import { AnimatedCard } from "./AnimatedCard";
import { Pagination } from "./Pagination";
import VideoModal from "./VideoModal";

const DESKTOP_PAGE_SIZE = 6;

// helper
function chunk(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState(projectTabs[0].key);
  const [page, setPage] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);


  // reset page when tab changes (CORRECT PLACE)
  useEffect(() => {
    setPage(0);
  }, [activeTab]);

  // PURE memo
  const filteredProjects = useMemo(() => {
  return projects.filter(p => p.category === activeTab);
}, [activeTab]);


  const paginatedProjects = filteredProjects.slice(
    page * DESKTOP_PAGE_SIZE,
    (page + 1) * DESKTOP_PAGE_SIZE
  );

  const totalPages = Math.ceil(
    filteredProjects.length / DESKTOP_PAGE_SIZE
  );

  return (
    <>
    <section className="relative z-10 px-6 " id="projects">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
        Projects
      </h2>

      {/* 🌌 GLASS PANEL */}
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-3xl
          border
          border-white/15
          bg-[#060119]/30
          backdrop-blur-xl
          p-6
          sm:p-10
        "
      >
        {/* TABS */}
        <ProjectTabs
          tabs={projectTabs}
          active={activeTab}
          setActive={setActiveTab}
        />

        {/* DESKTOP GRID */}
        <div
          className="
            hidden
            md:grid
            mt-16
            gap-8
            grid-cols-2
            lg:grid-cols-3
          "
        >
          {paginatedProjects.map((project, i) => (
  <AnimatedCard key={project.id} index={i}>
    <ProjectCard
      project={project}
      onClick={() => {
        if (project.preview?.type === "live") {
    window.open(project.preview.url, "_blank");
  }

  if (project.preview?.type === "youtube") {
    setActiveVideo(project.preview.videoId);
  }
      }}
    />
  </AnimatedCard>
))}

        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="hidden md:flex justify-center mt-14">
            <Pagination
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          </div>
        )}

        {/* MOBILE: 2 CARDS PER SWIPE */}
        <div
          className="
            md:hidden
            mt-14
            flex
            gap-6
            overflow-x-auto
            snap-x
            snap-mandatory
            pb-4
          "
        >
          {chunk(filteredProjects, 2).map((pair, idx) => (
            <div
              key={idx}
              className="snap-center min-w-[85%] flex flex-col gap-6"
            >
              {pair.map(project => (
  <ProjectCard
    key={project.id}
    project={project}
    onClick={() => {
      if (project.preview?.type === "live") {
      window.open(project.preview.url, "_blank");
    }

    if (project.preview?.type === "youtube") {
      setActiveVideo(project.preview.videoId);
    }
    }}
  />
))}

            </div>
          ))}
        </div>


      </div>
    </section>
        {activeVideo && (
  <VideoModal
    videoId={activeVideo}
    onClose={() => setActiveVideo(null)}
  />
)}
    </>
    
  );
}
