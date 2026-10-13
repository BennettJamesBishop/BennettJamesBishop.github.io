export default function ControlSection() {
  return (
    <section id="work" className="t-wrap t-control">
      <h2 className="t-section-head">AI control</h2>
      <p className="t-focus-statement">September 2026 Update: Shifting focus to AI Safety</p>
      <div className="t-interest-copy">
        <p>I've stepped away from fintech to focus on AI safety research. I'm motivated by protecting those around me and helping humanity endure, and I find the field's philosophical and technical problems deeply engaging.</p>
        <p>My main focus is <strong>AI control</strong>: keeping powerful AI systems safe even when we can't rely on their alignment. I worry that sufficiently advanced systems may develop incentives toward self-preservation, so I see control protocols as a practical way to reduce risk while deeper alignment questions remain unresolved.</p>
        <p>Within control, I'm interested in the following issues:</p>
        <ul>
          <li>Making untrusted monitoring work: I prefer untrusted (intelligent, but not necessarily aligned) monitors vs trusted(less intelligent, but benevolent), because I believe we want the most intelligent model to help defend against other intelligent models. This brings up a number of issues around colluding. I'll post a paper about my current understanding of the issue, and where I think we can go with it, soon.</li>
          <li>Forced Factor Cognition: I believe that forced factor cognition control protocols are under explored and might be promising. More to come on this soon.</li>
          <li>Recognizing Alignment Faking after it’s been trained out of CoT: The simplest way to detect alignment faking in models is by examining it’s Chain of Thought (CoT). Unfortunately, Anthropic has <a href="https://alignment.anthropic.com/2025/alignment-faking-mitigations" target="_blank" rel="noopener noreferrer">already discovered</a> that trying to expose the CoT to the reward function does not successfully align the model, but instead teaches it to hide its mis-alignment from the CoT. This is an interesting problem to me - and may ultimately only be solved by advanced mechanistic interpreitability. More to come.</li>
        </ul>
      </div>
      <article className="t-current-work">
        <div className="t-work-title"><h3>Current work</h3><span className="t-draft-label">content placeholder</span></div>
        <h4>[Your AI control document title]</h4>
        <p>[A short summary of the question you're investigating, your approach, and where the work stands.]</p>
        <span className="t-placeholder t-document-pending">Document link to add</span>
      </article>
    </section>
  );
}
