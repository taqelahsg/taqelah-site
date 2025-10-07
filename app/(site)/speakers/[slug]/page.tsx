import { notFound } from 'next/navigation'
import { Linkedin, Twitter, Globe, Briefcase } from 'lucide-react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Section } from '@/components/shared/section'
import { TagList } from '@/components/shared/tag'
import { getAllSpeakers } from '@/lib/content'

export async function generateStaticParams() {
  return getAllSpeakers().map((speaker) => ({
    slug: speaker.slug,
  }))
}

export default function SpeakerPage({ params }: { params: { slug: string } }) {
  const speaker = getAllSpeakers().find((s) => s.slug === params.slug)

  if (!speaker) {
    notFound()
  }

  const MDXContent = useMDXComponent(speaker.body.code)

  return (
    <Section className="pt-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-4xl font-bold">
              {speaker.name.charAt(0)}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              {speaker.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-2">{speaker.title}</p>
            {speaker.company && (
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Briefcase className="h-4 w-4" />
                <span>{speaker.company}</span>
              </div>
            )}
            <p className="text-lg mb-4">{speaker.bio}</p>

            {speaker.expertise && speaker.expertise.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Expertise</h3>
                <TagList tags={speaker.expertise} />
              </div>
            )}

            <div className="flex gap-4">
              {speaker.linkedin && (
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              )}
              {speaker.twitter && (
                <a
                  href={speaker.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                  Twitter
                </a>
              )}
              {speaker.website && (
                <a
                  href={speaker.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Globe className="h-5 w-5" />
                  Website
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <MDXContent />
        </div>
      </div>
    </Section>
  )
}
