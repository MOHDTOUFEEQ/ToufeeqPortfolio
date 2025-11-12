import DjangoLogo from "../../assets/django.png";
import reactLogo from "../../assets/react.png";
import deepLearningLogo from "../../assets/deepLearning.jpg";

function SmallScreenProjects() {
  const projects = [
    {
      id: "pr1",
      link: "https://monster-hunter-five.vercel.app/",
      image: reactLogo,
      name: "⭐ Megathron — 8-Bit Web3 Shooter",
      techStack: [
        "React.js (Vite)",
        "HTML Canvas",
        "FastAPI",
        "Python",
        "Solana Wallet",
        "MySQL",
        "AI Image Generation",
        "Web3",
      ],
    },
    {
      id: "pr2",
      link: "https://github.com/MOHDTOUFEEQ/Fruit-Vegetables_Classficaitaion",
      image: deepLearningLogo,
      name: "Fruit & Vegetable Classification (Deep Learning)",
      techStack: [
        "Python",
        "TensorFlow",
        "Keras",
        "NumPy",
        "Pandas",
        "OpenCV",
        "Matplotlib",
      ],
    },
    {
      id: "pr3",
      link: "https://instagram-clone-zeta-three-95.vercel.app/",
      image: reactLogo,
      name: "Instagram Clone",
      techStack: [
        "JavaScript",
        "React.js",
        "React Hook Form",
        "Appwrite",
        "Tailwind",
      ],
    },
    {
      id: "pr4",
      link: "https://github.com/MOHDTOUFEEQ/Django-Projects/tree/main/Django_Chatting_App",
      image: DjangoLogo,
      name: "Django Chatting App",
      techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      id: "pr5",
      link: "https://github.com/MOHDTOUFEEQ/Ecommerce",
      image: DjangoLogo,
      name: "E-Commerce",
      techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
    },
  ];

  return (
    <div id="projectsList" style={styles.container}>
      {projects.map((project) => (
        <div key={project.id} className={`firstproject ${project.id}`} style={styles.projectRow}>
          <div style={styles.logoContainer}>
            <img src={project.image} alt={project.name} style={styles.logo} />
          </div>
          <div style={styles.details}>
            <p style={styles.projectName}>{project.name}</p>
            <p style={styles.techStack}>[{project.techStack.join(", ")}]</p>
          </div>
          <div style={styles.buttonContainer}>
            <button
              style={styles.button}
              onClick={() => window.open(project.link, "_blank")}
            >
              Click to preview
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
    backgroundColor: "#ffffff",
  },
  projectRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "35px 15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
    boxSizing: "border-box",
  },
  logoContainer: {
    flex: "0 0 50px",
  },
  logo: {
    width: "40px",
    height: "40px",
    objectFit: "cover",
  },
  details: {
    flex: "1",
    marginLeft: "10px",
    textAlign: "left",
  },
  projectName: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#333",
    margin: "0",
  },
  techStack: {
    fontSize: "0.85rem",
    fontWeight: "400",
    color: "#555",
    marginTop: "5px",
  },
  buttonContainer: {
    flex: "0 0 auto",
  },
  button: {
    padding: "6px 10px",
    fontSize: "0.8rem",
    color: "#000",
    border: "1px solid black",
    backgroundColor: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default SmallScreenProjects;
