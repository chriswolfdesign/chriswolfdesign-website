import experiences from "../data/experience.json";
import ExperienceItem from "./experienceItem";

export default function Experience() {
  return (
    <div className="pl-20 pr-10 pb-10">
      <h1 id="experience-tag" className="font-bold text-3xl pb-10">
        Experience
      </h1>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.company} experience={experience} />
      ))}
    </div>
  );
}
