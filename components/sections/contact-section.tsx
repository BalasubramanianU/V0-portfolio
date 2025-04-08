import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { socialLinks } from "@/lib/data/navigation"

export default function ContactSection() {
  return (
    <div className="space-y-8">
      <SectionHeader title="Contact Me" subtitle="Let's get in touch" />

      <Card className="max-w-md mx-auto">
        <CardContent className="p-4 md:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {socialLinks.map((link, index) => (
              <Button key={index} variant="outline" size="lg" className="w-full" asChild>
                <Link href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"}>
                  <link.icon className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  {link.name}
                </Link>
              </Button>
            ))}
          </div>

          <div className="text-center pt-2 md:pt-4">
            <p className="text-sm text-muted-foreground">
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
