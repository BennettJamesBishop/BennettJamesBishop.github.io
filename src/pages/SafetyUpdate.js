import { HashLink } from 'react-router-hash-link';

function SourceLink({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default function SafetyUpdate() {
  return (
    <main className="t-wrap t-update-page">
      <nav className="t-crumb" aria-label="Breadcrumb">
        <HashLink to="/" className="t-crumb-home">← Home</HashLink>
        <span className="sep">/</span>
        <HashLink to="/#work">updates</HashLink>
        <span className="sep">/</span>
        <span className="here" aria-current="page">october-2026</span>
      </nav>
      <h1>October 2026 Update: Shifting focus to AI Safety</h1>
      <div className="t-interest-copy">
        <p>I've stepped away from fintech to focus on AI safety research. I’m motivated by a passion for protecting those around me and for helping the human race endure. I am also, conveniently, very entertained by the philosophical and technical problems which arise from AI Safety.</p>
        <p>My main focus is <SourceLink href="https://www.redwoodresearch.org/research/ai-control">AI control</SourceLink>. I worry that sufficiently advanced systems may develop incentives toward self-preservation (article on this coming soon), so I see control protocols as a practical way to reduce risk while deeper alignment questions remain unresolved.</p>
        <p>Some of my hypotheses / areas of interest:</p>

        <section className="t-update-topic">
          <h2>Context-Based Control Protocols</h2>
          <p>I believe that protocols involving limiting, or resetting, an agent’s context might be promising. Specifically, exploiting attack coordination challenges via context resets might be a promising safety mechanism. I’ve got a <SourceLink href={`${process.env.PUBLIC_URL}/research/contextual-discontinuity-proposal-wip.pdf`}>research proposal (WIP) here</SourceLink>.</p>
          <div className="t-update-research">
            <h3>What does current research say?</h3>
            <p><SourceLink href="https://arxiv.org/abs/2512.02157">Factor(T,U)</SourceLink> found that decomposing tasks into isolated subtasks improved safety primarily due to simplicity benefits for monitors in the APPS coding setting, but did not establish that decomposition itself made attacks harder to execute in that setting. Forthcoming work by Sandoval and Lucassen found no evidence for attack coordination challenges in <SourceLink href="https://www.bash-arena.com/">BashArena</SourceLink>. Whether forced context loss can specifically disrupt long-horizon attack coordination, while preserving legitimate task performance, remains an open research question.</p>
          </div>
        </section>

        <section className="t-update-topic">
          <h2>Making Untrusted Monitoring Work</h2>
          <p>I predict that in order to effectively control the most intelligent attackers, we will need equally advanced monitors. Specifically, I believe that less capable “trusted” monitors won’t do the trick. This brings up a number of problems around attacker/monitor collusion, where I believe a majority of the work is to be done. Nevertheless, I believe those problems are worth solving: untrusted monitoring or bust.</p>
          <div className="t-update-research">
            <h3>What does current research say?</h3>
            <p><SourceLink href="https://arxiv.org/abs/2312.06942">AI Control</SourceLink> demonstrated that untrusted monitoring can improve safety when combined with anti-collusion defenses. <SourceLink href="https://arxiv.org/abs/2512.15688">BashArena</SourceLink> and <SourceLink href="https://arxiv.org/abs/2604.15384">LinuxArena</SourceLink> demonstrate the difficulty of monitoring sabotage in increasingly complex environments, with LinuxArena providing evidence that stronger monitors can substantially outperform weaker trusted monitors. However, as mentioned above, greater monitoring capability introduces additional risks of collusion. Buck Shlegeris wrote a great <SourceLink href="https://blog.redwoodresearch.org/p/how-to-prevent-collusion-when-using">article</SourceLink> exploring various potential monitor/attacker collusion methods and defenses.</p>
          </div>
        </section>

        <section className="t-update-topic">
          <h2>Identifying Model Preferences/Behaviors After Their CoT Signature Disappears</h2>
          <p className="t-update-note"><em>Note: I don’t have a unique hypothesis here, I just find this problem interesting. I also believe that the biggest breakthroughs in this line of research will come from advancements in mechanistic interpretability, so this will probably remain a hobby topic for me, rather than a central research focus.</em></p>
          <p>Previous <SourceLink href="https://arxiv.org/abs/2503.11926">research</SourceLink> has shown that training models to stop revealing reward hacking in their CoT doesn't necessarily stop them from reward hacking. Related research has demonstrated that models can learn to <SourceLink href="https://arxiv.org/abs/2506.01926">encode their reasoning</SourceLink>, and that even <SourceLink href="https://arxiv.org/abs/2511.11584">training on outputs alone</SourceLink> can make their CoTs less revealing. Anthropic has also <SourceLink href="https://alignment.anthropic.com/2025/alignment-faking-mitigations/">explored this problem with alignment faking</SourceLink>, finding that models can sometimes stop expressing alignment-faking reasoning while still behaving differently in situations they believe will affect training. I'm interested in developing methods to identify underlying preferences/behaviors that may persist even after evidence of them disappears from a model's CoT reasoning.</p>
          <div className="t-update-research">
            <h3>What does current research say?</h3>
            <p>As a result of papers like those mentioned above, researchers at frontier AI labs have emphasized the importance of preserving chain-of-thought (CoT) monitorability, and even prioritize <SourceLink href="https://alignment.openai.com/monitorability-evals/">avoiding strong optimization pressure on CoT</SourceLink>. However, this issue is probably still worth exploring. Recent <SourceLink href="https://arxiv.org/abs/2607.13346">mechanistic interpretability research</SourceLink> has identified internal signals associated with alignment faking, but their reliability across models and causal significance remain uncertain.</p>
          </div>
        </section>
        <p className="t-update-closing">These are my current interests and intuitions, and I expect them to evolve as I learn more and test them. For now, I’m working toward concrete experiments and documenting my progress in my <HashLink to="/journal">research journal</HashLink>. If you’re working on related questions, or think I’m missing something important, I’d love to <SourceLink href="https://www.linkedin.com/in/bennett-bishop">hear from you</SourceLink>.</p>
      </div>
    </main>
  );
}
