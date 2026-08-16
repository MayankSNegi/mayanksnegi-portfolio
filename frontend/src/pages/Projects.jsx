import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="// projects"
          title="Projects"
          description="A selection of things I've built — full-stack apps, ML systems, and backend tools."
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
