import type React from "react"
// Shared type definitions
export interface SectionProps {
  title: string
  subtitle?: string
  className?: string
  children: React.ReactNode
}

export interface CardProps {
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children: React.ReactNode
}

// Project types
export interface Project {
  id: number
  title: string
  description: string
  image: string
  duration: string
  techStack: string[]
  details: string[]
}

// Work Experience types
export interface WorkExperience {
  id: number
  company: string
  role: string
  tenure: string
  logo: string
  responsibilities: string[]
}

// Education types
export interface Education {
  id: number
  degree: string
  program: string
  university: string
  location: string
  duration: string
  gpa: string
  image: string
  courses: string[]
}

// Navigation types
export interface NavItem {
  name: string
  href: string
}

// Social link types
export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}
