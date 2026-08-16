// Central place for site-wide, environment-driven configuration.
// Update the corresponding .env file rather than editing this file.

const siteConfig = {
  name: "Mayank Singh Negi",
  shortName: "Mayank Negi",
  headline: "Computer Science Engineering Student | Python Backend Developer | AI/ML Enthusiast",
  location: "Faridabad, Haryana, India",
  university: "Manav Rachna University",
  degree: "B.Tech in Computer Science and Engineering",
  graduationYear: "2027",
  cgpa: "8.8",

  githubUrl: import.meta.env.VITE_GITHUB_URL || "https://github.com/mayanksnegi",
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/mayanksnegi",
  resumeUrl: import.meta.env.VITE_RESUME_URL || "/Mayank_Singh_Negi_Resume.pdf",
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || "work.mayanknegi@gmail.com",

  apiUrl: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000",
};

export default siteConfig;
