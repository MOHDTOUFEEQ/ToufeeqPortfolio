import blog from "../../assets/blog.png";
import mystryMessage from "../../assets/Mystry_Message-removebg-preview.png";
import eCommerce from "../../assets/Instagram_DP.jpeg";
import gsap from "gsap";
import { useEffect } from "react";

const projectLanguages = {
  blog: ["HTML", "CSS","Tailwind CSS","JavaScript", "React.js","React Hook Form", "Appwrite", "JWT (JSON Web Token)"],
  mystryMessages:[
    "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "React Hook form", "Next Auth"
  ],
  eCommerce:["JavaScript", "React.js","React Hook Form", "Appwrite", "TawilWind"],
};
function SmallScreenProject() {
  useEffect(() => {
    gsap.set("#text2", { x: "70%" });
    gsap.set("#text1", { x: "-30%" });
    gsap.to("#text1", { x: "60%", ease: "none", duration: 3, yoyo: true, repeat: -1 });
    gsap.to("#text2", { x: "50%", ease: "none", duration: 3, yoyo: true, repeat: -1 });
  }, []);

  const projects = [
    {
      title: "My Blog",
      imgSrc: blog,
      link: "https://myblog-git-main-mohd-toufeeqs-projects.vercel.app/",
      buttonLabel: "Visit My Blog",
      languages: projectLanguages.blog,
    },
    {
      title: "Mystery Message Platform",
      imgSrc: mystryMessage,
      link: "https://mystry-messages-kohl.vercel.app/",
      buttonLabel: "View Mystery Message",
      languages: projectLanguages.mystryMessages,
    },
    {
      title: "Instagram Clone",
      imgSrc: eCommerce,
      link: "https://instagram-clone-zeta-three-95.vercel.app/",
      buttonLabel: "Visit Messenger",
      languages: projectLanguages.eCommerce,
    },
  ];

  return (
    <div id="projects" style={styles.font}>
      {projects.map((project, index) => (
        <div key={index} style={styles.section}>
          <h2 style={styles.heading}>{project.title}</h2>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
            <img src={project.imgSrc} alt={project.title} style={styles.image} />
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
            <button style={styles.button}>{project.buttonLabel}</button>
          </a>
          <div style={styles.languagesSection}>
            <h3 style={styles.subHeading}>Languages & Tools:</h3>
            <div style={styles.flexContainer}>
              {project.languages.map((lang, i) => (
                <div key={i} style={styles.flexItem}>
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="text_animate">
        <h1 id="text1">Innovating the Web</h1>
      </div>
      <div className="text_animate2">
        <h1 id="text2" style={styles.animatedText}>Coding the Future</h1>
      </div>
    </div>
  );
}

const styles = {
  font: { fontFamily: "Arial, sans-serif" },
  section: {
    padding: "20px",
    textAlign: "center",
    marginBottom: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: { fontSize: "1.5rem", marginBottom: "10px", color: "#333" },
  subHeading: { fontSize: "1.2rem", marginBottom: "10px", color: "#555" },
  image: { width: "100%", maxWidth: "300px", borderRadius: "8px", marginBottom: "10px" },
  button: { padding: "10px 15px", fontSize: "1rem", color: "#fff", backgroundColor: "#000", border: "none", borderRadius: "4px", cursor: "pointer" },
  buttonLink: { textDecoration: "none" },
  link: { display: "block" },
  flexContainer: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "10px" },
  flexItem: { padding: "10px 15px", border: "1px solid #ddd", borderRadius: "4px", backgroundColor: "#fff", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", fontSize: "0.9rem", color: "#333" },
  languagesSection: { paddingTop: "15px" },
  animatedText: { fontFamily: "Overpass, Serif", fontWeight: "bolder" },
};

export default SmallScreenProject;
