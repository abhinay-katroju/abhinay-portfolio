// Portfolio.jsx
// Single-file React component with beautiful custom CSS styling

import React, { useState } from 'react';
import './Portfolio.css';
import './TextEnhancements.css';

export default function Portfolio() {
  const projects = [
    {
      title: 'AI Music Composition System',
      desc: 'AI-powered music composition web app that converts natural language mood descriptions into personalized music compositions. Built with Python, Streamlit and PyTorch.',
      link: 'https://github.com/abhinay-katroju/AI_Music_Composition'
    },
    {
      title: 'Sentiment Analysis',
      desc: 'A sentiment analysis model that classifies text into positive, negative or neutral sentiments using Python and NLP techniques.',
      link: '#'
    },
    {
      title: 'Heart Disease Prediction',
      desc: 'Machine learning model that analyzes patient data to predict heart disease risk, enabling early intervention and improving diagnostic accuracy.',
      link: 'https://github.com/abhinay-katroju/Detecting-Heart-Disease-with-ML'
    },
    {
      title: 'Forest Type Cover Prediction',
      desc: 'A classification model to predict forest cover type from 30x30 patch data (UCI dataset). Deployed with Python and Streamlit.',
      link: 'https://github.com/abhinay-katroju/Forest-Cover-Type-Prediction'
    }
  ];

  const skills = ['Python', 'Java', 'AI/ML', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Git', 'GitHub', 'Pandas', 'NumPy', 'Matplotlib'];

  const certs = [
    {
      title: 'Oracle Cloud Infrastructure GEN AI Professional',
      image: `${process.env.PUBLIC_URL}/certificates/oracle-cert.jpg`,
      link: null,
      description: 'Professional certification in Oracle Cloud Infrastructure for Generative AI applications and cloud computing solutions.'
    },
    {
      title: "Deloitte Australia's Technology Job Simulation",
      image: `${process.env.PUBLIC_URL}/certificates/deloitte-cert.jpg`,
      link: null,
      description: 'Completed comprehensive technology job simulation program with Deloitte Australia, gaining hands-on experience in consulting and technology solutions.'
    },
    {
      title: 'Machine Learning Intern (Unified Mentor Pvt. Ltd)',
      image: `${process.env.PUBLIC_URL}/certificates/ml-intern-cert.jpg`,
      link: null,
      description: 'Completed machine learning internship with hands-on project experience in AI/ML development and implementation.'
    },
    {
      title: 'Geodata Processing Using Machine Learning and Python (IIRS, ISRO)',
      image: `${process.env.PUBLIC_URL}/certificates/iirs-isro-cert.jpg`,
      link: null,
      description: 'Advanced course on geodata processing using ML techniques from Indian Institute of Remote Sensing, ISRO - covering satellite data analysis and geospatial AI.'
    },
    {
      title: 'Flutter Workshop',
      image: `${process.env.PUBLIC_URL}/certificates/flutter-cert.jpg`,
      link: null,
      description: 'Completed comprehensive Flutter mobile app development workshop covering cross-platform mobile application development.'
    }
  ];

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
            <a href="#home" className="logo">Abhinay Katroju</a>
            <span className="tagline">Aspiring AI Developer</span>
          </div>
          <div className="nav-links">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="/resume.pdf" download className="download-btn">Download Resume</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Hi, I'm <span className="name-highlight">Abhinay Katroju</span></h1>
            <p>Aspiring AI Developer — Recently completed B.Tech in Computer Science (AI) and currently working as an AI Intern at Infosys Springboard.</p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="mailto:katrojuabhinay@gmail.com" className="btn btn-secondary">Contact Me</a>
            </div>

            <div className="hero-info">
              <p><strong>Location:</strong> Vadodara, Gujarat, India</p>
              <p><strong>Currently:</strong> AI Intern — Infosys Springboard</p>
            </div>
          </div>

          <div className="hero-profile">
            {/* Profile card */}
            <div className="profile-card">
              <div className="profile-avatar">AK</div>
              <h3>Abhinay Katroju</h3>
              <p className="role">Aspiring AI Developer</p>
              <div className="profile-links">
                <a href="https://www.linkedin.com/in/abhinay-katroju-889b5a246/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/abhinay-katroju?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>Hi, I'm <strong>Abhinay Katroju</strong>, an <strong>Aspiring AI Developer</strong> who recently completed B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence from Parul University, Vadodara. During my 7th semester, I completed a university-guided virtual Machine Learning internship, and I am currently working as an AI Intern at Infosys Springboard. I have hands-on experience building AI systems — including an AI-based Music Composition System — using Python and popular AI/ML libraries. I am passionate about exploring AI and continuously learning new technologies to build impactful solutions.</p>
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
              <p><strong>Email:</strong> <a href="mailto:katrojuabhinay@gmail.com">katrojuabhinay@gmail.com</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abhinay-katroju-889b5a246/" target="_blank" rel="noreferrer">View Profile</a></p>
            </div>

            <div className="contact-buttons">
              <a href="https://github.com/abhinay-katroju?tab=repositories" target="_blank" rel="noreferrer" className="contact-btn contact-btn-outline">GitHub</a>
              <a href="/resume.pdf" download className="contact-btn contact-btn-solid">Download Resume</a>
            </div>
          </div>
        </section>

        <footer>
          © {new Date().getFullYear()} Abhinay Katroju • Built with React + Custom CSS
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