import achievements from "../data/achievements";
import SectionHeader from "../components/SectionHeader";
import AchievementSection from "../components/AchievementSection";

export default function Achievements() {
  const hackathons = achievements.filter((a) => a.category === "Hackathon");
  const research = achievements.filter((a) => a.category === "Research");
  const contests = achievements.filter((a) => a.category === "Contest");
  const volunteering = achievements.filter((a) => a.category === "Volunteering");

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="// achievements"
          title="Achievements"
          description="Hackathon wins, research publications, contest wins, and community involvement."
        />

        <AchievementSection title="Hackathon Wins" items={hackathons} />
        <AchievementSection title="Research Publications" items={research} />
        <AchievementSection title="Contest Wins" items={contests} />
        <AchievementSection title="Community & Volunteering" items={volunteering} />
      </div>
    </section>
  );
}
