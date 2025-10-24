// Portfolio.jsx
// Single-file React component with beautiful custom CSS styling

import React, { useState } from 'react';
import './Portfolio.css';
import './TextEnhancements.css';
import siteConfig from './siteConfig';

export default function Portfolio() {
  // Load editable content from central config to make the project reusable
  const projects = siteConfig.projects;
  const skills = siteConfig.skills;
  const certs = siteConfig.certs;
  const { name, tagline, bioShort, about, location, current, email, linkedin, github, resumeUrl, role } = siteConfig;

  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCert(null);
  };

  return (
    <div className="portfolio">
      <header>
        <nav>
          <div>
            <a href="#home" className="logo">{name}</a>
            <span className="tagline">{tagline}</span>
          </div>
          <div className="nav-links">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href={resumeUrl} download className="download-btn">Download Resume</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Hi, I'm <span className="name-highlight">{name}</span></h1>
            <p>{bioShort}</p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="mailto:katrojuabhinay@gmail.com" className="btn btn-secondary">Contact Me</a>
            </div>

            <div className="hero-info">
              <p><strong>Location:</strong> {location}</p>
              <p><strong>Currently:</strong> {current}</p>
            </div>
          </div>

          <div className="hero-profile">
            {/* Profile card */}
            <div className="profile-card">
              <div className="profile-avatar">AK</div>
              <h3>{name}</h3>
              <p className="role">{role}</p>
              <div className="profile-links">
                <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>{about}</p>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <p>Highlighted GitHub projects — click to view the repository.</p>

          <div className="projects-grid">
            {projects.map((p) => (
              <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="project-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-link">View on GitHub</div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills & Tech */}
        <section id="skills" className="section">
          <h2>Tech Stack & Skills</h2>
          <div className="skills-container">
            {skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="section">
          <h2>Certifications & Achievements</h2>
          <p>Click on any certificate to view details</p>
          <div className="cert-list">
            {certs.map((cert) => (
              <div 
                key={cert.title} 
                className="cert-item clickable-cert" 
                onClick={() => handleCertClick(cert)}
              >
                {cert.title}
                <span className="cert-click-hint">📄 Click to view</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>I'm open to internship and entry-level opportunities in AI/ML and software development. Reach out via email or LinkedIn.</p>

          <div className="contact-content">
            <div className="contact-info">
              <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
              <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noreferrer">View Profile</a></p>
            </div>

            <div className="contact-buttons">
              <a href={github} target="_blank" rel="noreferrer" className="contact-btn contact-btn-outline">GitHub</a>
              <a href={resumeUrl} download className="contact-btn contact-btn-solid">Download Resume</a>
            </div>
          </div>
        </section>

        <footer>
          © {new Date().getFullYear()} {name} • Built with React + Custom CSS
        </footer>
      </main>

      {/* Certificate Modal */}
      {showModal && selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedCert.title}</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <p>{selectedCert.description}</p>
              
              {selectedCert.image && (
                <div className="cert-image-container">
                  <img src={selectedCert.image} alt={selectedCert.title} className="cert-image" />
                </div>
              )}
              
              {!selectedCert.image && (
                <div className="cert-placeholder">
                  <div className="cert-icon">📜</div>
                  <p>Certificate image will be displayed here</p>
                  <small>You can add the certificate image path to display it</small>
                </div>
              )}
              
              {selectedCert.link && (
                <div className="cert-actions">
                  <a href={selectedCert.link} target="_blank" rel="noreferrer" className="cert-verify-btn">
                    🔍 Verify Certificate
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}