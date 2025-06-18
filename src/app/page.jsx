import Navbar from "@/app/components/navbar/navbar";
import Hero from "@/app/components/hero/hero";
import Projects from "@/app/components/projects/projects";
import Experience from "@/app/components/experience/experience";
import Skills from "@/app/components/skills/skills";
import Certification from "@/app/components/certification/certification";
import Contact from "@/app/components/contact/contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certification />
      <Contact />
    </main>
  );
}