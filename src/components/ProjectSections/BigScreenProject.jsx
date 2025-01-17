import { useEffect, useState } from "react";
import screenshot3 from "../../assets/Screenshot3.png";
import animate1 from "../../assets/animate1.png";
import animate4 from "../../assets/mystry1.png"; //
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

        document.querySelectorAll(".pack1, #home, #projects, #moreProjects, #projectsList").forEach((el) => {
          el.style.backgroundColor = backgroundColor;
        });

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

    setupMouseEffects(".cnt", ".cnt img", "#b4bacf", "MY BLOG");
    setupMouseEffects(".cnt2", ".cnt2 img", "#ffbc99", "Mystry App");
    setupMouseEffects(".cnt3", ".cnt3 img", "rgb(219, 202, 189)", "Instagram Clone");

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

  // Common Languages Used Section
  const languages1 = ["HTML", "CSS","Tailwind CSS","JavaScript", "React.js","React Hook Form", "Appwrite", "JWT (JSON Web Token)"]
  const languages2 = [
    "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "React Hook form", "Next Auth"
  ];
  const languages3 = ["JavaScript", "React.js","React Hook Form", "Appwrite", "TawilWind"]
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
            <img src={animate2} alt="Screenshot 1" />
            <img src={screenshot3} alt="Screenshot 3" />
            <img src={animate4} alt="Animation 4" />
          </div>
        </div>
      </div>

      <div className="pack">
        <div className="cnt" style={{border:".5px solid rgb(141, 152, 142)"}}>  
        <a className="text-decoration-none text-black" target="_blank" href="https://myblog-git-main-mohd-toufeeqs-projects.vercel.app/">
        <div className="languages-used" style={{
            height: "auto", background: "#fff", width: "100%", display: "flex", flexWrap: "wrap",
            justifyContent: "center", alignItems: "center", padding: "10px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
          }}>
            {languages1.map((lang, index) => (
              <span key={index} style={{
                fontSize: "16px", fontWeight: "500", color: "#333", margin: "5px", padding: "8px 15px",
                border: "2px solid black", borderRadius: "5px", backgroundColor: "#fff", transition: "all 0.3s ease"
              }}>
                {lang}
              </span>
            ))}
          </div>
          <div className="min-h-[70%] bg-white h-auto">
            <div className="h-full w-full" >
              <img className="h-full w-full" src={blog} alt="Cubeto" />
            </div>
            <div className="bg-[#ffffff] relative left-[7vw]">
            <button className="cnt_info"  style={{ border:"1px solid black",  fontSize: "1rem", position: 'relative', bottom: "10px", left: "5.4vw" }}>
              View Blog!! 
            </button>
            </div>
          </div>
        </a>
        </div>

        <div className="cnt2"  style={{border:".5px solid rgb(141, 152, 142)", cursor:"none"}}>
        <a className="text-decoration-none text-black" target="_blank" href="https://mystry-messages-kohl.vercel.app/">
        <div className="languages-used" style={{
            height: "25%", background: "#ffffff", width: "100%", display: "flex", flexWrap: "wrap",
            justifyContent: "center", alignItems: "center", padding: "10px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
          }}>
            {languages2.map((lang, index) => (
              <span key={index} style={{
                fontSize: "16px", fontWeight: "500", color: "#333", margin: "5px", padding: "8px 15px",
                border: "2px solid black", borderRadius: "5px", backgroundColor: "#fff", transition: "all 0.3s ease"
              }}>
                {lang}
              </span>
            ))}
          </div>
          <div style={{ height: "75%", background: "#ffffff" }}>
            <div>
              <img src={mystryMessage} alt="Project 2" style={{ height: "70%" }} />
            </div>
            <div>
            <button className="cnt_info"  style={{ border:"1px solid black",  fontSize: "1rem", position: 'absolute', bottom: "10px", left: "5.4vw" }}>
              Mystery Message Platform
            </button>
            </div>
          </div>
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
        <div className="cnt3"  style={{border:".5px solid rgb(141, 152, 142)"}}>
        <a className="text-decoration-none text-black" target="_blank" href="https://instagram-clone-zeta-three-95.vercel.app/">
        <div className="languages-used" style={{
            height: "20%", background: "#fff", width: "100%", borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center",
            padding: "10px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
          }}>
            {languages3.map((lang, index) => (
              <span key={index} style={{
                fontSize: "16px", fontWeight: "500", color: "#333", margin: "5px", padding: "8px 15px",
                border: "2px solid black", borderRadius: "5px", backgroundColor: "#fff", transition: "all 0.3s ease"
              }}>
                {lang}
              </span>
            ))}
          </div>
          <div style={{ height: "80%" }}>
            <div className="justify-center align-center h-4/5" style={{display:'flex',height:"80%"}}>
              <img src={eCommerce} style={{height:"100%", width:"100%"}} alt="Salon" />
            </div>   
            <div>
              <button className="p-10px" style={{     border: "1px solid #404040",fontSize: "1rem",position: "relative",bottom: '10px',left: "4vw",background:"#ffffff", padding:"13px",borderRadius:"13px", fontWeight:"500"}}>Instagram Clone</button>
            </div>
          </div>
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
