import { Section, SectionHeader } from '@/components/shared/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/shared/card'
import { Users, Target, Heart, Rocket } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Section className="pt-8">
        <SectionHeader
          title="About TAQELAH"
          description="Singapore's premier community for QA and testing professionals"
        />

        <div className="prose prose-gray max-w-3xl mx-auto mb-12">
          <p className="text-lg">
            TAQELAH (Test Automation & Quality Engineering Learning and Advancement Hub) is a vibrant
            community of QA professionals, testers, and quality enthusiasts in Singapore. Founded with
            the mission to elevate testing practices and foster collaboration, we bring together
            individuals passionate about software quality.
          </p>
          <p className="text-lg">
            Through regular meetups, workshops, and knowledge-sharing sessions, we create opportunities
            for our members to learn, grow, and advance their careers in quality assurance and testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Target className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                To create a collaborative community where QA professionals can learn, share knowledge,
                and advance the practice of software testing in Singapore and beyond.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Rocket className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>
                To be the leading platform for quality assurance professionals in Southeast Asia,
                driving excellence in software testing and quality engineering.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      <Section className="bg-muted/50">
        <SectionHeader title="What We Offer" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-3" />
              <CardTitle>Regular Meetups</CardTitle>
              <CardDescription>
                Monthly gatherings featuring talks, workshops, and networking opportunities with
                industry experts and peers.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 text-primary mb-3" />
              <CardTitle>Knowledge Sharing</CardTitle>
              <CardDescription>
                Access to curated resources, blog posts, and learning materials to help you stay
                updated with the latest in QA.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Rocket className="h-8 w-8 text-primary mb-3" />
              <CardTitle>Career Growth</CardTitle>
              <CardDescription>
                Connect with potential employers, mentors, and collaborators to advance your career
                in quality assurance.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're a seasoned QA professional or just starting your journey in testing,
            TAQELAH welcomes you. Join us to connect with like-minded individuals and grow together.
          </p>
        </div>
      </Section>
    </>
  )
}
