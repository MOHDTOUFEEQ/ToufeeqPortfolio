import { useEffect, useState } from "react";
import ProjectListLarge from "./ProjectListLarge"; // Component for larger screens
import ProjectListSmall from "./ProjectListSmall"; // Component for smaller screens

function ResponsiveProjectList() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isLargeScreen ? <ProjectListLarge /> : <ProjectListSmall />}
    </div>
  );
}

export default ResponsiveProjectList;
