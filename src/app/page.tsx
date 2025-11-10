import About from "./components/about";
import Technologies from "./components/techologies";
import Welcome from "./components/welcome";

export default function Home() {
  return (
    <div className="items-center justify-center font-sans bg-sky-950 text-cyan-200">
      <div className="flex min-h-screen items-center justify-center">
        <Welcome />
      </div>
      <About />
      <Technologies />
    </div>
  );
}
