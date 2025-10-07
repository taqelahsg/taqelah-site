'use client'

import { Play } from 'lucide-react'

interface VideoEmbedProps {
  url: string
  title?: string
}

export function VideoEmbed({ url, title = 'Video' }: VideoEmbedProps) {
  // Extract video ID from Engineers.SG URL format (e.g., https://engineers.sg/v/3817)
  const getEngineerssgEmbedUrl = (url: string) => {
    const match = url.match(/engineers\.sg\/v\/(\d+)/)
    if (match) {
      return `https://engineers.sg/video/${match[1]}/iframe`
    }
    return null
  }

  // Check if it's a YouTube URL
  const getYoutubeEmbedUrl = (url: string) => {
    const patterns = [
      /youtube\.com\/watch\?v=([^&]+)/,
      /youtu\.be\/([^?]+)/,
      /youtube\.com\/embed\/([^?]+)/,
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) {
        return `https://www.youtube.com/embed/${match[1]}`
      }
    }
    return null
  }

  const engineerssgEmbed = getEngineerssgEmbedUrl(url)
  const youtubeEmbed = getYoutubeEmbedUrl(url)
  const embedUrl = engineerssgEmbed || youtubeEmbed

  if (!embedUrl) {
    // Fallback to external link if not a recognized video platform
    return (
      <div className="my-8">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity w-fit"
        >
          <Play className="h-5 w-5" />
          Watch Video
        </a>
      </div>
    )
  }

  return (
    <div className="my-8">
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
