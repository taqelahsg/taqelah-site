'use client'

import { useState, useMemo } from 'react'
import { Linkedin, Twitter, Globe } from 'lucide-react'
import { Section, SectionHeader } from '@/components/shared/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/shared/card'
import { SearchInput } from '@/components/shared/search-input'
import { TagList } from '@/components/shared/tag'
import { getAllSpeakers } from '@/lib/content'
import { getAssetPath } from '@/lib/utils'

export default function SpeakersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const allSpeakers = getAllSpeakers()

  const filteredSpeakers = useMemo(() => {
    return allSpeakers.filter(speaker =>
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.bio.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [allSpeakers, searchQuery])

  return (
    <Section className="pt-8">
      <SectionHeader
        title="Speakers"
        description="Meet our amazing community speakers and industry experts"
      />

      <div className="mb-8">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search speakers..."
        />
      </div>

      {filteredSpeakers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No speakers found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpeakers.map((speaker) => (
            <Card key={speaker.slug} href={getAssetPath(`/speakers/${speaker.slug}`)}>
              <CardHeader>
                <div className="mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
                    {speaker.name.charAt(0)}
                  </div>
                </div>
                <CardTitle>{speaker.name}</CardTitle>
                <div className="text-sm text-muted-foreground mb-2">{speaker.title}</div>
                {speaker.company && (
                  <div className="text-sm text-muted-foreground mb-3">{speaker.company}</div>
                )}
                <CardDescription className="line-clamp-3">{speaker.bio}</CardDescription>
                {speaker.expertise && speaker.expertise.length > 0 && (
                  <div className="mt-4">
                    <TagList tags={speaker.expertise} limit={3} />
                  </div>
                )}
                <div className="flex gap-3 mt-4">
                  {speaker.linkedin && (
                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Linkedin className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </a>
                  )}
                  {speaker.twitter && (
                    <a href={speaker.twitter} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Twitter className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </a>
                  )}
                  {speaker.website && (
                    <a href={speaker.website} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Globe className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </a>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </Section>
  )
}
