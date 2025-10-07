'use client'

import { useState, useMemo } from 'react'
import { Section, SectionHeader } from '@/components/shared/section'
import { EventCard } from '@/components/shared/event-card'
import { SearchInput } from '@/components/shared/search-input'
import { Button } from '@/components/ui/button'
import { getAllEvents } from '@/lib/content'
import { sortByDate } from '@/lib/date'

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all')

  const allEvents = sortByDate(getAllEvents())

  const filteredEvents = useMemo(() => {
    return allEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesFilter = filter === 'all' || event.status === filter
      return matchesSearch && matchesFilter
    })
  }, [allEvents, searchQuery, filter])

  return (
    <Section className="pt-8">
      <SectionHeader
        title="Events"
        description="Explore our upcoming and past events, workshops, and meetups"
      />

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search events..."
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'upcoming' ? 'default' : 'outline'}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </Button>
          <Button
            variant={filter === 'past' ? 'default' : 'outline'}
            onClick={() => setFilter('past')}
          >
            Past
          </Button>
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No events found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      )}
    </Section>
  )
}
