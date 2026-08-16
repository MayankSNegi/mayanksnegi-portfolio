// Projects — data-driven, consumed by Projects.jsx and ProjectDetail.jsx.
// Add Project 5, 6... here without changing any UI component.
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
    title: "Employee Leave Management",
    tagline: "Web-based employee leave management system",
    shortDescription: "A full-stack web application for managing employee leave requests and records.",
    detailedDescription: "Developed an Employee Leave Management System using Python, Flask, MySQL, HTML5, CSS3, and Vanilla JavaScript.",
    problem: "Managing employee leave requests manually can be time-consuming and difficult to track.",
    solution: "Built a centralized web application that allows leave requests and employee leave records to be managed through a structured interface.",
    technologies: ["Python","Flask","MySQL","HTML5","CSS3","Vanilla JavaScript"],
    features: ["Employee leave request management","Leave record tracking","MySQL database integration","Web-based user interface"],
    myContribution:"Designed and developed the application using Flask, MySQL, HTML5, CSS3, and JavaScript.",
    architecture:"Frontend (HTML, CSS, JavaScript) → Flask backend → MySQL database",
    githubUrl: "",
    liveUrl: "",
    image: "",
    screenshots: []
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
