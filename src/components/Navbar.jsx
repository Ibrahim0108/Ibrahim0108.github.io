import TopVideo from "./video/BlackHoleIntro";

export default function Navbar() {
  const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-40
        flex items-center justify-center whitespace-nowrap
        px-8 py-3 max-w-[95%]
        rounded-full border border-white/15
        bg-[#060119]/20 backdrop-blur-md
        text-white
        gap-16 text-base
        md:gap-12 md:text-sm
        sm:gap-8 sm:text-xs
        max-sm:gap-4 max-sm:text-[10px]
      "
    >
      <div className="absolute left-1/2 -translate-x-1/2">
    <TopVideo />
  </div>

      <a  onClick={() => scrollTo("about")} className="hover:text-purple-300 transition">
        About
      </a>

      <a  onClick={() => scrollTo("projects")} className="hover:text-purple-300 transition">
        Projects
      </a>

      <span className="hidden md:block w-24" />

      <a  onClick={() => scrollTo("experience")} className="hover:text-purple-300 transition">
        Experience
      </a>

      <a  onClick={() => scrollTo("contact")} className="hover:text-purple-300 transition">
        Contact
      </a>
    </nav>
  );
}
