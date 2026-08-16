import { Github, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <div className="project-card__image">
        <span>{project.title}</span>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__desc">{project.shortDescription}</p>

        <ul className="project-card__tags">
          {project.technologies.slice(0, 5).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <Link to={`/projects/${project.id}`} className="project-card__link">
            View Case Study <ArrowRight size={15} />
          </Link>

          <div className="project-card__icons">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="project-card__icon-btn"
              >
                <Github size={16} />
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="project-card__icon-btn"
              >
                <ArrowUpRight size={16} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
