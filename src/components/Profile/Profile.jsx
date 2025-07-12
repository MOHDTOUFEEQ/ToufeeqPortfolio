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
      I am a final-year Computer Science student at the University of West London, a passionate Software Engineer and Full Stack Developer focused on creating responsive, scalable, and user-friendly web applications. My work blends technical precision with thoughtful design to deliver modern digital experiences.
      <br />
      <br />
      I specialize in front-end development using JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, and animation libraries like GSAP and Framer Motion. I build dynamic UIs backed by robust state management and responsive layouts.
      <br />
      <br />
      {isLargeScreen && (
        <p>
          On the back end, I work with Python, Django, MongoDB, and MySQL—designing secure, efficient APIs with modern authentication systems like JWT, OAuth, and NextAuth.js. I’ve applied CI/CD pipelines, cloud deployment, and RESTful architecture to real-world applications with a strong focus on performance and maintainability.
        </p>
      )}
    </p>
  </div>
</div>

    </div>
  );
}

export default Profile;
