import Link from 'next/link'
import { Calendar, MapPin, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './card'
import { TagList } from './tag'
import { formatDate } from '@/lib/date'
import { getAssetPath } from '@/lib/utils'
import type { Event } from 'contentlayer/generated'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card href={getAssetPath(`/events/${event.slug}`)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-2">
          <CardTitle className="line-clamp-2">{event.title}</CardTitle>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            event.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
          }`}>
            {event.status}
          </span>
        </div>
        <CardDescription className="line-clamp-2">{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          {event.speakers && event.speakers.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{event.speakers.length} speaker{event.speakers.length > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>
        {event.tags && <TagList tags={event.tags} limit={3} />}
      </CardContent>
    </Card>
  )
}
