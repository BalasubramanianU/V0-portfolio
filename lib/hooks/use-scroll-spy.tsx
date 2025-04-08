"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[], offset = 0) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      // Find the section that is currently in view
      const currentSection = sectionIds
        .map((id) => {
          const element = document.getElementById(id)
          if (!element) return { id, top: -1, bottom: -1 }

          const rect = element.getBoundingClientRect()
          const top = rect.top + window.scrollY
          const bottom = rect.bottom + window.scrollY

          return { id, top, bottom }
        })
        .find(({ top, bottom }) => {
          return scrollPosition >= top && scrollPosition < bottom
        })

      if (currentSection) {
        setActiveId(currentSection.id)
      }
    }

    handleScroll() // Call once on mount
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionIds, offset])

  return activeId
}
