import React, { useState } from 'react';

export default function BusinessWebsite() {
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const services = [
    { icon: '💼', title: 'Consulting', desc: 'Strategic guidance tailored to your business needs' },
    { icon: '📊', title: 'Analytics', desc: 'Data-driven insights to optimize performance' },
    { icon: '⚙️', title: 'Implementation', desc: 'Expert execution of proven solutions' },
    { icon: '🎯', title: 'Optimization', desc: 'Continuous improvement for maximum ROI' }
  ];

  return (
    <div style={{ background: '#f8f8f8', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        background: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 500, color: '#000' }}>
            🚀 Elevate Consulting
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            {['Services', 'About', 'Contact'].map(item => (
              <a key={item} href="#" style={{
                color: '#000',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                borderBottom: '2px solid transparent',
                paddingBottom: '4px',
                transition: 'border-color 0.2s'
              }} onMouseOver={(e) => e.target.style.borderColor = '#0066cc'} onMouseOut={(e) => e.target.style.borderColor = 'transparent'}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem', background: '#f0f0f0', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '44px', fontWeight: 500, color: '#000', marginBottom: '1rem', lineHeight: 1.2 }}>
            Transform Your Business Today
          </h1>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '2rem', lineHeight: 1.7 }}>
            We partner with forward-thinking companies to unlock growth, optimize operations, and drive lasting competitive advantage.
          </p>
          <button onClick={() => window.scrollTo({ top: document.body.scrollHeight - 400, behavior: 'smooth' })} style={{
            background: '#0066cc',
            color: '#fff',
            border: 'none',
            padding: '12px 32px',
            fontSize: '14px',
            fontWeight: 500,
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'opacity 0.2s'
          }} onMouseOver={(e) => e.target.style.opacity = '0.9'} onMouseOut={(e) => e.target.style.opacity = '1'}>
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 500, textAlign: 'center', marginBottom: '3rem', color: '#000' }}>
          Our Services
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => setActiveService(activeService === idx ? null : idx)}
              style={{
                background: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                transform: activeService === idx ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: activeService === idx ? '0 12px 24px rgba(0,0,0,0.08)' : 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#0066cc';
                if (activeService !== idx) e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
                if (activeService !== idx) e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '1rem' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '0.5rem', color: '#000' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '4rem 2rem', background: '#fff', marginTop: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 500, marginBottom: '1.5rem', color: '#000' }}>
              Why Choose Us
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['10+ years of industry experience', '500+ successful projects', 'Dedicated account managers', '24/7 support'].map((point, idx) => (
                <li key={idx} style={{ fontSize: '15px', color: '#000', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: '#28a745', fontWeight: 'bold' }}>✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: '#f8f8f8', borderRadius: '12px', padding: '2rem', textAlign: 'center', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '48px' }}>
              📈
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 500, textAlign: 'center', marginBottom: '2rem', color: '#000' }}>
          Let's Talk
        </h2>
        <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '0.5rem', color: '#000' }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: `1px solid ${errors.name ? '#dc3545' : '#e0e0e0'}`,
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
            />
            {errors.name && <div style={{ color: '#dc3545', fontSize: '13px', marginTop: '4px' }}>{errors.name}</div>}
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '0.5rem', color: '#000' }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: `1px solid ${errors.email ? '#dc3545' : '#e0e0e0'}`,
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
            />
            {errors.email && <div style={{ color: '#dc3545', fontSize: '13px', marginTop: '4px' }}>{errors.email}</div>}
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '0.5rem', color: '#000' }}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: `1px solid ${errors.message ? '#dc3545' : '#e0e0e0'}`,
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'inherit',
                minHeight: '120px',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            />
            {errors.message && <div style={{ color: '#dc3545', fontSize: '13px', marginTop: '4px' }}>{errors.message}</div>}
          </div>
          <button type="submit" style={{
            width: '100%',
            background: '#0066cc',
            color: '#fff',
            border: 'none',
            padding: '12px',
            fontSize: '14px',
            fontWeight: 500,
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'opacity 0.2s'
          }} onMouseOver={(e) => e.target.style.opacity = '0.9'} onMouseOut={(e) => e.target.style.opacity = '1'}>
            Send Message
          </button>
          {submitted && <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#d4edda', color: '#155724', borderRadius: '8px', fontSize: '14px', textAlign: 'center' }}>
            Thanks for reaching out! We'll be in touch soon.
          </div>}
        </form>
      </section>

      {/* Footer */}
      <footer style={{ background: '#fff', borderTop: '1px solid #e0e0e0', padding: '2rem', textAlign: 'center', marginTop: '4rem' }}>
        <p style={{ fontSize: '14px', color: '#666' }}>
          © 2024 Elevate Consulting. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
