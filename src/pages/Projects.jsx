import { useEffect } from 'react'

function Projects() {
  useEffect(() => {
    // Instagram Embed neu laden wenn Komponente mounted
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section style={{ padding: '4rem 0' }}>
      <h1 style={{ fontSize: '2rem' }}>Projects</h1>

      <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1.5rem' }}>photos</h2>
      <div className="instagram-grid">
        {/* Ersetze die POST_IDs mit deinen Instagram Post URLs */}
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/DSFCiLYiLw9/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '0',
            padding: '0',
            width: '100%',
          }}
        />

        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/Cvum1qINqVB/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '0',
            padding: '0',
            width: '100%',
          }}
        />

        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/CucsB1UICgF/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '0',
            padding: '0',
            width: '100%',
          }}
        />
      </div>
    </section>
  )
}
export default Projects