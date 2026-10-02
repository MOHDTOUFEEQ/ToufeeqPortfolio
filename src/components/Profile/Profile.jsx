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
    <p className="text-justify">
     I'm an AI Engineer and Software Developer currently pursuing an MSc in Artificial Intelligence at the University of Edinburgh, following a First-Class BSc in Computer Science. My journey combines strong software engineering foundations with a growing focus on intelligent systems.
    <br />
      <br />
      I work across Machine Learning, Natural Language Processing, Probabilistic Machine Learning, developing intelligent systems for solving complex real-world problems. My interest lies in combining strong theoretical foundations with practical engineering to build AI solutions that are reliable, scalable, and genuinely useful.
      <br />
      <br />
      {isLargeScreen && (
        <p className="text-justify">
         Alongside AI, I have experience with Python, React, TypeScript, Django, Flask, REST APIs, MongoDB, and MySQL, allowing me to turn AI concepts into practical, scalable applications. I’m driven by curiosity, continuous learning, and building technology that creates real impact.
        </p>
      )}
    </p>
  </div>
</div>

    </div>
  );
}

export default Profile;
