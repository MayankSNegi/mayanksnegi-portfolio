# Mayank Singh Negi — Developer Portfolio

> A modern, responsive, full-stack developer portfolio built to showcase my projects, technical skills, education, experience, achievements, research work, and contact information.

**Live Portfolio:** [mayanksnegi-portfolio.netlify.app](https://mayanksnegi-portfolio.netlify.app)

---

## About the Project

This repository contains the source code for my personal developer portfolio.

I built this portfolio to provide a professional and interactive overview of my journey as a **Computer Science and Engineering student and aspiring software/backend developer**.

The website brings together:

* My introduction and profile
* Education
* Technical skills
* Internship experience
* Software and AI/ML projects
* Hackathons and achievements
* Research work
* Certificates
* Resume
* Contact form

The portfolio follows a **data-driven architecture**, allowing content such as projects, experience, education, skills, and achievements to be updated without rewriting the UI components.

---

## ✨ Features

### 🏠 Home

* Professional hero section
* Profile introduction
* About Me
* Education timeline
* Technical skills
* Quick navigation to important sections

### 💼 Experience

* Timeline-based internship/experience section
* Company, role, duration, responsibilities, and technologies
* Data-driven experience entries

### 🚀 Projects

* Dedicated projects page
* Individual project case-study pages
* Project overview and problem statement
* Technical solution
* Features
* Technologies used
* Personal contribution
* Architecture
* Challenges and learnings
* GitHub and live project links where available
* Project screenshots

### 🏆 Achievements & Research

* Hackathon achievements
* Coding/contest achievements
* Research work
* Certifications and other accomplishments

### 📬 Contact

* Fully functional contact form
* React frontend
* FastAPI backend
* Resend API-based email delivery
* Frontend and backend validation
* Honeypot anti-spam protection
* Basic rate limiting
* Duplicate-submission protection

### 🎨 UI & UX

* Responsive design
* Mobile-friendly navigation
* Light/dark theme
* System theme detection
* Persisted theme preference
* Smooth scrolling
* Scroll progress indicator
* Back-to-top button
* Custom 404 page
* Keyboard-accessible interactions
* Visible focus states

### 🔍 SEO

* Page titles
* Meta descriptions
* Open Graph metadata
* `robots.txt`
* XML sitemap
* Canonical URL support
* SPA routing configuration for Netlify

---

# 🛠️ Tech Stack

## Frontend

* **React.js**
* **Vite**
* **JavaScript**
* **HTML5**
* **CSS3**
* **React Router**
* **Lucide React**

> The frontend uses **plain CSS** and does not use Tailwind CSS.

## Backend

* **Python**
* **FastAPI**
* **Pydantic**
* **Uvicorn**
* **Resend Email API**

## Development Tools

* **Git**
* **GitHub**
* **VS Code**
* **npm**
* **Python Virtual Environment**

## Deployment

* **Frontend:** Netlify
* **Backend:** Render

---

# 📁 Project Structure

```text
mayanksnegi-portfolio/
│
├── frontend/
│   ├── public/
│   │   ├── favicon
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── _redirects
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── profile/
│   │   │   ├── projects/
│   │   │   └── certificates/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar
│   │   │   ├── Footer
│   │   │   ├── Hero
│   │   │   ├── ProjectCard
│   │   │   ├── ContactForm
│   │   │   └── ...
│   │   │
│   │   ├── data/
│   │   │   ├── achievements.js
│   │   │   ├── education.js
│   │   │   ├── experience.js
│   │   │   ├── projects.js
│   │   │   ├── skills.js
│   │   │   └── siteConfig.js
│   │   │
│   │   ├── lib/
│   │   │   ├── api.js
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectDetail.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── styles/
│   │   │   ├── variables.css
│   │   │   └── global.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env.example
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   │   ├── health.py
│   │   │   └── contact.py
│   │   │
│   │   ├── schemas/
│   │   │   └── contact.py
│   │   │
│   │   ├── services/
│   │   │   ├── email_service.py
│   │   │   └── rate_limiter.py
│   │   │
│   │   ├── config.py
│   │   └── main.py
│   │
│   ├── .env.example
│   ├── requirements.txt
│   └── ...
│
├── .gitignore
└── README.md
```

---

# 🔄 Application Architecture

The portfolio uses a simple frontend/backend architecture:

```text
                    ┌─────────────────────┐
                    │       Visitor       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │       + Vite        │
                    └──────────┬──────────┘
                               │
                    Contact Form Submission
                               │
                               ▼
                    ┌─────────────────────┐
                    │   FastAPI Backend   │
                    │     + Pydantic      │
                    └──────────┬──────────┘
                               │
                    Validation / Protection
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Resend Email API   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Portfolio Inbox   │
                    └─────────────────────┘
```

The frontend handles the portfolio experience, while the backend is primarily responsible for securely processing contact-form submissions and sending emails.

---

# 📄 Pages

The portfolio currently includes:

| Route                  | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `/`                    | Home, About, Education, Skills                  |
| `/experience`          | Internship and professional experience          |
| `/projects`            | Project portfolio                               |
| `/projects/:projectId` | Individual project case study                   |
| `/achievements`        | Achievements, contests, hackathons and research |
| `/contact`             | Contact form                                    |
| `*`                    | Custom 404 page                                 |

---

# 🚀 Running the Project Locally

## Prerequisites

Make sure the following are installed:

* **Node.js 18+**
* **npm**
* **Python 3.11+**
* **Git**

---

## 1. Clone the Repository

```bash
git clone https://github.com/mayanksnegi/mayanksnegi-portfolio.git
cd mayanksnegi-portfolio
```

---

# Frontend Setup

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create the local environment file:

```bash
cp .env.example .env
```

### Windows

If `cp` is unavailable, create a copy of `.env.example` manually and rename it to:

```text
.env
```

Configure the required frontend variables using the values appropriate for your environment.

Example:

```env
VITE_API_URL=http://127.0.0.1:8000
VITE_RESUME_URL=
VITE_GITHUB_URL=https://github.com/mayanksnegi
VITE_LINKEDIN_URL=https://linkedin.com/in/mayanksnegi
VITE_CONTACT_EMAIL=
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

# Backend Setup

Open a second terminal and navigate to the backend:

```bash
cd backend
```

Create a virtual environment:

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux/macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create the environment file:

```text
.env
```

using `.env.example` as the template.

Example structure:

```env
FRONTEND_URL=http://localhost:5173

CONTACT_RECEIVER_EMAIL=

RESEND_API_KEY=
RESEND_FROM_EMAIL=onboarding@resend.dev
```

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

The backend will normally run at:

```text
http://127.0.0.1:8000
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

---

# 📬 Contact Form Flow

The contact form works through the following flow:

```text
User
  │
  ▼
React Contact Form
  │
  │ POST /api/contact
  ▼
FastAPI
  │
  ├── Request validation
  ├── Input validation
  ├── Honeypot check
  ├── Rate limiting
  └── Duplicate submission protection
  │
  ▼
Resend Email API
        │
        ▼
Configured Email Inbox
```

The frontend and backend both validate submitted data.

The backend should always be treated as the final authority for validation.

---

# 🧪 API Endpoints

The backend exposes lightweight API endpoints for the portfolio.

### Health Check

```http
GET /api/health
```

Used to verify that the backend is running.

### Contact Form

```http
POST /api/contact
```

Accepts contact-form submissions and sends them through the Resend Email API.

### API Documentation

FastAPI automatically provides interactive documentation at:

```text
/docs
```

---

# 🏗️ Production Build

Build the frontend:

```bash
cd frontend
npm run build
```

The production files will be generated in:

```text
frontend/dist
```

Preview the production build locally:

```bash
npm run preview
```

---

# ☁️ Deployment

## Frontend — Netlify

The frontend is designed for deployment on Netlify.

Typical configuration:

```text
Base directory: frontend
Build command: npm run build
Publish directory: dist
```

The repository includes a Netlify `_redirects` file so React Router routes continue to work when users directly visit or refresh nested URLs.

Production environment variables should be configured in the Netlify dashboard rather than committed to the repository.

---

## Backend — Render

The FastAPI backend can be deployed as a Render Web Service.

Typical configuration:

```text
Root directory: backend
Build command: pip install -r requirements.txt
Start command: uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

Production environment variables should be configured through Render's environment settings.

---

# 🔐 Security & Environment Variables

Sensitive configuration is intentionally excluded from version control.

The repository should contain:

```text
.env.example
```

but **never real `.env` files containing credentials**.

Do not commit:

```text
.env
*.env
API keys
private credentials
```

The actual Resend API key belongs only in the deployment platform's environment-variable configuration.

---

# 📝 Updating Portfolio Content

The portfolio is designed to be easy to maintain.

## Add or Update Projects

Edit:

```text
frontend/src/data/projects.js
```

Project information is stored as data rather than being hard-coded into the project page components.

A project can contain information such as:

```js
{
  id: "project-slug",
  title: "Project Name",
  tagline: "Short project description",
  shortDescription: "Brief overview",
  detailedDescription: "Detailed explanation",
  problem: "Problem being solved",
  solution: "How the project solves it",
  technologies: [],
  features: [],
  myContribution: "My contribution",
  architecture: "System architecture",
  challenges: "Challenges faced",
  learnings: "What I learned",
  improvements: "Future improvements",
  githubUrl: "",
  liveUrl: "",
  image: "",
  screenshots: []
}
```

---

## Add or Update Experience

Edit:

```text
frontend/src/data/experience.js
```

The experience timeline automatically renders the entries defined in the data file.

---

## Add or Update Education

Edit:

```text
frontend/src/data/education.js
```

---

## Add or Update Skills

Edit:

```text
frontend/src/data/skills.js
```

---

## Add or Update Achievements

Edit:

```text
frontend/src/data/achievements.js
```

Achievements can be organized into categories such as:

* Hackathons
* Research
* Coding contests
* Volunteering
* Certifications
* Other accomplishments

---

## Update Social Links

Social and site-level configuration can be updated through:

```text
frontend/src/data/siteConfig.js
```

Environment variables can also be used where configured by the application.

---

# 🎯 Design Philosophy

The portfolio was built around a few principles:

### Clean

A simple visual system keeps the focus on the content rather than excessive UI effects.

### Responsive

The interface is designed to work across desktop, tablet, and mobile screen sizes.

### Maintainable

Portfolio content is separated from UI components wherever practical.

### Accessible

Semantic HTML, labels, focus states, keyboard navigation, and accessible form states are used throughout the application.

### Performance-conscious

The site avoids unnecessary dependencies and uses a lightweight React/Vite frontend.

### Professional

The portfolio is designed specifically for presenting technical work to recruiters, hiring managers, developers, and potential collaborators.

---

# 📌 Current Project Highlights

Some of the major projects showcased through the portfolio include:

### MentalGlow-AI

An AI-powered wellness/risk-assessment project built with:

* React
* FastAPI
* Python
* Scikit-learn
* Machine Learning

### Employee Leave Management System

A full-stack leave management application demonstrating:

* Python
* Flask
* MySQL
* Authentication
* Role-based access
* CRUD operations
* Database integration

### Web Scraper

A Python-based web scraping project focused on data extraction and automation.

---

# 📈 Future Improvements

Potential future improvements include:

* Improved project filtering and categorization
* Additional project case studies
* Enhanced accessibility testing
* Automated CI/CD checks
* Automated frontend linting and testing
* Improved analytics
* Additional performance optimizations
* More interactive project demonstrations
* Further backend hardening for production traffic

---

# 👨‍💻 About Me

I'm **Mayank Singh Negi**, a Computer Science and Engineering student interested in building practical software solutions across **Python backend development, web development, APIs, AI/ML, and automation**.

I enjoy turning ideas into working applications and continuously improving my understanding of software engineering through projects, internships, hackathons, and research.

---

# 🔗 Connect With Me

* **GitHub:** [github.com/mayanksnegi](https://github.com/mayanksnegi)
* **LinkedIn:** [linkedin.com/in/mayanksnegi](https://linkedin.com/in/mayanksnegi)
* **Portfolio:** [mayanksnegi-portfolio.netlify.app](https://mayanksnegi-portfolio.netlify.app)

---

# 📜 License

This repository contains my personal portfolio source code and personal content.

The source code may be referenced for learning and inspiration, but personal information, photographs, certificates, resume content, project descriptions, and other identifying materials should not be copied or redistributed as another person's portfolio.

---

<p align="center">
  Built and maintained by <strong>Mayank Singh Negi</strong>
</p>
