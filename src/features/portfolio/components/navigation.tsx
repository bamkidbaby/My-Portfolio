"use client";

import { useEffect, useRef, useState } from "react";
import { navigationLinks } from "../data";

export default function PortfolioNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      if (cursor.current) {
        cursor.current.style.left = `${event.clientX}px`;
        cursor.current.style.top = `${event.clientY}px`;
      }
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return <><nav className="fixed z-40 flex w-full items-center justify-between bg-white/70 px-7 py-4 shadow-md backdrop-blur-md"><a href="#home" className="text-xl font-light tracking-wide text-gray-900 transition hover:text-blue-500">PETER BAMIDELE</a><ul className="hidden space-x-8 text-gray-700 md:flex">{navigationLinks.map((link) => <li key={link}><a href={`#${link.toLowerCase()}`} className="transition hover:text-gray-900">{link}</a></li>)}</ul><div className="flex items-center md:hidden"><button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} className="focus:outline-none" onClick={() => setMenuOpen((open) => !open)}><svg className="h-6 w-6 text-gray-900 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">{menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}</svg></button></div></nav><div className={`fixed top-0 left-0 z-30 flex w-full flex-col space-y-6 bg-white px-6 py-3 pt-20 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>{navigationLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-base font-medium text-gray-700 transition hover:text-gray-900" onClick={() => setMenuOpen(false)}>{link}</a>)}</div><div ref={cursor} className="pointer-events-none fixed z-50 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/40 transition-all duration-100 ease-out" /></>;
}
