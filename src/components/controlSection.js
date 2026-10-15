import { Link } from 'react-router-dom';

export default function ControlSection() {
  return (
    <section id="work" className="t-wrap t-control">
      <h2 className="t-section-head">AI control</h2>
      <p className="t-focus-statement">October 2026 Update: Shifting focus to AI Safety</p>
      <p className="t-update-summary">I've stepped away from fintech to focus on AI safety research.</p>
      <Link className="t-update-link" to="/updates/october-2026">Read update →</Link>
      <article className="t-current-work">
        <div className="t-work-title"><h3>Current work</h3><span className="t-wip-label">Work in progress</span></div>
        <h4>Contextual Discontinuity and Long-Horizon Adversarial Coordination</h4>
        <p>A research proposal exploring whether periodic context resets can disrupt an AI agent's multi-step attacks while preserving its ability to complete legitimate work, and how different handoff policies affect that tradeoff.</p>
        <a className="t-proposal-link" href={`${process.env.PUBLIC_URL}/research/contextual-discontinuity-proposal-wip.pdf`} target="_blank" rel="noopener noreferrer">Read draft proposal (PDF) →</a>
      </article>
    </section>
  );
}
