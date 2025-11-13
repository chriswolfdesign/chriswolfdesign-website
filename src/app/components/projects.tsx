import projects from "../data/projects.json"
import ProjectItem from "./projectItem"

export default function Projects() {
  return (
    <div className="pl-20 pr-10 pb-10">
      <h1 id="projects-tag" className="font-bold text-3xl pb-10">
        Projects
      </h1>
      {projects.map(project => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </div>
  )
}
