import { FaGithub } from "react-icons/fa";
import { ProjectItemType } from "../types";
import Image from "next/image"
import Link from "next/link";

export default function ProjectItem(props: { project: ProjectItemType; }) {
  const { title, github_link, live_link, image, snippets, skills } = props.project

  return (
    <div className="mb-5 p-4 flex flex-row justify-between border-2 rounded-md">
      <div>
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
        />
      </div>
      <div className="w-1/2">
        <div className="flex flex-row mb-5">
          <h1 className="font-bold text-2xl">{title}</h1>
          <Link
            target="_blank"
            href={github_link}>
            <FaGithub className="ml-5 text-2xl" />
          </Link>
        </div>
        <ul className="ml-4 mb-5 list-disc">
          {snippets.map((snippet, index) => (
            <li className="ml-4 m-2" key={`snippet-${index}`}>{snippet}</li>
          ))}
        </ul>
        <div className="flex mb-8">
          {skills.map(skill => (
            <div className="ml-3 pb-2 pt-2 pr-1 pl-1 rounded-md bg-teal-500 text-sky-950" key={skill}>{skill}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
