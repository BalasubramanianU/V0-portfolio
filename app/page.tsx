import type { Metadata } from "next"
import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import SectionWrapper from "@/components/layout/section-wrapper"
import WorkExperienceSection from "@/components/sections/work-experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import AboutMeSection from "@/components/sections/about-me-section"
import ContactSection from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Balasubramanian's Portfolio",
  description: "A modern developer portfolio showcasing skills and projects",
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main className="relative">
        <SectionWrapper id="home" className="bg-background">
          <HeroSection />
        </SectionWrapper>

        <SectionWrapper id="work-experience" className="bg-muted/30">
          <WorkExperienceSection />
        </SectionWrapper>

        <SectionWrapper id="projects" className="bg-background">
          <ProjectsSection />
        </SectionWrapper>

        <SectionWrapper id="skills" className="bg-muted/30">
          <SkillsSection />
        </SectionWrapper>

        <SectionWrapper id="about-me" className="bg-background">
          <AboutMeSection />
        </SectionWrapper>

        <SectionWrapper id="contact" className="bg-muted/30">
          <ContactSection />
        </SectionWrapper>
      </main>
    </div>
  )
}
