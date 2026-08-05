import { experiences } from "../data";
import type { Experience } from "../types";
import CaseStudy from "./case-study";
import ContentImage from "./content-image";
import SectionGlows from "./section-glows";

export default function ExperienceSection() {
  return <section id="experience" className="relative bg-linear-to-br from-white via-blue-50 to-purple-50 px-6 py-24 md:px-20"><SectionGlows opacity="opacity-20" /><div className="mx-auto max-w-6xl space-y-14"><h2 className="mb-10 text-3xl font-bold text-gray-900">Experience &amp; Education</h2>{experiences.map((experience) => <ExperienceCard key={experience.title} experience={experience} />)}</div></section>;
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return <article className={`flex flex-col items-start gap-8 rounded-2xl bg-white/70 p-6 shadow-sm backdrop-blur-lg transition hover:shadow-xl ${experience.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}><div className="space-y-3 md:w-1/2"><span className="text-sm font-medium uppercase text-blue-600">{experience.label}</span><h3 className="text-2xl font-semibold">{experience.title}</h3><p className="text-gray-600">{experience.description}</p><p className="text-sm text-gray-500">Key Learning: <span className="font-medium">{experience.learning}</span></p>{experience.duplicatedLearning && <p className="text-sm text-gray-500">Key Learning: <span className="font-medium">{experience.duplicatedLearning}</span></p>}<CaseStudy>{experience.caseStudy}</CaseStudy></div><ContentImage src={experience.image} containerClassName="w-full md:w-1/2" /></article>;
}
