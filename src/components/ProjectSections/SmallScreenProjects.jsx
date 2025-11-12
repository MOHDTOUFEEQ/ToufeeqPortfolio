import { useEffect } from "react";
import gsap from "gsap";

// ✅ Using same visuals from your BigScreenProject
const aiGif =
  "https://blog.paperspace.com/content/images/size/w1050/2020/01/Intro-HELLO-FUTURE-1920x1080_v2.gif";
const mystryGif =
  "https://i.pinimg.com/originals/ec/ec/36/ecec3687a972a20d8ba953b7f1bf4e43.gif";
const blogGif = "https://kraft.blog/uploads/blog-animated.gif";

const projectLanguages = {
  aiAttendance: [
    "Python",
    "Flask",
    "TensorFlow",
    "YOLOv8",
    "OpenCV",
    "React.js",
    "MongoDB",
  ],
  mystryMessages: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Next Auth",
  ],
  myBlogs: [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "Appwrite",
    "Zod",
    "JWT",
  ],
};

function SmallScreenProject() {
  useEffect(() => {
    gsap.set("#text2", { x: "70%" });
    gsap.set("#text1", { x: "-30%" });
    gsap.to("#text1", {
      x: "60%",
      ease: "none",
      duration: 3,
      yoyo: true,
      repeat: -1,
    });
    gsap.to("#text2", {
      x: "50%",
      ease: "none",
      duration: 3,
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const projects = [
    {
      title: "AI-Based Attendance System",
      imgSrc: aiGif,
      link: "https://github.com/MOHDTOUFEEQ/AI-student-attendance-system",
      buttonLabel: "View Project on GitHub",
      languages: projectLanguages.aiAttendance,
    },
    {
      title: "Mystery Message Platform",
      imgSrc: mystryGif,
      link: "https://mystry-messages-kohl.vercel.app/",
      buttonLabel: "Visit Mystery Message Platform",
      languages: projectLanguages.mystryMessages,
    },
    {
      title: "MyBlogs – Personal Blog Platform",
      imgSrc: blogGif,
      link: "https://www.toufeeqblogs.info/",
      buttonLabel: "Visit My Blog Platform",
      languages: projectLanguages.myBlogs,
    },
  ];

  return (
    <div id="projects" style={styles.font}>
      {projects.map((project, index) => (
        <div key={index} style={styles.section}>
          <h2 style={styles.heading}>{project.title}</h2>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              style={styles.image}
            />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.buttonLink}
          >
            <button style={styles.button}>{project.buttonLabel}</button>
          </a>
          <div style={styles.languagesSection}>
            <h3 style={styles.subHeading}>Tech Stack:</h3>
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

      {/* Animated Text */}
      <div className="text_animate">
        <h1 id="text1">Innovating the Web</h1>
      </div>
      <div className="text_animate2">
        <h1 id="text2" style={styles.animatedText}>
          Coding the Future
        </h1>
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
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  heading: { fontSize: "1.5rem", marginBottom: "10px", color: "#333" },
  subHeading: { fontSize: "1.2rem", marginBottom: "10px", color: "#555" },
  image: {
    width: "100%",
    maxWidth: "350px",
    borderRadius: "10px",
    marginBottom: "10px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  button: {
    padding: "10px 15px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#000",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonLink: { textDecoration: "none" },
  link: { display: "block" },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  flexItem: {
    padding: "10px 15px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    fontSize: "0.9rem",
    color: "#333",
  },
  languagesSection: { paddingTop: "15px" },
  animatedText: { fontFamily: "Overpass, Serif", fontWeight: "bolder" },
};

export default SmallScreenProject;
