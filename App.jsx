import { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #ddd', padding: '1rem 2rem', position: 'sticky', top: 0 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: '22px' }}>Elevate Consulting</h1>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Services</a>
            <a href="#" style={{ textDecoration: 'none', color: '#000' }}>About</a>
            <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: '#f0f0f0', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Transform Your Business</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
            We partner with companies to unlock growth, optimize operations, and drive competitive advantage.
          </p>
          <button style={{ background: '#0066cc', color: '#fff', border: 'none', padding: '12px 32px', fontSize: '1rem', borderRadius: '4px', cursor: 'pointer' }}>
            Get Started
          </button>
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: '1200px', margin: '3rem auto', padding: '0 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Consulting', desc: 'Strategic guidance tailored to your needs' },
            { title: 'Analytics', desc: 'Data-driven insights to optimize performance' },
            { title: 'Implementation', desc: 'Expert execution of proven solutions' },
            { title: 'Optimization', desc: 'Continuous improvement for maximum ROI' }
          ].map((service, i) => (
            <div key={i} style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: '#666' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={{ background: '#fff', padding: '3rem 2rem', marginTop: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Why Choose Us</h2>
            <ul style={{ listStyle: 'none' }}>
              {['10+ years experience', '500+ successful projects', 'Dedicated managers', '24/7 support'].map((item, i) => (
                <li key={i} style={{ padding: '0.5rem 0', color: '#333' }}>✓ {item}</li>
              ))}
            </ul>
          </div>
          <div style={{ background: '#f0f0f0', padding: '3rem', borderRadius: '8px', textAlign: 'center', fontSize: '3rem' }}>
            📈
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ maxWidth: '600px', margin: '3rem auto', padding: '0 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Get In Touch</h2>
        <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #ddd' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box', minHeight: '120px' }} />
          </div>
          <button type="submit" style={{ width: '100%', background: '#0066cc', color: '#fff', border: 'none', padding: '12px', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' }}>
            Send
          </button>
          {submitted && <p style={{ marginTop: '1rem', color: '#28a745', textAlign: 'center' }}>Thanks for reaching out!</p>}
        </form>
      </section>

      {/* Footer */}
      <footer style={{ background: '#fff', borderTop: '1px solid #ddd', padding: '2rem', textAlign: 'center', marginTop: '3rem', color: '#666' }}>
        <p>© 2024 Elevate Consulting. All rights reserved.</p>
      </footer>
    </div>
  )
}
