import SectionGlows from "./section-glows";

export default function ContactSection() {
  return <section id="contact" className="relative bg-linear-to-br from-white via-blue-50 to-purple-50 px-6 py-24 md:px-20"><SectionGlows opacity="opacity-20" /><div className="mx-auto max-w-4xl space-y-6 text-left md:text-center"><span className="text-sm font-medium uppercase text-blue-600">GET IN TOUCH</span><h2 className="text-4xl font-bold text-gray-900">Let&apos;s build something</h2><p className="text-xl text-gray-500">impactful together.</p><p className="mx-auto mt-4 max-w-2xl text-gray-600">I&apos;m always open to discussing new projects, collaborations, or opportunities where technology can make a real difference.</p><a href="mailto:peterbamidele629@gmail.com" className="mt-6 inline-block rounded-lg bg-black px-6 py-3 font-medium text-white shadow-lg transition hover:bg-gray-800">Start a Conversation →</a></div></section>;
}
