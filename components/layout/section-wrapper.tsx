"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === `#${id}` && sectionRef.current) {
        const headerHeight = document.querySelector("header")?.offsetHeight || 0
        const scrollPosition = sectionRef.current.offsetTop - headerHeight

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        })
      }
    }

    // Handle initial load with hash
    if (window.location.hash === `#${id}` && sectionRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const headerHeight = document.querySelector("header")?.offsetHeight || 0
        const scrollPosition = sectionRef.current!.offsetTop - headerHeight

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        })
      }, 100)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [id])

  return (
    <section id={id} ref={sectionRef} className={cn("min-h-screen w-full pt-16 md:pt-20 pb-10 snap-start", className)}>
      <div className="container h-full">{children}</div>
    </section>
  )
}
