"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import InteractiveBackground from "@/components/InteractiveBackground";
import styles from "@/components/BentoGrid.module.css";
import pageStyles from "../page.module.css";
import workStyles from "./work.module.css";

const categories = [
  "All",
  "Corporate Website",
  "E-Commerce",
  "CMS Development",
  "Landing Pages",
  "Web Applications"
];

const projects = [
  {
    id: 1,
    title: "AXLDRONE Official Website",
    category: "Corporate Website",
    description:
      "A modern drone company website built with Next.js, GSAP, Strapi CMS, and interactive 360° product views.",
    longDescription:
      "Developed the official AXLDRONE corporate website using Next.js with a focus on responsive layouts, reusable components, and engaging user interactions. Implemented GSAP animations, Framer Motion page transitions, and an interactive 360-degree product viewer using Cloudimage 360. Integrated dynamic content through Strapi CMS while ensuring performance, scalability, and cross-device compatibility.",
    challenges:
      "Optimized large sets of high-resolution product images for smooth 360° interaction while maintaining excellent performance through lazy loading, frame preloading, and modular SCSS architecture.",
    techStack: [
      "Next.js",
      "Strapi CMS",
      "GSAP",
      "Cloudimage 360",
      "Framer Motion",
      "SCSS"
    ],
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=900&q=80",
    liveLink: "https://axldrone.com",
    codeLink: "https://github.com/AnjaliDithin/AXLDRONE-Official-Website"
  },
  {
    id: 2,
    title: "Acodez Corporate Website",
    category: "Corporate Website",
    description:
      "A high-performance corporate website developed using Astro.js with reusable components and SEO optimization.",
    longDescription:
      "Built and maintained the Acodez corporate website using Astro.js. Developed reusable layouts, responsive UI components, optimized images and assets, and implemented SEO-friendly pages. Worked closely with designers to deliver pixel-perfect interfaces while ensuring excellent Lighthouse scores and fast page loading.",
    challenges:
      "Maintaining reusable components across multiple pages while achieving high performance, responsive layouts, and clean component architecture using Astro.js.",
    techStack: [
      "Astro.js",
      "JavaScript",
      "SCSS",
      "HTML5",
      "SEO",
      "Responsive Design"
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    liveLink: "https://acodez.in",
    codeLink: ""
  },
  {
    id: 3,
    title: "Furtrieve Shopify Storefront",
    category: "E-Commerce",
    description:
      "A custom Shopify storefront for an innovative pet tracking brand with custom sections and optimized subscription hooks.",
    longDescription:
      "Developed and customized the Furtrieve Shopify e-commerce storefront utilizing Liquid, JavaScript, and SCSS. Engineered reusable custom sections to seamlessly handle promotional offers ($80 OFF marketing landing hooks) and email newsletter lead generation forms. Collaborated on establishing a smooth customer checkout journey for hardware and tracking services.",
    challenges:
      "Building flexible Shopify sections that supported both high-conversion promotional assets and dynamic product variables while maintaining excellent mobile responsiveness and fast page speed.",
    techStack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "SCSS",
      "HTML5",
      "Responsive Design"
    ],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
    liveLink: "https://www.furtrieve.com/",
    codeLink: ""
  },
  {
    id: 4,
    title: "Purrtrieve Shopify Storefront",
    category: "E-Commerce",
    description:
      "A tailored Shopify e-commerce branch dedicated to compact cat tracking ecosystems with high-conversion landing assets.",
    longDescription:
      "Developed the custom Purrtrieve Shopify storefront tailored explicitly for feline GPS hardware and tracking services. Built optimized page layouts, interactive subscription plan selectors, and custom theme sections that maintain cross-brand symmetry with the core Furtrieve store while speaking directly to cat parents.",
    challenges:
      "Creating highly reusable Liquid components across multiple storefronts to handle variable multi-tiered device options and app subscription bundle paths seamlessly.",
    techStack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "SCSS",
      "HTML5",
      "Responsive UI"
    ],
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80",
    liveLink: "https://www.purrtrieve.com/",
    codeLink: ""
  },
  {
    id: 5,
    title: "Arambliving WooCommerce Theme",
    category: "CMS Development",
    description:
      "A custom WordPress/WooCommerce theme engineered for natural herbal and wellness products.",
    longDescription:
      "Developed a bespoke, performance-centric WooCommerce web solution for Arambliving. Created custom Gutenberg blocks and extended functionality using Advanced Custom Fields (ACF) to support natural herbal design narratives. Handled backend layouts via PHP and styled fluid interfaces via modular SCSS architecture.",
    challenges:
      "Ensuring intricate custom design components remained user-friendly and editable inside the WordPress admin dashboard without jeopardizing frontend rendering performance or core accessibility structures.",
    techStack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "SCSS",
      "Gutenberg",
      "ACF"
    ],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    liveLink: "",
    codeLink: ""
  },
  {
    id: 6,
    title: "Elephant Pass Landing Page",
    category: "Landing Pages",
    description:
      "A pixel-perfect, high-performance static landing page tailored to deliver clean visual narratives and crisp user journeys.",
    longDescription:
      "Developed the static landing page for Elephant Pass using semantic HTML5, SCSS, and modern JavaScript features. Focused extensively on asset optimization, layout responsiveness, and sleek CSS transitions to capture and retain visitor engagement right from initial loading.",
    challenges:
      "Achieving highly optimized load times for high-resolution brand visuals while ensuring robust responsive behaviors across strict screen breakpoints.",
    techStack: [
      "HTML5",
      "SCSS",
      "JavaScript",
      "BEM Methodology",
      "Responsive UI"
    ],
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
    liveLink: "",
    codeLink: ""
  },
  {
    id: 7,
    title: "Kings Club Landing Page",
    category: "Landing Pages",
    description:
      "A highly engaging static landing page meticulously structured for high-conversion marketing funnels.",
    longDescription:
      "Built the promotional landing page for Kings Club. Focused on structuring prominent, high-converting call-to-action (CTA) triggers and interactive UI components to track user generation hooks for ongoing marketing initiatives.",
    challenges:
      "Maintaining an incredibly lightweight page architecture while introducing custom client-side validation logic and rich responsive behaviors.",
    techStack: [
      "HTML5",
      "SCSS",
      "JavaScript",
      "Form Validation",
      "Cross-Browser Compatibility"
    ],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    liveLink: "",
    codeLink: ""
  },
  {
    id: 8,
    title: "Otava Corporate Portal",
    category: "CMS Development",
    description:
      "A custom, responsive WordPress platform constructed with an emphasis on corporate profile presentation.",
    longDescription:
      "Engineered a fully customized WordPress corporate presence for Otava. Designed responsive component layouts matching precise typography specs, configured targeted backend administrative schemas using ACF, and implemented fast rendering logic.",
    challenges:
      "Creating highly intuitive block models that allowed administrative teams to easily revise corporate service arrays without disturbing production frontend visuals.",
    techStack: [
      "WordPress",
      "PHP",
      "Advanced Custom Fields (ACF)",
      "SCSS",
      "JavaScript"
    ],
    image:
      "https://www.otava.com/wp-content/uploads/2026/01/Multi-Cloud-Slider.png",
    liveLink: "https://www.otava.com/",
    codeLink: ""
  },
  {
    id: 9,
    title: "YRKInfra Web Platform",
    category: "CMS Development",
    description:
      "An industrial infrastructure website delivering rich project showcases and clean data management configurations.",
    longDescription:
      "Built the custom infrastructure showcase website for YRKInfra under the WordPress ecosystem. Mapped flexible post-type relationship matrices to output ongoing construction assets, blueprints, and multi-tier company timelines.",
    challenges:
      "Organizing detailed layout fields for massive engineering project profiles while retaining optimized, lightweight page weight indexes.",
    techStack: [
      "WordPress",
      "PHP",
      "Custom Post Types",
      "SCSS",
      "Asset Optimization"
    ],
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
    liveLink: "",
    codeLink: ""
  },
  {
    id: 10,
    title: "WiseTree WordPress Website",
    category: "CMS Development",
    description:
      "A polished corporate CMS solution centered on clean interface hierarchies and modern responsive grids.",
    longDescription:
      "Designed and developed the interface structures for WiseTree using tailored WordPress components. Structured custom theme files from the ground up to ensure high lighthouse performance scores and consistent asset scaling.",
    challenges:
      "Bridging interactive front-end visual states with modular, maintainable code architectures across all screen formats.",
    techStack: [
      "WordPress",
      "PHP",
      "SCSS",
      "JavaScript",
      "Responsive Layouts"
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    liveLink: "",
    codeLink: ""
  },
  {
    id: 11,
    title: "Malabar Charitable Trust Platform",
    category: "CMS Development",
    description:
      "A non-profit website focused on secure donations tracking modules and accessible content layouts.",
    longDescription:
      "Developed the custom non-profit foundation platform for Malabar Charitable Trust. Leveraged accessible HTML architectures alongside clean WordPress integration templates to showcase active societal initiatives and campaigns.",
    challenges:
      "Delivering high levels of accessibility conformance compliance across a wide array of content blocks and donation tracking pathways.",
    techStack: [
      "WordPress",
      "PHP",
      "ACF",
      "HTML5 Accessibility",
      "SCSS"
    ],
    image:
      "https://www.malabarcharitabletrust.org/wp-content/uploads/2024/10/banner-image.png",
    liveLink: "https://www.malabarcharitabletrust.org/",
    codeLink: ""
  },
  {
    id: 12,
    title: "Tigma Business Solution Website",
    category: "CMS Development",
    description:
      "A corporate digital experience focusing on seamless customer service routing and modern block architectures.",
    longDescription:
      "Architected a scalable custom WordPress setup for Tigma. Built out specialized landing modules, contact routing pipelines, and lightweight reusable visual patterns designed for enterprise lead capture.",
    challenges:
      "Optimizing customer routing modules while strictly sticking to code optimization pipelines and avoiding performance overhead.",
    techStack: [
      "WordPress",
      "PHP",
      "Form Handling",
      "SCSS",
      "JavaScript"
    ],
    image:
      "https://tigmatech.com/wp-content/uploads/2024/10/banner.png",
    liveLink: "https://tigmatech.com/",
    codeLink: ""
  },
  {
    id: 13,
    title: "Bespoke Asia Custom Theme",
    category: "CMS Development",
    description:
      "A high-end, premium portfolio website created to showcase high-fidelity corporate assets across Asian markets.",
    longDescription:
      "Developed a custom premium theme layout for Bespoke Asia. Focused intensely on sleek UI presentation layouts, custom Gutenberg blocks, and fluid transition frameworks to convey brand luxury.",
    challenges:
      "Balancing advanced frontend aesthetics with robust responsive rendering performance across older legacy device frameworks.",
    techStack: [
      "WordPress",
      "PHP",
      "Gutenberg Blocks",
      "SCSS",
      "UI Animation"
    ],
    image:
      "https://bespokeasiaholidays.com/wp-content/uploads/2025/05/Bespoke-Asia-Holidays-3.jpg",
    liveLink: "https://bespokeasiaholidays.com/",
    codeLink: ""
  },
  {
    id: 14,
    title: "Aimer Business School Platform",
    category: "CMS Development",
    description:
      "An educational portal tailored for academic program administration, responsive course directory views, and structured student routes.",
    longDescription:
      "Engineered a fully customized WordPress platform for Aimer Business School. Constructed modular course matrices, interactive program listings, and custom administrative modules allowing faculty to seamlessly manage curriculum schemas and student enrollment paths.",
    challenges:
      "Organizing high volumes of educational and promotional media layouts while maintaining optimized, fast-loading, pixel-perfect layouts across dynamic screen breakpoints.",
    techStack: [
      "WordPress",
      "PHP",
      "Advanced Custom Fields (ACF)",
      "SCSS",
      "JavaScript",
      "Responsive Layouts"
    ],
    image:
      "https://aimerbschool.com/wp-content/themes/aimer/images/home/banner.jpg",
    liveLink: "https://aimerbschool.com/",
    codeLink: ""
  },
  {
    id: 15,
    title: "Alba Water Corporate Site",
    category: "CMS Development",
    description:
      "A modern water management platform built with custom blocks emphasizing enterprise service presentations and fluid layout architecture.",
    longDescription:
      "Developed a bespoke WordPress presence for Alba Water. Engineered custom Gutenberg layout blocks and extended utility setups using ACF to support their industrial water solution presentation layers, focusing on responsive typography grid specifications.",
    challenges:
      "Ensuring intricate backend administrative models remained highly intuitive for product managers to update without disrupting production frontend animations.",
    techStack: [
      "WordPress",
      "PHP",
      "Gutenberg",
      "ACF",
      "SCSS",
      "Asset Optimization"
    ],
    image:
      "https://albawater.com.au/wp-content/uploads/2025/06/banner1.png",
    liveLink: "https://albawater.com.au/",
    codeLink: ""
  },
  {
    id: 16,
    title: "24KARAT Custom Application UI",
    category: "Web Applications",
    description:
      "A dynamic, feature-rich web platform combining the robust backend architecture of Laravel with crisp, high-performance HTML/CSS layouts.",
    longDescription:
      "Collaborated on building the frontend components of the 24KARAT application. Blended clean, responsive HTML/SCSS blade layouts into a Laravel ecosystem. Focused heavily on client-side form logic handling, asset minification, and clean responsive workflows to showcase high-value asset evaluation tracking dashboards.",
    challenges:
      "Bridging precise design parameters with backend controller requirements to ensure complex UI data models rendered efficiently under varying real-time database queries.",
    techStack: [
      "Laravel",
      "PHP Blade",
      "JavaScript",
      "HTML5",
      "SCSS",
      "Responsive UI"
    ],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    liveLink: "",
    codeLink: ""
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState("cyber");

  // Sync theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("anjali-portfolio-theme") || "cyber";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className={pageStyles.pageWrapper}>
      <InteractiveBackground />

      {/* Header */}
      <header className={pageStyles.header}>
        <div className={pageStyles.headerInner}>
          <Link href="/" className={pageStyles.logo}>
            Anjali<span className={pageStyles.logoDot}>.</span>
          </Link>
          <nav className={pageStyles.nav}>
            <Link href="/" className={pageStyles.navLink}>
              Home
            </Link>
            <Link href="/work" className={pageStyles.navLinkActive}>
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

      {/* Main Work Page */}
      <main className={pageStyles.mainContent}>
        <div className={workStyles.workContainer}>

          {/* Work Hero Title */}
          <div className={workStyles.workHero}>
            <span className={styles.kicker}>Featured Creations</span>
            <h1 className={workStyles.title}>
              Engineering Interactive <span className={styles.gradientText}>Digital Artistry</span>.
            </h1>
            <p className={workStyles.subtitle}>
              Explore my front-end solutions, custom-styled layouts, and design systems. Click on any project to review the detailed case study, technical hurdles, and core codebase solutions.
            </p>
          </div>

          {/* Tab Categories */}
          <div className={workStyles.categoryTabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${workStyles.tabBtn} ${activeCategory === cat ? workStyles.tabBtnActive : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className={workStyles.projectsGrid}>
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className={`${styles.bentoCard} ${workStyles.projectCard}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={workStyles.projectImgContainer}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={workStyles.projectImg}
                  />
                  <div className={workStyles.projectTagBadge}>
                    {project.category}
                  </div>
                </div>
                <div className={workStyles.projectBody}>
                  <h3 className={workStyles.projectTitle}>{project.title}</h3>
                  <p className={workStyles.projectDesc}>{project.description}</p>

                  <div className={workStyles.projectStack}>
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className={workStyles.techTag}>
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className={workStyles.techTagMore}>
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <button className={workStyles.caseStudyBtn}>
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      {/* Case Study Details Modal Drawer */}
      {selectedProject && (
        <div className={workStyles.drawerOverlay} onClick={() => setSelectedProject(null)}>
          <div
            className={workStyles.drawerSheet}
            onClick={(e) => e.stopPropagation()}
            style={{ animation: `${workStyles.slideInRight} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards` }}
          >
            {/* Drawer Close */}
            <button className={workStyles.closeBtn} onClick={() => setSelectedProject(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className={workStyles.drawerContent}>
              <div className={workStyles.drawerImgWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={workStyles.drawerImg}
                />
              </div>

              <div className={workStyles.drawerBody}>
                <span className={styles.kicker}>{selectedProject.category} Case Study</span>
                <h2 className={workStyles.drawerTitle}>{selectedProject.title}</h2>

                {/* Tech tags */}
                <div className={workStyles.drawerStack}>
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className={workStyles.drawerTechTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={workStyles.drawerSection}>
                  <h3>Project Overview</h3>
                  <p>{selectedProject.longDescription}</p>
                </div>

                <div className={workStyles.drawerSection}>
                  <h3>Technical Hurdles & Core Challenges</h3>
                  <p>{selectedProject.challenges}</p>
                </div>

                <div className={workStyles.drawerActions}>
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.primaryButton}
                  >
                    Launch Live Site
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                  </a>
                  <a
                    href={selectedProject.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.secondaryButton}
                  >
                    View Codebase
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={pageStyles.footer}>
        <div className={pageStyles.footerInner}>
          <p>© {new Date().getFullYear()} Anjali. Built with React & Next.js.</p>
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
