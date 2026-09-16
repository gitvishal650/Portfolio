import { projects } from '../data/content'
import SectionHead from './SectionHead'

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead title="Selected work" sheet="SHEET 01 / 03" />
        <div className="proj-list">
          {projects.map((project) => (
            <a
              key={project.index}
              className="proj-card"
              href={project.href || '#'}
              target={project.href ? '_blank' : undefined}
              rel={project.href ? 'noreferrer' : undefined}
              onClick={(e) => { if (!project.href) e.preventDefault() }}
            >
              <div className="proj-index mono">{project.index}</div>
              <div className="proj-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="proj-metric">{project.metric}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
