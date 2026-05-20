export default function HeroSection() {
  return (
    <header className="t-hero">
      <div className="t-wrap t-hero-row">
        <div>
          <h1>
            Bennett James<br />Bishop<span className="t-cursor" aria-hidden="true"></span>
          </h1>
          <div className="t-meta">
            <div className="t-meta-row"><span className="k">role</span><span className="v">CEO / AI Engineer</span></div>
            <div className="t-meta-row"><span className="k">company</span><span className="v">stealth</span></div>
            <div className="t-meta-row"><span className="k">prev</span><span className="v">Payflow (YC S20) · UCSB Big Bee Lab · Amotions AI</span></div>
            <div className="t-meta-row"><span className="k">stack</span><span className="v">Python · TypeScript · LangChain · Postgres · React</span></div>
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
