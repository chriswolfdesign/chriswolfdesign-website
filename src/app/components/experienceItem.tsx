import { ExperienceItemType } from "../types";

export default function ExperienceItem(props: {
  experience: ExperienceItemType;
}) {
  const { title, location, company, tenure, accomplishments, skills } =
    props.experience;

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="font-bold text-2xl">{company}</h1>
          <h1 className="text-sm">{title}</h1>
        </div>
        <div>
          <h1 className="text-sm">{tenure}</h1>
          <h1 className="text-sm">{location}</h1>
        </div>
      </div>
      <ul className="m-4 list-disc">
        {accomplishments.map((accomplishment, index) => (
          <li key={`accomplishment_${index}`} className="ml-4 m-2">{accomplishment}</li>
        ))}
      </ul>
      <div className="flex mb-8">
        {skills.map(skill => (
          <div className="ml-3 pb-2 pt-2 pr-1 pl-1 rounded-md bg-teal-500 text-sky-950" key={skill}>{skill}</div>
        ))}
      </div>
    </div>
  );
}
