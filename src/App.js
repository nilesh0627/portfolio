import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBook,
  FiDatabase,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiMonitor,
  FiServer,
  FiSun,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTurborepo,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import resumePdf from "./Assets/Nilesh_SWE.pdf";
import "./style.scss";
import "./App.scss";

const navigationItems = [
  { id: "experience", label: "Experience", index: "01" },
  { id: "approach", label: "Approach", index: "02" },
  { id: "background", label: "Background", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
];

const experience = [
  {
    number: "01",
    company: "ConcertAI",
    tenure: "Full-time",
    location: "Bengaluru, India · Hybrid",
    period: "Jul 2023 — Present",
    discipline: "Clinical intelligence · Enterprise SaaS",
    roles: [
      {
        title: "Senior Engineer",
        period: "Apr 2026 — Present",
        points: [
          "Leading performance optimization across the Precision Suite — code splitting, lazy loading, Brotli, and HTTP caching (Cache-Control, ETag) — improving Core Web Vitals by 25%.",
          "Currently building CancerLinQ — Patient View, Pre-Screening, and Schedule View modules for CRCs and site coordinators.",
        ],
      },
      {
        title: "Software Engineer",
        period: "Jul 2023 — Apr 2026",
        points: [
          "Sole frontend engineer for Precision Trials and ACT since inception — owning UI architecture and five Turborepo monorepos across the Precision Suite.",
          "Shipped the IE Digitization flow — a natural-language interface for cohort generation that replaced a manual drag-and-drop criteria builder, cutting cohort creation from 3h to 15m.",
          "Built Precision Copilot surfaces for clinical research workflows — protocol interpretation, study insights, and decision support for trial teams.",
          "Built Site Selection and Study Design Agent UIs powering AI-driven site recommendations, enrollment forecasting, and diversity modeling — cutting trial timelines by 3–9 months.",
          "Built UI surfaces for ACT's predictive modeling engine, presenting trial success forecasts up to 30% more accurate than traditional estimation methods.",
          "Bootstrapped 5 product monorepos (Precision Trials, ACT, Explorer, GTM, Launch) on Turborepo with shared package boundaries and task-level caching.",
          "Led TDD adoption with Jest and React Testing Library across the frontend codebase.",
        ],
      },
    ],
    name: "Precision Trials · ACT · CancerLinQ",
    metrics: [
      { value: "3h → 15m", label: "cohort creation, down from manual building" },
      { value: "$4M+", label: "potential savings unlocked per Phase II/III study" },
      { value: "75%", label: "of the world's top life-sciences companies served" },
    ],
    systemLabel: "cohort-decision.app",
    stack: ["React", "TypeScript", "Redux Toolkit", "Node.js", "Express", "Turborepo", "Jest"],
    tone: "clinical",
  },
  {
    number: "02",
    company: "Publicis Sapient",
    tenure: "Full-time",
    location: "Bengaluru, India · Remote",
    period: "May 2021 — Jul 2023",
    discipline: "Automotive commerce · Multi-brand platform",
    roles: [
      {
        title: "Associate Technology L2",
        period: "Feb 2023 — Jul 2023",
        points: [
          "Designed an offers engine supporting complex AND/OR combination logic, correctly rendering every valid permutation of stacked and conditional promotional offers.",
          "Architected reusable AEM component templates so content authors configure brand-specific experiences without engineering intervention.",
          "Built a shared React component library under TDD, enforcing consistency across a multi-contributor codebase.",
        ],
      },
      {
        title: "Associate Technology L1",
        period: "May 2021 — Jan 2023",
        points: [
          "Built the multi-brand offers homepage for RAM, Jeep, Chrysler, Dodge, Alfa Romeo, and Fiat — dynamically rendering brand-specific content via Adobe Experience Manager.",
          "Led internationalization of the Maserati platform (legacy AEM + React) with country/language routing (/us/en, /it/it) across 10–12 countries.",
          "Integrated Adobe Analytics for funnel tracking and personalization insights that directly informed product decisions.",
        ],
      },
    ],
    name: "Stellantis Offers Engine",
    metrics: [
      { value: "10–12", label: "markets localised on one routing layer" },
      { value: "7+", label: "Stellantis brands rendered from a single engine" },
      { value: "0", label: "engineer touches per new brand campaign" },
    ],
    systemLabel: "offer-engine.app",
    stack: ["React", "AEM", "Node.js", "PostgreSQL", "Adobe Analytics"],
    tone: "commerce",
  },
  {
    number: "03",
    company: "Infosys",
    tenure: "Full-time",
    location: "Mangaluru, India",
    period: "Aug 2019 — May 2021",
    discipline: "Enterprise operations · Device lifecycle",
    roles: [
      {
        title: "System Engineer",
        period: "Aug 2019 — May 2021",
        points: [
          "Built an enterprise iOS device lifecycle tracking application in React.js — one continuous workflow from manufacturing line to customer sale.",
          "Translated wireframes into responsive, production-grade React components across the device journey.",
          "Established the team's frontend coding standards — the foundations everything since is built on.",
        ],
      },
    ],
    name: "Device Lifecycle Tracker",
    metrics: [
      { value: "E2E", label: "device journey, factory to customer sale" },
      { value: "02", label: "years of enterprise foundations" },
    ],
    systemLabel: "lifecycle-ops.app",
    stack: ["React.js", "JavaScript", "CSS3", "REST APIs"],
    tone: "lifecycle",
  },
];

const capabilities = [
  {
    number: "01",
    Icon: FiMonitor,
    title: "Product interfaces",
    copy: "React and TypeScript systems that turn dense domain workflows into calm, understandable product moments.",
    tag: "UI / UX ENGINEERING",
    points: [
      "Design-system components, WCAG-accessible by default",
      "Micro-frontends with Webpack Module Federation",
      "Owned end-to-end: architecture through feature delivery",
    ],
    footer: "React · TypeScript · Redux Toolkit",
  },
  {
    number: "02",
    Icon: FiServer,
    title: "Backend for frontend",
    copy: "Node and Express layers that compose services, centralize caching, and shield the client from backend noise.",
    tag: "API DESIGN / BFF",
    points: [
      "Product-shaped contracts over chatty service calls",
      "REST and Server-Sent Events for live product data",
      "Analytics wired in so decisions have evidence",
    ],
    footer: "Node.js · Express · REST · SSE",
  },
  {
    number: "03",
    Icon: FiDatabase,
    title: "Data & reliability",
    copy: "PostgreSQL modelling, query tuning, and cache strategy applied where they change the outcome users feel.",
    tag: "POSTGRES / CACHE",
    points: [
      "Cache-Control and ETag strategy for high-payload APIs",
      "TDD with Jest and React Testing Library",
      "Configuration data modelled in PostgreSQL",
    ],
    footer: "PostgreSQL · Jest · RTL · TDD",
  },
  {
    number: "04",
    Icon: FiTrendingUp,
    title: "Performance at scale",
    copy: "Core Web Vitals, bundle strategy, compression, and observability — measured, not guessed.",
    tag: "WEB VITALS / OBSERVABILITY",
    points: [
      "+25% Core Web Vitals on flagship clinical SaaS",
      "Code splitting, lazy loading, bundle optimization",
      "Brotli at the API, Nginx gzip and caching at the edge",
    ],
    footer: "Lighthouse · Docker · CI/CD · Nginx",
  },
];

const techCards = [
  { name: "React", Icon: SiReact, level: 9, years: "7+", group: "Frontend" },
  { name: "TypeScript", Icon: SiTypescript, level: 9, years: "4+", group: "Languages" },
  { name: "JavaScript", Icon: SiJavascript, level: 9, years: "7+", group: "Languages" },
  { name: "HTML / CSS", Icon: SiHtml5, level: 9, years: "7+", group: "Frontend" },
  { name: "Node.js", Icon: SiNodedotjs, level: 8, years: "5+", group: "Backend" },
  { name: "Express", Icon: SiExpress, level: 8, years: "5+", group: "Backend" },
  { name: "Redux", Icon: SiRedux, level: 8, years: "5+", group: "Frontend" },
  { name: "PostgreSQL", Icon: SiPostgresql, level: 8, years: "5+", group: "Data" },
  { name: "Jest", Icon: SiJest, level: 8, years: "4+", group: "Testing" },
  { name: "Turborepo", Icon: SiTurborepo, level: 8, years: "3+", group: "Architecture" },
  { name: "Git", Icon: SiGit, level: 8, years: "7+", group: "Tooling" },
  { name: "Webpack", Icon: SiWebpack, level: 7, years: "4+", group: "Architecture" },
  { name: "MongoDB", Icon: SiMongodb, level: 7, years: "3+", group: "Data" },
  { name: "Docker", Icon: SiDocker, level: 7, years: "3+", group: "DevOps" },
  { name: "Nginx", Icon: SiNginx, level: 7, years: "3+", group: "DevOps" },
];

const technologies = [
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Docker", Icon: SiDocker },
  { name: "Jest", Icon: SiJest },
];

const stats = [
  { value: "7", suffix: "+", label: "years shipping production software" },
  { value: "75", suffix: "%", label: "of the world's top life-sciences companies served" },
  { value: "$4M", suffix: "+", label: "potential savings unlocked per Phase II/III study" },
  { value: "12", suffix: "×", label: "faster cohort creation workflow" },
];

function CaseVisual({ project }) {
  const isClinical = project.tone === "clinical";

  return (
    <div className={`case-visual case-visual--${project.tone}`} aria-label={`${project.company} system visual`}>
      <div className="case-visual__glow" />
      <div className="case-visual__meta">
        <span>{project.discipline}</span>
        <span>LIVE SYSTEM / {project.number}</span>
      </div>
      <div className="case-visual__window">
        <div className="case-visual__window-bar">
          <span className="window-dots"><i /><i /><i /></span>
          <span>{project.systemLabel}</span>
          <span className="window-secure">● secure</span>
        </div>
        {isClinical ? (
          <div className="screen">
            <aside className="screen__rail"><span /><span className="is-active" /><span /><span /></aside>
            <div className="screen__body">
              <div className="screen__headline">
                <div><small>COHORT SIGNAL</small><strong>Metastatic NSCLC</strong></div>
                <span>97.4% match</span>
              </div>
              <div className="screen__chart">
                <div className="chart-grid" />
                <svg viewBox="0 0 470 146" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 117 C37 115 54 99 79 104 S117 76 144 84 S189 58 214 70 S264 41 290 55 S334 34 363 44 S423 12 470 18" />
                  <path className="area" d="M0 117 C37 115 54 99 79 104 S117 76 144 84 S189 58 214 70 S264 41 290 55 S334 34 363 44 S423 12 470 18 V146 H0 Z" />
                </svg>
                <span className="chart-point chart-point--one" />
                <span className="chart-point chart-point--two" />
              </div>
              <div className="screen__cards">
                <span><small>Eligibility</small><b>14 / 16</b></span>
                <span><small>Sites</small><b>08</b></span>
                <span><small>Confidence</small><b>High</b></span>
              </div>
            </div>
          </div>
        ) : project.tone === "commerce" ? (
          <div className="screen">
            <aside className="screen__rail"><span>OV</span><span className="is-active">OF</span><span>AU</span><span>DL</span></aside>
            <div className="screen__body">
              <div className="screen__headline"><div><small>ACTIVE OFFER RULE</small><strong>MY24 Grand Cherokee</strong></div><span>Rule set 4.2</span></div>
              <div className="offer-flow">
                <span className="offer-flow__line" />
                <div className="offer-flow__node"><i>01</i><b>Market</b><small>GB / EN</small></div>
                <div className="offer-flow__node"><i>02</i><b>Audience</b><small>Returning</small></div>
                <div className="offer-flow__node is-result"><i>03</i><b>Offer</b><small>£3,250</small></div>
              </div>
              <div className="screen__rule"><span>IF <b>registered owner</b></span><i>+</i><span>AND <b>finance eligible</b></span><em>VALID</em></div>
            </div>
          </div>
        ) : (
          <div className="screen">
            <aside className="screen__rail"><span>FC</span><span className="is-active">QA</span><span>CH</span><span>SL</span></aside>
            <div className="screen__body">
              <div className="screen__headline"><div><small>DEVICE JOURNEY</small><strong>Unit #IN-20481</strong></div><span>Stage 2 / 4</span></div>
              <div className="offer-flow offer-flow--four">
                <span className="offer-flow__line" />
                <div className="offer-flow__node is-done"><i>01</i><b>Factory</b><small>Assembled</small></div>
                <div className="offer-flow__node is-active"><i>02</i><b>QA</b><small>In test</small></div>
                <div className="offer-flow__node"><i>03</i><b>Channel</b><small>Queued</small></div>
                <div className="offer-flow__node is-result"><i>04</i><b>Sale</b><small>Customer</small></div>
              </div>
              <div className="screen__rule"><span>IF <b>qa passed</b></span><i>+</i><span>AND <b>channel assigned</b></span><em>TRACKED</em></div>
            </div>
          </div>
        )}
      </div>
      <div className="case-visual__footer"><span>{project.name}</span><span>System status <i /> operational</span></div>
    </div>
  );
}

function LogoMark() {
  return (
    <svg className="wordmark__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="lm-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#171b2c" />
          <stop offset="1" stopColor="#080a12" />
        </linearGradient>
        <linearGradient id="lm-beam" gradientUnits="userSpaceOnUse" x1="22" y1="18" x2="42" y2="46">
          <stop offset="0" stopColor="#818cf8" />
          <stop offset="0.55" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <radialGradient id="lm-sheen" cx="0.3" cy="0.16" r="0.95">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="lm-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#lm-bg)" />
      <rect width="64" height="64" rx="16" fill="url(#lm-sheen)" />
      <rect x="0.6" y="0.6" width="62.8" height="62.8" rx="15.4" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1.2" />
      <g fill="none" strokeLinecap="round" strokeWidth="6.5">
        <path d="M22 46 V18" stroke="#eef1fb" />
        <path d="M42 46 V18" stroke="#eef1fb" strokeOpacity="0.92" />
        <path d="M22 18 L42 46" stroke="url(#lm-beam)" filter="url(#lm-soft)" opacity="0.65" />
        <path d="M22 18 L42 46" stroke="url(#lm-beam)" />
      </g>
    </svg>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("top");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => localStorage.getItem("portfolio-theme") === "light");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.style.colorScheme = isLightMode ? "light" : "dark";
    localStorage.setItem("portfolio-theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-nav-section]"));
    const updateActiveSection = () => {
      const line = window.scrollY + window.innerHeight * 0.35;
      let current = sections.length ? sections[0].id : "top";
      sections.forEach((section) => {
        if (section.offsetTop <= line) current = section.id;
      });
      if (sections.length && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        current = sections[sections.length - 1].id;
      }
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const revealables = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealables.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`portfolio ${isLightMode ? "portfolio--light" : ""}`}>
      <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Nilesh Mishra home">
          <LogoMark />
          <span className="wordmark__name">nilesh<span className="grad">.dev</span></span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? "is-active" : ""}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="header-socials">
            <a href="https://github.com/nilesh0627" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/nilesh0627/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:nilesh0627@gmail.com" aria-label="Email"><FiMail /></a>
          </div>
          <span className="header-divider" aria-hidden="true" />
          <button
            className="icon-button"
            type="button"
            onClick={() => setIsLightMode((light) => !light)}
            aria-label={isLightMode ? "Switch to dark theme" : "Switch to light theme"}
          >
            {isLightMode ? <FiMoon /> : <FiSun />}
          </button>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      <nav
        className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-nav__title">Navigate</div>
        {navigationItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
            <span>{item.index}</span>{item.label}<FiArrowUpRight />
          </a>
        ))}
        <a className="mobile-nav__resume" href={resumePdf} download onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Download résumé <FiDownload /></a>
      </nav>

      <main>
        <section className="hero" id="top" data-nav-section aria-labelledby="hero-title">
          <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero__grid" aria-hidden="true" />
          <div className="shell hero__content">
            <div className="hero__copy">
              <p className="badge"><span className="badge__dot" /> Available for thoughtful product work</p>
              <h1 id="hero-title">
                Engineering <span className="grad">calm</span> into systems where decisions matter.
              </h1>
              <p className="hero__intro">
                I’m Nilesh Mishra — a senior full-stack product engineer. For 7+ years I’ve built the interfaces,
                services, and data layers behind high-stakes software, from clinical intelligence to global
                automotive commerce.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#experience">View experience <FiArrowDown /></a>
                <a className="btn btn--ghost" href={resumePdf} download>Download résumé <FiDownload /></a>
              </div>
              <div className="hero__socials">
                <a href="https://github.com/nilesh0627" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/nilesh0627/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                <a href="mailto:nilesh0627@gmail.com" aria-label="Email"><FiMail /></a>
              </div>
            </div>

            <div className="hero__visual" aria-label="Code card representing Nilesh's engineering profile">
              <div className="hero__ring" aria-hidden="true" />
              <div className="code-card">
                <div className="code-card__bar"><span className="window-dots"><i /><i /><i /></span><span>nilesh.config.ts</span><span className="code-card__lang">TypeScript</span></div>
                <pre className="code-card__body">
