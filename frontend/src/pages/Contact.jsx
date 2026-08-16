import SectionHeader from "../components/SectionHeader";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import siteConfig from "../data/siteConfig";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section">
      <div className="container contact-page__grid">
        <div>
          <SectionHeader
            eyebrow="// contact"
            title="Let's Connect"
            description="Have a project, opportunity, or question? Feel free to get in touch."
          />
          <ContactForm />
        </div>

        <aside className="contact-page__aside">
          <div className="contact-page__aside-card">
            <h3>Find me elsewhere</h3>
            <p className="text-secondary">
              Prefer another channel? Reach out via GitHub or LinkedIn, or send an email
              directly.
            </p>
            <div className="contact-page__socials">
              <SocialLinks />
            </div>
            {siteConfig.contactEmail && (
              <p className="contact-page__email">{siteConfig.contactEmail}</p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
