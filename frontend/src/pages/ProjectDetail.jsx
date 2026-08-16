import { useParams, Link, Navigate } from "react-router-dom";
import { Github, ArrowUpRight, ArrowLeft } from "lucide-react";
import projects from "../data/projects";
import Button from "../components/Button";
import "./ProjectDetail.css";

function DetailBlock({ title, children }) {
  if (!children) return null;
  return (
    <div className="project-detail__block">
      <h2>{title}</h2>
      <div className="project-detail__block-body">{children}</div>
    </div>
  );
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="section project-detail">
      <div className="container">
        <Link to="/projects" className="project-detail__back">
          <ArrowLeft size={15} /> Back to Projects
        </Link>

        <header className="project-detail__header">
          <p className="eyebrow">{project.tagline}</p>
          <h1>{project.title}</h1>

          <ul className="project-detail__tech">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="project-detail__cta">
            {project.githubUrl ? (
              <Button href={project.githubUrl} variant="secondary">
                <Github size={16} /> GitHub
              </Button>
            ) : (
              <Button variant="secondary" disabled>
                <Github size={16} /> GitHub link coming soon
              </Button>
            )}
            {project.liveUrl ? (
              <Button href={project.liveUrl} variant="primary">
                Live Demo <ArrowUpRight size={16} />
              </Button>
            ) : (
              <Button variant="primary" disabled>
                Live demo coming soon
              </Button>
            )}
          </div>
        </header>

        {project.disclaimer && (
          <div className="project-detail__disclaimer">{project.disclaimer}</div>
        )}

        <div className="project-detail__grid">
          <div>
            <DetailBlock title="Overview">
              <p>{project.detailedDescription}</p>
            </DetailBlock>

            <DetailBlock title="Problem">
              <p>{project.problem}</p>
            </DetailBlock>

            <DetailBlock title="Solution">
              <p>{project.solution}</p>
            </DetailBlock>

            <DetailBlock title="Features">
              <ul className="project-detail__list">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Architecture">
              <p>{project.architecture}</p>
            </DetailBlock>

            {project.mlModel && (
              <DetailBlock title="ML Model">
                <ul className="project-detail__list project-detail__list--mono">
                  <li>Algorithm: {project.mlModel.algorithm}</li>
                  <li>n_estimators: {project.mlModel.n_estimators}</li>
                  <li>max_depth: {project.mlModel.max_depth}</li>
                  <li>class_weight: {project.mlModel.class_weight}</li>
                </ul>
              </DetailBlock>
            )}

          </div>

          <aside className="project-detail__sidebar">
            <div className="project-detail__sidebar-card">
              <h3>My Contribution</h3>
              <p>{project.myContribution}</p>
            </div>

            <div className="project-detail__sidebar-card">
              <h3>Screenshots</h3>
              {project.screenshots && project.screenshots.length > 0 ? (
                <div className="project-detail__screenshots">
                  {project.screenshots.map((src, i) => (
                    <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} />
                  ))}
                </div>
              ) : (
                <p className="project-detail__placeholder-note">
                  Add screenshots to{" "}
                  <code>src/assets/projects/</code> and reference them in{" "}
                  <code>src/data/projects.js</code>.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
