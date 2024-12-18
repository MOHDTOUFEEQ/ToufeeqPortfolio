import  { useState, useEffect } from "react";
import SmallScreenProjects from "./SmallScreenProjects";
import BigScreenProject from "./BigScreenProject";

function Projects() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isLargeScreen ? (
        <BigScreenProject /> // Render Large Screen Component
      ) : (
        <SmallScreenProjects /> // Render Small Screen Component
      )}
    </div>
  );
}

export default Projects;
