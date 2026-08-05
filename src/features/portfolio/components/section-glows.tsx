export default function SectionGlows({ opacity }: { opacity: string }) {
  return <><div className={`absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-200 blur-3xl ${opacity}`} /><div className={`absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-200 blur-3xl ${opacity}`} /></>;
}
