import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import gsap from "gsap";
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'; // Import ScrollMagic GSAP plugin
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "../ProjectSections/Projects";
import Developer from "../Developer";
import MoreProjects from "../MoreProjects";
import ProjectList from "../ProjectsList/ProjectList";
import Profile from "../Profile";
import Talk from "../Form/Talk";
import Footer from "../Footer/Footer";

function Navbar() {
  useEffect(() => {
    const t2 = gsap.timeline();
    t2.fromTo(
      ".link1 a, .link1 div",
      { top: "-90px" }, // Start position
      {
        top: "0px", // End position
        duration: 2.3,
        delay: 4,
      }
    )
      .fromTo(
        ".line1, .line2",
        { y: 0 }, // Start position (no offset)
        {
          y: 22, // Move 22px down
          duration: 2.3,
          delay: 1,
          ease: "expo", // Optional easing
        }
      )
      .fromTo(
        ".developer h1",
        { bottom: "-140px" }, // Start position
        { bottom: "0", duration: 3, delay: -5 }
      )
      .fromTo(
        ".weblogo",
        { left: "10vw" }, // Start position
        { left: "0", duration: 5, delay: -3 }
      );

    // ScrollMagic Controller Initialization
    var controller = new ScrollMagic.Controller();

    // Check screen width and apply ScrollMagic if larger than 768px
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
      // Profile Section Animation
      new ScrollMagic.Scene({
        triggerElement: "#profile", // When we hit the profile section
        triggerHook: 0.2, // Trigger when the profile section is 20% from the top of the viewport
        reverse: true, // Allow reverse animation when scrolling back up
      })
        .setTween("#profile", {
          backgroundColor: "#000000", // Change background to black
          color: "#ffffff", // Change text color to white
          textShadow: "0 0 10px rgba(230, 0, 115, 0.5)", // Optional glow effect
        })
        .addTo(controller);

      // Talk Section Animation (optional, in case you want another section)
      new ScrollMagic.Scene({
        triggerElement: "#profile", // Trigger when we hit the profile section
        triggerHook: 0.4, // Set triggerHook to 40% from top of the viewport
        reverse: true, // Reverse the tween when scrolling back up
      })
        .setTween("#talk", {
          backgroundColor: "#000000", // Change background to black
          color: "#ffffff", // Change text color to white
          textShadow: "0 0 8px rgba(230, 0, 115, 0.3)", // Optional glow effect
        })
        .addTo(controller);
    }
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <>
      <div id="home">
        <nav>
          <div className="link1">
            <a href="/">TOUFEEQ</a>
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
          <div className="link1">
            <a href="#moreProjects">PROJECTS</a>
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
          <div className="link1 link3">
            <a href="#">SOCIAL</a>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="drop_down_menu">
              <a
                href="https://www.linkedin.com/in/toufeeq-mohammed-956042266/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li style={{ paddingTop: "20px" }} className="drop_down_menu_li">
                  LinkedIn
                </li>
              </a>
              <a
                href="https://github.com/MOHDTOUFEEQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Github</li>
              </a>
              <a
                href="https://www.instagram.com/_toufeeq_17/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Instagram</li>
              </a>
              <a
                href="https://twitter.com/mohdtou36173459"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Twitter</li>
              </a>
            </div>
          </div>
          <div className="link1">
            <a href="#talk">CONTACT</a>
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        </nav>
        <Developer />
      </div>
      <Projects />
      <MoreProjects />
      <ProjectList />
      <Profile />
      <Talk />
      <Footer />
    </>
  );
}

export default Navbar;
