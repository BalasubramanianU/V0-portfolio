"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import ModalOverlay from "@/components/ui/modal-overlay"
import { educationData } from "@/lib/data/education"
import type { Education } from "@/lib/types"

export default function AboutMeSection() {
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null)

  return (
    <div className="space-y-8">
      <SectionHeader title="About Me" subtitle="Get to know my story" />

      {/* Personal Bio Section */}
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">
              I'm a passionate developer with a strong foundation in both frontend and backend technologies. My journey
              in software development began during my undergraduate studies, where I discovered my love for creating
              intuitive and efficient digital solutions.
            </p>
            <p>
              With experience across various domains, I enjoy tackling complex problems and turning ideas into reality
              through clean, maintainable code. I'm constantly learning and exploring new technologies to stay at the
              forefront of the ever-evolving tech landscape.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center pt-8">
        <h3 className="text-2xl font-bold tracking-tight">My Educational Background</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((education) => (
          <Card
            key={education.id}
            className="cursor-pointer hover:shadow-md transition-all"
            onClick={() => setSelectedEducation(education)}
          >
            <CardContent className="p-6 flex flex-col md:flex-row gap-4 items-center">
              <div className="relative h-24 w-24 flex-shrink-0">
                <Image
                  src={education.image || "/placeholder.svg"}
                  alt={education.university}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{education.degree}</h3>
                <p className="text-muted-foreground">{education.program}</p>
                <p className="text-sm mt-1">GPA: {education.gpa}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedEducation && (
        <ModalOverlay
          isOpen={!!selectedEducation}
          onClose={() => setSelectedEducation(null)}
          title={selectedEducation.degree}
          description={selectedEducation.program}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
            <div className="relative h-24 w-24 flex-shrink-0">
              <Image
                src={selectedEducation.image || "/placeholder.svg?height=150&width=150"}
                alt={selectedEducation.university || "University"}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <p>
                <strong>University:</strong> {selectedEducation.university}
              </p>
              <p>
                <strong>Location:</strong> {selectedEducation.location}
              </p>
              <p>
                <strong>Duration:</strong> {selectedEducation.duration}
              </p>
              <p>
                <strong>GPA:</strong> {selectedEducation.gpa}
              </p>
            </div>
          </div>
          <h4 className="font-medium mb-2">Courses Taken:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {selectedEducation.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </ModalOverlay>
      )}
    </div>
  )
}
