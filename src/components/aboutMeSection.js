import { useEffect, useState } from 'react'

export default function AboutMeSection() {
  const [lightboxPhoto, setLightboxPhoto] = useState(null)

  useEffect(() => {
    if (!lightboxPhoto) return
    const onKey = (e) => { if (e.key === 'Escape') setLightboxPhoto(null) }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightboxPhoto])

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
      <h2 className="t-section-head">outside of work</h2>

      <p className="muted">
        Outside of SWE, ML, and AI, I do other cool stuff, too! Last summer, I rode a motorcycle 200 miles around Vietnam. I'm a proud Eagle Scout. I've played euphonium at Carnegie Hall in NYC and trombone at the Monterey Jazz Festival. I also played D1 rugby at UCSB, and in 2024 my grandpa and I flew a single-engine plane down to Mexico! I enjoy fishing, basketball, and piano. Thanks for checking out my site!
      </p>

      <div className="t-filmstrip" style={{ '--frame-count': photos.length }}>
        <div className="t-filmstrip-track" aria-hidden="false">
          {reel.map((p, i) => (
            <button
              type="button"
              key={`${p.src}-${i}`}
              className="t-filmstrip-frame"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${p.src})` }}
              aria-label={`Expand ${p.alt}`}
              onClick={() => setLightboxPhoto(p)}
            />
          ))}
        </div>
      </div>

      {lightboxPhoto && (
        <div
          className="t-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxPhoto.alt} full size`}
          onClick={() => setLightboxPhoto(null)}
        >
          <button
            type="button"
            className="t-lightbox-close"
            onClick={(e) => { e.stopPropagation(); setLightboxPhoto(null) }}
            autoFocus
          >close</button>
          <img
            className="t-lightbox-img"
            src={`${process.env.PUBLIC_URL}/${lightboxPhoto.src}`}
            alt={lightboxPhoto.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
