import './App.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar/Navbar'
import { useEffect } from "react";
import { gsap } from "gsap";

// Register GSAP plugins (no need to import 'gsap/all' if you are only using 'gsap' and plugins)
import { ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";


function App() {
  
  // don't forget to register plugins
  gsap.registerPlugin(ScrollTrigger, Draggable,  MotionPathPlugin); 
  useEffect(() => {
    const t2 = gsap.timeline();
  
    // Ensure spans are visible and positioned correctly
    gsap.to(".toploader h3", {
      top: "-40px",
      duration: 2,
      delay: 3,
    });

    t2.fromTo(".centerloader span", 
      { left: "50px" },  // Starting position
      { left: "0px", duration: 3, stagger: .2, ease: "elastic"  }  // End position
    );

    t2.to(".centerloader span", {
      top: "-50px",  // animating top, you might need to ensure position is set in CSS
      duration: 2,
    });

    t2.to(".loader", {
      height: 0,
      delay: -0.5,
    });

    t2.to(".green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -1.5,
      ease: "back.in",
    });

    t2.to(".green", {
      height: "0%",
      delay: 0,
      duration: 0.4,
    }).to("#home", {
      height: "100vh",
    })
    .to("#projects",{
      height: "auto",
      display: "block",
  }).to("#small-screen-projects",{
    height: "auto",
    display: "block",
})
  .to("#moreProjects",{
      height: "auto",
  })
  .to("#projectsList",{
      height: "100vh",
      overflow: "hidden",
  })
  .to("#profile",{
      height: "auto",
  })
  .to("#talk",{
      height: "95vh",
  })
  .to(".end",{
      height: "30vh",
      paddingTop : "10px", 
  })
    
    
    // Cleanup on unmount
    return () => {
      t2.kill();
    };
  }, []);

  return (
    <>
     < Loader /> 
     < Navbar />
    </>
  )
}

export default App
