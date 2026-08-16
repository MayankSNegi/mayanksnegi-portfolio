// Achievements — data-driven, grouped by category.
// Categories currently in use: "Hackathon", "Research", "Contest", "Volunteering".
// Future categories ("Certification", "Award") can be added without redesigning AchievementSection.jsx / AchievementCard.jsx.
import yudhCertificate from "../assets/achievements/yudh1.3_certificate.png";
import bdc25Certificate from "../assets/achievements/bdc25_certificate.png";
const achievements = [
  {
    category: "Hackathon",
    title: "Spark3 Hackathon Winner",
    organizer: "HackIndia",
    date: "2024",
    scale: "200+ teams",
    description: "Winner of the Spark3 Hackathon organized by HackIndia, competing against 200+ teams.",
    certificate: "/achievements/mayank_singh_negi_spark3_certificate.pdf",
    link:"https://www.linkedin.com/posts/mayanksnegi_hackindia-spark3hackathon-web3-activity-7234989956123746305-1ouq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAET0eB8B-fxhm_3IqOdly3aa8-4t2PH_IA8",
  },

  {
    category: "Research",
    title: "Dynamic Data Driven Employment Forecasting Model",
    authors: "Mayank Singh Negi",
    conference: "IEEE Xplore",
    year: "2026",
    status: "Published on IEEE Xplore",
    paperId: "ICASS537",
    abstract: "Artificial Intelligence (AI) is reshaping global labor markets by automating repetitive tasks while creating new opportunities in data-driven and technology-intensive sectors. This paper presents a Dynamic Data-Driven Employment Forecasting Model (DDEFM) that predicts employment trends using a hybrid machine learning framework integrating time-series forecasting, natural language processing, and sectoral analysis. The model combines real-world labor datasets, AI adoption metrics, and investment indicators to evaluate employment volatility across sectors. The research contributes a technical methodology to forecast job creation and decline across industries such as healthcare, IT, education, and green energy. Experimental results demonstrate the model’s ability to reduce prediction error by 12–18% compared to baseline statistical models. This study provides a scalable framework for policymakers and industries to plan workforce development in the AI era.",
    paperLink: "https://ieeexplore.ieee.org/document/11547476/",
    certificate: "/achievements/mayank_singh_negi_icass537_certificate.pdf",
  },
  {
    category: "Research",
    title: "The Future of Generative AI: Unlocking Potential, Solving Problems",
    authors: "Mayank Singh Negi",
    conference: "ICIRD-2025",
    year: "2025",
    status: "Currently not Published",
    paperId: "ICIRD154",
    abstract: "Generative AI is transforming the industries by enabling the creation of text, images, audio and other materials in high quality using deep learning models like Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and Transformers. This technology is raising advancement in creativity, accelerating medical R&D, and providing personalized education at scale. However, rapid improvements to generative AI also present significant problems, such as ethical issues, concerns over privacy, biases, misinformation, and abuse of the technology. To ensure that AI evolves in a responsible and ethical manner, this paper analyzes the multi-industry scope of generative AI, identifies the most significant constraints, and provides recommendations. Controlled privacy and societal value respecting advancement of Generative AI is possible through interdisciplinary collaboration.",
    paperLink: "",
    certificate: "/achievements/mayank_singh_negi_icird154_certificate.pdf",
  },

  {
    category: "Contest",
    title: "InnoSkill 2026 Winner",
    organizer: "Manav Rachna University Tech Fest",
    date: "April 2026",
    description: "InnoSkill Code Debugging Competition 2026, Competed as a team of 5, solving coding bugs and logic errors under time pressure. Each problem helped us think better and work together more effectively. This experience improved our problem-solving skills and showed the importance of teamwork",
    certificate: "/achievements/mayank_singh_negi_innoskill_Certiticate.pdf",
    link:"https://www.linkedin.com/posts/mayanksnegi_innoskill2026-codedebugging-coding-ugcPost-7448725082924810240-Ed24/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAET0eB8B-fxhm_3IqOdly3aa8-4t2PH_IA8",
  },
  {
    category: "Contest",
    title: "YUDH 1.3 Winner",
    organizer: "Coding Club MRU",
    date: "August 2024",
    description: "Won the YUDH 1.3 coding contest hosted by the Coding Club at Manav Rachna University.",
    certificate: yudhCertificate,
    link:"https://www.linkedin.com/posts/mayanksnegi_codingchampions-hackathonwinners-codingclubmru-activity-7234587020482732033-ArpL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAET0eB8B-fxhm_3IqOdly3aa8-4t2PH_IA8",
  },

  {
    category: "Volunteering",
    title: "Blood Donation Camp Volunteer",
    organizer: "ISR",
    date: "16-09-2025",
    description: "Assisted in organizing and coordinating a blood donation camp, supporting donor registration, participant guidance, and overall event management.",
    certificate: bdc25Certificate,
  },
];

export default achievements;