<span className="c">{"// product engineer, full-stack"}</span>{"\n"}
<span className="k">const</span> <span className="v">engineer</span> = {"{"}{"\n"}
{"  "}name: <span className="s">"Nilesh Mishra"</span>,{"\n"}
{"  "}role: <span className="s">"Senior Product Engineer"</span>,{"\n"}
{"  "}stack: [<span className="s">"React"</span>, <span className="s">"Node"</span>, <span className="s">"Postgres"</span>],{"\n"}
{"  "}focus: <span className="s">"calm, fast, reliable products"</span>,{"\n"}
{"  "}ship: () <span className="k">=&gt;</span> <span className="s">"outcomes"</span>,{"\n"}
{"}"};{"\n"}
<span className="k">export default</span> <span className="v">engineer</span>;<span className="caret" />
                </pre>
              </div>
              <div className="float-chip float-chip--one"><SiReact /> React</div>
              <div className="float-chip float-chip--two"><SiNodedotjs /> Node.js</div>
              <div className="float-chip float-chip--three"><SiPostgresql /> PostgreSQL</div>
            </div>
          </div>
          <div className="hero__scroll"><i /><span>scroll to explore</span></div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <div className="marquee__group" key={copy}>
                {technologies.map(({ name, Icon }) => (
                  <span key={`${copy}-${name}`}><Icon />{name}</span>
                ))}
                <span className="marquee__star">✦</span>
                <span>Backend for frontend</span>
                <span className="marquee__star">✦</span>
                <span>Performance engineering</span>
                <span className="marquee__star">✦</span>
              </div>
            ))}
          </div>
        </div>

        <section className="stats" aria-label="Career evidence">
          <div className="shell stats__grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={stat.label} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <strong className="grad">{stat.value}<span>{stat.suffix}</span></strong>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="experience shell" id="experience" data-nav-section aria-labelledby="experience-title">
          <div className="section-head" data-reveal>
            <p className="eyebrow"><span className="eyebrow__index">01</span> Experience</p>
            <h2 id="experience-title">Built through <span className="grad">harder problems.</span></h2>
            <p className="section-head__copy">Seven years across clinical AI, global commerce, and enterprise operations — every role, the systems shipped inside it, and the outcomes to prove it.</p>
          </div>

          <div className="xp-list">
            {experience.map((item, index) => (
              <article className="xp" key={item.company} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="xp__head">
                  <span className="xp__tile">{item.number}</span>
                  <div className="xp__id">
                    <h3>{item.company}</h3>
                    <p className="xp__meta">
                      <span>{item.tenure}</span>
                      <i>·</i>
                      <span>{item.location}</span>
                    </p>
                  </div>
                  <div className="xp__when">
                    <span className="xp__period">{item.period}</span>
                  </div>
                </div>

                <div className="xp__body">
                  <ul className="xp__roles">
                    {item.roles.map((role) => (
                      <li className="xp__role" key={role.title}>
                        <div className="xp__role-head">
                          <h4>{role.title}</h4>
                          <span>{role.period}</span>
                        </div>
                        <ul className="xp__points">
                          {role.points.map((point) => <li key={point}>{point}</li>)}
                        </ul>
                      </li>
                    ))}
                  </ul>

                  <aside className="xp__aside">
                    <CaseVisual project={item} />
                    <div className="case-metrics">
                      {item.metrics.map((metric) => (
                        <div key={metric.label}>
                          <strong className="grad">{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="case-stack">
                      <span className="case-stack__label">Stack</span>
                      {item.stack.map((tag) => <span className="case-stack__tag" key={tag}>{tag}</span>)}
                    </div>
                  </aside>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach" id="approach" data-nav-section aria-labelledby="approach-title">
          <div className="approach__glow" aria-hidden="true" />
          <div className="shell">
            <div className="section-head" data-reveal>
              <p className="eyebrow"><span className="eyebrow__index">02</span> How I build</p>
              <h2 id="approach-title">From first pixel <span className="grad">to last mile.</span></h2>
              <p className="section-head__copy">Full-stack isn’t doing everything. It’s understanding how each decision changes the one that comes after it.</p>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability, index) => (
                <article className="capability-card" key={capability.number} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className="capability-card__top">
                    <span className="capability-card__icon"><capability.Icon /></span>
                    <span className="capability-card__number">{capability.number}</span>
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                  <ol className="capability-card__points">
                    {capability.points.map((point) => <li key={point}>{point}</li>)}
                  </ol>
                  <div className="capability-card__meta">
                    <span className="capability-card__tag">{capability.tag}</span>
                    <span className="capability-card__footer">{capability.footer}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="technology-row" data-reveal>
              <span>In the toolkit</span>
              <div>{technologies.map(({ name, Icon }) => <span key={name}><Icon />{name}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="background shell" id="background" data-nav-section aria-labelledby="background-title">
          <div className="section-head" data-reveal>
            <p className="eyebrow"><span className="eyebrow__index">03</span> Background</p>
            <h2 id="background-title">The foundations <span className="grad">behind the craft.</span></h2>
            <p className="section-head__copy">Formal training and the full working toolkit — the same detail that appears on the résumé, in the open.</p>
          </div>

          <div className="edu-card" data-reveal>
            <span className="edu-card__icon"><FiBook /></span>
            <div className="edu-card__body">
              <h3>Bachelor of Technology — Computer Science & Engineering</h3>
              <p>B.P. Poddar Institute of Management and Technology · Kolkata, India</p>
            </div>
            <div className="edu-card__meta">
              <span className="edu-card__period">2015 — 2019</span>
              <span className="edu-card__cgpa">CGPA 8.06</span>
            </div>
          </div>

          <div className="tech-grid">
            {techCards.map((tech, index) => (
              <article className="tech-card" key={tech.name} data-reveal style={{ transitionDelay: `${index * 40}ms` }}>
                <span className="tech-card__ring" style={{ "--p": tech.level * 10 }} aria-hidden="true">
                  <i><tech.Icon /></i>
                </span>
                <h4>{tech.name}</h4>
                <p className="tech-card__score"><strong>{tech.level}</strong><span>/10</span></p>
                <p className="tech-card__years">{tech.years} yrs · {tech.group}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" data-nav-section aria-labelledby="contact-title">
          <div className="contact__glow" aria-hidden="true" />
          <div className="shell contact__content" data-reveal>
            <p className="eyebrow eyebrow--center"><span className="eyebrow__index">04</span> Start a conversation</p>
            <h2 id="contact-title">Have a product worth <span className="grad">obsessing over?</span></h2>
            <p className="contact__copy">Let’s talk about the problem, the people using it, and the system it needs to become.</p>
            <p className="contact__meta"><FiMapPin /> Bengaluru, India <i>·</i> <a href="tel:+918709159677">+91 87091 59677</a></p>
            <a className="btn btn--primary btn--large" href="mailto:nilesh0627@gmail.com">nilesh0627@gmail.com <FiArrowUpRight /></a>
            <div className="contact__links">
              <a href="https://github.com/nilesh0627" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/nilesh0627/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
              <a href="mailto:nilesh0627@gmail.com"><FiMail /> Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <a className="wordmark" href="#top" aria-label="Back to top"><LogoMark /><span className="wordmark__name">nilesh<span className="grad">.dev</span></span></a>
        <p>Designed & engineered with intent · © {new Date().getFullYear()}</p>
        <a href="#top">Back to top <FiArrowUpRight /></a>
      </footer>
    </div>
  );
}

export default App;
