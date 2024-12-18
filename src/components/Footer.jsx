function Footer() {
    return (
      <div className="end">
        <div className="container">
          <div className="leftdiv">
            <div className="name">
              <h1 className="first-line">TOUFEEQ</h1>
              <h1 className="second-line">PORTFOLIO</h1>
            </div>
          </div>
          <div className="rightdiv">
            <div className="rightone">
              <h2 className="footer__label">Social</h2>
              <div className="footer__social">
                <ul>
                  <li>
                    <a
                      id="logo"
                      href="https://www.linkedin.com/in/mohammed-toufeeq-956042266/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in icon"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      id="logo"
                      href="https://github.com/MOHDTOUFEEQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github icon"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      id="logo"
                      href="https://www.instagram.com/_toufeeq_17/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram icon"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      id="logo"
                      href="https://twitter.com/mohdtou36173459"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy;2023 Toufeeq. All rights reserved.</p>
          <p>
            <a id="removethis" href="#">
              Privacy Policy Terms of Use
            </a>
          </p>
        </div>
      </div>
    );
  }
  
  export default Footer;
  