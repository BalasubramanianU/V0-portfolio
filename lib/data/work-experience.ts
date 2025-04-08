import type { WorkExperience } from "@/lib/types"

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "Skillz",
    role: "Software Engineer Co-op",
    tenure: "Aug 2024 - Dec 2024",
    logo: "/placeholder.svg?height=80&width=80",
    responsibilities: [
      "Led a team of 3 in the architecture, design, development, and deployment of a feature using Next.js and React Native, ensuring high-quality user experiences and seamless production deployment without critical bugs",
      "Utilized JavaScript and TypeScript to implement high-quality UI components, addressing cross-platform inconsistencies across Android, iOS, and web for varying screen sizes",
      "Collaborated with engineers to navigate complex, multi-repository codebases, integrating new features without disrupting existing functionalities",
      "Gained hands-on experience with CI/CD pipelines and monitoring stacks, contributing to continuous improvement",
    ],
  },
  {
    id: 2,
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    tenure: "Jul 2021 - Jul 2023",
    logo: "/placeholder.svg?height=80&width=80",
    responsibilities: [
      "Spearheaded the Software Development Lifecycle (SDLC) in an Agile environment, delivering high-quality mobile applications using React Native, Node and TypeScript, achieving 100% on-time delivery across 30 sprints",
      "Leveraged Test-Driven Development (TDD) and utilized Jest for unit testing to achieve 95% code coverage",
      "Enhanced app performance by 55% through collaborative problem-solving of complex challenges such as deeplinking, recursive async calls, automatic-scrollable lists and cache storage, demonstrating excellent teamwork",
      "Independently upgraded a legacy React Native codebase, reducing development time and costs by 40% while introducing type safety with TypeScript",
      "Resolved 33 critical bugs through strong troubleshooting and debugging skills, preventing app downtime",
    ],
  },
  {
    id: 3,
    company: "Tata Consultancy Services",
    role: "Assistant Software Engineer",
    tenure: "Feb 2021 - Jul 2021",
    logo: "/placeholder.svg?height=80&width=80",
    responsibilities: [
      "Improved user experience by 40% through precise UI/UX development using JavaScript and Stylesheet",
      "Optimized the scalability of the UI for different screen sizes, which reduced the UI compatibility issues by 25%",
      "Delivered maintainable and well-documented code in a fast-paced environment, enhancing team productivity",
    ],
  },
]
