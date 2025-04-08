"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import ModalOverlay from "@/components/ui/modal-overlay"
import { workExperiences } from "@/lib/data/work-experience"
import type { WorkExperience } from "@/lib/types"

export default function WorkExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<WorkExperience | null>(null)

  return (
    <div className="space-y-8">
      <SectionHeader title="Work Experience" subtitle="My professional journey so far" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto pb-4">
        {workExperiences.map((experience) => (
          <Card
            key={experience.id}
            className="cursor-pointer hover:shadow-md transition-all"
            onClick={() => setSelectedExperience(experience)}
          >
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex-1 flex flex-col">
                <div className="flex justify-center mb-4 mt-2">
                  <Image
                    src={experience.logo || "/placeholder.svg"}
                    alt={`${experience.company} logo`}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="font-semibold text-lg">{experience.role}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-muted-foreground">{experience.company}</p>
                    <p className="text-sm text-muted-foreground">{experience.tenure}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedExperience && (
        <ModalOverlay
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          title={selectedExperience.role}
          description={`${selectedExperience.company} • ${selectedExperience.tenure}`}
        >
          <h4 className="font-medium mb-2">Key Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-2">
            {selectedExperience?.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </ModalOverlay>
      )}
    </div>
  )
}
