import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Welcome() {
  return (
    <div>
      <div className="flex flex-col min-h-screen items-center justify-center font-sans">
        <h1 className="text-6xl underline">Chris Wolf Design</h1>
        <h1 className="text-2xl mt-2">Designer. Engineer. Educator.</h1>
        <div className="flex items-center justify-center mt-3">
          <Link
            href="https://www.github.com/chriswolfdesign"
            className="hover:border-cyan-200 p-2 hover:rounded-md hover:bg-sky-800"
          >
            <FaGithub className="text-3xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/chriswolftech"
            className="hover:border-cyan-200 p-2 hover:rounded-md hover:bg-sky-800"
          >
            <FaLinkedin className="text-3xl" />
          </Link>
        </div>
        <Link href="#about-tag">
          <div className="bg-cyan-200 text-sky-950 p-2 rounded-md font-bold hover:cursor-pointer hover:bg-cyan-300">
            Continue
          </div>
        </Link>
      </div>
    </div>
  );
}
