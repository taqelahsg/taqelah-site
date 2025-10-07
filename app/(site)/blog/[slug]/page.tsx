import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Section } from '@/components/shared/section'
import { TagList } from '@/components/shared/tag'
import { getAllBlogPosts } from '@/lib/content'
import { formatDate } from '@/lib/date'

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getAllBlogPosts().find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <Section className="pt-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span>•</span>
            <time>{formatDate(post.date, 'MMMM dd, yyyy')}</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{post.description}</p>
          {post.tags && post.tags.length > 0 && (
            <TagList tags={post.tags} />
          )}
        </header>
        <div className="prose prose-gray max-w-none">
          <MDXContent />
        </div>
      </article>
    </Section>
  )
}
