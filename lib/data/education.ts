import type { Education } from "@/lib/types"

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Master of Science",
    program: "Computer Software Engineering",
    university: "Northeastern University",
    location: "Boston, MA",
    duration: "Sep 2023 - May 2025",
    gpa: "3.9/4.0",
    image: "/placeholder.svg?height=150&width=150",
    courses: ["Object-Oriented Design", "Algorithms", "Databases", "Network Structures and Cloud", "Advanced Cloud"],
  },
  {
    id: 2,
    degree: "Bachelor's Degree",
    program: "Computer Engineering",
    university: "State University",
    location: "Boston, MA",
    duration: "2016 - 2020",
    gpa: "3.8/4.0",
    image: "/placeholder.svg?height=150&width=150",
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Web Development",
      "Database Management",
      "Computer Networks",
      "Operating Systems",
    ],
  },
]
