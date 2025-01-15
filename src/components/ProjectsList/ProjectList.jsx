import { useEffect, useState } from "react";
import ProjectListLarge from "./ProjectListLarge"; // Component for larger screens
import ProjectListSmall from "./ProjectListSmall"; // Component for smaller screens

function ResponsiveProjectList() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

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
