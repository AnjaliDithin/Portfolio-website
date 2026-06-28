"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import InteractiveBackground from "@/components/InteractiveBackground";
import styles from "@/components/BentoGrid.module.css";
import pageStyles from "./page.module.css"; // We will replace/update this file too

const roles = [
  "Front-End Developer",
  "UI Developer",
  "Next.js Developer",
  "Creative Coder"
];

const skills = [
  { name: "React", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
  { name: "JavaScript (ES6+)", level: "Expert" },
  { name: "HTML5 & CSS3", level: "Expert" },
  { name: "Responsive Layouts", level: "Expert" },
  { name: "CSS Modules & Vanilla", level: "Expert" },
  { name: "REST APIs", level: "Advanced" },
  { name: "Git & Version Control", level: "Advanced" },
  { name: "Accessibility (WCAG)", level: "Advanced" },
  { name: "UI Polish & Motion", level: "Advanced" },
  { name: "Vercel & Netlify", level: "Advanced" },
  { name: "AWS CloudFront & CDN", level: "Intermediate" },
  { name: "Shopify Storefronts (Liquid)", level: "Advanced" },
  { name: "WordPress Customization & Elementor", level: "Expert" }
];

const experiences = [
  {
    role: "Front-End Developer",
    company: "Acodez IT Solutions Pvt. Ltd.",
    period: "Feb 2022 - Present",
    details:
      "Developed responsive web applications using HTML, SCSS, JavaScript, Next.js, Astro.js, Shopify, and WordPress. Built 40+ reusable UI components, integrated REST APIs, customized WordPress and Shopify themes, optimized page performance, and delivered pixel-perfect interfaces across 20+ client projects while mentoring junior developers."
  },
  {
    role: "Front-End Developer Intern",
    company: "SketchApp Solutions",
    period: "Nov 2021 - Feb 2022",
    details:
      "Converted Figma designs into responsive HTML, CSS, and JavaScript interfaces. Implemented mobile-first layouts, added interactive animations using jQuery, and collaborated with designers to create user-friendly, responsive web experiences."
  }
];

const featuredProjects = [
  {
    title: "AXLDRONE Official Website",
    description:
      "A modern drone company website built with Next.js, GSAP, Strapi CMS, and interactive 360° product views.",
    tags: [
      "Next.js",
      "GSAP",
      "Strapi CMS",
      "Cloudimage 360",
      "Framer Motion",
      "SCSS"
    ],
    link: "/work",
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Acodez Corporate Website",
    description:
      "A fast, SEO-friendly corporate website built with Astro.js, reusable components, and responsive UI.",
    tags: [
      "Astro.js",
      "JavaScript",
      "SCSS",
      "Responsive Design",
      "SEO",
      "Component Architecture"
    ],
    link: "/work",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
  }
];

export default function Home() {
  // Theme selection state
  const [theme, setTheme] = useState("cyber");

  // Time state
  const [time, setTime] = useState("");

  // Typing animation state
  const [typingIndex, setTypingIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Counter states
  const [projectCount, setProjectCount] = useState(0);
  const [commitCount, setCommitCount] = useState(0);

  // Experience expand states
  const [expandedTimeline, setExpandedTimeline] = useState(0);

  // Contact form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Apply theme to document
  useEffect(() => {
    const savedTheme = localStorage.getItem("anjali-portfolio-theme") || "cyber";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("anjali-portfolio-theme", newTheme);
  };

  // Clock effect
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typing text effect loop
  useEffect(() => {
    let timer;
    const activeRole = roles[typingIndex];
    const speed = isDeleting ? 40 : 100;

    if (!isDeleting && text === activeRole) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setText(
          isDeleting
            ? activeRole.substring(0, text.length - 1)
            : activeRole.substring(0, text.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingIndex]);

  // Animate counters
  useEffect(() => {
    const projectTarget = 18;
    const commitTarget = 1000;

    const projectInterval = setInterval(() => {
      setProjectCount((prev) => {
        if (prev >= projectTarget) {
          clearInterval(projectInterval);
          return projectTarget;
        }
        return prev + 1;
      });
    }, 80);

    const commitInterval = setInterval(() => {
      setCommitCount((prev) => {
        if (prev >= commitTarget) {
          clearInterval(commitInterval);
          return commitTarget;
        }
        return prev + 15;
      });
    }, 20);

    return () => {
      clearInterval(projectInterval);
      clearInterval(commitInterval);
    };
  }, []);

  // Contact submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    // Simulate API call
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div className={pageStyles.pageWrapper}>
      <InteractiveBackground />

      {/* Header / Navigation */}
      <header className={pageStyles.header}>
        <div className={pageStyles.headerInner}>
          <Link href="/" className={pageStyles.logo}>
            Anjali<span className={pageStyles.logoDot}>.</span>
          </Link>
          <nav className={pageStyles.nav}>
            <Link href="/" className={pageStyles.navLinkActive}>
              Home
            </Link>
            <Link href="/work" className={pageStyles.navLink}>
              Work
            </Link>
            <a
              href="/anjali-resume2026.pdf"
              target="_blank"
              rel="noreferrer"
              className={pageStyles.navLink}
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Main Bento Grid */}
      <main className={pageStyles.mainContent}>
        <div className={styles.gridContainer}>

          {/* Bento Card 1: Hero Profile (Col 8, Row Span 2) */}
          <section className={`${styles.bentoCard} ${styles.col8} ${styles.rowSpan2}`}>
            <div className={styles.heroCard}>
              <div className={styles.heroContent}>
                <span className={styles.kicker}>Available for Freelance & Full-time Roles</span>
                <h1 className={styles.heroTitle}>
                  Hi, I&apos;m <span className={styles.gradientText}>Anjali</span>
                </h1>

                {/* Typing Animation */}
                <div className={styles.typingWrapper}>
                  <span>A </span>
                  <strong>{text}</strong>
                  <span className={styles.cursor}></span>
                </div>

                <p className={styles.cardDescription} style={{ fontSize: "1.1rem" }}>
                  I build high-performance web experiences focused on visual clarity and dependable execution. Specializing in modern ecosystems like Next.js and Astro.js, custom WordPress development, glassmorphic UI design, and pixel-perfect layouts.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/work" className={styles.primaryButton}>
                    Explore Work
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <a href="/anjali-resume2026.pdf" download className={styles.secondaryButton}>
                    Resume
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Card 2: Theme Selector (Col 4) */}
          <section className={`${styles.bentoCard} ${styles.col4}`}>
            <div>
              <span className={styles.kicker}>Aesthetics</span>
              <h2 className={styles.cardTitle}>Accent Palette</h2>
              <p className={styles.cardDescription}>
                Click to swap theme gradients. Try them out!
              </p>
            </div>

            <div className={styles.themeGrid}>
              <button
                className={`${styles.themeButton} ${theme === "cyber" ? styles.themeButtonActive : ""}`}
                onClick={() => handleThemeChange("cyber")}
              >
                <div className={styles.themeDot} style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}></div>
                <span className={styles.themeName}>Cyber</span>
              </button>
              <button
                className={`${styles.themeButton} ${theme === "emerald" ? styles.themeButtonActive : ""}`}
                onClick={() => handleThemeChange("emerald")}
              >
                <div className={styles.themeDot} style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)" }}></div>
                <span className={styles.themeName}>Emerald</span>
              </button>
              <button
                className={`${styles.themeButton} ${theme === "sunset" ? styles.themeButtonActive : ""}`}
                onClick={() => handleThemeChange("sunset")}
              >
                <div className={styles.themeDot} style={{ background: "linear-gradient(135deg, #f43f5e, #f59e0b)" }}></div>
                <span className={styles.themeName}>Sunset</span>
              </button>
            </div>
          </section>

          {/* Bento Card 3: Clock & Work Status (Col 4) */}
          <section className={`${styles.bentoCard} ${styles.col4}`}>
            <div>
              <span className={styles.kicker}>Presence</span>
              <h2 className={styles.cardTitle}>Status & Time</h2>

              <div className={styles.statusContainer}>
                <div className={styles.statusIndicator}>
                  <span className={styles.pulse}></span>
                  Open To Work
                </div>
              </div>
            </div>

            <div className={styles.timeDisplay}>
              {time || "00:00:00 AM"}
            </div>
          </section>

          {/* Bento Card 4: Tech Stack (Col 4, Row Span 2) */}
          <section className={`${styles.bentoCard} ${styles.col4} ${styles.rowSpan2}`}>
            <div>
              <span className={styles.kicker}>Arsenal</span>
              <h2 className={styles.cardTitle}>Core Stack</h2>
              <p className={styles.cardDescription}>
                Technologies I utilize to structure, style, and power websites.
              </p>
            </div>

            <div className={styles.skillGrid}>
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={styles.skillBadge}
                  title={`Proficiency: ${skill.level}`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </section>

          {/* Bento Card 5: Stats Counter (Col 4) */}
          <section className={`${styles.bentoCard} ${styles.col4}`}>
            <div>
              <span className={styles.kicker}>Metrics</span>
              <h2 className={styles.cardTitle}>Overview</h2>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{projectCount}+</span>
                <span className={styles.statLabel}>Completed Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{commitCount}+</span>
                <span className={styles.statLabel}>GitHub Commits</span>
              </div>
            </div>
          </section>

          {/* Bento Card 6: Interactive Work Timeline (Col 4) */}
          <section className={`${styles.bentoCard} ${styles.col4}`}>
            <div>
              <span className={styles.kicker}>Experience</span>
              <h2 className={styles.cardTitle}>Career Journey</h2>
              <p className={styles.cardDescription}>
                Building modern, responsive, and high-performance web applications.
              </p>
            </div>

            <div className={styles.experienceTimeline}>
              <div
                className={styles.timelineCard}
                onClick={() => setExpandedTimeline(expandedTimeline === 0 ? -1 : 0)}
              >
                <div className={styles.timelineHeader}>
                  <span className={styles.timelineRole}>Front-End Developer</span>
                  <span className={styles.timelinePeriod}>Feb 2022 - Present</span>
                </div>
             
              </div>

              <div
                className={styles.timelineCard}
                onClick={() => setExpandedTimeline(expandedTimeline === 1 ? -1 : 1)}
              >
                <div className={styles.timelineHeader}>
                  <span className={styles.timelineRole}>Front-End Developer Intern</span>
                  <span className={styles.timelinePeriod}>Nov 2021 - Feb 2022</span>
                </div>
                {expandedTimeline === 1 && (
                  <p className={styles.timelineDetail}>
                    Converted Figma designs into responsive HTML, CSS, and JavaScript
                    interfaces while implementing mobile-first layouts and interactive UI
                    animations.
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Bento Card 7: Featured Work Showcase (Col 6, Row Span 2) */}
          <section className={`${styles.bentoCard} ${styles.col6} ${styles.rowSpan2}`} style={{ padding: "0" }}>
            <div style={{ padding: "24px 24px 12px 24px" }}>
              <span className={styles.kicker}>Creations</span>
              <h2 className={styles.cardTitle}>Featured Projects</h2>
              <p className={styles.cardDescription}>
                Click on projects to review full timeline and details.
              </p>
            </div>

            <div className={pageStyles.projectScroller}>
              {featuredProjects.map((project) => (
                <div key={project.title} className={pageStyles.projectCardInner}>
                  <div className={pageStyles.projectImageWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={pageStyles.projectImg}
                    />
                    <div className={pageStyles.projectOverlay}>
                      <Link href={project.link} className={pageStyles.viewProjectBtn}>
                        Open Showcase
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                      </Link>
                    </div>
                  </div>
                  <div className={pageStyles.projectInfo}>
                    <h3 className={pageStyles.projectTitle}>{project.title}</h3>
                    <p className={pageStyles.projectDesc}>{project.description}</p>
                    <div className={pageStyles.projectTags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={pageStyles.projectTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bento Card 8: Contact Form Widget (Col 6, Row Span 2) */}
          <section className={`${styles.bentoCard} ${styles.col6} ${styles.rowSpan2}`}>
            <div>
              <span className={styles.kicker}>Connection</span>
              <h2 className={styles.cardTitle}>Get In Touch</h2>
              <p className={styles.cardDescription}>
                Have an opportunity or project? Drop me a line.
              </p>
            </div>

            {!sent ? (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={styles.inputField}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={styles.inputField}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    placeholder="Your Message..."
                    className={styles.textareaField}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <span>Sending...</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={pageStyles.spinner}><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" /></svg>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3>Message Sent Successfully!</h3>
                <p className={styles.cardDescription} style={{ marginTop: "6px" }}>
                  Thanks for reaching out, Anjali will get back to you shortly.
                </p>
                <button
                  className={styles.secondaryButton}
                  style={{ marginTop: "16px", padding: "8px 18px" }}
                  onClick={() => setSent(false)}
                >
                  Send another
                </button>
              </div>
            )}
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className={pageStyles.footer}>
        <div className={pageStyles.footerInner}>
          <p>© {new Date().getFullYear()} Anjali. Built with Next.js.</p>
          <div className={pageStyles.footerLinks}>
            <a href="mailto:anjali@example.com" className={pageStyles.footerLink}>
              Email
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={pageStyles.footerLink}>
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={pageStyles.footerLink}>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
