import React, { useEffect } from "react";
import { Vortex } from "../components/vortex";
import gsap from "gsap";

export function VortexDemo1() {
  useEffect(() => {
    // Give GSAP time to ensure DOM elements are rendered
    const timeout = setTimeout(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut", duration: 1.2 },
      });

      // Step 1: Animate "Software"
      tl.fromTo(
        ".word-software",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1 },
        0
      );

      // Step 2: Animate "Developer"
      tl.fromTo(
        ".word-developer",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1 },
        "+=0.3"
      );

      // Step 3: Show paragraph
      tl.fromTo(
        ".intro-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "+=0.4"
      );

      // Step 4: Show Download button
      tl.fromTo(
        ".download-btn",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3"
      );
    }, 5500); // starts 7 seconds after load

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="w-full max-w-7xl mx-auto rounded-md relative"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Vortex
        backgroundColor="black"
        className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-10 w-full h-full"
      >
        {/* LEFT SIDE – Developer Intro */}
        <div
          className="text-left z-20 text-white max-w-xl mt-10 md:mt-0"
          style={{ position: "absolute", top: "30vh", left: "12vw" }}
        >
          <h1
            className="software-title font-extrabold text-white tracking-wide leading-none"
            style={{ fontSize: "4.5rem", width: "70vw" }}
          >
            <span className="word-software inline-block">Software</span>{" "}
            <span className="word-developer inline-block text-blue-400">
              Developer
            </span>
          </h1>

          <p
            className="intro-text text-lg md:text-xl text-gray-300 mb-8 mt-6"
            style={{ opacity: 0 }}
          >
            I design and build smart, efficient, and scalable solutions using
            modern technologies. Passionate about AI, web development, and
            crafting digital experiences.
          </p>

          <a href="./Resume.pdf" download="Toufeeq_CV">
            <button
              className="download-btn px-6 py-3 w-[150px] bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-blue-500/40 transition-all duration-300 ease-in-out"
              style={{ opacity: 0 }}
            >
              Download CV
            </button>
          </a>
        </div>
      </Vortex>
    </div>
  );
}
