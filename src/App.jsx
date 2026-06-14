import SpaceCanvas from "./components/canvas/SpaceCanvas";
import BlackHoleIntro from "./components/video/BlackHoleIntro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Global background */}
      <SpaceCanvas />

      {/* Top cinematic block */}
      <BlackHoleIntro />
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
     
    </div>
  );
}
