import { projects } from "../data";
import type { Project } from "../types";
import CaseStudy from "./case-study";
import ContentImage from "./content-image";
import SectionGlows from "./section-glows";

export default function ProjectsSection() {
  return <section id="projects" className="relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50 px-6 py-24 md:min-h-screen md:px-20"><SectionGlows opacity="opacity-30" /><div className="mx-auto max-w-6xl space-y-20"><h2 className="mb-14 text-3xl font-bold text-gray-900">Selected Projects</h2>{projects.map((project, index) => <ProjectCard key={project.title} project={project} reverse={Boolean(index)} />)}</div></section>;
}

function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  return <article className={`flex flex-col items-center gap-10 rounded-2xl bg-white/70 p-6 shadow-sm backdrop-blur-lg transition hover:shadow-xl md:items-start ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}><div className="space-y-3 md:w-1/2"><span className="text-sm font-medium uppercase text-blue-600">Web Application</span><h3 className="text-2xl font-semibold">{project.title}</h3><p className="text-gray-600">{project.description}</p><p className="text-sm text-gray-500">Languages/Tech: <span className="font-medium">{project.technologies}</span></p><CaseStudy>{project.caseStudy}</CaseStudy><a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700">Live Demo →</a></div><ContentImage src={project.image} containerClassName="md:w-1/2" /></article>;
}
