import type { ReactNode } from "react";

export default function CaseStudy({ children }: { children: ReactNode }) {
  return <details className="mt-2 text-sm text-gray-700"><summary className="cursor-pointer font-medium hover:text-blue-600">Case Study</summary><p className="mt-2">{children}</p></details>;
}
