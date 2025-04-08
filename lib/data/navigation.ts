import type { NavItem, SocialLink } from "@/lib/types"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export const navItems: NavItem[] = [
  { name: "Work Experience", href: "#work-experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About Me", href: "#about-me" },
  { name: "Contact", href: "#contact" },
]

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    href: "mailto:ubalasubramanian03@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/balasubramanian-u/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/BalasubramanianU",
    icon: Github,
  },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1rLg6mPcY1J8E5HMXB7P3hvI-n0k7X6L1/view?usp=sharing",
    icon: FileText,
  },
]
