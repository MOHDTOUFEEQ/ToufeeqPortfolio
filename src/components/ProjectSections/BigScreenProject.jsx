import { useEffect, useState } from "react";
import screenshot3 from "../../assets/Screenshot3.png";
import animate1 from "../../assets/animate1.png";
import animate4 from "../../assets/mystry1.png";
import animate2 from "../../assets/blog1.png";
import animate3 from "../../assets/animatePic.jpg";
import gsap from "gsap";

function BigScreenProject() {
  const [currentProject, setCurrentProject] = useState("AI-Based System");

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

        document.querySelectorAll(".pack1, #home, #projects").forEach((el) => {
          el.style.backgroundColor = backgroundColor;
        });

        setCurrentProject(projectName);

        document.querySelectorAll(".magic_down img").forEach((img) => {
          img.style.opacity = "0";
        });

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

    // Updated hover titles
    setupMouseEffects(".cnt", ".cnt img", "#b4bacf", "AI-Based Attendance System");
    setupMouseEffects(".cnt2", ".cnt2 img", "#ffbc99", "Mystery Message Platform");
    setupMouseEffects(".cnt3", ".cnt3 img", "rgb(219, 202, 189)", "MyBlogs Platform");

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

  // Updated tech stacks
  const languages1 = ["Python", "Flask", "TensorFlow", "YOLOv8", "OpenCV", "React.js", "MongoDB"];
  const languages2 = ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Next Auth"];
  const languages3 = ["React.js", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Appwrite", "Zod", "JWT"];

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
            <img src={animate2} alt="Animation 2" />
            <img src={screenshot3} alt="Screenshot 3" />
            <img src={animate4} alt="Animation 4" />
          </div>
        </div>
      </div>

      {/* PROJECT 1 - AI Attendance System */}
      <div className="pack" style={{ backgroundColor: "#0000" }}>
        <div className="cnt" style={{ border: ".5px solid rgb(141, 152, 142)" }}>
          <a
            className="text-decoration-none text-black"
            target="_blank"
            href="https://github.com/MOHDTOUFEEQ/AI-student-attendance-system"
            rel="noreferrer"
          >
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
            <div className="min-h-[70%] bg-white h-auto" style={{ position: "relative", top: "130px" }}>
              <img
                className="h-full w-full"
                src="https://blog.paperspace.com/content/images/size/w1050/2020/01/Intro-HELLO-FUTURE-1920x1080_v2.gif"
                alt="AI Attendance System"
              />
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
                  AI-Based Attendance System
                </button>
              </div>
            </div>
          </a>
        </div>

        {/* PROJECT 2 - Mystery Message Platform */}
        <div
          className="cnt2"
          style={{
            border: ".5px solid rgb(141, 152, 142)",
            cursor: "none",
            background: "white",
          }}
        >
          <a
            className="text-decoration-none text-black"
            target="_blank"
            href="https://mystry-messages-kohl.vercel.app/"
            rel="noreferrer"
          >
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
              <img
                src="https://i.pinimg.com/originals/ec/ec/36/ecec3687a972a20d8ba953b7f1bf4e43.gif"
                alt="Mystery Message Platform"
                style={{ height: "300px" }}
              />
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

      {/* PROJECT 3 - MyBlogs Platform */}
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
          <a
            className="text-decoration-none text-black"
            target="_blank"
            href="https://www.toufeeqblogs.info/"
            rel="noreferrer"
          >
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
              <div
                className="justify-center align-center"
                style={{ display: "flex", height: "80%" }}
              >
                <img
                  src="https://kraft.blog/uploads/blog-animated.gif"
                  style={{ height: "70%", width: "100%", position: "relative", top: "15%" }}
                  alt="MyBlogs Platform"
                />
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
                MyBlogs – Personal Blog Platform
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
