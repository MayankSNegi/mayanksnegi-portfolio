import experience from "../data/experience";
import "./ExperienceTimeline.css";

export default function ExperienceTimeline() {
  return (
    <ul className="exp__timeline">
      {experience.map((item) => (
        <li key={item.id} className="exp__item reveal">
          <div className="exp__marker" aria-hidden="true" />

          <div
            className={`exp__card ${
              item.isPlaceholder ? "exp__card--placeholder" : ""
            }`}
          >
            <p className="exp__duration">
              {item.startDate} &ndash; {item.endDate}
            </p>

            <h3>{item.title}</h3>

            <p className="exp__company">
              {item.company} {item.location && `\u00b7 ${item.location}`}
            </p>

            {item.certificate && (
              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="exp__certificate"
              >
                View Internship Certificate
              </a>
            )}

            <ul className="exp__description">
              {item.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>

            {item.isPlaceholder && (
              <p className="exp__placeholder-note">
                Update this entry in <code>src/data/experience.js</code>
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}