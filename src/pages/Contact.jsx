function Contact() {
  return (
    <section style={{ padding: '4rem 0' }}>
      <h1 style={{ fontSize: '2rem' }}>Contact</h1>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '3rem' }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <a
            href="https://instagram.com/nv.pctrs"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: '#E4405F', cursor: 'pointer' }}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37"></path>
              <circle cx="17.5" cy="6.5" r="1.5"></circle>
            </svg>
          </a>
          <p style={{ marginTop: '.25rem', fontSize: '1.1rem', color: "#414141" }}>
            nv.pctrs
          </p>
        </div>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <a
            href="mailto:noelva@gmx.de"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: '#0066CC', cursor: 'pointer' }}
            >
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
              <path d="m22 7-10 5L2 7"></path>
            </svg>
          </a>
          <p style={{ marginTop: '.25rem', fontSize: '1.1rem', color: "#414141" }}>
            Mail
          </p>
        </div>
      </div>
    </section>
  )
}
export default Contact