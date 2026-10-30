import { useEffect, useState } from "react";
import {
  about,
  experience,
  navigation,
  profile,
  projects,
  skillGroups,
} from "./content";
import "./simple.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600&display=swap";

function SiteLink({ href, children, external = false }) {
  if (!href) {
    return <span className="missing">Not listed yet</span>;
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return <a href={href}>{children}</a>;
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="card">
      {project.image && (
        <div className="card-media">
          <img
            src={project.image}
            alt={project.imageAlt}
            className={project.imageFit === "contain" ? "contain" : undefined}
            loading="lazy"
          />
        </div>
      )}
      {project.badges.length > 0 && (
        <p className="badge-row">
          {project.badges.map((badge) => (
            <span className="badge" key={badge}>
              {badge}
            </span>
          ))}
        </p>
      )}
      <h3>{project.name}</h3>
      <p className="summary">{project.summary}</p>
      <button
        type="button"
        className="stack-toggle"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        Tech stack
      </button>
      {open && (
        <ul className="project-tags" aria-label={`${project.name} technologies`}>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}
      {(project.github || project.demo) && (
        <p className="card-links">
          {project.github && (
            <SiteLink href={project.github} external>
              GitHub
            </SiteLink>
          )}
          {project.demo && (
            <SiteLink href={project.demo} external>
              Demo
            </SiteLink>
          )}
        </p>
      )}
    </article>
  );
}

function profileLinks() {
  return [
    { href: profile.github, label: "GitHub", external: true },
    { href: profile.linkedin, label: "LinkedIn", external: true },
    { href: profile.resume, label: "Résumé", external: false },
  ];
}

function SimplePortfolio() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${profile.name} — Portfolio`;
    document.documentElement.classList.add("simple-route");
    document.body.classList.add("simple-route");

    const fontId = "simple-portfolio-fonts";
    let fontLink = document.getElementById(fontId);
    let addedFont = false;
    if (!fontLink) {
      fontLink = document.createElement("link");
      fontLink.id = fontId;
      fontLink.rel = "stylesheet";
      fontLink.href = FONT_HREF;
      document.head.appendChild(fontLink);
      addedFont = true;
    }

    return () => {
      document.title = previousTitle;
      document.documentElement.classList.remove("simple-route");
      document.body.classList.remove("simple-route");
      if (addedFont && fontLink) {
        fontLink.remove();
      }
    };
  }, []);

  const links = profileLinks();

  return (
    <div className="simple-site" lang="en">
      <a className="skip" href="#top">
        Skip to content
      </a>

      <header className="topbar">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <div className="top-links">
          <a href="/">Animated portfolio</a>
        </div>
      </header>

      <div className="shell">
        <aside className="sidebar">
          <nav aria-label="Portfolio">
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="main" id="top">
          <section className="hero" aria-labelledby="profile-heading">
            <div>
              <h1 id="profile-heading">{profile.name}</h1>
              <p className="headline">{profile.headline}</p>
              {profile.introduction.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0 ? "lede copy" : "intro-follow copy"}
                >
                  {paragraph}
                </p>
              ))}

              <ul className="link-row" aria-label="Professional links">
                {links.map((link) => (
                  <li key={link.label}>
                    <SiteLink href={link.href} external={link.external}>
                      {link.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>

              <div className="actions">
                <a className="action" href="#work">
                  Explore projects
                </a>
                <a className="action" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <figure className="portrait">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.photoAlt} />
              ) : (
                <div className="portrait-fallback" aria-hidden="true">
                  <span>{profile.initials}</span>
                </div>
              )}
              {!profile.photo && (
                <figcaption className="portrait-note">Add a photo</figcaption>
              )}
            </figure>
          </section>

          <section className="block" id="about" aria-labelledby="about-heading">
            <h2 id="about-heading">About</h2>
            <div className="prose">
              <div className="about-copy">
                {about.paragraphs.map((paragraph) => (
                  <p className="copy" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="study">
                {about.study.map((item) => (
                  <article key={item.id}>
                    <h3>{item.school}</h3>
                    <p className="study-meta">{item.detail}</p>
                    <p className={item.coursesLabel ? "course-line" : "copy"}>
                      {item.coursesLabel && (
                        <span className="course-label">{item.coursesLabel} </span>
                      )}
                      {item.coursework}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="block"
            id="experience"
            aria-labelledby="experience-heading"
          >
            <h2 id="experience-heading">Experience</h2>
            <div className="jobs">
              {experience.map((job) => (
                <article className="job" key={job.id}>
                  <h3>{job.role}</h3>
                  <p className="job-meta">
                    {job.org} · {job.place} · {job.dates}
                  </p>
                  <ul className="point-list job-points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            className="block"
            id="work"
            aria-labelledby="projects-heading"
          >
            <h2 id="projects-heading">Projects</h2>
            <p className="section-lead">
              Software, machine learning, and web projects from this portfolio.
            </p>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </section>

          <section className="block" id="skills" aria-labelledby="skills-heading">
            <h2 id="skills-heading">Skills</h2>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.id}>
                  <h3>{group.title}</h3>
                  <ul className="skill-tags" aria-label={group.title}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="block" id="contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Contact</h2>
            <div className="prose">
              <p>
                If you want to talk about a project, a collaboration, or an
                opportunity, reach me through the profiles below.
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            </div>
            <ul className="link-row contact-links" aria-label="Professional links">
              {links.map((link) => (
                <li key={link.label}>
                  <SiteLink href={link.href} external={link.external}>
                    {link.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </section>

          <footer className="site-footer">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <ul className="footer-links">
              <li>
                <SiteLink href={profile.github} external>
                  GitHub
                </SiteLink>
              </li>
              <li>
                <SiteLink href={profile.linkedin} external>
                  LinkedIn
                </SiteLink>
              </li>
              <li>
                <a href="/">Animated portfolio</a>
              </li>
            </ul>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default SimplePortfolio;
