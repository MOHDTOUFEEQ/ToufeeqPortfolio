import { useEffect } from 'react';
import DjangoLogo from '../../assets/django.png';
import JavaScriptLogo from '../../assets/JavaScript-logo.png';
import reactLogo from '../../assets/react.png';
import deepLearningLogo from '../../assets/deepLearning.jpg';

function rotating(elementSelector) {
  const mouseElement = document.querySelector(".upperrotating_div");
  const targetElement = document.querySelector(elementSelector);
  const screenWidth = window.innerWidth;

  if (screenWidth > 768 && targetElement) {
    targetElement.addEventListener("mousemove", (dets) => {
      mouseElement.style.opacity = "1";
      mouseElement.style.transform = `translate(${dets.pageX}px, ${dets.pageY}px)`;
    });

    targetElement.addEventListener("mouseleave", () => {
      mouseElement.style.opacity = "0";
    });
  }
}

function ProjectListLarge() {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      const projectClasses = [".pr1", ".pr2", ".pr3", ".pr4", ".pr5"];
      projectClasses.forEach(cls => rotating(cls));
    }

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 768) {
        const projectClasses = [".pr1", ".pr2", ".pr3", ".pr4", ".pr5"];
        projectClasses.forEach(cls => rotating(cls));
      }
    };

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
const projects = [
  {
    className: "pr1",
    url: "https://monster-hunter-five.vercel.app/",
    logo: reactLogo,
    alt: "Megathron Game",
    name: "⭐ Megathron — 8-Bit Web3 Shooter",
    languages: [
      "React.js (Vite)",
      "HTML Canvas",
      "FastAPI",
      "Python",
      "Solana Wallet",
      "MySQL",
      "AI Image Generation",
      "Web3"
    ]
  },
  {
    className: "pr2",
    url: "https://github.com/MOHDTOUFEEQ/Fruit-Vegetables_Classficaitaion",
    logo: "https://cdn-icons-png.flaticon.com/512/8365/8365406.png",
    alt: "Fruit & Vegetable Classification",
    name: "Fruit & Vegetable Classification (Deep Learning)",
    languages: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "OpenCV", "Matplotlib"]
  },
  {
    className: "pr3",
    url: "https://instagram-clone-zeta-three-95.vercel.app/",
    logo: reactLogo,
    alt: "Instagram Clone",
    name: "Instagram Clone",
    languages: ["JavaScript", "React.js", "React Hook Form", "Appwrite", "Tailwind"]
  },
  {
    className: "pr4",
    url: "https://github.com/MOHDTOUFEEQ/Django-Projects/tree/main/Django_Chatting_App",
    logo: DjangoLogo,
    alt: "Django Chatting App",
    name: "Django Chatting App",
    languages: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    className: "pr5",
    url: "https://github.com/MOHDTOUFEEQ/Ecommerce",
    logo: DjangoLogo,
    alt: "E-Commerce",
    name: "E-Commerce",
    languages: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"]
  }
];



  return (
    <div id="projectsList" style={{backgroundColor: 'white !important'}}>
      <div className="upperrotating_div">
        <div className="rotating-div">
          <p className="text">Click, Me!</p>
        </div>
      </div>
      {projects.map(({ className, url, logo, alt, name, languages }, index) => (
        <div key={index} className={`firstproject ${className}`} style={{ cursor: "none" }}>
          <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="flex">
              <div className="firstproject_left" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2vw' }}>
                <img src={logo} alt={alt} />
                <i className="fa-solid fa-minus"></i>
                <span className="project_name">{name}</span>
                {/* Displaying languages array */}
                <span className="project_languages" style={{ marginLeft: '10px', fontSize: '0.9rem', color: 'gray' }}>
                  [{languages.join(', ')}]
                </span>
              </div>
              <div className="firstproject_right">
                <button>Click to preview</button>
              </div>
            </div>
          </a>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProjectListLarge;
