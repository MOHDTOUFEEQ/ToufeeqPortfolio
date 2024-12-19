import cubetoImage from "../../assets/cubeto.jpg";
import project2Image from "../../assets/project2.png";
import salonImage from "../../assets/photo-1635273051937-a0ddef9573b6.avif";
import gsap from "gsap";
import { useEffect } from "react";

function SmallScreenProject() {
    useEffect(()=>{
          // GSAP animations for text movement
    gsap.set("#text2", { x: "70%" });
    gsap.set("#text1", { x: "-30%" });

    gsap.to("#text1", {
      x: "60%",
      ease: "none",
      duration: 5,
      yoyo: true,
      repeat: -1,
    });

    gsap.to("#text2", {
      x: "50%",
      ease: "none",
      duration: 5,
      yoyo: true,
      repeat: -1,
    });
    },[])
  return (
    <div id="projects" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Section 1: Blog */}
      <div style={styles.section}>
        <h2 style={styles.heading}>My Blog</h2>
        <a
          href="https://myblog-git-main-mohd-toufeeqs-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <img src={cubetoImage} alt="Cubeto" style={styles.image} />
        </a>
        <a
          href="https://myblog-git-main-mohd-toufeeqs-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.buttonLink}
        >
          <button style={styles.button}>Visit My Blog</button>
        </a>
      </div>

      {/* Section 2: Cuberto */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Cuberto</h2>
        <a
          href="https://github.com/MOHDTOUFEEQ/HTML-CSS-JS/tree/main/Cuberto"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <img src={project2Image} alt="Cuberto Project" style={styles.image} />
        </a>
        <a
          href="https://github.com/MOHDTOUFEEQ/HTML-CSS-JS/tree/main/Cuberto"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.buttonLink}
        >
          <button style={styles.button}>View Cuberto</button>
        </a>
      </div>

      {/* Section 3: Salon */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Salon</h2>
        <a
          href="https://salon-gold.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <img src={salonImage} alt="Salon Project" style={styles.image} />
        </a>
        <a
          href="https://salon-gold.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.buttonLink}
        >
          <button style={styles.button}>Visit Salon</button>
        </a>
      </div>
      <div className="text_animate">
        <h1 id="text1">Innovating the Web</h1>
      </div>
      <div className="text_animate2">
        <h1 id="text2" style={{fontFamily:"Overpass,Serif", fontWeight:"bolder"}}>Coding the Future</h1>
      </div>
    </div>
  );
}

// Inline styles for better layout control
const styles = {
  section: {
    padding: "20px",
    textAlign: "center",
    marginBottom: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#000", // Set all buttons to black
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
},
  buttonLink: {
    textDecoration: "none",
  },
  link: {
    display: "block",
  },
};

export default SmallScreenProject;
