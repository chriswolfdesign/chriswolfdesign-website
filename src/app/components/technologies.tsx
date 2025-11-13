import technologies from "../data/technologies.json";
import TechnologyItem from "./technologyItem";

export default function Technologies() {
  return (
    <div className="pl-20 pb-10 pr-10">
      <h1 id="technologies-tag" className="font-bold text-3xl pb-10">
        Technologies
      </h1>
      <div className="pl-20 flex flex-wrap">
        {technologies.map((technology) => (
          <TechnologyItem key={technology.name} technology={technology} />
        ))}
      </div>
    </div>
  );
}
