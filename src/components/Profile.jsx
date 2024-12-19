import { useEffect, useState } from "react";

function Profile() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024); 
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  return (
    <div id="profile">
      <div className="skills">
        <div className="skillstop">
          <h1>Skills</h1>
          <div className="lang_icon">
            <div className="icon1"></div>
            <div className="icon2"></div>
            <div className="icon3"></div>
            <div className="icon4"></div>
            <div className="icon5"></div>
            <div className="icon6"></div>
            <div className="icon7"></div>
            <div className="icon8"></div>
            <div className="icon9"></div>
            <div className="icon10"></div>
            <div className="icon11"></div>
            <div className="icon12"></div>
            <div className="icon13"></div>
          </div>
        </div>
      </div>

      <div className="About">
        <div className="abovetop">
          <h1>About</h1>
          <p>
          I am a second-year Computer Science student at the University of West London, passionate about web development and full-stack design. Over the past year, I have gained extensive experience in building dynamic, responsive, and user-friendly web interfaces. My expertise spans JavaScript (ES6+), React.js, Next.js, TypeScript, HTML5, CSS3, Tailwind, and libraries like Redux and GSAP, enabling me to create interactive, visually appealing applications.
          <br />
            <br />
            On the back end, I specialize in Python and Django for robust server-side development. I frequently integrate RESTful APIs and work with databases like MongoDB and MySQL to ensure scalability. My recent projects include a user-focused salon website and a pizza quality classification system leveraging NLP.
            <br />
            <br />
            {isLargeScreen &&(
              <p>
              I hold certifications in Django, jQuery, and MySQL, reflecting my commitment to continuous learning. Looking ahead, I aim to master tools like Next.js and TypeScript to build innovative, future-ready applications that align with both user and business needs.
              </p>
          )}
            </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
