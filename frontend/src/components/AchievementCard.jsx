import { FileText, ExternalLink } from "lucide-react";
import "./AchievementCard.css";

export default function AchievementCard({ item }) {
  return (
    <article className="achievement-card reveal">
      <h3>{item.title}</h3>

      <ul className="achievement-card__meta">
        {item.organizer && <li>{item.organizer}</li>}
        {item.conference && <li>{item.conference}</li>}
        {item.date && <li>{item.date}</li>}
        {item.year && !item.date && <li>{item.year}</li>}
        {item.scale && <li>{item.scale}</li>}
      </ul>

      {item.status && (
        <p className="achievement-card__status">{item.status}</p>
      )}

      {item.paperId && (
        <p className="achievement-card__paper-id">
          Paper ID: {item.paperId}
        </p>
      )}

      {item.abstract && (
        <p className="achievement-card__desc">{item.abstract}</p>
      )}

      {item.description && !item.abstract && (
        <p className="achievement-card__desc">{item.description}</p>
      )}

      {(item.paperLink || item.certificate || item.link) && (
        <div className="achievement-card__links">
          {item.paperLink && (
            <a
              href={
                item.paperLink.startsWith("http")
                  ? item.paperLink
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-card__link"
            >
              <FileText size={14} /> Paper Link
            </a>
          )}

          {item.certificate && (
            <a
              href={item.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-card__link"
            >
              <FileText size={14} /> Certificate
            </a>
          )}

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-card__link"
            >
              <ExternalLink size={14} /> LinkedIn Post
            </a>
          )}
        </div>
      )}
    </article>
  );
}