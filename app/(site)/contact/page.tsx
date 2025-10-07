import { Mail, Linkedin, MapPin } from 'lucide-react'
import { Section, SectionHeader } from '@/components/shared/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/shared/card'

export default function ContactPage() {
  return (
    <Section className="pt-8">
      <SectionHeader
        title="Contact Us"
        description="Get in touch with the TAQELAH team"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <Mail className="h-10 w-10 text-primary mb-4" />
            <CardTitle>Email</CardTitle>
            <CardDescription>
              For general inquiries:<br />
              <a href="mailto:hello@taqelah.com" className="text-primary hover:underline">
                hello@taqelah.com
              </a>
            </CardDescription>
            <CardDescription className="mt-2">
              For sponsorships:<br />
              <a href="mailto:sponsors@taqelah.com" className="text-primary hover:underline">
                sponsors@taqelah.com
              </a>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Linkedin className="h-10 w-10 text-primary mb-4" />
            <CardTitle>LinkedIn</CardTitle>
            <CardDescription>
              Connect with us on LinkedIn:<br />
              <a
                href="https://linkedin.com/company/taqelah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @taqelah
              </a>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <MapPin className="h-10 w-10 text-primary mb-4" />
            <CardTitle>Location</CardTitle>
            <CardDescription>
              Based in Singapore<br />
              Events held across the island
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="bg-muted rounded-2xl p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">How can I speak at a TAQELAH event?</h4>
            <p className="text-muted-foreground">
              We're always looking for speakers! Email us at hello@taqelah.com with your topic
              proposal and a brief bio.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Can I host a TAQELAH event at my company?</h4>
            <p className="text-muted-foreground">
              Yes! We welcome venue sponsors. Reach out to sponsors@taqelah.com to discuss hosting
              opportunities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">How can my company become a sponsor?</h4>
            <p className="text-muted-foreground">
              Contact sponsors@taqelah.com for information about sponsorship packages and benefits.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Is TAQELAH only for experienced QA professionals?</h4>
            <p className="text-muted-foreground">
              Not at all! We welcome everyone interested in QA and testing, from beginners to experts.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
