import { useEffect, useState } from "react";
import screenshot3 from "../../assets/Screenshot3.png";
import animate1 from "../../assets/animate1.png";
import animate4 from "../../assets/mystry1.png";
import blog from "../../assets/blog.png";
import mystryMessage from "../../assets/Mystry_Message-removebg-preview.png";
import eCommerce from "../../assets/Instagram_DP.jpeg";
import animate2 from "../../assets/blog1.png";
import animate3 from "../../assets/animatePic.jpg";
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

        // Set project title and background
        document.querySelectorAll(".pack1, #home, #projects").forEach((el) => {
          el.style.backgroundColor = backgroundColor;
        });

        setCurrentProject(projectName);

        // 🧩 Hide all images first (fix for first image lingering)
        document.querySelectorAll(".magic_down img").forEach((img) => {
          img.style.opacity = "0";
        });

        // Fade all images in smoothly and evenly
        gsap.to(".magic_down img", {
          opacity: 1,
          stagger: 0.2,
          duration: 0.5,
          ease: "power1.inOut",
        });
      };

      const onMouseLeave = () => {
        mouseElement.style.opacity = "0";
        mouseElement.style.display = "none";
        image.style.filter = "grayscale(0%)";

        // 🧩 Hide all images again to reset
        document.querySelectorAll(".magic_down img").forEach((img) => {
          gsap.to(img, { opacity: 0, duration: 0.3 });
        });

        document.querySelectorAll(".pack1, #home, #projects").forEach((el) => {
          el.style.backgroundColor = "black";
        });
      };

      element.addEventListener("mousemove", onMouseMove);
      element.addEventListener("mouseleave", onMouseLeave);

      return () => {
        element.removeEventListener("mousemove", onMouseMove);
        element.removeEventListener("mouseleave", onMouseLeave);
      };
    };

    // Set up hover triggers
    setupMouseEffects(".cnt", ".cnt img", "#b4bacf", "MY BLOG");
    setupMouseEffects(".cnt2", ".cnt2 img", "#ffbc99", "Mystry App");
    setupMouseEffects(".cnt3", ".cnt3 img", "rgb(219, 202, 189)", "Instagram Clone");

    // Text animations
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

    return () => {
      document.querySelectorAll(".cnt, .cnt2, .cnt3").forEach((element) => {
        element.replaceWith(element.cloneNode(true));
      });
    };
  }, []);

  // Tech stack display
  const languages1 = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "React Hook Form", "Appwrite", "JWT (JSON Web Token)"];
  const languages2 = ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "React Hook Form", "Next Auth"];
  const languages3 = ["JavaScript", "React.js", "React Hook Form", "Appwrite", "Tailwind"];

  return (
    <div id="projects" style={{ backgroundColor: "black" }}>
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
            <img src={animate2} alt="Screenshot 1" />
            <img src={screenshot3} alt="Screenshot 3" />
            <img src={animate4} alt="Animation 4" />
          </div>
        </div>
      </div>

      <div className="pack" style={{ backgroundColor: "#0000" }}>
        {/* PROJECT 1 */}
        <div className="cnt" style={{ border: ".5px solid rgb(141, 152, 142)" }}>
          <a className="text-decoration-none text-black" target="_blank" href="https://myblog-git-main-mohd-toufeeqs-projects.vercel.app/">
            <div
              className="languages-used"
              style={{
                background: "#fff",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              {languages1.map((lang, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#333",
                    margin: "5px",
                    padding: "8px 15px",
                    border: "2px solid black",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
            <div className="min-h-[70%] bg-white h-auto" style={{position:'relative',top:'130px'}}>
              <img className="h-full w-full" src="https://blog.paperspace.com/content/images/size/w1050/2020/01/Intro-HELLO-FUTURE-1920x1080_v2.gif" alt="Blog Project" />
              <div className="bg-[#ffffff] absolute bottom-[10px] left-[7vw]">
                <button
                  className="cnt_info"
                  style={{
                    border: "1px solid black",
                    fontSize: "1rem",
                    position: "relative",
                    bottom: "40px",
                    left: "-1.4vw",
                  }}
                >
                  View Blog!!
                </button>
              </div>
            </div>
          </a>
        </div>

        {/* PROJECT 2 */}
        <div className="cnt2" style={{ border: ".5px solid rgb(141, 152, 142)", cursor: "none" }}>
          <a className="text-decoration-none text-black" target="_blank" href="https://mystry-messages-kohl.vercel.app/">
            <div
              className="languages-used"
              style={{
                background: "#ffffff",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              {languages2.map((lang, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#333",
                    margin: "5px",
                    padding: "8px 15px",
                    border: "2px solid black",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
            <div style={{ background: "#ffffff" }}>
              <img src={mystryMessage} alt="Mystry App" style={{ height: "70%" }} />
              <button
                className="cnt_info"
                style={{
                  border: "1px solid black",
                  fontSize: "1rem",
                  position: "absolute",
                  bottom: "10px",
                  left: "5.4vw",
                }}
              >
                Mystery Message Platform
              </button>
            </div>
          </a>
        </div>
      </div>

      {/* PROJECT 3 */}
      <div className="pack1" style={{ backgroundColor: "#0000" }}>
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

        <div className="cnt3" style={{ border: ".5px solid rgb(141, 152, 142)" }}>
          <a className="text-decoration-none text-black" target="_blank" href="https://instagram-clone-zeta-three-95.vercel.app/">
            <div
              className="languages-used"
              style={{
                background: "#fff",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              {languages3.map((lang, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#333",
                    margin: "5px",
                    padding: "8px 15px",
                    border: "2px solid black",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
            <div style={{ height: "80%" }}>
              <div className="justify-center align-center" style={{ display: "flex", height: "80%" }}>
                <img src={eCommerce} style={{ height: "100%", width: "100%" }} alt="Instagram Clone" />
              </div>
              <button
                style={{
                  border: "1px solid #404040",
                  fontSize: "1rem",
                  position: "relative",
                  bottom: "10px",
                  left: "4vw",
                  background: "#ffffff",
                  padding: "13px",
                  borderRadius: "13px",
                  fontWeight: "500",
                }}
              >
                Instagram Clone
              </button>
            </div>
          </a>
        </div>
      </div>

      {/* Animated Text */}
      <div style={{ backgroundColor: "#fff" }}>
        <div className="text_animate">
          <h1 id="text1">Innovating the Web</h1>
        </div>
        <div className="text_animate2">
          <h1 id="text2">Coding the Future</h1>
        </div>
      </div>
    </div>
  );
}

export default BigScreenProject;
