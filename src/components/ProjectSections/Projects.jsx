import { useState, useEffect } from "react";
import SmallScreenProjects from "./SmallScreenProjects";
import BigScreenProject from "./BigScreenProject";
import { LampDemo1 } from "../LampDemo1";
import { VortexDemo1 } from "../VortexDemo1";

function Projects() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <div>
      {isLargeScreen ? (
        <BigScreenProject /> 
      ) : (
        <SmallScreenProjects /> 
      )}
    </div>
  );
}

export default Projects;
