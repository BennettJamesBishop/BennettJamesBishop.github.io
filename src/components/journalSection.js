import { HashLink } from 'react-router-hash-link';
import journal from '../journal.json';

export default function JournalSection() {
  const latest = journal.entries[0];
  const preview = latest.paragraphs[0].split(/(?<=\.)\s/)[0].replace(/[.\s]+$/, '') + '...';
  return (
    <section id="journal" className="t-wrap t-journal">
      <h2 className="t-section-head">learning in public</h2>
      <div className="t-journal-heading">
        <h3>AI safety learning journal</h3>
        <HashLink to="/journal">Open journal →</HashLink>
      </div>
      <p className="t-section-intro">A running record of what I'm learning, the questions I'm wrestling with, and how my thinking changes.</p>
      <div className="t-journal-preview">
        <time className="t-draft-label" dateTime={latest.date}>{latest.dateLabel}</time>
        <h4><HashLink to={`/journal#${latest.id}`}>{latest.title}</HashLink></h4>
        <p>{preview}</p>
        <HashLink className="t-journal-read" to={`/journal#${latest.id}`}>Read entry →</HashLink>
      </div>
    </section>
  );
}
