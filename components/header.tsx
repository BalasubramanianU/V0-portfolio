"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Code, Menu, X } from "lucide-react"
import { useOnClickOutside } from "@/lib/hooks/use-click-outside"

// Navigation items without Home
const navItems = [
  { name: "Work Experience", href: "#work-experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About Me", href: "#about-me" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [shouldShowHamburger, setShouldShowHamburger] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Close mobile menu when clicking outside
  useOnClickOutside(mobileMenuRef, () => setMobileMenuOpen(false))

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    // Initial check for active section
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check screen width to determine if hamburger menu should be shown
  useEffect(() => {
    const checkScreenWidth = () => {
      setShouldShowHamburger(window.innerWidth < 800)
    }

    // Initial check
    checkScreenWidth()

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenWidth)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenWidth)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 0
      const scrollPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      })

      setActiveSection(href.substring(1))
      setMobileMenuOpen(false)
    }
  }

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        {/* Portfolio logo as home button */}
        <Link
          href="#home"
          className={cn(
            "flex items-center gap-2 logo-container transition-colors rounded-md px-2 py-1",
            activeSection === "home" ? "text-primary bg-muted" : "hover:bg-muted/50",
          )}
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#home")
          }}
        >
          <Code className="h-6 w-6" />
          <span className="font-bold text-lg">Portfolio</span>
        </Link>

        {/* Desktop Navigation (screen width >= 800px) */}
        {!shouldShowHamburger && (
          <nav className="flex">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors block",
                      activeSection === item.href.substring(1)
                        ? "text-primary bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Hamburger Menu Button (screen width < 800px) */}
        {shouldShowHamburger && (
          <button
            className="p-2 rounded-md hover:bg-muted/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        )}

        {/* Mobile Menu (screen width < 800px) */}
        {shouldShowHamburger && mobileMenuOpen && (
          <div ref={mobileMenuRef} className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg z-50">
            <nav className="container py-4">
              <ul className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
                        activeSection === item.href.substring(1)
                          ? "text-primary bg-muted"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                      )}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
