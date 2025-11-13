export type TechnologyItemType = {
  name: string;
  link: string;
};

export type ExperienceItemType = {
  title: string;
  location: string;
  company: string;
  tenure: string;
  accomplishments: string[];
  skills: string[];
};

export type ProjectItemType = {
  title: string;
  github_link: string;
  live_link?: string;
  image: string;
  snippets: string[];
  skills: string[];
};
