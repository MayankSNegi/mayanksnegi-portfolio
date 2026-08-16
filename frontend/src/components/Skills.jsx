import skills from "../data/skills";
import SectionHeader from "./SectionHeader";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <SectionHeader eyebrow="// skills" title="Skills & Technologies" />

        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skills__group reveal">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
