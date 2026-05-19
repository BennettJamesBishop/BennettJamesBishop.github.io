import { Link } from 'react-router-dom';
import { projects_array } from '../projects_array.ts';

export default function ProjectsSection() {
  return (
    <section id="projects-section" className="t-wrap">
      <div className="t-section-head"><span className="n">02</span> selected work</div>

      <div className="t-feed">
        {projects_array.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="t-feed-row"
          >
            <div className="t-date">{project.date}</div>
            <div>
              <h3>{project.title}</h3>
              <p className="t-feed-desc">{project.subtitle}</p>
              {project.metric && <div className="t-metric">{project.metric}</div>}
              {project.tools.length > 0 && (
                <div className="t-tags">
                  {project.tools.map((tool) => (
                    <span className="t-tag" key={tool.name}>{tool.name}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="t-arrow" aria-hidden="true">→</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
