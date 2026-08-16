import SectionHeader from "../components/SectionHeader";
import ExperienceTimeline from "../components/ExperienceTimeline";

export default function Experience() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="// experience"
          title="Experience"
          description="Internships and hands-on work building real software."
        />
        <ExperienceTimeline />
      </div>
    </section>
  );
}
