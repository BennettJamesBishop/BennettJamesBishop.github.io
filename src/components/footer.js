export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="t-footer">
      <div className="t-wrap t-footer-inner">
        <div className="left">end of stream · © {year}</div>
        <div>
          <a href="https://github.com/BennettJamesBishop" target="_blank" rel="noopener noreferrer">github</a>
          {' · '}
          <a href="https://www.linkedin.com/in/bennett-bishop" target="_blank" rel="noopener noreferrer">linkedin</a>
          {' · '}
          <a href="mailto:bennettjamesbishop@gmail.com">email</a>
        </div>
      </div>
    </footer>
  )
}
