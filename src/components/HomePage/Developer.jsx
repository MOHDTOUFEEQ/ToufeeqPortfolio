import { useEffect } from "react";
import webRemovebgPreview from "../..//assets/web-removebg-preview.png";
import gsap from "gsap";
import { ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

function Developer() {
  useEffect(() => {
    const svgAnimation = gsap.to(".svg-wrapper svg:first-child", {
      motionPath: {
        path: [
          { x: 0, y: -100 },
          { x: 50, y: -100 },
          { x: 90, y: 0 }
        ],
      },
      transformOrigin: "50% 50%",
      duration: 2,
      paused: true,
      onComplete: function () {
        gsap.set(".svg-wrapper svg:first-child", { opacity: 0 });
      },
    });

    const svgAnimation2 = gsap.to(".svg-wrapper svg:nth-child(2)", {
      motionPath: {
        path: [
          { x: 0, y: -100 },
          { x: -50, y: -100 },
          { x: -50, y: 0 }
        ],
      },
      transformOrigin: "50% 50%",
      duration: 2,
      delay: 0.5,
      paused: true,
      onComplete: function () {
        gsap.set(".svg-wrapper svg:nth-child(2)", { opacity: 0 });
      },
    });

    const svgAnimation3 = gsap.to(".svg-wrapper svg:nth-child(3)", {
      motionPath: {
        path: [
          { x: 0, y: -100 },
          { x: 50, y: -100 },
          { x: 50, y: 0 }
        ],
      },
      transformOrigin: "50% 50%",
      duration: 2,
      stagger: 1,
      paused: true,
      onComplete: function () {
        gsap.set(".svg-wrapper svg:nth-child(3)", { opacity: 0 });
      },
    });

    const svgAnimation4 = gsap.to(".svg-wrapper svg:nth-child(4)", {
      motionPath: {
        path: [
          { x: 0, y: -100 },
          { x: -50, y: -100 },
          { x: -90, y: 0 }
        ],
      },
      transformOrigin: "50% 50%",
      stagger: 1.5,
      duration: 2,
      paused: true, 
      onComplete: function () {
        gsap.set(".svg-wrapper svg:nth-child(4)", { opacity: 0 });
      },
    });


    const downloadButton = document.getElementById("download-cv");
    downloadButton.addEventListener("mouseover", function () {

      gsap.set(".svg-wrapper svg", { opacity: 1 });
      svgAnimation.restart();
      svgAnimation2.restart();
      svgAnimation3.restart();
      svgAnimation4.restart();
    });
  }, []);

  return (
    <>
      <div className="web">
        <img className="weblogo" src={webRemovebgPreview} alt="weblogo" />
      </div>
      <div id="svg-container">
        <a href="./Toufeeq_Mohammed_CV.pdf" download="Toufeeq_CV" id="download_cv">
          <button id="download-cv">Download CV</button>
        </a>
        <div className="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 137 135"
            aria-hidden="true"
          >
            <path
              d="M84.1148 67.3453H136.194C136.637 67.3453 137 67.7028 137 68.1397V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2191V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06673e-05 134.639 0.00401052 134.198C0.439379 97.2879 30.9354 67.5042 68.498 67.5002H0.806238C0.362807 67.5002 0 67.1427 0 66.7057V0.802561C0 0.361644 0.366822 0.000171863 0.814284 0.00414409C37.9778 0.429172 68.0263 30.0183 68.498 66.6263V0.794617C68.498 0.357672 68.8608 0.000171819 69.3042 0.000171819H136.186C136.633 0.000171819 137 0.361644 136.996 0.802561C136.621 32.4969 114.079 58.94 83.9334 65.7802C83.0022 65.9907 83.1594 67.3453 84.1189 67.3453H84.1148Z"
              fill="url(#paint0_linear_1655_45397)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_1655_45397"
                x1="-76.6791"
                y1="-15.6157"
                x2="165.682"
                y2="81.0082"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.427083" stopColor="#FF8709"></stop>
                <stop offset="0.791667" stopColor="#F7BDF8"></stop>
              </linearGradient>
            </defs>
          </svg>

          {/* Second SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 99 99"
            className="diamond-vecto-mob"
            aria-hidden="true"
          >
            <path
              fill="url(#a)"
              d="M98.59 49.09 49.91.41a.579.579 0 0 0-.82 0L.41 49.09a.579.579 0 0 0 0 .82l48.68 48.68a.579.579 0 0 0 .82 0l48.68-48.68a.579.579 0 0 0 0-.82Z"
            ></path>
            <path
              fill="url(#b)"
              fillOpacity=".6"
              d="M98.59 49.09 49.91.41a.579.579 0 0 0-.82 0L.41 49.09a.579.579 0 0 0 0 .82l48.68 48.68a.579.579 0 0 0 .82 0l48.68-48.68a.579.579 0 0 0 0-.82Z"
              style={{ mixBlendMode: "multiply" }}
            ></path>
            <defs>
              <linearGradient
                id="a"
                x1="60.816"
                x2="38.263"
                y1="20.902"
                y2="87.976"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".199" stopColor="#F7BDF8"></stop>
                <stop offset="1" stopColor="#2F3CC0"></stop>
              </linearGradient>
              <pattern
                id="b"
                width="2.857"
                height="2.857"
                patternContentUnits="objectBoundingBox"
              >
                <use xlinkHref="#c" transform="scale(.00571)"></use>
              </pattern>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 62 62"
            className="flower-mob"
            aria-hidden="true"
            style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}
          >
            <path
              fill="url(#home-animate-anything-flower-mobile-a)"
              fillRule="evenodd"
              d="M18.256 30.33c-1.001.211-2.038.322-3.1.322C6.786 30.651 0 23.79 0 15.325S6.785 0 15.155 0s15.156 6.862 15.156 15.326c0 .709-.048 1.406-.14 2.09h1.657c-.092-.684-.14-1.381-.14-2.09C31.689 6.862 38.475 0 46.845 0 55.214 0 62 6.862 62 15.326S55.214 30.65 46.844 30.65c-.94 0-1.862-.086-2.755-.252V31.6a15.083 15.083 0 0 1 2.755-.252C55.214 31.349 62 38.21 62 46.674 62 55.138 55.214 62 46.844 62c-8.37 0-15.155-6.862-15.155-15.326 0-1.074.11-2.123.317-3.135h-1.945c.164.904.25 1.835.25 2.787 0 8.464-6.785 15.326-15.155 15.326S0 54.79 0 46.326 6.785 31 15.155 31c1.063 0 2.1.11 3.1.321v-.99Z"
              clipRule="evenodd"
            ></path>
            <path
              fill="url(#home-animate-anything-flower-mobile-b)"
              fillOpacity=".6"
              fillRule="evenodd"
              d="M18.256 30.33c-1.001.211-2.038.322-3.1.322C6.786 30.651 0 23.79 0 15.325S6.785 0 15.155 0s15.156 6.862 15.156 15.326c0 .709-.048 1.406-.14 2.09h1.657c-.092-.684-.14-1.381-.14-2.09C31.689 6.862 38.475 0 46.845 0 55.214 0 62 6.862 62 15.326S55.214 30.65 46.844 30.65c-.94 0-1.862-.086-2.755-.252V31.6a15.083 15.083 0 0 1 2.755-.252C55.214 31.349 62 38.21 62 46.674 62 55.138 55.214 62 46.844 62c-8.37 0-15.155-6.862-15.155-15.326 0-1.074.11-2.123.317-3.135h-1.945c.164.904.25 1.835.25 2.787 0 8.464-6.785 15.326-15.155 15.326S0 54.79 0 46.326 6.785 31 15.155 31c1.063 0 2.1.11 3.1.321v-.99Z"
              clipRule="evenodd"
            ></path>
            <defs>
              <linearGradient
                id="home-animate-anything-flower-mobile-a"
                x1="50.449"
                x2=".172"
                y1="74.75"
                y2="20.03"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".144" stopColor="#FFE9FE"></stop>
                <stop offset="1" stopColor="#FF96F9"></stop>
              </linearGradient>
              <pattern
                id="home-animate-anything-flower-mobile-b"
                width="1.613"
                height="1.613"
                patternContentUnits="objectBoundingBox"
              >
                <use xlinkHref="#svg-noise" transform="scale(.00323)"></use>
              </pattern>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 99 99"
            className="diamond-vecto-mob"
            aria-hidden="true"
          >
            <path
              fill="url(#a)"
              d="M98.59 49.09 49.91.41a.579.579 0 0 0-.82 0L.41 49.09a.579.579 0 0 0 0 .82l48.68 48.68a.579.579 0 0 0 .82 0l48.68-48.68a.579.579 0 0 0 0-.82Z"
            ></path>
            <path
              fill="url(#b)"
              fillOpacity=".6"
              d="M98.59 49.09 49.91.41a.579.579 0 0 0-.82 0L.41 49.09a.579.579 0 0 0 0 .82l48.68 48.68a.579.579 0 0 0 .82 0l48.68-48.68a.579.579 0 0 0 0-.82Z"
              style={{ mixBlendMode: "multiply" }}
            ></path>
            <defs>
              <linearGradient
                id="a"
                x1="60.816"
                x2="38.263"
                y1="20.902"
                y2="87.976"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".199" stopColor="#F7BDF8"></stop>
                <stop offset="1" stopColor="#2F3CC0"></stop>
              </linearGradient>
              <pattern
                id="b"
                width="2.857"
                height="2.857"
                patternContentUnits="objectBoundingBox"
              >
                <use xlinkHref="#c" transform="scale(.00571)"></use>
              </pattern>
            </defs>
          </svg>

        </div>
      </div>
      <a href="#projectsList" className="go_down" style={{ textDecoration: 'none'}}>
        <div className="down">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className="info" style={{color:"#000000"}}>scrolldown to see projects</div>
      </a>
      <div className="developer">
        <h1>Developer</h1>
      </div>
    </>
  );
}

export default Developer;
