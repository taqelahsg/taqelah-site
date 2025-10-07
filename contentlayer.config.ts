import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Event = defineDocumentType(() => ({
  name: 'Event',
  filePathPattern: `events/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    endDate: { type: 'date', required: false },
    location: { type: 'string', required: true },
    eventType: { type: 'enum', options: ['meetup', 'workshop', 'conference', 'webinar'], required: true },
    image: { type: 'string', required: false },
    registrationUrl: { type: 'string', required: false },
    videoUrl: { type: 'string', required: false },
    status: { type: 'enum', options: ['upcoming', 'past', 'cancelled'], required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    speakers: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('events/', ''),
    },
  },
}))

export const Speaker = defineDocumentType(() => ({
  name: 'Speaker',
  filePathPattern: `speakers/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    title: { type: 'string', required: true },
    bio: { type: 'string', required: true },
    avatar: { type: 'string', required: false },
    company: { type: 'string', required: false },
    linkedin: { type: 'string', required: false },
    twitter: { type: 'string', required: false },
    website: { type: 'string', required: false },
    expertise: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('speakers/', ''),
    },
  },
}))

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string', required: true },
    image: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    featured: { type: 'boolean', required: false, default: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('blog/', ''),
    },
  },
}))

export const Resource = defineDocumentType(() => ({
  name: 'Resource',
  filePathPattern: `resources/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    category: { type: 'enum', options: ['tool', 'course', 'book', 'article', 'video'], required: true },
    url: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    featured: { type: 'boolean', required: false, default: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('resources/', ''),
    },
  },
}))

export const Sponsor = defineDocumentType(() => ({
  name: 'Sponsor',
  filePathPattern: `sponsors/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    logo: { type: 'string', required: false },
    website: { type: 'string', required: false },
    tier: { type: 'enum', options: ['platinum', 'gold', 'silver', 'bronze', 'community'], required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('sponsors/', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Event, Speaker, BlogPost, Resource, Sponsor],
})
