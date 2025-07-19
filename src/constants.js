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
import ecomLogo from './assets/work_logo/image.png';
import trafficlogo from './assets/work_logo/npm.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import webverLogo from './assets/work_logo/web_dig.png';
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
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
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
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
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