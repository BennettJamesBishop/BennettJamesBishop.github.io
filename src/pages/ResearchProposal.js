import { HashLink } from 'react-router-hash-link';
import sections from '../researchProposal.json';

const references = [
  ['https://arxiv.org/abs/2504.10374', 'Bhatt et al., “Ctrl-Z: Controlling AI Agents via Resampling” (BashBench).', 'Discussion of multi-step attacks in BashBench.'],
  ['https://arxiv.org/abs/2512.02157', 'Sandoval and Rushing, “Factor(T,U): Factored Cognition Strengthens Monitoring of Untrusted AI” (2025).', 'Monitoring results and §4.2.'],
  ['https://arxiv.org/abs/2604.15384', 'LinuxArena.'],
];

function Paragraph({ text }) {
  return <p>{text.split(/(malicious\.1|results\.2|We plan to use LinuxArena)/).map((part, index) => {
    const citation = part === 'We plan to use LinuxArena' ? [part, part, '3'] : part.match(/^(malicious\.|results\.)([12])$/);
    return citation ? <span key={index}>{citation[1]}<sup><HashLink to={`/research/contextual-discontinuity#reference-${citation[2]}`} aria-label={`Reference ${citation[2]}`}>{citation[2]}</HashLink></sup></span> : part;
  })}</p>;
}

export default function ResearchProposal() {
  return (
    <main className="t-wrap t-update-page t-proposal-page">
      <nav className="t-crumb" aria-label="Breadcrumb">
        <HashLink to="/" className="t-crumb-home">← Home</HashLink>
        <span className="sep">/</span>
        <HashLink to="/#work">work</HashLink>
        <span className="sep">/</span>
        <span className="here" aria-current="page">research proposal</span>
      </nav>
      <article>
        <h1>Contextual Discontinuity and Long-Horizon Adversarial Coordination</h1>
        <p className="t-proposal-meta">Research proposal · Bennett Bishop · <time dateTime="2026-10-09">9 October 2026</time> · Work in progress</p>
        <div className="t-interest-copy">
          {sections.map(section => (
            <section className="t-update-topic" id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              <Paragraph text={section.paragraphs[0]} />
              {section.conditions && (
                <div>
                  <h3 className="t-proposal-policies-heading">Handoff policies</h3>
                  <dl className="t-proposal-conditions">
                  {section.conditions.map(([condition, information]) => (
                    <div key={condition}><dt>{condition}:</dt>{' '}<dd>{information}</dd></div>
                  ))}
                  </dl>
                </div>
              )}
              {section.paragraphs.slice(1).map((text, index) => <Paragraph text={text} key={index} />)}
            </section>
          ))}
          <section className="t-update-topic">
            <h2>References</h2>
            <ol className="t-proposal-references">
              {references.map(([href, title, note], index) => (
                <li id={`reference-${index + 1}`} key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer">{title}</a>{note && ` ${note}`}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </main>
  );
}
