"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import ModalOverlay from "@/components/ui/modal-overlay"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/data/projects"
import type { Project } from "@/lib/types"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="space-y-8">
      <SectionHeader title="Projects" subtitle="Some of my recent work" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-x-auto pb-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="cursor-pointer hover:shadow-md transition-all overflow-hidden"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mt-1">{project.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <ModalOverlay
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          description={`Duration: ${selectedProject.duration}`}
        >
          <div className="mb-4">
            <h4 className="font-medium mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <h4 className="font-medium mb-2">Project Details:</h4>
          <ul className="list-disc pl-5 space-y-2">
            {selectedProject.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </ModalOverlay>
      )}
    </div>
  )
}
