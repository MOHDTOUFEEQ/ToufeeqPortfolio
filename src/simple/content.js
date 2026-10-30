/**
 * Content for the /simple portfolio.
 * Update this file to change the profile, projects, skills, and achievements.
 * Leave a string empty when a detail is not available. Do not invent entries.
 *
 * Résumé files already in public/:
 * - /Toufeeq_CV.pdf (used by the animated homepage)
 * - /Toufeeq_Mohammed_CV.pdf
 * - /Resume.pdf
 */

import portrait from "../assets/Toufeeq_Image.png";
import megathronImage from "../assets/hackaton.jpeg";
import mysteryImage from "../assets/mystry1.png";
import blogImage from "../assets/blog1.png";
import deepLearningImage from "../assets/deepLearning.jpg";
import ecommerceImage from "../assets/eCommerce.webp";
import djangoLogo from "../assets/django.png";
import reactLogo from "../assets/react.png";

export const profile = {
  name: "Toufeeq Mohammed",
  initials: "TM",
  photo: portrait,
  photoAlt: "Toufeeq Mohammed",
  headline: "AI Engineer and Software Developer",
  introduction: [
    "I build intelligent, scalable software solutions that bridge AI and real-world applications.",
    "From machine learning to full-stack development, I focus on turning innovative ideas into practical technologies that make an impact in today's world.",
  ],
  email: "mohdtoufeeq1447@gmail.com",
  resume: "/Toufeeq_CV.pdf",
  github: "https://github.com/MOHDTOUFEEQ",
  linkedin: "https://www.linkedin.com/in/toufeeq-mohammed-956042266/",
};

export const about = {
  paragraphs: [
    "I am an AI Engineer and Software Developer pursuing an MSc in Artificial Intelligence at the University of Edinburgh, following a First-Class BSc in Computer Science from the University of West London.",
    "My interests lie in artificial intelligence, machine learning, computer vision, and software engineering. I enjoy exploring how emerging AI technologies can be applied to real-world challenges, building intelligent applications, and developing efficient, scalable software solutions.",
    "Beyond technical development, I contribute to the university community through student representation, collaborating with students and staff to improve the academic experience. I am passionate about continuous learning, innovation, and using technology to create meaningful impact.",
  ],
  study: [
    {
      id: "edinburgh",
      school: "University of Edinburgh",
      detail: "MSc Artificial Intelligence · Course representative",
      coursesLabel: "Courses:",
      coursework:
        "Machine learning, natural language processing, and probabilistic machine learning.",
    },
    {
      id: "uwl",
      school: "University of West London",
      detail: "BSc Computer Science · First-Class Honours",
      coursesLabel: "Courses:",
      coursework:
        "High-performance computing, distributed systems, algorithms and data structures, AI and machine learning, and software engineering.",
    },
  ],
};

export const experience = [
  {
    id: "venuza",
    role: "Software Engineering Intern",
    org: "Venuza Future Energy Ltd.",
    place: "Aberdeen, Scotland",
    dates: "Feb 2025 – Mar 2025",
    points: [
      "Contributed to a hydrogen energy management tool for the renewable energy sector.",
      "Built and tested energy simulation algorithms and backend logic for feasibility analysis.",
      "Developed interfaces and data workflows for cost analysis and reporting.",
    ],
  },
  {
    id: "perfexion",
    role: "Web Developer Intern",
    org: "Perfexion Information Technologies Pty Ltd.",
    place: "Hyderabad, India",
    dates: "Jun 2023 – Aug 2023",
    points: [
      "Built responsive web applications using React.js, JavaScript, and Django.",
      "Reduced page load times by 15% and increased user engagement by 20%.",
      "Integrated REST APIs for frontend-to-backend data exchange.",
    ],
  },
];

