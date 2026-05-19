import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects_array } from '../projects_array.ts';

function hostnameOf(url) {
  try { return new URL(url).hostname; } catch { return null; }
}

function sectionNumberer() {
  let n = 0;
  return () => String(++n).padStart(2, '0');
}

export default function Projects() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const index = projects_array.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects_array[index] : null;

  useEffect(() => {
    if (!project) navigate('/', { replace: true });
  }, [project, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLightboxSrc(null);
  }, [slug]);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e) => { if (e.key === 'Escape') setLightboxSrc(null); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxSrc]);

  if (!project) return null;

  const prev = index > 0 ? projects_array[index - 1] : null;
  const next = index < projects_array.length - 1 ? projects_array[index + 1] : null;
  const num = sectionNumberer();

  const demoIsPdf = project.demo && /\.pdf(\?|$|#)/i.test(project.demo.url);

  return (
    <main className="t-wrap">
      <nav className="t-crumb" aria-label="Breadcrumb">
        <Link to="/">~</Link>
        <span className="sep">/</span>
        <Link to="/#projects-section">projects</Link>
        <span className="sep">/</span>
        <span className="here">{project.slug}</span>
      </nav>

      <header className="t-project-head">
        <h1>{project.title}</h1>
        <p className="t-subtitle">{project.subtitle}</p>
        <div className="t-project-meta">
          <div className="field"><span className="k">date</span><span className="v">{project.date}</span></div>
          <span className="sep-dot">·</span>
          <div className="field"><span className="k">type</span><span className="v">{project.type}</span></div>
          {project.metric && (
            <>
              <span className="sep-dot">·</span>
              <div className="field"><span className="k">status</span><span className="v green">shipped</span></div>
            </>
          )}
        </div>
      </header>

      {project.images.length > 0 && (
        <button
          type="button"
          className="t-img-expandable"
          onClick={() => setLightboxSrc(project.images[0].url)}
          aria-label={`Expand ${project.title} screenshot`}
        >
          <div
            className="t-hero-img"
            style={{ backgroundImage: `url(${project.images[0].url})` }}
            role="img"
            aria-label={`${project.title} screenshot`}
          />
          <span className="t-img-hint" aria-hidden="true">[ ⤢ expand ]</span>
        </button>
      )}

      {project.images.length > 1 && (
        <div className="t-gallery">
          {project.images.slice(1).map((img, i) => (
            <button
              type="button"
              key={i}
              className="t-img-expandable"
              onClick={() => setLightboxSrc(img.url)}
              aria-label={`Expand ${project.title} additional screenshot ${i + 2}`}
            >
              <div
                className="t-gallery-frame"
                style={{ backgroundImage: `url(${img.url})` }}
                role="img"
                aria-label={`${project.title} additional screenshot ${i + 2}`}
              />
              <span className="t-img-hint" aria-hidden="true">[ ⤢ ]</span>
            </button>
          ))}
        </div>
      )}

      {project.objective && (
        <>
          <div className="t-section-head"><span className="n">{num()}</span> objective</div>
          <div className="t-prose">
            <p>{project.objective}</p>
          </div>
        </>
      )}

      {project.results && project.results.length > 0 && (
        <>
          <div className="t-section-head"><span className="n">{num()}</span> results</div>
          <div className="t-prose">
            {project.metric && <div className="t-callout">{project.metric}</div>}
            {project.results.map((r, i) => (
              <p key={i}>{r.paragraph}</p>
            ))}
          </div>
        </>
      )}

      {project.tools.length > 0 && (
        <>
          <div className="t-section-head"><span className="n">{num()}</span> stack</div>
          <div className="t-stack">
            {project.tools.map((t) => (
              <span className="chip" key={t.name}>{t.name}</span>
            ))}
          </div>
        </>
      )}

      {project.demo && (
        <>
          <div className="t-section-head"><span className="n">{num()}</span> demo</div>
          {demoIsPdf ? (
            <div className="t-demo-card">
              <div className="t-demo-name">{project.demo.title}</div>
              <a className="t-demo-go" href={project.demo.url} target="_blank" rel="noopener noreferrer">open pdf →</a>
            </div>
          ) : (
            <iframe
              className="t-demo-iframe"
              title={project.demo.title}
              src={project.demo.url}
              loading="lazy"
            />
          )}
        </>
      )}

      {project.links.length > 0 && (
        <>
          <div className="t-section-head"><span className="n">{num()}</span> links</div>
          <div className="t-links-list">
            {project.links.map((link) => {
              const host = hostnameOf(link.link);
              return (
                <a key={link.link} href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.name}
                  {host && <span className="host">{host}</span>}
                </a>
              );
            })}
          </div>
        </>
      )}

      <nav className="t-pager" aria-label="Project navigation">
        {prev ? (
          <Link className="prev" to={`/projects/${prev.slug}`}>
            <div className="t-pager-label">prev</div>
            <div className="t-pager-title">{prev.title}</div>
          </Link>
        ) : <div className="placeholder" />}
        {next ? (
          <Link className="next" to={`/projects/${next.slug}`}>
            <div className="t-pager-label">next</div>
            <div className="t-pager-title">{next.title}</div>
          </Link>
        ) : <div className="placeholder" />}
      </nav>

      <div className="t-back">
        <Link to="/#projects-section">back to projects</Link>
      </div>

      {lightboxSrc && (
        <div
          className="t-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} screenshot full size`}
          onClick={() => setLightboxSrc(null)}
        >
          <button
            type="button"
            className="t-lightbox-close"
            onClick={(e) => { e.stopPropagation(); setLightboxSrc(null); }}
            autoFocus
          >close</button>
          <img
            className="t-lightbox-img"
            src={lightboxSrc}
            alt={`${project.title} screenshot`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  )
}
