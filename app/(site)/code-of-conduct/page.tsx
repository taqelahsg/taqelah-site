import { Section, SectionHeader } from '@/components/shared/section'

export default function CodeOfConductPage() {
  return (
    <Section className="pt-8">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="Code of Conduct"
          description="Our commitment to creating a welcoming and inclusive community"
        />

        <div className="prose prose-gray max-w-none">
          <h2>Our Pledge</h2>
          <p>
            TAQELAH is dedicated to providing a harassment-free experience for everyone, regardless of
            age, body size, disability, ethnicity, gender identity and expression, level of experience,
            nationality, personal appearance, race, religion, or sexual identity and orientation.
          </p>

          <h2>Our Standards</h2>
          <p>Examples of behavior that contributes to creating a positive environment include:</p>
          <ul>
            <li>Using welcoming and inclusive language</li>
            <li>Being respectful of differing viewpoints and experiences</li>
            <li>Gracefully accepting constructive criticism</li>
            <li>Focusing on what is best for the community</li>
            <li>Showing empathy towards other community members</li>
          </ul>

          <p>Examples of unacceptable behavior include:</p>
          <ul>
            <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li>
            <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
            <li>Public or private harassment</li>
            <li>Publishing others' private information without explicit permission</li>
            <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
          </ul>

          <h2>Our Responsibilities</h2>
          <p>
            Community organizers are responsible for clarifying the standards of acceptable behavior
            and are expected to take appropriate and fair corrective action in response to any instances
            of unacceptable behavior.
          </p>
          <p>
            Organizers have the right and responsibility to remove, edit, or reject comments, commits,
            code, wiki edits, issues, and other contributions that are not aligned with this Code of
            Conduct, or to ban temporarily or permanently any contributor for behaviors that they deem
            inappropriate, threatening, offensive, or harmful.
          </p>

          <h2>Scope</h2>
          <p>
            This Code of Conduct applies to all TAQELAH spaces, including but not limited to meetups,
            workshops, social media channels, and online forums. It also applies when an individual is
            representing the community in public spaces.
          </p>

          <h2>Enforcement</h2>
          <p>
            Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by
            contacting the community organizers at hello@taqelah.com. All complaints will be reviewed
            and investigated and will result in a response that is deemed necessary and appropriate to
            the circumstances.
          </p>
          <p>
            The community team is obligated to maintain confidentiality with regard to the reporter of
            an incident. Further details of specific enforcement policies may be posted separately.
          </p>

          <h2>Attribution</h2>
          <p>
            This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at{' '}
            <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html">
              https://www.contributor-covenant.org/version/1/4/code-of-conduct.html
            </a>
          </p>
        </div>
      </div>
    </Section>
  )
}
