import { useEffect, useState } from "react";
import screenshot1 from "../../assets/Screenshot 2023-11-19 211048.png";
import screenshot3 from "../../assets/Screenshot3.png";
import animate1 from "../../assets/animate1.png";
import animate4 from "../../assets/animate4.png";
import cubetoImage from "../../assets/cubeto.jpg";
import project2Image from "../../assets/project2.png";
import salonImage from "../../assets/photo-1635273051937-a0ddef9573b6.avif";
import animate2 from "../../assets/animate2.png";
import animate3 from "../../assets/animate3.png";
import gsap from "gsap";
function BigScreenProject() {
  const [currentProject, setCurrentProject] = useState("SALON");

  useEffect(() => {
    const setupMouseEffects = (elementSelector, imgSelector, backgroundColor, projectName) => {
      const mouseElement = document.querySelector(".mouse");
      const element = document.querySelector(elementSelector);
      const image = document.querySelector(imgSelector);

      if (!element || !image || !mouseElement) return;

      const onMouseMove = (e) => {
        mouseElement.style.opacity = "1";
        mouseElement.style.display = "block";
        mouseElement.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
        image.style.filter = "grayscale(100%)";

        document.querySelectorAll(".pack1, #home, #projects, #moreProjects, #projectsList").forEach((el) => {
          el.style.backgroundColor = backgroundColor;
        });

        // Update the current project name
        setCurrentProject(projectName);
      };

      const onMouseLeave = () => {
        mouseElement.style.opacity = "0";
        mouseElement.style.display = "none";
        image.style.filter = "grayscale(0%)";

        document.querySelectorAll(".pack1, #home, #projects, #moreProjects, #projectsList").forEach((el) => {
          el.style.backgroundColor = "#fff";
        });
      };

      element.addEventListener("mousemove", onMouseMove);
      element.addEventListener("mouseleave", onMouseLeave);

      return () => {
        element.removeEventListener("mousemove", onMouseMove);
        element.removeEventListener("mouseleave", onMouseLeave);
      };
    };

    // Mouse effects for each section
    setupMouseEffects(".cnt", ".cnt img", "#b4bacf", "MY BLOG");
    setupMouseEffects(".cnt2", ".cnt2 img", "#ffbc99", "CUBERTO");
    setupMouseEffects(".cnt3", ".cnt3 img", "rgb(219, 202, 189)", "SALON");
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
    // Cleanup function to remove event listeners
    return () => {
      document.querySelectorAll(".cnt, .cnt2, .cnt3").forEach((element) => {
        element.replaceWith(element.cloneNode(true));
      });
    };
  }, []);

  return (
    <div id="projects">
      <div className="mouse">
        <div className="animatationbox1">
          <div className="magic_top">
            <div className="magic1"></div>
            <div className="magic2">
              <span>{currentProject}</span>
            </div>
          </div>
          <div className="magic_down">
            <img src={animate1} alt="Animation 1" />
            <img src={screenshot1} alt="Screenshot 1" />
            <img src={screenshot3} alt="Screenshot 3" />
            <img src={animate4} alt="Animation 4" />
          </div>
        </div>
      </div>

      <div className="pack">
        <div className="cnt">
          <a className="cuberto" target="_blank" href="https://myblog-git-main-mohd-toufeeqs-projects.vercel.app/">
            <img src={cubetoImage} alt="Cubeto" />
          </a>
          <a
            target="_blank"
            className="blog_link"
            style={{ textDecoration: "none" }}
            href="https://myblog-git-main-mohd-toufeeqs-projects.vercel.app/"
          >
            <button className="cnt_info">My Blog!!</button>
          </a>
        </div>
        <div className="cnt2">
          <a className="cuberto" target="_blank" href="https://github.com/MOHDTOUFEEQ/HTML-CSS-JS/tree/main/Cuberto">
            <img src={project2Image} alt="Project 2" />
          </a>
          <a
            target="_blank"
            className="cnt_link"
            style={{ textDecoration: "none" }}
            href="https://github.com/MOHDTOUFEEQ/HTML-CSS-JS/tree/main/Cuberto"
          >
            <button className="cnt_info">Cuberto</button>
          </a>
        </div>
      </div>

      <div className="pack1">
        <div className="mouse1">
          <div className="animatationbox1">
            <div className="magic_top">
              <div className="magic1"></div>
              <div className="magic2">
                <span>{currentProject}</span>
              </div>
            </div>
            <div className="magic_down">
              <img src={animate4} alt="Animation 4" />
              <img src={animate3} alt="Animation 3" />
              <img src={animate2} alt="Animation 2" />
              <img src={animate1} alt="Animation 1" />
            </div>
          </div>
        </div>
        <div className="cnt3">
          <a className="cuberto" target="_blank" href="https://salon-gold.vercel.app/">
            <img src={salonImage} alt="Salon" />
          </a>
          <a
            target="_blank"
            className="salon_link"
            style={{ textDecoration: "none" }}
            href="https://salon-gold.vercel.app/"
          >
            <button className="cnt_info">Salon</button>
          </a>
        </div>
      </div>

      <div className="text_animate">
        <h1 id="text1">Innovating the Web</h1>
      </div>
      <div className="text_animate2">
        <h1 id="text2">Coding the Future</h1>
      </div>
    </div>
  );
}

export default BigScreenProject;
