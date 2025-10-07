import { Linkedin, Youtube, MessageCircle, Send } from 'lucide-react'
import { Section, SectionHeader } from '@/components/shared/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/shared/card'
import { Button } from '@/components/ui/button'

const platforms = [
  {
    name: 'LinkedIn',
    description: 'Follow our company page for updates and professional networking',
    icon: Linkedin,
    href: 'https://linkedin.com/company/taqelah',
    color: 'text-blue-600'
  },
  {
    name: 'YouTube',
    description: 'Watch recordings of our talks and tutorials',
    icon: Youtube,
    href: 'https://youtube.com/@taqelah',
    color: 'text-red-600'
  },
  {
    name: 'WhatsApp',
    description: 'Join our WhatsApp group for quick discussions and updates',
    icon: MessageCircle,
    href: 'https://chat.whatsapp.com/taqelah',
    color: 'text-green-600'
  },
  {
    name: 'Telegram',
    description: 'Connect with the community on Telegram',
    icon: Send,
    href: 'https://t.me/taqelah',
    color: 'text-blue-500'
  },
]

export default function JoinPage() {
  return (
    <Section className="pt-8">
      <SectionHeader
        title="Join TAQELAH"
        description="Connect with Singapore's most active QA community on your preferred platform"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {platforms.map((platform) => {
          const Icon = platform.icon
          return (
            <Card key={platform.name}>
              <CardHeader>
                <Icon className={`h-12 w-12 mb-4 ${platform.color}`} />
                <CardTitle>{platform.name}</CardTitle>
                <CardDescription className="mb-4">{platform.description}</CardDescription>
                <a href={platform.href} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Join on {platform.name}
                  </Button>
                </a>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      <div className="bg-muted rounded-2xl p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-center">What Happens Next?</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold mb-1">Join Our Channels</h4>
              <p className="text-muted-foreground">
                Connect with us on LinkedIn, WhatsApp, Telegram, or YouTube
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold mb-1">Introduce Yourself</h4>
              <p className="text-muted-foreground">
                Share your background and what you're interested in learning
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold mb-1">Attend Events</h4>
              <p className="text-muted-foreground">
                Join our meetups and workshops to connect with the community
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h4 className="font-semibold mb-1">Share & Learn</h4>
              <p className="text-muted-foreground">
                Engage in discussions, share knowledge, and grow together
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
