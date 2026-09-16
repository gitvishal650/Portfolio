export default function Footer() {
  return (
    <footer className="site">
      <div
        className="wrap"
        style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '10px' }}
      >
        <span>© {new Date().getFullYear()} Vishal Panchal</span>
        <span className="mono">MERN stack · Ghaziabad, India</span>
      </div>
    </footer>
  )
}
