export default function AboutMeSection() {
  const photos = [
    { src: 'aboutMe/tuna_pic.jpg', alt: 'Fishing trip' },
    { src: 'aboutMe/rugby_pic.jpg', alt: 'UCSB rugby' },
    { src: 'aboutMe/pyramids_pic.JPG', alt: 'Pyramids of Giza' },
    { src: 'aboutMe/IMG_1623.JPG', alt: 'Photo' },
    { src: 'aboutMe/IMG_1466.jpg', alt: 'Photo' },
    { src: 'aboutMe/IMG_2497.PNG', alt: 'Photo' },
    { src: 'aboutMe/IMG_0572.JPG', alt: 'Photo' },
    { src: 'aboutMe/IMG_2789.JPG', alt: 'Photo' },
    { src: 'aboutMe/IMG_1127.jpg', alt: 'Photo' },
    { src: 'aboutMe/IMG_0717.JPG', alt: 'Photo' },
    { src: 'aboutMe/IMG_1975.jpg', alt: 'Photo' },
    { src: 'aboutMe/vietnam_pic.JPG', alt: 'Hà Giang Loop, Vietnam' },
  ]

  const reel = [...photos, ...photos]

  return (
    <section id="about" className="t-wrap t-about">
      <div className="t-section-head"><span className="n">01</span> about</div>

      <p>
        Hi, I'm Bennett! Most recently, I was an AI Engineer in San Francisco at <span className="highlight">Payflow (YC S20)</span> building AI agents for FP&amp;A, where I built new agents, maintained evals, and shipped various add-ins to make our agents more accessible. I'm a recent UCSB graduate who previously worked at the <span className="highlight">UCSB "Big Bee" Lab</span>, where I built a multimodal entomology chatbot by indexing their massive database of text, image, and tabular data. At the <span className="highlight">UCSB Alumni Association</span>, I automated hundreds of hours of manual data processing, enabling time for more strategic initiatives. I also built and deployed a full-stack, AI-assisted document sharing app called <span className="highlight">Brainsink</span>. Before then, I got my start in 2022 helping <span className="highlight">Amotions AI</span> migrate their no-code platform to a modern web stack and secure their first client. I'm currently co-founding a company, we'll be out of stealth in late Summer 2026... stay tuned!
      </p>
      <p className="muted">
        Apart from studying SWE, ML, and AI, I do other cool stuff, too! This summer, I rode a motorcycle 200 miles around Vietnam. I'm a proud Eagle Scout. I've played Trombone at the Monterey Jazz Festival and played Euphonium at Carnegie Hall. I played D1 Rugby at UCSB, and last year my grandpa and I flew a single engine plane down to Mexico! I enjoy fishing, basketball, and piano. Thanks for checking out my site!
      </p>

      <div className="t-filmstrip" style={{ '--frame-count': photos.length }}>
        <div className="t-filmstrip-track" aria-hidden="false">
          {reel.map((p, i) => (
            <div
              key={`${p.src}-${i}`}
              className="t-filmstrip-frame"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${p.src})` }}
              role="img"
              aria-label={p.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
