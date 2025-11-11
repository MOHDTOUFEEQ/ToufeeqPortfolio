import React from "react";
import { VortexDemo1 } from "../VortexDemo1";
// import { LampDemo1 } from "../LampDemo1"; // Uncomment if you want to use it later
import webRemovebgPreview from "../../assets/software.png"; // If you still need the image
import SmallScreenDeveloper from "./SmallScreenDeveloper";
import { useState, useEffect } from "react";

function Developer() {
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
    
    <>
    {isLargeScreen ? (
      <div className="w-100vw" style={{ height: '100vh', width: '100vw',backgroundColor: 'black' }}>
        {/* Vortex Component - Centered in the center */}
        <VortexDemo1 />
      </div>
          ) : (
        <SmallScreenDeveloper />
    )}
    </>
  );
}

export default Developer;
