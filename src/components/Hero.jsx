import { heroStats } from '../data/content'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="wrap">
        <div className="hero-tag mono">MERN STACK DEVELOPER · GHAZIABAD, INDIA</div>
        <h1 className="hero-title">
          I build full-stack apps that <em>work end to end</em>.
        </h1>
        <p className="hero-sub">
          Vishal Panchal — MCA student and MERN stack developer. I build real-time,
          authenticated, full-stack applications with React, Node, Express and MongoDB,
          and I'm looking for a web developer internship where I can keep shipping.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#work">See the work</a>
          <a className="btn ghost" href="#contact">Get in touch</a>
        </div>
        <div className="hero-meta">
          {heroStats.map((stat) => (
            <div key={stat.num}>
              <div className="num">{stat.num}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