export const projects = [
  {
    id: "megathron",
    name: "Megathron",
    summary:
      "An 8-bit Web3 shooter. The portfolio lists it as a React and HTML Canvas game with FastAPI, Python, MySQL, Solana wallet support, and AI image generation.",
    technologies: [
      "React.js (Vite)",
      "HTML Canvas",
      "FastAPI",
      "Python",
      "Solana Wallet",
      "MySQL",
      "AI Image Generation",
      "Web3",
    ],
    image: megathronImage,
    imageAlt: "Megathron title screen with Fight Mode and Tournament Mode",
    imageFit: "cover",
    github: "",
    demo: "https://monster-hunter-five.vercel.app/",
    badges: ["Featured"],
  },
  {
    id: "ai-attendance",
    name: "AI-Based Attendance System",
    summary:
      "A classroom attendance system that detects and counts students from live video. Built with YOLOv8, TensorFlow, OpenCV, Flask, React.js, and MongoDB. Reported result: about 93% mAP@0.5 at 27 FPS.",
    technologies: [
      "Python",
      "Flask",
      "TensorFlow",
      "YOLOv8",
      "OpenCV",
      "React.js",
      "MongoDB",
    ],
    image:
      "https://blog.paperspace.com/content/images/size/w1050/2020/01/Intro-HELLO-FUTURE-1920x1080_v2.gif",
    imageAlt: "Preview for the AI-based attendance system",
    imageFit: "cover",
    github: "https://github.com/MOHDTOUFEEQ/AI-student-attendance-system",
    demo: "",
    badges: [],
  },
  {
    id: "mystery-message",
    name: "Mystery Message",
    summary:
      "A platform for sending and receiving anonymous messages through a unique link. Built with Next.js, TypeScript, Tailwind CSS, MongoDB, and NextAuth.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth",
    ],
    image: mysteryImage,
    imageAlt: "Mystery Message homepage, Welcome to Anonymous Messages",
    imageFit: "cover",
    github: "",
    demo: "https://mystry-messages-kohl.vercel.app/",
    badges: [],
  },
  {
    id: "myblogs",
    name: "MyBlogs",
    summary:
      "A personal blog platform with login and sign-up, built with React.js, Tailwind CSS, Redux Toolkit, Appwrite, Zod, and JWT.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Appwrite",
      "Zod",
      "JWT",
    ],
    image: blogImage,
    imageAlt: "MyBlogs homepage showing three blog posts",
    imageFit: "cover",
    github: "",
    demo: "https://www.toufeeqblogs.info/",
    badges: [],
  },
  {
    id: "fruit-vegetable",
    name: "Fruit and Vegetable Classification",
    summary:
      "A deep learning project for classifying fruits and vegetables, using TensorFlow, Keras, NumPy, Pandas, OpenCV, and Matplotlib.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "OpenCV",
      "Matplotlib",
    ],
    image: deepLearningImage,
    imageAlt: "Deep learning icon used for this project on the main portfolio",
    imageFit: "contain",
    github: "https://github.com/MOHDTOUFEEQ/Fruit-Vegetables_Classficaitaion",
    demo: "",
    badges: [],
  },
  {
    id: "instagram-clone",
    name: "Instagram Clone",
    summary:
      "A social interface modeled on Instagram, built with React.js, React Hook Form, Appwrite, and Tailwind.",
    technologies: [
      "JavaScript",
      "React.js",
      "React Hook Form",
      "Appwrite",
      "Tailwind",
    ],
    image: reactLogo,
    imageAlt: "React logo used for this project on the main portfolio",
    imageFit: "contain",
    github: "",
    demo: "https://instagram-clone-zeta-three-95.vercel.app/",
    badges: [],
  },
  {
    id: "django-chat",
    name: "Django Chatting App",
    summary:
      "A chat application built with Django, HTML, CSS, JavaScript, and Bootstrap.",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
    image: djangoLogo,
    imageAlt: "Django logo",
    imageFit: "contain",
    github:
      "https://github.com/MOHDTOUFEEQ/Django-Projects/tree/main/Django_Chatting_App",
    demo: "",
    badges: [],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    summary:
      "An online store built with Django, HTML, CSS, JavaScript, and Bootstrap.",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
    image: ecommerceImage,
    imageAlt: "Shopmaster mark used with the e-commerce project assets",
    imageFit: "contain",
    github: "https://github.com/MOHDTOUFEEQ/Ecommerce",
    demo: "",
    badges: [],
  },
];

export const skillGroups = [
  {
    id: "languages",
    title: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "GSAP",
      "Figma",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Django", "FastAPI", "Flask", "REST APIs"],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Natural Language Processing",
      "Probabilistic Machine Learning",
      "TensorFlow",
      "YOLOv8",
      "OpenCV",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    items: ["MySQL", "MongoDB", "Firebase", "Oracle"],
  },
  {
    id: "tools",
    title: "Tools",
    items: ["Git", "Docker", "Jenkins", "CI/CD", "AWS", "Linux", "Vercel"],
  },
  {
    id: "practice",
    title: "Practice",
    items: ["Agile", "Scrum", "Unit testing"],
  },
];

export const navigation = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
