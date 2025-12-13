import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Dein Name</h2>
      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.5rem 3rem',
    borderBottom: '1px solid #334155'
  },
  links: {
    display: 'flex',
    gap: '1.5rem'
  }
}

export default Navbar