import { Section, SectionHeader } from '@/components/shared/section'
import { EventCard } from '@/components/shared/event-card'
import { getAllEvents } from '@/lib/content'
import { sortByDate } from '@/lib/date'

export default function MeetupsPage() {
  const meetups = sortByDate(getAllEvents().filter(event => event.eventType === 'meetup'))

  return (
    <Section className="pt-8">
      <SectionHeader
        title="Meetups"
        description="Join our regular community meetups to connect, learn, and share"
      />

      <div className="mb-8 bg-muted rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-2">About Our Meetups</h3>
        <p className="text-muted-foreground">
          TAQELAH hosts monthly meetups where QA professionals come together to share experiences,
          learn new techniques, and build connections. Our meetups feature talks, workshops, and
          networking opportunities in a welcoming environment.
        </p>
      </div>

      {meetups.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No meetups scheduled yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meetups.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      )}
    </Section>
  )
}
