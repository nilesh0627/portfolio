import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBook,
  FiCheck,
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
  SiJest,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import resumePdf from "./Assets/Nilesh_SWE.pdf";
import "./style.scss";
import "./App.scss";

const navigationItems = [
  { id: "work", label: "Work", index: "01" },
  { id: "approach", label: "Approach", index: "02" },
  { id: "journey", label: "Journey", index: "03" },
  { id: "background", label: "Background", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

const cases = [
  {
    id: "concert",
    number: "01",
    company: "ConcertAI",
    role: "Senior Engineer",
    period: "Jul 2023 — Present",
    discipline: "Clinical intelligence · Enterprise SaaS",
    name: "Precision Trials · ACT · CancerLinQ",
    title: "Making the hardest decisions feel obvious.",
    description:
      "Sole frontend engineer since inception for two flagship clinical AI SaaS products — owning end-to-end UI architecture, from monorepo design to feature delivery, for enterprise pharma and healthcare clients.",
    metrics: [
      { value: "3h → 15m", label: "cohort creation, down from manual building" },
      { value: "$4M+", label: "potential savings unlocked per Phase II/III study" },
      { value: "75%", label: "of the world's top life-sciences companies served" },
    ],
    systemLabel: "cohort-decision.app",
    highlights: [
      "Shipped the IE Digitization flow — a natural-language interface for cohort generation that replaced a manual drag-and-drop criteria builder.",
      "Built Site Selection and Study Design Agent UIs powering AI-driven site recommendations, enrollment forecasting, and diversity modeling — cutting trial timelines by 3–9 months.",
      "Built UI surfaces for ACT's predictive modeling engine, presenting trial success forecasts up to 30% more accurate than traditional estimation methods.",
      "Bootstrapped 5 product monorepos (Precision Trials, ACT, Explorer, GTM, Launch) on Turborepo with shared package boundaries and task-level caching.",
      "Led TDD adoption with Jest and React Testing Library; improved Core Web Vitals by 25% through code splitting, lazy loading, Brotli, and HTTP caching (Cache-Control, ETag).",
      "Currently building CancerLinQ — Patient View, Pre-Screening, and Schedule View modules for CRCs and site coordinators.",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "Node.js", "Express", "Turborepo"],
    tone: "clinical",
  },
  {
    id: "sapient",
    number: "02",
    company: "Publicis Sapient",
    role: "Associate Technology L2",
    period: "May 2021 — Jul 2023",
    discipline: "Automotive commerce · Multi-brand platform",
    name: "Stellantis Offers Engine",
    title: "Complex rules. One clear offer.",
    description:
      "A multi-brand commerce platform for Stellantis — one offers engine resolving layered promotion rules into valid, legible offers across brands, markets, and languages.",
    metrics: [
      { value: "10–12", label: "markets localised on one routing layer" },
      { value: "7+", label: "Stellantis brands rendered from a single engine" },
      { value: "0", label: "engineer touches per new brand campaign" },
    ],
    systemLabel: "offer-engine.app",
    highlights: [
      "Built the multi-brand offers homepage for RAM, Jeep, Chrysler, Dodge, Alfa Romeo, and Fiat — dynamically rendering brand-specific content via Adobe Experience Manager.",
      "Designed an offers engine supporting complex AND/OR combination logic, correctly rendering every valid permutation of stacked and conditional promotional offers.",
      "Architected reusable AEM component templates so content authors configure brand-specific experiences without engineering intervention.",
      "Led internationalization of the Maserati platform (legacy AEM + React) with country/language routing (/us/en, /it/it) across 10–12 countries.",
      "Integrated Adobe Analytics for funnel tracking and personalization insights that directly informed product decisions.",
      "Built a shared React component library under TDD, enforcing consistency across a multi-contributor codebase.",
    ],
    stack: ["React", "AEM", "Node.js", "PostgreSQL", "Adobe Analytics"],
    tone: "commerce",
  },
  {
    id: "infosys",
    number: "03",
    company: "Infosys",
    role: "System Engineer",
    period: "Aug 2019 — May 2021",
    discipline: "Enterprise operations · Device lifecycle",
    name: "Device Lifecycle Tracker",
    title: "Enterprise workflows, made legible.",
    description:
      "An end-to-end iOS device lifecycle application — every device tracked from manufacturing line to customer sale through one continuous React workflow.",
    metrics: [
      { value: "E2E", label: "device journey, factory to customer sale" },
      { value: "02", label: "years of enterprise foundations" },
    ],
    systemLabel: "lifecycle-ops.app",
    highlights: [
      "Built an enterprise iOS device lifecycle tracking application in React.js, managing the device journey from manufacturing to customer sale across an end-to-end workflow.",
      "Translated wireframes into responsive, production-grade React components.",
      "Established frontend coding standards for the team.",
    ],
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

const roles = [
  {
    period: "Jul 2023 — now",
    company: "ConcertAI",
    role: "Senior Engineer",
    domain: "Clinical AI · Product systems",
    copy: "Sole frontend engineer for Precision Trials and ACT since inception — owning UI architecture, five Turborepo monorepos, and the performance practice across the Precision Suite.",
  },
  {
    period: "May 2021 — Jul 2023",
    company: "Publicis Sapient",
    role: "Associate Technology L2",
    domain: "Automotive commerce · Platform work",
    copy: "Multi-brand commerce for Stellantis: the offers engine, reusable AEM component architecture, and internationalization across 10–12 markets.",
  },
  {
    period: "Aug 2019 — May 2021",
    company: "Infosys",
    role: "System Engineer",
    domain: "Enterprise operations · Foundations",
    copy: "Built an enterprise iOS device-lifecycle tracker in React.js and set the team's frontend coding standards — the foundations everything since is built on.",
  },
];

const skillGroups = [
  { label: "Languages", items: ["JavaScript (ES6+)", "TypeScript"] },
  { label: "Frameworks & Libraries", items: ["React.js", "Redux", "Redux Toolkit", "Node.js", "Express"] },
  { label: "Architecture", items: ["Micro-frontends", "Webpack Module Federation", "Turborepo", "Monorepo"] },
  { label: "Testing", items: ["Jest", "React Testing Library", "TDD — unit, integration, E2E"] },
  { label: "Performance & Monitoring", items: ["Lighthouse", "Web Vitals", "Code splitting", "Bundle optimization"] },
  { label: "DevOps & Infrastructure", items: ["Docker", "CI/CD pipelines", "Nginx (gzip / caching)"] },
  { label: "Styling & Design", items: ["CSS3", "SCSS/SASS", "Design systems", "Responsive design", "WCAG accessibility"] },
  { label: "APIs & Integrations", items: ["REST APIs", "Server-Sent Events", "Adobe Analytics", "Mixpanel"] },
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
    const sections = document.querySelectorAll("[data-nav-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-22% 0px -63% 0px", threshold: [0.05, 0.2, 0.45] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
          <span className="wordmark__monogram">NM</span>
          <span className="wordmark__name">nilesh<span className="grad">.dev</span></span>
        </a>

        <nav className="nav-pill" aria-label="Main navigation">
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
          <button
            className="icon-button"
            type="button"
            onClick={() => setIsLightMode((light) => !light)}
            aria-label={isLightMode ? "Switch to dark theme" : "Switch to light theme"}
          >
            {isLightMode ? <FiMoon /> : <FiSun />}
          </button>
          <a className="btn btn--primary btn--small" href={resumePdf} download>Résumé <FiDownload /></a>
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
                <a className="btn btn--primary" href="#work">View selected work <FiArrowDown /></a>
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

        <section className="work-section shell" id="work" data-nav-section aria-labelledby="work-title">
          <div className="section-head" data-reveal>
            <p className="eyebrow"><span className="eyebrow__index">01</span> Selected systems</p>
            <h2 id="work-title">Evidence, not <span className="grad">empty adjectives.</span></h2>
            <p className="section-head__copy">Three chapters of production work — clinical AI, global commerce, and enterprise operations — each with the receipts to match.</p>
          </div>

          <div className="cases">
            {cases.map((item, index) => (
              <article className={`case-study ${index % 2 === 1 ? "case-study--alt" : ""}`} key={item.id} data-reveal>
                <div className="case-study__head">
                  <span className="case-study__index">{item.number}</span>
                  <div className="case-study__who">
                    <h3>{item.company}</h3>
                    <p>{item.role} · {item.period} · Bengaluru, India</p>
                  </div>
                  <span className="case-study__discipline">{item.discipline}</span>
                </div>
                <div className="case-study__grid">
                  <CaseVisual project={item} />
                  <div className="case-study__story">
                    <p className="case-study__system">{item.systemLabel} · {item.name}</p>
                    <h4>{item.title}</h4>
                    <p className="case-study__description">{item.description}</p>
                    <div className="case-metrics">
                      {item.metrics.map((metric) => (
                        <div key={metric.label}>
                          <strong className="grad">{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <ul className="case-study__evidence">
                  {item.highlights.map((highlight) => <li key={highlight}><FiCheck />{highlight}</li>)}
                </ul>
                <div className="case-stack">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
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
                  <ul className="capability-card__points">
                    {capability.points.map((point) => <li key={point}><FiCheck />{point}</li>)}
                  </ul>
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

        <section className="journey shell" id="journey" data-nav-section aria-labelledby="journey-title">
          <div className="section-head" data-reveal>
            <p className="eyebrow"><span className="eyebrow__index">03</span> Professional journey</p>
            <h2 id="journey-title">Built through <span className="grad">harder problems.</span></h2>
            <p className="section-head__copy">A career across clinical AI, global commerce, and enterprise operations — each role adding a new layer of systems thinking.</p>
          </div>
          <div className="timeline">
            {roles.map((role, index) => (
              <article className="timeline-row" key={role.company} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <span className="timeline-row__dot" aria-hidden="true" />
                <div className="timeline-row__card">
                  <div className="timeline-row__head">
                    <span className="timeline-row__period">{role.period}</span>
                    <span className="timeline-row__domain">{role.domain}</span>
                  </div>
                  <h3>{role.role}</h3>
                  <p className="timeline-row__company">{role.company} · Bengaluru, India</p>
                  <p className="timeline-row__copy">{role.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="background shell" id="background" data-nav-section aria-labelledby="background-title">
          <div className="section-head" data-reveal>
            <p className="eyebrow"><span className="eyebrow__index">04</span> Background</p>
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

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.label} data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
                <h4>{group.label}</h4>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
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
        <a className="wordmark" href="#top" aria-label="Back to top"><span className="wordmark__monogram">NM</span><span className="wordmark__name">nilesh<span className="grad">.dev</span></span></a>
        <p>Designed & engineered with intent · © {new Date().getFullYear()}</p>
        <a href="#top">Back to top <FiArrowUpRight /></a>
      </footer>
    </div>
  );
}

export default App;
