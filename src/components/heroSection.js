export default function HeroSection() {
  return (
    <header className="t-hero">
      <div className="t-wrap t-hero-row">
        <div>
          <h1>
            Bennett James<br />Bishop<span className="t-cursor" aria-hidden="true"></span>
          </h1>
          <div className="t-meta">
            <div className="t-meta-row"><span className="k">focus</span><span className="v green">AI control &amp; alignment</span></div>
            <div className="t-meta-row"><span className="k">role</span><span className="v">Independent Researcher</span></div>
            <div className="t-meta-row"><span className="k">prev</span><span className="v">Northstar · Payflow (YC S20) · UCSB Big Bee Lab</span></div>
          </div>
          <div className="t-hero-links">
            <a href={`${process.env.PUBLIC_URL}/BennettBishopResume.pdf`} download="BennettBishopResume.pdf">download cv</a>
            <a href="https://github.com/BennettJamesBishop" target="_blank" rel="noopener noreferrer">github</a>
            <a href="https://www.linkedin.com/in/bennett-bishop" target="_blank" rel="noopener noreferrer">linkedin</a>
            <a href="mailto:bennettjamesbishop@gmail.com">email</a>
          </div>
        </div>
        <div
          className="t-portrait"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/self_photo.jpg)` }}
          aria-label="Portrait of Bennett James Bishop"
          role="img"
        />
      </div>
    </header>
  )
}
