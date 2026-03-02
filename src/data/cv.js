export const cvData = {
  name: "UKOBUKEYE Mordekai",
  profile: "Innovative and motivated software developer with strong experience in web development, AI, IoT, and blockchain technologies. Skilled at creating interactive web applications and smart solutions for agriculture, energy, waste management, and marketplaces. Strong problem-solving, teamwork, and project management skills.",
  skills: {
    frontend: "React, Redux, TailwindCSS, Material-UI, SCSS",
    backend: "Node.js, Express, Python",
    database: "MongoDB, PostgreSQL",
    other: "Smart Contracts, IoT, AI, Chart.js, Recharts, Leaflet, Elasticsearch, Auth0",
    tools: "Git, GitHub, VS Code"
  },
  education: "Saint Laurent Gaseke TSS - Senior 6 / Level 5, Rwanda",
  projects: [
    "AgriConnect Rwanda - Digital marketplace connecting Rwandan farmers with buyers to reduce post-harvest losses. Tech: React, Node.js, MongoDB, Mobile",
    "Solar P2P Network - Peer-to-peer energy trading system allowing households to sell excess solar power. Tech: React, Smart Contracts, IoT, Real-time Trading",
    "Smart Waste AI – AI route optimization for garbage collection based on fill levels and traffic. Tech: AI, Node.js",
    "Crowd Predictor – Predicting bus occupancy rates using historical data for commuters. Tech: Python, API",
    "School Management System – Comprehensive platform to manage students, teachers, attendance, and grades. Tech: React, Express, PostgreSQL, Tailwind",
    "Job Finder Website – Smart job board with AI-powered recommendations and one-click applications. Tech: React, Elasticsearch, Node.js, Auth0",
    "Movie App – Browse trending movies, view details, and save favorites using TMDB API. Tech: React, Redux, TMDB API, SCSS",
    "Weather App Advanced – Hyper-local weather forecasts with interactive maps, hourly graphs, and severe weather alerts. Tech: React, Chart.js, OpenWeatherMap, Leaflet",
    "Ecommerce Admin Dashboard – Dashboard to manage products, orders, customers, and sales analytics. Tech: React, Material-UI, Recharts"
  ],
  languages: [
    "Kinyarwanda: Fluent",
    "English: Fluent"
  ],
  references: "Available upon request"
};

// Ibi na byo gukoresha mu gukurura dosiye (niba ushaka)
export const cvText = `UKOBUKEYE Mordekai

Profile
${cvData.profile}

Skills
Frontend: ${cvData.skills.frontend}
Backend: ${cvData.skills.backend}
Database: ${cvData.skills.database}
Other Technologies: ${cvData.skills.other}
Tools: ${cvData.skills.tools}

Education
${cvData.education}

Projects
${cvData.projects.map(p => `- ${p}`).join('\n')}

Languages
${cvData.languages.map(l => `- ${l}`).join('\n')}

References
${cvData.references}`;