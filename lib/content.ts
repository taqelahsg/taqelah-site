import { allEvents, allSpeakers, allBlogPosts, allResources, allSponsors } from 'contentlayer/generated'

export function getAllEvents() {
  return allEvents
}

export function getUpcomingEvents() {
  return allEvents.filter(event => event.status === 'upcoming')
}

export function getPastEvents() {
  return allEvents.filter(event => event.status === 'past')
}

export function getEventBySlug(slug: string) {
  return allEvents.find(event => event.slug === slug)
}

export function getAllSpeakers() {
  return allSpeakers
}

export function getSpeakerBySlug(slug: string) {
  return allSpeakers.find(speaker => speaker.slug === slug)
}

export function getAllBlogPosts() {
  return allBlogPosts
}

export function getFeaturedBlogPosts() {
  return allBlogPosts.filter(post => post.featured)
}

export function getBlogPostBySlug(slug: string) {
  return allBlogPosts.find(post => post.slug === slug)
}

export function getAllResources() {
  return allResources
}

export function getFeaturedResources() {
  return allResources.filter(resource => resource.featured)
}

export function getResourcesByCategory(category: string) {
  return allResources.filter(resource => resource.category === category)
}

export function getAllSponsors() {
  return allSponsors
}

export function getSponsorsByTier(tier: string) {
  return allSponsors.filter(sponsor => sponsor.tier === tier)
}
