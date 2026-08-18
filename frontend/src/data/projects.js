// Projects — data-driven, consumed by Projects.jsx and ProjectDetail.jsx.
// Add Project 5, 6... here without changing any UI component.
import elm1 from "../assets/projects/elm1.png";
import elm2 from "../assets/projects/elm2.png";
import elm3 from "../assets/projects/elm3.png";
import elm4 from "../assets/projects/elm4.png";
import mentalglow1 from "../assets/projects/mentalglow-1.png";
import mentalglow2 from "../assets/projects/mentalglow-2.png";
import mentalglow3 from "../assets/projects/mentalglow-3.png";
import mentalglow4 from "../assets/projects/mentalglow-4.png";
import mentalglow5 from "../assets/projects/mentalglow-5.png";
import webscraper1 from "../assets/projects/webscraper-1.png";
import webscraper2 from "../assets/projects/webscraper-2.png";
const projects = [
  {
  id: "employee-leave-management",
  title: "Employee Leave Management System",
  tagline: "Full-Stack Employee Leave Management Web Application",
  shortDescription:"A full-stack employee leave management system built with Flask and MySQL that enables employees to apply for and track leave while administrators manage and review leave requests.",
  detailedDescription:"Employee Leave Management System is a role-based full-stack web application designed to digitize the employee leave management process. Employees can register, securely log in, apply for different types of leave, track request status, cancel pending requests, and update their profiles. Administrators can monitor company-wide leave activity, review employee requests, approve or reject applications, filter requests, and view employee leave statistics.",
  problem:"Traditional employee leave processes often rely on manual forms, emails, spreadsheets, or disconnected systems, making it difficult for employees to track requests and for administrators to efficiently manage approvals and maintain an overview of leave activity.",
  solution:"A centralized web application provides separate employee and administrator workflows. Employees can submit and track leave requests through a dedicated dashboard, while administrators can review, filter, approve, or reject requests through an administrative dashboard connected to a MySQL database.",technologies: ["Python","Flask","MySQL","HTML5","CSS3","JavaScript","Jinja2","Werkzeug"],
  features: ["Employee registration and secure login","Role-based employee and administrator access","Employee dashboard with leave statistics","Apply for Casual, Sick, Earned, Emergency, and Unpaid Leave","Leave date and reason validation","Leave history with status and administrator comments","Cancel pending leave requests","Employee profile management","Administrator dashboard with company-wide statistics","Review and manage employee leave requests","Approve or reject leave applications","Required comments when rejecting requests","Filter leave requests by status and department","View registered employees and leave counts","Password hashing using Werkzeug","Parameterized SQL queries for safer database operations"],
  myContribution:"Designed and developed the complete application, including the Flask backend, MySQL database, authentication and role-based authorization, employee and administrator workflows, leave-management business logic, server-rendered Jinja2 templates, responsive CSS styling, client-side JavaScript functionality, database integration, validation, and security implementation.",
  architecture:"Browser → Flask Application → Authentication & Business Logic → MySQL Database → Jinja2 Templates → HTML/CSS/JavaScript response.",
  githubUrl: "https://github.com/MayankSNegi/employee-leave-management",
  liveUrl: "",
  image: "elm1",
  screenshots: [elm1,elm2,elm3,elm4,],
  },
  
  {
    id: "mentalglow-ai",
    title: "MentalGlow-AI",
    tagline: "AI-Powered Mental Wellness Platform",
    shortDescription:"An educational wellness-risk-prediction web app that pairs a React frontend with a FastAPI backend serving a Random Forest model.",
    detailedDescription:"MentalGlow-AI is a full-stack application that estimates a general wellness/risk indicator from user-provided lifestyle inputs, using a machine learning model trained for that purpose. It is built as an educational demonstration of an end-to-end ML product — from data preprocessing through model inference to a usable UI — and is not a diagnostic or medical tool.",
    problem:"Many people lack an easy, low-friction way to reflect on lifestyle factors that can influence day-to-day wellness, and most existing tools are either too clinical or too simplistic to be genuinely useful as an educational exercise in applied ML.",
    solution:"A lightweight React interface collects structured lifestyle inputs and sends them to a FastAPI backend, which preprocesses the data and runs it through a trained Random Forest classifier to return an educational risk-band prediction, along with a simple explanation of the result.",
    technologies: ["Python","FastAPI","Scikit-learn","React","Vite","JavaScript","Random Forest",],
    features: ["Clean multi-step input form for lifestyle data","FastAPI prediction endpoint serving a trained ML model","Random Forest classifier for wellness-risk banding","Clear, non-clinical presentation of results","Separated frontend/backend deployments",],
    myContribution:"Designed and built the full stack — the React frontend, the FastAPI backend and prediction API, the data preprocessing pipeline, and training/tuning of the Random Forest model.",
    architecture:"React Frontend → FastAPI Backend → Data preprocessing → Random Forest Model → Prediction response returned to the frontend.",
    mlModel: {algorithm: "RandomForestClassifier",n_estimators: 400,max_depth: 12,class_weight:"balanced_subsample",},
    githubUrl: "https://github.com/MayankSNegi/MentalGlow-AI",
    liveUrl: "https://mentalglow-ai.netlify.app/",
    // backendUrl: "",
    image: "mentalglow1",
    screenshots: [mentalglow1,mentalglow2,mentalglow3,mentalglow4,mentalglow5,],
    disclaimer: "MentalGlow-AI is an educational wellness/risk-prediction project. It is not a medical diagnostic tool and should not be used as a substitute for professional medical or mental health advice.",
  },
  {
    id: "web-scraper",
    title: "Web Scraper",
    tagline: "Python-based data extraction tool",
    shortDescription:"A Python web scraper built to extract structured data from web pages.",
    detailedDescription:"A Python-based web scraping application designed to collect and extract useful structured information from web pages for further use and analysis.",
    problem:"Manually collecting information from web pages is repetitive and time-consuming.",
    solution:"Built a Python web scraper to automate data extraction from web pages and organize the collected information into a structured format.",
    technologies: ["Python"],
    features: ["Automated web data extraction","Structured data collection","Reduced manual data collection","Reusable scraping workflow"],
    myContribution:"Built during the Python Development Internship at TechnoHacks Solutions Private Limited (June–July 2025).",
    architecture:"Python scraper → Web pages → Extracted data → Structured output",
    githubUrl: "https://github.com/MayankSNegi/WebScraperApp",
    liveUrl: "",
    image: "webscraper1",
    screenshots: [webscraper1,webscraper2,],
  },
];

export default projects;
