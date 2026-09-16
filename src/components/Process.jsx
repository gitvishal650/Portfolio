import { processSteps } from '../data/content'
import SectionHead from './SectionHead'

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <SectionHead title="How I build a project" sheet="SHEET 03 / 03" />
        <div className="flow">
          {processSteps.map((step) => (
            <div className="flow-step" key={step.num}>
              <span className="flow-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
