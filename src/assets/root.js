// import { inject } from "https://cdn.skypack.dev/@vercel/analytics";
// inject()
gsap.registerPlugin(MotionPathPlugin)
const t1 = gsap.timeline()
gsap
.to(".toploader h3",{
    top : "-40px",
    duration: 2,
    delay: 3,
})
t1.from(".centerloader span",{
    left: "50px",
    duration: 3,
    stagger : .1,
    stubber : 1,
    ease : 'elastic',
})
t1.to(".centerloader span",{
    top : "-50px",
    duration: 2,
})
t1.to(".loader",{
    height: 0,
    delay:-.5,
})
t1.to(".green",{
    height: "100%",
    top: 0,
    duration:1,
    delay: -1,
    ease : Circ.easeInOut,
})
t1.to(".green",{
    height: "0%",
    delay: 0,
    duration: .4,
})
.to("#home",{
    height:"100vh",
})
.to("#projects",{
    height: "auto",
    display: "block",
})
.to("#moreProjects",{
    height: "auto",
})
.to("#projectsList",{
    height: "100vh",
    overflow: "hidden",
})
.to("#profile",{
    height: "auto",
})
.to("#talk",{
    height: "80vh",
})
.to(".end",{
    height: "30vh",
    paddingTop : "10px", 
})
.to("#end",{
    height: "30vh",
    delay : 4,
    padding: "2vh",
})
t2 = gsap.timeline()
.from(".link1 a , .link1 div",{
    top: "-90px",
    duration:2.3,
    delay: 6,
})
.from(".developer h1",{
    bottom: "-100px",
    duration:3,
    delay:-3,
})
.from(".weblogo",{
    left: "10vw",
    duration: 5, 
    delay:-6,
})
function setupMouseEffects(elementSelector, imgSelector, backgroundColor) {
    const mouseElement = document.querySelector(".mouse");
    const screenWidth = window.innerWidth;

    // Check if the screen resolution is greater than 768px
    if (screenWidth > 768) {
        document.querySelector(elementSelector).addEventListener("mousemove", function (dets) {
            const mouseX = dets.pageX;
            const mouseY = dets.pageY;

            mouseElement.style.opacity = "1";
            mouseElement.style.display = "block";
            document.querySelector(imgSelector).style.filter = "grayscale(100%)";
            document.querySelector(".pack1").style.backgroundColor = backgroundColor;
            document.querySelector("#home").style.backgroundColor = backgroundColor;
            document.querySelector("#projects").style.backgroundColor = backgroundColor;
            document.querySelector("#moreProjects").style.backgroundColor = backgroundColor;
            document.querySelector("#projectsList").style.backgroundColor = backgroundColor;
            document.querySelector("#projects").style.backgroundColor = backgroundColor;

            // Use transform for translation
            mouseElement.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        document.querySelector(elementSelector).addEventListener("mouseleave", function () {
            mouseElement.style.opacity = "0";
            mouseElement.style.display = "none";
            document.querySelector(imgSelector).style.filter = "grayscale(0%)";
            document.querySelector(".pack1").style.backgroundColor = "#fff";
            document.querySelector("#home").style.backgroundColor = "#fff";
            document.querySelector("#moreProjects").style.backgroundColor ="#fff";
            document.querySelector("#projectsList").style.backgroundColor = "#fff";
            document.querySelector("#projects").style.backgroundColor = "#fff";
        });
    }
}

setupMouseEffects(".cnt", ".cnt img", "#b4bacf");
setupMouseEffects(".cnt2", ".cnt2 img", "#ffbc99");
setupMouseEffects(".cnt3", ".cnt3 img", "rgb(219, 202, 189)");

var controller = new ScrollMagic.Controller();

const screenWidth = window.innerWidth;

    // Check if the screen resolution is greater than 768px
    if (screenWidth > 768) {
        // Set initial position using GSAP
       

       var sceneProfile = new ScrollMagic.Scene({
            triggerElement: "#profile",
            triggerHook: 0.2,
            reverse: true,
        })
        .setTween("#profile", {
            backgroundColor: "#000000",
            color: "#fff",
            textShadow: "0 0 10px rgba(230, 0, 115, 0.5) inset", // Adjust the glow effect
        })
        .addTo(controller);

        var scene = new ScrollMagic.Scene({
            triggerElement: "#profile",
            triggerHook: 0.4, // Set triggerHook to 0 for top of the screen
            reverse: true, // Reverse the tween when scrolling back up
        })
        .setTween("#talk", {
            backgroundColor: "#000000",
            color: "#fff",
            textShadow: "0 0 8px rgba(230, 0, 115, 0.3)",
            
        })
        .addTo(controller);

        
        
        
    }
    gsap.set("#text2", { x: "70%" });
    gsap.set("#text1", { x: "-30%" });

    // Create a tween to move from -30% to 60% and back
    var tween = gsap.to("#text1", {
    x: "60%", // move to the right
    ease: Power0.easeNone, // linear motion
    duration: 5, // adjust the duration for slower animation
    yoyo: true, // reverse the animation after completion
    repeat: -1 // repeat the animation infinitely
    });

    // Create a ScrollMagic Scene
    var scene = new ScrollMagic.Scene({
    triggerElement: "#projects",
    duration: "100%" // adjust the duration based on your needs
    })
    .setTween(tween)
    .addTo(controller);
    var tween = gsap.to("#text2 ", {
        x: "50%", // move to the right
        ease: Power0.easeNone, // linear motion
        duration: 5, // adjust the duration for slower animation
        yoyo: true, // reverse the animation after completion
        repeat: -1 // repeat the animation infinitely
        });

        // Create a ScrollMagic Scene
        var scene = new ScrollMagic.Scene({
        triggerElement: "#projects",
        duration: "100%" // adjust the duration based on your needs
        })
        .setTween(tween)
        .addTo(controller);

document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.querySelector('.btn-submit button');
    var paperElement = document.querySelector('.btn-submit .paper');

    submitButton.addEventListener('click', function () {
      paperElement.classList.add('clicked');
      setTimeout(function () {
        paperElement.classList.remove('clicked');
      }, 5000); // 5000 milliseconds (5 seconds) to match the animation duration
    });
  });

  function rotating(elementSelector) {
    const mouseElement = document.querySelector(".upperrotating_div");
    const screenWidth = window.innerWidth;

    // Check if the screen resolution is greater than 768px
    if (screenWidth > 768) {
        document.querySelector(elementSelector).addEventListener("mousemove", function (dets) {
            const mouseX = dets.pageX;
            const mouseY = dets.pageY;
            mouseElement.style.opacity = "1";
            // Use transform for translation
            mouseElement.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        document.querySelector(elementSelector).addEventListener("mouseleave", function () {
            mouseElement.style.opacity = "0";
        });
    }
}

rotating(".pr1")
rotating(".pr2")
rotating(".pr3")
rotating(".pr4")
rotating(".pr5")

var svgAnimation = gsap.to(".svg-wrapper svg:first-child", {
    motionPath: {
        path: [{x: 0, y: -100}, {x: 50, y: -100}, {x: 90, y: 0}],
    },
    transformOrigin: "50% 50%",
    duration: 2,
    paused: true, // Animation starts paused
    onComplete: function() {
        gsap.set(".svg-wrapper svg:first-child", { opacity: 0 });
    }
});

var svgAnimation2 = gsap.to(".svg-wrapper svg:nth-child(2)", {
    motionPath: {
        path: [{x: 0, y: -100}, {x: -50, y: -100}, {x: -50, y: 0}],
    },
    transformOrigin: "50% 50%",
    duration: 2,
    delay: 0.5,
    paused: true, // Animation starts paused
    onComplete: function() {
        gsap.set(".svg-wrapper svg:nth-child(2)", { opacity: 0 });
    }
});

var svgAnimation3 = gsap.to(".svg-wrapper svg:nth-child(3)", {
    motionPath: {
        path: [{x: 0, y: -100}, {x: 50, y: -100}, {x: 50, y: 0}],
    },
    transformOrigin: "50% 50%",
    duration: 2,
    stagger: 1,
    paused: true, // Animation starts paused
    onComplete: function() {
        gsap.set(".svg-wrapper svg:nth-child(3)", { opacity: 0 });
    }
});

var svgAnimation4 = gsap.to(".svg-wrapper svg:nth-child(4)", {
    motionPath: {
        path: [{x: 0, y: -100}, {x: -50, y: -100}, {x: -90, y: 0}],
    },
    transformOrigin: "50% 50%",
    stagger: 1.5,
    duration: 2,
    paused: true, // Animation starts paused
    onComplete: function() {
        gsap.set(".svg-wrapper svg:nth-child(4)", { opacity: 0 });
    }
});

// Trigger animation on button hover
var downloadButton = document.getElementById('download-cv');
downloadButton.addEventListener('mouseover', function() {
    // Restart animation and set opacity back to 1
    gsap.set(".svg-wrapper svg", { opacity: 1 });
    svgAnimation.restart();
    svgAnimation2.restart();
    svgAnimation3.restart();
    svgAnimation4.restart();
});

const scriptURL = 'https://script.google.com/macros/s/AKfycby05t2PYwsC9Kv1O9tI0aXuDQeRItH3UpXsUHhA58Yi49x7jlXd7G4zAw84wM_UIT4CMA/exec'

const form = document.forms['letstalk']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})