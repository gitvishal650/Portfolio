import { education } from '../data/content'
import SectionHead from './SectionHead'

export default function Education() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead title="Education & certifications" />
        <div className="ledger">
          {education.map((row) => (
            <div className="ledger-row" key={row.title}>
              <div className="yr">{row.year}</div>
              <div>
                <h3>{row.title}</h3>
                <p>{row.detail}</p>
              </div>
              <div className="role">{row.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
