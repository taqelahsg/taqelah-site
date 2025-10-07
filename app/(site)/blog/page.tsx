'use client'

import { useState, useMemo } from 'react'
import { Section, SectionHeader } from '@/components/shared/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/shared/card'
import { SearchInput } from '@/components/shared/search-input'
import { TagList } from '@/components/shared/tag'
import { getAllBlogPosts } from '@/lib/content'
import { sortByDate, formatDate } from '@/lib/date'
import { getAssetPath } from '@/lib/utils'

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const allPosts = sortByDate(getAllBlogPosts())

  const filteredPosts = useMemo(() => {
    return allPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [allPosts, searchQuery])

  return (
    <Section className="pt-8">
      <SectionHeader
        title="Blog"
        description="Insights, tutorials, and updates from the TAQELAH community"
      />

      <div className="mb-8">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search blog posts..."
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No blog posts found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.slug} href={getAssetPath(`/blog/${post.slug}`)}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{post.author}</span>
                  <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-4">
                    <TagList tags={post.tags} limit={3} />
                  </div>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </Section>
  )
}
