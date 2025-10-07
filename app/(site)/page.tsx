import Link from 'next/link'
import { Calendar, Users, BookOpen, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, SectionHeader } from '@/components/shared/section'
import { EventCard } from '@/components/shared/event-card'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shared/card'
import { getUpcomingEvents } from '@/lib/content'
import { sortByDate } from '@/lib/date'
import { getAssetPath } from '@/lib/utils'
import Balancer from 'react-wrap-balancer'

export default function HomePage() {
  const upcomingEvents = sortByDate(getUpcomingEvents(), 'asc').slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <Balancer>
              Singapore&apos;s Vibrant <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">QA Community</span>
            </Balancer>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            <Balancer>
              Join TAQELAH to connect with passionate QA professionals, learn cutting-edge testing practices, and grow your career in quality assurance.
            </Balancer>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getAssetPath('/join')}>
              <Button size="lg">Join the Community</Button>
            </Link>
            <Link href={getAssetPath('/events')}>
              <Button size="lg" variant="outline">Explore Events</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-muted/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Regular Events</CardTitle>
              <CardDescription>
                Monthly meetups, workshops, and conferences to keep you updated with the latest in QA
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Expert Speakers</CardTitle>
              <CardDescription>
                Learn from industry leaders and experienced practitioners sharing real-world insights
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Vibrant Community</CardTitle>
              <CardDescription>
                Connect with passionate QA professionals and build lasting relationships
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <Section>
          <div className="flex items-end justify-between mb-8">
            <SectionHeader
              title="Upcoming Events"
              description="Join us at our next events and meetups"
              className="mb-0"
            />
            <Link href={getAssetPath('/events')}>
              <Button variant="ghost">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </Section>
      )}



      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Level Up Your QA Skills?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of QA professionals in Singapore&apos;s most active testing community
          </p>
          <Link href={getAssetPath('/join')}>
            <Button size="lg" variant="secondary">
              Join TAQELAH Today
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}
