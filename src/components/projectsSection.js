import { Link } from 'react-router-dom';
import { projects_array } from '../projects_array.ts';

export default function ProjectsSection() {
  return (
    <section id="projects-section" className="t-wrap t-background">
      <h2 className="t-section-head">previously built</h2>
      <p className="t-section-intro">My background in startups, AI engineering, and shipping software.</p>

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

            </div>
            <div className="t-arrow" aria-hidden="true">→</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
