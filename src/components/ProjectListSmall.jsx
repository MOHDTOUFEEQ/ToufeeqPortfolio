import DjangoLogo from "../assets/django1-removebg-preview.png";
import JavaScriptLogo from "../assets/JavaScript-logo.png";

function SmallScreenProjects() {
    const projects = [
        {
          id: "pr1",
          link: "https://github.com/MOHDTOUFEEQ/Django-Projects/tree/main/Django_Chatting_App",
          image: DjangoLogo,
          name: "Django Chatting App",
        },
        {
          id: "pr3",
          link: "https://github.com/MOHDTOUFEEQ/Django-Projects/tree/main/Django-PizzaStore",
          image: DjangoLogo,
          name: "The Pizza Haven",
        },
        {
          id: "pr5",
          link: "https://film-uwl.github.io/",
          image: JavaScriptLogo,
          name: "UWL Film Society",
        },
        {
          id: "pr2",
          link: "https://github.com/MOHDTOUFEEQ/JavaScript-Projects/tree/main/JavaScript_weatherApp",
          image: JavaScriptLogo,
          name: "WeatherWhiz",
        },
        {
          id: "pr4",
          link: "https://github.com/MOHDTOUFEEQ/JavaScript-Projects/tree/main/JavaScript_PasswordGenerator",
          image: JavaScriptLogo,
          name: "SecureKey Creator",
        },
      ];
    
      return (
        <div id="projectsList" style={styles.container}>
          {projects.map((project) => (
            <div key={project.id} style={styles.projectRow}>
              <div style={styles.logoContainer}>
                <img src={project.image} alt={project.name} style={styles.logo} />
              </div>
              <div style={styles.details}>
                <p style={styles.projectName}>{project.name}</p>
              </div>
              <div style={styles.buttonContainer}>
                <button
                  style={styles.button}
                  onClick={() => window.open(project.link, "_blank")}
                >
                  Click to preview
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
        backgroundColor: "#f9f9f9",
      },
      projectRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "44px 15px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        width: "100%",
        boxSizing: "border-box",
      },
      logoContainer: {
        flex: "0 0 50px",
      },
      logo: {
        width: "40px",
        height: "40px",
        objectFit: "cover",
      },
      details: {
        flex: "1",
        marginLeft: "10px",
        textAlign: "left",
      },
      projectName: {
        fontSize: "0.9rem",
        fontWeight: "600",
        color: "#333",
        margin: "0",
      },
      buttonContainer: {
        flex: "0 0 auto",
      },
      button: {
        padding: "6px 10px",
        fontSize: "0.8rem",
        color: "#000",
        border: "1px solidrgb(0, 0, 0)",
        backgroundColor: "#fff",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      },
    };
export default SmallScreenProjects;
