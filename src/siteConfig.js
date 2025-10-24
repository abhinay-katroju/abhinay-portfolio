// Central site configuration - edit this file to customize the portfolio
const siteConfig = {
  name: 'Abhinay Katroju',
  tagline: 'Aspiring AI Developer',
  role: 'AI & Software Developer',
  location: 'Vadodara, Gujarat, India',
  current: 'AI Intern — Infosys Springboard',
  email: 'katrojuabhinay@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhinay-katroju-889b5a246/',
  github: 'https://github.com/abhinay-katroju?tab=repositories',
  // resumeUrl: use raw GitHub link (public repo) or Public URL path
  resumeUrl: 'https://github.com/abhinay-katroju/abhinay-portfolio/raw/main/public/resume.pdf',

  bioShort:
    "Aspiring AI Developer — Recently completed B.Tech in Computer Science (AI) and currently working as an AI Intern at Infosys Springboard.",

  about:
    `Hi, I'm Abhinay Katroju, an Aspiring AI Developer who recently completed B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence from Parul University, Vadodara. During my studies I completed internships and hands-on projects in ML and AI. I enjoy building intelligent systems and learning new technologies to create impactful solutions.`,

  projects: [
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
  ],

  skills: ['Python', 'Java', 'AI/ML', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Git', 'GitHub', 'Pandas', 'NumPy', 'Matplotlib'],

  certs: [
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
      description: 'Completed comprehensive technology job simulation program with Deloitte Australia.'
    },
    {
      title: 'Machine Learning Intern (Unified Mentor Pvt. Ltd)',
      image: `${process.env.PUBLIC_URL}/certificates/ml-intern-cert.jpg`,
      link: null,
      description: 'Completed machine learning internship with hands-on project experience.'
    },
    {
      title: 'Geodata Processing Using Machine Learning and Python (IIRS, ISRO)',
      image: `${process.env.PUBLIC_URL}/certificates/iirs-isro-cert.jpg`,
      link: null,
      description: 'Advanced course on geodata processing using ML techniques from IIRS, ISRO.'
    },
    {
      title: 'Flutter Workshop',
      image: `${process.env.PUBLIC_URL}/certificates/flutter-cert.jpg`,
      link: null,
      description: 'Completed comprehensive Flutter mobile app development workshop.'
    }
  ]
};

export default siteConfig;
