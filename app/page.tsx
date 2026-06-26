import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import SkillsEducation from "@/components/SkillsEducation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPortfolioProjects } from "@/lib/googleSheets";

export default async function Home() {
  const projects = await getPortfolioProjects();

  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio initialProjects={projects} />
      <SkillsEducation />
      <Contact />
      <Footer />
    </>
  );
}
