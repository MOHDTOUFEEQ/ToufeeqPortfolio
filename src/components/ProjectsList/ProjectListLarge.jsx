import { useEffect } from 'react';
import DjangoLogo from '../../assets/django.png';
import JavaScriptLogo from '../../assets/JavaScript-logo.png';

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
        url: "https://monster-hunter-five.vercel.app/", // replace with actual GitHub repo if different
        logo: JavaScriptLogo, // optional: use a custom pixel-art or game icon if you have one
        alt: "Megathron Game",
        name: "Megathron — 8-Bit Web3 Shooter",
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
      className: "pr1",
      url: "https://github.com/MOHDTOUFEEQ/Django-Projects/tree/main/Django_Chatting_App",
      logo: DjangoLogo,
      alt: "Django Chatting App",
      name: "Django Chatting App",
      languages: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      className: "pr3",
      url: "https://github.com/MOHDTOUFEEQ/Django-Projects/tree/main/Django-PizzaStore",
      logo: DjangoLogo,
      alt: "The Pizza Haven",
      name: "The Pizza Haven",
      languages: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      className: "pr5",
      url: "https://github.com/MOHDTOUFEEQ/Ecommerce",
      logo: DjangoLogo,
      alt: "E-Commerce",
      name: "E-Commerce",
      languages: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      className: "pr2",
      url: "https://github.com/MOHDTOUFEEQ/JavaScript-Projects/tree/main/JavaScript_weatherApp",
      logo: JavaScriptLogo,
      alt: "WeatherWhiz",
      name: "WeatherWhiz",
      languages: ["JavaScript", "HTML", "CSS", "APIs", "JSON"]
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
