import Image from "next/image";

type ContentImageProps = { src: string; containerClassName: string };

export default function ContentImage({ src, containerClassName }: ContentImageProps) {
  return <div className={containerClassName}><Image src={src} alt="" width={1000} height={800} sizes="(min-width: 768px) 50vw, 100vw" className="h-64 w-full rounded-xl object-cover shadow-lg md:h-80" /></div>;
}
