export type Project = {
  title: string;
  description: string;
  technologies: string;
  caseStudy: string;
  href: string;
  image: string;
};

export type Experience = {
  image: string;
  label: string;
  title: string;
  description: string;
  learning: string;
  duplicatedLearning?: string;
  caseStudy: string;
  reverse?: boolean;
};

export type SkillGroup = {
  icon: string;
  title: string;
  values: string[];
};
