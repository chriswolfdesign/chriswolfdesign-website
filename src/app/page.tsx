import About from "./components/about";
import Technologies from "./components/technologies";
import Welcome from "./components/welcome";
import Experience from "./components/experience";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="items-center justify-center font-sans bg-sky-950 text-cyan-200">
      <div className="flex min-h-screen items-center justify-center">
        <Welcome />
      </div>
      <About />
      <Technologies />
      <Experience />
      <Projects />
    </div>
  );
}
