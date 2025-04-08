import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-8rem)] gap-8 py-8">
      <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">Balasubramanian</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          A passionate software engineer with over 2.5 years of professional experience in designing and developing
          modern cloud-native applications. I bring a strong foundation across frontend, backend, cloud, and DevOps,
          enabling me to build scalable and reliable software solutions.
        </p>
        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <Button asChild size="lg">
            <Link
              href="https://drive.google.com/file/d/1rLg6mPcY1J8E5HMXB7P3hvI-n0k7X6L1/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/BalasubramanianU" target="_blank">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-muted">
          <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
        </div>
      </div>
    </div>
  )
}
