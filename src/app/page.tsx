import AboutSection from "../features/portfolio/components/about-section";
import BackgroundMesh from "../features/portfolio/components/background-mesh";
import ContactSection from "../features/portfolio/components/contact-section";
import ExperienceSection from "../features/portfolio/components/experience-section";
import HeroSection from "../features/portfolio/components/hero-section";
import PortfolioFooter from "../features/portfolio/components/portfolio-footer";
import PortfolioNavigation from "../features/portfolio/components/navigation";
import ProjectsSection from "../features/portfolio/components/projects-section";

export default function Home() {
  return <><BackgroundMesh /><PortfolioNavigation /><HeroSection /><AboutSection /><ProjectsSection /><ExperienceSection /><ContactSection /><PortfolioFooter /></>;
}
