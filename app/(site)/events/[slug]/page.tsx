import { notFound } from 'next/navigation'
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/shared/section'
import { TagList } from '@/components/shared/tag'
import { VideoEmbed } from '@/components/shared/video-embed'
import { getAllEvents } from '@/lib/content'
import { formatDate } from '@/lib/date'

export async function generateStaticParams() {
  return getAllEvents().map((event) => ({
    slug: event.slug,
  }))
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getAllEvents().find((e) => e.slug === params.slug)

  if (!event) {
    notFound()
  }

  const MDXContent = useMDXComponent(event.body.code)

  return (
    <Section className="pt-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${
              event.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
            }`}>
              {event.status}
            </span>
            <span className="text-sm text-muted-foreground">{event.type}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {event.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{event.description}</p>

          <div className="flex flex-col gap-3 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(event.date, 'EEEE, MMMM dd, yyyy')}</span>
              {event.endDate && <span> - {formatDate(event.endDate, 'MMMM dd, yyyy')}</span>}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{event.location}</span>
            </div>
            {event.speakers && event.speakers.length > 0 && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>{event.speakers.length} speaker{event.speakers.length > 1 ? 's' : ''}</span>
              </div>
            )}
          </div>

          {event.tags && (
            <div className="mb-6">
              <TagList tags={event.tags} />
            </div>
          )}

          {event.registrationUrl && event.status === 'upcoming' && (
            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Register Now <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          )}
        </div>

        {event.videoUrl && event.status === 'past' && (
          <VideoEmbed url={event.videoUrl} title={event.title} />
        )}

        <div className="prose prose-gray max-w-none">
          <MDXContent />
        </div>
      </div>
    </Section>
  )
}
