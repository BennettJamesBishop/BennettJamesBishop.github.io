export default function AboutMeSection() {
  const photos = [
    { src: 'aboutMe/tuna_pic.jpg', alt: 'Fishing trip' },
    { src: 'aboutMe/rugby_pic.jpg', alt: 'UCSB rugby' },
    { src: 'aboutMe/pyramids_pic.JPG', alt: 'Pyramids of Giza' },
    { src: 'aboutMe/vietnam_pic.JPG', alt: 'Hà Giang Loop, Vietnam' },
  ]

  return (
    <section id="about" className="t-wrap t-about">
      <div className="t-section-head"><span className="n">01</span> about</div>

      <p>
        I build AI agents and the tooling that keeps them honest. Currently at an <span className="highlight">FP&amp;A startup</span> in San Francisco, where I ship new agents, maintain evals, and build the add-ins that get our agents in front of actual users.
      </p>
      <p>
        Before that I was at the <span className="highlight">UCSB Big Bee Lab</span>, where I built a multimodal entomology chatbot over thousands of pages of text, image, and tabular data. At the <span className="highlight">UCSB Alumni Association</span>, I automated hundreds of hours of manual data processing. I got my start in 2022 at <span className="highlight">Amotions AI</span>, migrating their no-code platform to a modern web stack and helping them land their first client.
      </p>
      <p className="muted">
        Apart from studying SWE, ML, and AI, I do other cool stuff, too! This summer, I rode a motorcycle 200 miles around Vietnam. I'm a proud Eagle Scout. I've played Trombone at the Monterey Jazz Festival and played Euphonium at Carnegie Hall. I played D1 Rugby at UCSB, and last year my grandpa and I flew a single engine plane down to Mexico! I enjoy fishing, basketball, and piano. Thanks for checking out my site!
      </p>

      <div className="t-filmstrip">
        {photos.map((p) => (
          <div
            key={p.src}
            className="t-filmstrip-frame"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${p.src})` }}
            role="img"
            aria-label={p.alt}
          />
        ))}
      </div>
    </section>
  )
}
