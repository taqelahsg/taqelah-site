import { ExternalLink } from 'lucide-react'
import { Section, SectionHeader } from '@/components/shared/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/shared/card'
import { getAllSponsors } from '@/lib/content'

const tierOrder = ['platinum', 'gold', 'silver', 'bronze', 'community']

export default function SponsorsPage() {
  const allSponsors = getAllSponsors()
  const sponsorsByTier = tierOrder.map(tier => ({
    tier,
    sponsors: allSponsors.filter(s => s.tier === tier)
  })).filter(group => group.sponsors.length > 0)

  return (
    <Section className="pt-8">
      <SectionHeader
        title="Our Sponsors"
        description="Thank you to our amazing sponsors who make TAQELAH possible"
      />

      <div className="space-y-12">
        {sponsorsByTier.map(({ tier, sponsors }) => (
          <div key={tier}>
            <h2 className="text-2xl font-bold mb-6 capitalize">{tier} Sponsors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsors.map((sponsor) => (
                <Card key={sponsor.slug}>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {sponsor.name.charAt(0)}
                    </div>
                    <CardTitle>{sponsor.name}</CardTitle>
                    <CardDescription>{sponsor.description}</CardDescription>
                    {sponsor.website && (
                      <div className="mt-4">
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          Visit Website <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-muted rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
          <p className="text-muted-foreground mb-6">
            Support the TAQELAH community and get your brand in front of hundreds of QA professionals in Singapore.
          </p>
          <a href="mailto:sponsors@taqelah.com" className="text-primary hover:underline">
            Contact us about sponsorship opportunities
          </a>
        </div>
      </div>
    </Section>
  )
}
