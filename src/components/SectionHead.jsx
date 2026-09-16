export default function SectionHead({ title, sheet }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {sheet && <div className="sheet mono">{sheet}</div>}
    </div>
  )
}
