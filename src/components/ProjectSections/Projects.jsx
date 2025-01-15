import { useState, useEffect } from "react";
import SmallScreenProjects from "./SmallScreenProjects";
import BigScreenProject from "./BigScreenProject";

function Projects() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

  useEffect(() => {
    // Debounced resize handler to avoid excessive re-renders
    const handleResize = () => {
      // Check the actual width available, considering when the console is open
      if (window.innerWidth > 1000) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };

    // Set the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Only run once on component mount

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
