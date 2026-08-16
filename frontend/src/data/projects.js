// Projects — data-driven, consumed by Projects.jsx and ProjectDetail.jsx.
// Add Project 5, 6... here without changing any UI component.
//
// Fields left as "ADD ..." are intentional placeholders — real details
// were not provided and must not be invented. Replace them with the
// real information whenever you have it.

const projects = [
  {
    id: "employee-leave-management",
    title: "Employee Leave Management",
    tagline: "Web-based employee leave management system",
    shortDescription:
      "A full-stack web application for managing employee leave requests and records.",
    detailedDescription:
      "Developed an Employee Leave Management System using Python, Flask, MySQL, HTML5, CSS3, and Vanilla JavaScript.",
    problem:
      "Managing employee leave requests manually can be time-consuming and difficult to track.",
    solution:
      "Built a centralized web application that allows leave requests and employee leave records to be managed through a structured interface.",
    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "HTML5",
      "CSS3",
      "Vanilla JavaScript"
    ],
    features: [
      "Employee leave request management",
      "Leave record tracking",
      "MySQL database integration",
      "Web-based user interface"
    ],
    myContribution:
      "Designed and developed the application using Flask, MySQL, HTML5, CSS3, and JavaScript.",
    githubUrl: "",
    liveUrl: "",
    image: "",
    screenshots: []
  },
  {
    id: "mentalglow-ai",
    title: "MentalGlow-AI",
    tagline: "AI-Powered Mental Wellness Platform",
    shortDescription:
      "An educational wellness-risk-prediction web app that pairs a React frontend with a FastAPI backend serving a Random Forest model.",
    detailedDescription:
      "MentalGlow-AI is a full-stack application that estimates a general wellness/risk indicator from user-provided lifestyle inputs, using a machine learning model trained for that purpose. It is built as an educational demonstration of an end-to-end ML product — from data preprocessing through model inference to a usable UI — and is not a diagnostic or medical tool.",
    problem:
      "Many people lack an easy, low-friction way to reflect on lifestyle factors that can influence day-to-day wellness, and most existing tools are either too clinical or too simplistic to be genuinely useful as an educational exercise in applied ML.",
    solution:
      "A lightweight React interface collects structured lifestyle inputs and sends them to a FastAPI backend, which preprocesses the data and runs it through a trained Random Forest classifier to return an educational risk-band prediction, along with a simple explanation of the result.",
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "React",
      "Vite",
      "JavaScript",
      "Random Forest",
    ],
    features: [
      "Clean multi-step input form for lifestyle data",
      "FastAPI prediction endpoint serving a trained ML model",
      "Random Forest classifier for wellness-risk banding",
      "Clear, non-clinical presentation of results",
      "Separated frontend/backend deployments",
    ],
    myContribution:
      "Designed and built the full stack — the React frontend, the FastAPI backend and prediction API, the data preprocessing pipeline, and training/tuning of the Random Forest model.",
    architecture:
      "React Frontend → FastAPI Backend → Data preprocessing → Random Forest Model → Prediction response returned to the frontend.",
    mlModel: {
      algorithm: "RandomForestClassifier",
      n_estimators: 400,
      max_depth: 12,
      class_weight: "balanced_subsample",
    },
    githubUrl: "https://github.com/MayankSNegi/MentalGlow-AI",
    liveUrl: "https://mentalglow-ai.netlify.app/",
    // backendUrl: "",
    image: "",
    screenshots: [],
    disclaimer:
      "MentalGlow-AI is an educational wellness/risk-prediction project. It is not a medical diagnostic tool and should not be used as a substitute for professional medical or mental health advice.",
  },
  {
    id: "weather-app",
    title: "Weather App",
    tagline: "Real-time weather lookup built with Flask",
    shortDescription:
      "A Flask web application that fetches and displays live weather data using the OpenWeatherMap API.",
    detailedDescription:
      "A server-rendered Flask application that queries the OpenWeatherMap API for current weather conditions and presents them to the user through a simple web interface.",
    problem: "ADD PROBLEM",
    solution: "ADD SOLUTION",
    technologies: ["Python", "Flask", "OpenWeatherMap API"],
    features: ["ADD FEATURES"],
    myContribution:
      "Built during the Python Development Internship at TechnoHacks Solutions Private Limited (June–July 2025).",
    architecture: "ADD ARCHITECTURE DETAILS",
    githubUrl: "https://github.com/MayankSNegi/Weather-Forecast-Application",
    liveUrl: "",
    image: "",
    screenshots: [],
  },
  {
    id: "web-scraper",
    title: "Web Scraper",
    tagline: "Python-based data extraction tool",
    shortDescription: "A Python web scraper built to extract structured data from web pages.",
    detailedDescription: "ADD PROJECT DESCRIPTION",
    problem: "ADD PROBLEM",
    solution: "ADD SOLUTION",
    technologies: ["Python"],
    features: ["ADD FEATURES"],
    myContribution:
      "Built during the Python Development Internship at TechnoHacks Solutions Private Limited (June–July 2025).",
    architecture: "ADD ARCHITECTURE DETAILS",
    githubUrl: "https://github.com/MayankSNegi/WebScraperApp",
    liveUrl: "",
    image: "",
    screenshots: [],
  },
];

export default projects;
