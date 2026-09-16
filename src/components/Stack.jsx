import { stack } from '../data/content'
import SectionHead from './SectionHead'

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <SectionHead title="What I work with" sheet="SHEET 02 / 03" />
        <div className="stack-grid">
          {stack.map((col) => (
            <div className="stack-col" key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
