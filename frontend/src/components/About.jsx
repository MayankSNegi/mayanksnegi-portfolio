import SectionHeader from "./SectionHeader";
import "./About.css";

const HIGHLIGHTS = [
  { value: "B.Tech CSE", label: "2023-2027" },
  { value: "8.8", label: "CGPA" },
  { value: "2", label: "Internships" },
  { value: "2", label: "Research Publications" },
];

const INTERESTS = [
  "Python",
  "Backend Development",
  "FastAPI",
  "REST APIs",
  "AI/ML",
  "Generative AI",
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div>
          <SectionHeader eyebrow="// about" title="About Me" />
          <p className="about__text">
            I am a Computer Science Engineering student at Manav Rachna University with an
            interest in software development, backend engineering, artificial intelligence,
            and machine learning. I enjoy turning ideas into practical applications and
            building solutions that combine clean user experiences with reliable backend
            systems.
          </p>

          <ul className="about__interests">
            {INTERESTS.map((interest) => (
              <li key={interest} className="about__interest-chip">
                {interest}
              </li>
            ))}
          </ul>
        </div>

        <ul className="about__highlights">
          {HIGHLIGHTS.map((item) => (
            <li key={item.label} className="about__highlight">
              <span className="about__highlight-value">{item.value}</span>
              <span className="about__highlight-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
