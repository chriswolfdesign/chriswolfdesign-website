import Link from "next/link";
import React from "react";
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
            className="hover:border-cyan-200 hover:border-4 p-2 hover:rounded-md hover:bg-sky-800"
          >
            <FaGithub className="text-3xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/chriswolftech"
            className="hover:border-cyan-200 hover:border-4 p-2 hover:rounded-md hover:bg-sky-800"
          >
            <FaLinkedin className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
