import Link from 'next/link'
import { Linkedin, Youtube, MessageCircle, Send } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

const footerLinks = {
  community: [
    { name: 'Events', href: '/events' },
    { name: 'Meetups', href: '/meetups' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Join Us', href: '/join' },
  ],
  quickLinks: [
    { name: 'Code of Conduct', href: '/code-of-conduct' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Contact', href: '/contact' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/taqelah', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/@taqelah', icon: Youtube },
  { name: 'WhatsApp', href: 'https://chat.whatsapp.com/taqelah', icon: MessageCircle },
  { name: 'Telegram', href: 'https://t.me/taqelah', icon: Send },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                TAQELAH
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Singapore&apos;s vibrant QA and testing community. Join us to learn, share, and grow together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={getAssetPath(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={getAssetPath(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} TAQELAH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
