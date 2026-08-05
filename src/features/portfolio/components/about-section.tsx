import { aboutParagraphs, skillGroups } from "../data";
import type { SkillGroup } from "../types";

export default function AboutSection() {
  return <section id="about" className="scroll-mt-32 px-6 py-20 md:min-h-screen md:px-20"><div className="mx-auto grid max-w-7xl items-start gap-14 md:grid-cols-2"><div><h2 className="mb-8 text-3xl font-bold text-gray-900">About Me</h2>{aboutParagraphs.map((paragraph, index) => <p key={paragraph} className={index === aboutParagraphs.length - 1 ? "leading-relaxed text-gray-700" : "mb-6 leading-relaxed text-gray-700"}>{paragraph}</p>)}</div><div id="skills" className="scroll-mt-32 px-6 py-20 md:min-h-screen md:px-20"><div className="mx-auto max-w-4xl"><h2 className="mb-14 text-3xl font-bold text-gray-900">Skills</h2>{skillGroups.map((group, index) => <Skills key={group.title} group={group} isLast={index === skillGroups.length - 1} />)}</div></div></div></section>;
}

function Skills({ group, isLast }: { group: SkillGroup; isLast: boolean }) {
  return <div className={isLast ? "" : "mb-12"}><h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-gray-900"><i className={`fa-solid ${group.icon} text-blue-600`} />{group.title}</h3><ul className="grid grid-cols-2 gap-y-3 text-gray-700">{group.values.map((value) => <li key={value}>{value}</li>)}</ul></div>;
}
