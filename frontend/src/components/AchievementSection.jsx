import AchievementCard from "./AchievementCard";
import "./AchievementSection.css";

export default function AchievementSection({ title, items }) {
  if (!items.length) return null;

  return (
    <div className="achievement-section">
      <h3 className="achievement-section__title">{title}</h3>
      <div className="achievement-section__grid">
        {items.map((item, idx) => (
          <AchievementCard key={`${item.title}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
}
