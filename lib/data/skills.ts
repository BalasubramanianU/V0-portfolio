export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "Authentication"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma ORM"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "Cypress"],
  },
]
