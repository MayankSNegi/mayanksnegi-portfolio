import education from "../data/education";
import SectionHeader from "./SectionHeader";
import "./EducationTimeline.css";

export default function EducationTimeline() {
  return (
    <section className="edu section" id="education">
      <div className="container">
        <SectionHeader eyebrow="// education" title="Education" />

        <ul className="edu__timeline">
          {education.map((item) => (
            <li key={item.id} className="edu__item reveal">
              <div className="edu__marker" aria-hidden="true" />

              <div className="edu__card">
                <p className="edu__duration">{item.duration}</p>

                <h3>{item.degree}</h3>

                <p className="edu__institution">{item.institution}</p>

                <p className="edu__score">{item.score}</p>

                {item.marksheet && (
                  <a
                    href={item.marksheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="edu__link"
                  >
                    View Marksheet
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}