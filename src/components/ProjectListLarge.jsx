import { useEffect } from 'react';
import DjangoLogo from '../assets/django1-removebg-preview.png';
import JavaScriptLogo from '../assets/JavaScript-logo.png';

function rotating(elementSelector) {
    const mouseElement = document.querySelector(".upperrotating_div");
    const screenWidth = window.innerWidth;
  
    // Check if the screen resolution is greater than 768px
    if (screenWidth > 768) {
      const targetElement = document.querySelector(elementSelector);
  
      if (targetElement) {
        targetElement.addEventListener("mousemove", function (dets) {
          const mouseX = dets.pageX;
          const mouseY = dets.pageY;
          mouseElement.style.opacity = "1";
          // Use transform for translation
          mouseElement.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });
  
        targetElement.addEventListener("mouseleave", function () {
          mouseElement.style.opacity = "0";
        });
      }
    }
  }
function ProjectListLarge() {
      useEffect(() => {
        // Check if the screen width is greater than 768px before applying the effect
        const screenWidth = window.innerWidth;
        if (screenWidth > 768) {
          // Initialize rotating effect on project elements
          rotating(".pr1");
          rotating(".pr2");
          rotating(".pr3");
          rotating(".pr4");
          rotating(".pr5");
        }
    
        // Optionally, add event listener to handle resizing and applying/removing the effect dynamically
        const handleResize = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth > 768) {
            // Apply effect when the screen is resized to large screen size
            rotating(".pr1");
            rotating(".pr2");
            rotating(".pr3");
            rotating(".pr4");
            rotating(".pr5");
          }
        };
    
        window.addEventListener("resize", handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
  return (
   <div id="projectsList">
         <div className="upperrotating_div">
           <div className="rotating-div">
             <p className="text">Click, Me!</p>
           </div>
         </div>
         <div className="firstproject pr1">
           <a
             id="link_to_project_github"
             href="https://github.com/MOHDTOUFEEQ/Django-Projects/tree/main/Django_Chatting_App"
             target="_blank"
             rel="noopener noreferrer"
           >
             <div className="flex">
               <div className="firstproject_left">
                 <img src={DjangoLogo} alt="Django Chatting App" />
                 <i className="fa-solid fa-minus"></i>
                 <span className="project_name">Django Chatting App</span>
               </div>
               <div className="firstproject_right">
                 <button>Click to preview</button>
               </div>
             </div>
           </a>
           <hr />
         </div>
         <div className="firstproject pr3">
           <a
             id="link_to_project_github3"
             href="https://github.com/MOHDTOUFEEQ/Django-Projects/tree/main/Django-PizzaStore"
             target="_blank"
             rel="noopener noreferrer"
           >
             <div className="flex">
               <div className="firstproject_left">
                 <img src={DjangoLogo} alt="The Pizza Haven" />
                 <i className="fa-solid fa-minus"></i>
                 <span className="project_name">The Pizza Haven</span>
               </div>
               <div className="firstproject_right">
                 <button>Click to preview</button>
               </div>
             </div>
           </a>
           <hr />
         </div>
         <div className="firstproject pr5">
           <a
             id="link_to_project_github5"
             href="https://film-uwl.github.io/"
             target="_blank"
             rel="noopener noreferrer"
           >
             <div className="flex">
               <div className="firstproject_left">
                 <img className="js_photo" src={JavaScriptLogo} alt="UWL Film Society" />
                 <i className="fa-solid fa-minus"></i>
                 <span className="project_name">UWL Film Society</span>
               </div>
               <div className="firstproject_right">
                 <button>Click to preview</button>
               </div>
             </div>
           </a>
           <hr />
         </div>
         <div className="firstproject pr2">
           <a
             id="link_to_project_github2"
             href="https://github.com/MOHDTOUFEEQ/JavaScript-Projects/tree/main/JavaScript_weatherApp"
             target="_blank"
             rel="noopener noreferrer"
           >
             <div className="flex">
               <div className="firstproject_left">
                 <img className="js_photo" src={JavaScriptLogo} alt="WeatherWhiz" />
                 <i className="fa-solid fa-minus"></i>
                 <span className="project_name">WeatherWhiz</span>
               </div>
               <div className="firstproject_right">
                 <button>Click to preview</button>
               </div>
             </div>
           </a>
           <hr />
         </div>
         <div className="firstproject pr4">
           <a
             id="link_to_project_github4"
             href="https://github.com/MOHDTOUFEEQ/JavaScript-Projects/tree/main/JavaScript_PasswordGenerator"
             target="_blank"
             rel="noopener noreferrer"
           >
             <div className="flex">
               <div className="firstproject_left">
                 <img className="js_photo" src={JavaScriptLogo} alt="SecureKey Creator" />
                 <i className="fa-solid fa-minus"></i>
                 <span className="project_name">SecureKey Creator</span>
               </div>
               <div className="firstproject_right">
                 <button>Click to preview</button>
               </div>
             </div>
           </a>
           <hr />
         </div>
       </div>
  );
}

export default ProjectListLarge;
