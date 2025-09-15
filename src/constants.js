// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import djangologo from './assets/tech_logo/django.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import pandaslogo from './assets/tech_logo/pandas.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import numpylogo from './assets/tech_logo/numpy1.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import sklearnlogo from './assets/tech_logo/scikit-learn.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import vitlogoa from './assets/education_logo/vitlogo.png';
import dpslogo from './assets/education_logo/dps_logo.png';
import mahatmalogo from './assets/education_logo/image.png';

// Project Section Logo's
import farmmarketLogo from './assets/work_logo/farmmarket.png';
import wanderlustLogo from './assets/work_logo/wanderlust.png';
import ecomLogo from './assets/work_logo/iimage.png';
import trafficlogo from './assets/work_logo/npm.png';
import taskremLogo from './assets/work_logo/iiimage.png';
import webverLogo from './assets/work_logo/image.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Django', logo: djangologo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'NumPy', logo: numpylogo },
      { name: 'Pandas', logo: pandaslogo  },
      { name: 'scikit-learn', logo: sklearnlogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
      company: "Oracle University",
      date:  " September 2025",
      desc: "I earned the Oracle Certified Professional – Oracle Cloud Infrastructure (OCI) 2025 Certified Developer Professional certification from Oracle University. This certification validates my skills in designing, developing, and deploying secure, scalable cloud applications. I gained expertise in OCI core services, IAM, security, automation with APIs/SDKs, and serverless solutions. It also enhanced my knowledge of DevOps, Kubernetes, monitoring, and cost optimization on Oracle Cloud.",
      skills: [
        "Oracle Cloud Infrastructure (OCI) Core Services",
       " Cloud Application Development",
       " Identity and Access Management (IAM)",
     "  Infrastructure as Code (IaC)",
      "  Monitoring, Security, and Cost Optimization",
        
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Developer ",
      company: "Apna College",
      date: "July 2023 ",
      desc: "Apna College’s Delta 6.0 Full Stack Web Development Course is a beginner-friendly MERN program covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, and advanced topics like cloud deployment, real-time apps, and testing. It includes hands-on projects (Spotify clone, To-Do List, Airbnb, Zerodha, ChatGPT-style app, LinkedIn, GitHub, Zoom clone, etc.) to build industry-level skills.",
      skills: [
        "HTML", "CSS", "JavaScript", "React"," Node.js", "Express", "MongoDB", "SQL", "Cloud Deployment", "Real-time Apps", "Testing",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Python Essentials",
      company: "Great Learning",
      date: "September 2023"  ,
      desc: "The Python Essentials course by Great Learning is a beginner-friendly program that teaches Python fundamentals like variables, functions, data structures, and file handling. It also covers advanced topics such as regular expressions and testing with Pytest. Learners gain practical skills with hands-on exercises and receive a certificate upon completion, enhancing their career opportunities.",
      skills: [
        "Python Basics", "Data Structures", "File Handling","Problem Solving",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: vitlogoa, // Replace with actual image
      school: "VIT Bhopal University",
      degree: "B.Tech in Computer Science and Engineering",
      date: "2023 - Present",
      grade: "Ongoing",
      desc: "Currently pursuing B.Tech in Computer Science and Engineering with a focus on full-stack development, machine learning, and software systems. Actively involved in technical clubs and hackathons to enhance practical skills.",
    },
    {
      id: 1,
      img: dpslogo, // Replace with actual image
      school: "Darbhanga Public School",
      degree: "Senior Secondary Education - PCM",
      date: "2020 - 2022",
      grade: "Passed",
      desc: "Completed Class 12 with Physics, Chemistry, and Mathematics. Built strong foundations in analytical thinking and logical problem-solving.",
    },
    {
      id: 2,
      img: mahatmalogo, // Replace with actual image
      school: "Mahatma Gandhi Shikshan Sansthan",
      degree: "Secondary Education - Science",
      date: "2019 - 2020",
      grade: "Passed",
      desc: "Completed Class 10 education with core focus on Science and Computer Applications, laying the base for future tech learning.",
    },
  ];
  
  export const projects = [
      {
      id: 0,
      title: "Farm Market",
      description:
        "A smart agriculture web platform built using Django. Integrated ML models for crop recommendation and yield prediction. Includes dual login for Farmers and Buyers, direct selling, and role-based access control.",
      image: farmmarketLogo, // Add actual image
      tags: ["Django", "HTML", "CSS", "JavaScript", "ML", "SQLite", "Python"],
      github: "https://github.com/mishrarakesh-1902/farm_market_project",
      webapp: "https://farm-market-project-8.onrender.com",
    },
    {
      id: 1,
      title: "Wanderlust",
      description:
        "A full-stack rental booking web app developed using Node.js and Express. Integrated Mapbox for property location, with full authentication, listing, filtering, and reviews.",
      image: wanderlustLogo, // Add actual image
      tags: ["Node.js", "Express", "MongoDB", "EJS", "Mapbox", "HTML", "CSS"],
      github: "https://github.com/mishrarakesh-1902/wanderlust",
      webapp: "https://majorproject-lg4r.onrender.com",
    },
    {
      id: 2,
      title: "E-shopper",
      description:
        "An online shopping platform built with Django. Features include product listing, cart system, user authentication, and brand management via Django admin panel.",
      image: ecomLogo, // Add actual image
      tags: ["Django", "HTML", "CSS", "JavaScript", "SQLite"],
      github: "https://github.com/mishrarakesh-1902/e-commerce",
      webapp: "https://e-commerce-4-l3fc.onrender.com",
    },
    {
      id: 3,
      title: "Traffic Detection System",
      description:
        "Used YOLOv4 and OpenCV to build a traffic monitoring system with real-time vehicle detection. Integrated with Streamlit for live visualization.",
      image: trafficlogo, // Add actual image
      tags: ["Python", "YOLOv4", "OpenCV", "Streamlit", "NumPy", "Pandas"],
      github: "https://github.com/mishrarakesh-1902/traffic-detection",
      webapp: "https://traffic-detection.streamlit.app", // or keep blank if not hosted
    },
    {
      id: 4,
      title: "AI_TOOLS_HUB",
      description:
        " Built a MERN stack platform by integrating AI services including image generation (Stability AI), text summarization (Groq), conversational AI (OpenAI), and recipe generation (Spoonacular API + OpenAI) for versatile functionality ",
      image: taskremLogo,
      tags: ["MERN" , "API Integration", "AI Services", "JavaScript", "CSS"],
      github: "https://github.com/mishrarakesh-1902/AI_TOOL_HUB",
      webapp: "https://ai-tools-hub-1.onrender.com",
    },
    {
      id: 5,
      title: "APNA VIDEO CALL",    
      description:
        "Developed a real-time video calling and live chat application using the MERN stack, enabling seamless communication with WebRTC. Integrated secure authentication and responsive UI for smooth user experience.",
      image: webverLogo,
      tags: ["MERN", "WebRTC", "JavaScript", "CSS"],
      github: "https://github.com/mishrarakesh-1902/Apna-Video-Call",
      webapp: "https://apna-video-call-1-3lr7.onrender.com",
    },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  