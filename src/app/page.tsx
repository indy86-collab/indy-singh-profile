"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#connect", label: "Contact" },
];

const achievements = [
  "Delivered multiple SaaS and AI-driven products, including EventAlpha, CryptoBankStatement, SlangWatch.com, BingoGen.ai, PhotoComply, and RageRoom Directory.",
  "Led enterprise-scale integrations across Adobe Commerce, ServiceNow, Salesforce, and Jira, improving automation and reliability.",
  "Specialised in data workflows, ML integrations, and generative AI applications to solve real-world business challenges.",
  "Built automation frameworks with n8n, APIs, and CI/CD pipelines, reducing manual workload and improving efficiency.",
  "Provided senior technical leadership and support for large-scale e-commerce deployments, ensuring stability and performance.",
  "Delivered internal training sessions on Adobe Commerce installation, backup, and environment management to Level 2 engineers.",
];

const skillGroups = [
  {
    title: "AI & Applied Intelligence",
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "LLM Integrations",
      "LangChain",
      "Computer Vision",
      "On-device / In-browser AI",
      "NLP & Language Products",
      "AI Content Generation",
      "Privacy-preserving AI",
      "ML Workflows",
    ],
  },
  {
    title: "Data & Market Intelligence",
    skills: [
      "Market Data Pipelines",
      "Signal Detection & Ranking",
      "Probability / Pricing Analysis",
      "Time-series Snapshots",
      "Data Modelling",
      "SQL",
      "Python",
      "Observability (New Relic)",
      "Power BI",
      "Research Product Design",
    ],
  },
  {
    title: "SaaS & Full-Stack",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "REST APIs",
      "Webhooks",
      "Supabase",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Vercel / Cloud Deployments",
      "Productised SaaS Launch",
    ],
  },
  {
    title: "FinTech, Crypto & Compliance",
    skills: [
      "Blockchain Data (BTC / ETH)",
      "Proof of Funds Documentation",
      "PDF & CSV Generation",
      "Verification IDs & Checksums",
      "Multi-currency Valuation",
      "GDPR & Privacy Engineering",
      "KYC / Audit-ready Outputs",
      "Read-only Public Data Pipelines",
    ],
  },
  {
    title: "Product, SEO & Platforms",
    skills: [
      "Directory & Marketplace Products",
      "Local SEO",
      "Content Platforms",
      "Search & Taxonomy Design",
      "Email / Daily Brief Products",
      "Conversion-focused Landing Pages",
      "Digital Marketing",
      "Stakeholder Communication",
    ],
  },
  {
    title: "Enterprise & Reliability",
    skills: [
      "Adobe Commerce (Magento 2)",
      "ServiceNow",
      "Salesforce Integrations",
      "API Integrations",
      "Workflow Automation (n8n / Zapier)",
      "Application Support",
      "Reliability Engineering",
      "ITIL / PRINCE2",
    ],
  },
];

const projects = [
  {
    title: "EventAlpha",
    description:
      "Polymarket market intelligence and daily signal brief — filters noisy market activity into a queue of credible repricings, unexplained moves, and discounted noise. Research and education only.",
    tags: ["Market Intelligence", "Data", "SaaS"],
    href: "https://www.theeventalpha.com/",
    image: "/projects/eventalpha.png",
    accent: "from-slate-800 to-ink",
  },
  {
    title: "CryptoBankStatement",
    description:
      "Bank-style cryptocurrency statements for verified proof of funds. Generate audit-ready PDF and CSV statements from public blockchain data — no wallet connection, no private keys.",
    tags: ["FinTech", "Compliance", "Crypto"],
    href: "https://www.cryptobankstatement.com/",
    image: "/projects/cryptobankstatement.png",
    accent: "from-teal-800 to-slate-900",
  },
  {
    title: "SlangWatch.com",
    description:
      "A real-time slang dictionary and trend radar that maps global slang, ranks it by popularity, and helps parents, brands, and communities keep up with language.",
    tags: ["AI", "SaaS", "Language"],
    href: "https://slangwatch.com",
    image: "/projects/slangwatch.png",
    accent: "from-teal-700 to-teal-900",
  },
  {
    title: "BingoGen.ai",
    description:
      "An AI-powered bingo generation platform that creates custom bingo cards and experiences using advanced AI technology.",
    tags: ["AI", "Gaming", "SaaS"],
    href: "https://www.bingogen.ai/",
    image: "/projects/bingogen.png",
    accent: "from-rose-700 to-orange-800",
  },
  {
    title: "PhotoComply",
    description:
      "Free AI-powered GDPR-compliant photo redaction tool that automatically blurs faces and black-boxes screens & documents. All processing happens in-memory with no data storage.",
    tags: ["AI", "Privacy", "GDPR"],
    href: "https://www.photocomply.com/",
    image: "/projects/photocomply.png",
    accent: "from-cyan-700 to-slate-800",
  },
  {
    title: "RageRoom Directory",
    description:
      "UK's leading directory for rage rooms and smash experiences. Discover and compare 30+ venues across major cities with pricing, packages, and booking options.",
    tags: ["Directory", "UK Market", "SaaS"],
    href: "https://rageroomdirectory.co.uk/",
    image: "/projects/rageroom.png",
    accent: "from-red-700 to-amber-800",
  },
];

const experiences = [
  {
    role: "Advanced Support Engineer, E-Commerce & Cloud Solutions",
    company: "Adobe",
    period: "Jan 2018 – Present · London, UK · Hybrid",
    points: [
      "Lead complex technical issue resolution for enterprise e-commerce platforms.",
      "Specialized in data integrations, automation, and performance optimisation.",
      "Collaborated with cross-functional teams to improve support processes and deliver high-value outcomes.",
    ],
    tech: "Adobe Commerce, ServiceNow, SQL, Cloud Infrastructure",
    mark: "A",
  },
  {
    role: "Application Support Team Lead / Senior Engineer",
    company: "Perspectium",
    period: "Jun 2012 – Feb 2018 · London, UK",
    points: [
      "Led enterprise data integrations between ServiceNow, Salesforce, Jira, and cloud databases.",
      "Delivered automation solutions for ITSM workflows and cross-system reporting.",
      "Focused on data reliability, automation, and enterprise-scale synchronisation.",
    ],
    tech: "ServiceNow, Salesforce, Jira, SQL, Data Integration",
    mark: "P",
  },
  {
    role: "Broadcast Support Engineer",
    company: "Sky",
    period: "Mar 2016 – Jun 2018 · London, UK",
    points: [
      "Supported Sky's Broadcast Software Engineering team (BSES), ensuring stability of broadcast workflows.",
      "Collaborated with clients on technical troubleshooting and system design.",
    ],
    tech: "Broadcast Systems, Technical Support, System Design",
    mark: "S",
  },
  {
    role: "Senior Application Support Analyst / Data Specialist",
    company: "Experian Marketing Services",
    period: "Jan 2011 – Apr 2016 · London, UK",
    points: [
      "Supported enterprise-scale data integration and reporting.",
      "Delivered insights across financial, logistics, and HR processes.",
      "Developed strong data modelling and analytics expertise.",
    ],
    tech: "Data Integration, Analytics, Reporting, SQL",
    mark: "E",
  },
  {
    role: "BI Analyst",
    company: "SAP BI Analyst – Vizor Consulting",
    period: "Apr 2010 – Dec 2010 · London, UK",
    points: [
      "Worked on SAP BI solutions, creating financial and HR reports.",
      "Delivered business intelligence solutions to enterprise clients.",
    ],
    tech: "SAP BI, Business Intelligence, Financial Reporting",
    mark: "V",
  },
  {
    role: "Earlier Roles",
    company: "Technical Consultant · Graduate Web Developer · BI Assistant",
    period: "2008 – 2010 · London, UK",
    points: [
      "Technical Consultant, Graduate Web Developer, Business Intelligence Assistant.",
      "Gained foundation in software development, BI, and enterprise support.",
    ],
    tech: "Web Development, Business Intelligence, Technical Support",
    mark: "·",
  },
];

const certifications = [
  {
    title: "Generative AI: Prompt Engineering Basics",
    org: "IBM, 2024",
    detail: "Introduction to prompt engineering techniques for building generative AI solutions and applications.",
  },
  {
    title: "Generative AI for Everyone",
    org: "Coursera, 2023",
    detail: "Comprehensive introduction to generative AI concepts, applications, and practical implementation.",
  },
  {
    title: "What is Generative AI?",
    org: "LinkedIn, 2025",
    detail: "Foundation course covering the fundamentals of generative AI technology and its business applications.",
  },
  {
    title: "Understanding Agentic AI",
    org: "Digital Workforce Services Plc, Sep 2025",
    detail: "Comprehensive course covering autonomous AI agents, their capabilities, and practical applications in modern workflows.",
  },
  {
    title: "Adobe Certified Professional – Commerce Developer",
    org: "Adobe, 2024–2026",
    detail: "Validates skills in developing and deploying Magento 2 solutions for enterprise e-commerce platforms.",
  },
  {
    title: "Full Stack Observability Practitioner Exam",
    org: "New Relic, 2024–2026",
    detail: "Demonstrates expertise in monitoring, troubleshooting, and optimizing full-stack applications.",
  },
  {
    title: "Adobe Commerce Business Practitioner Professional",
    org: "Adobe, 2023",
    detail: "Validates expertise in managing Adobe Commerce business operations and customer experiences.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-accent"
      style={{ scaleX }}
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [text] = useTypewriter({
    words: ["Senior Engineer", "AI & SaaS Builder", "Data & ML Enthusiast"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen mesh-bg text-ink">
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollProgress />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-line shadow-[0_1px_0_rgba(11,18,32,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <motion.a
              href="#hero"
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`relative w-9 h-9 lg:w-10 lg:h-10 overflow-hidden ring-1 transition-colors ${
                  scrolled ? "ring-ink/10" : "ring-white/25"
                }`}
              >
                <img src="/indy.jpeg" alt="Indy Singh" className="w-full h-full object-cover" />
              </div>
              <span
                className={`font-display text-lg lg:text-xl font-semibold tracking-tight transition-colors ${
                  scrolled ? "text-ink" : "text-white"
                }`}
              >
                Indy Singh
              </span>
            </motion.a>

            <nav className="hidden lg:flex items-center gap-7" role="navigation" aria-label="Main navigation">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`link-underline text-sm font-medium transition-colors ${
                    scrolled ? "text-muted hover:text-ink" : "text-white/70 hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.button
              type="button"
              className={`lg:hidden p-2 transition-colors ${scrolled ? "text-ink" : "text-white"}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="lg:hidden absolute inset-x-0 top-full bg-white/95 backdrop-blur-xl border-b border-line"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <nav className="flex flex-col px-5 py-4 gap-1" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="py-3 text-base font-medium text-ink border-b border-line/60 last:border-0"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero — full-bleed photo composition */}
      <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/indy.jpeg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-[center_20%] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/25 to-transparent" />
          <div className="absolute inset-0 grid-fade opacity-30 mix-blend-overlay" />
        </div>

        <div className="absolute top-1/4 right-[12%] w-48 h-48 rounded-full bg-accent-bright/20 blur-3xl float-slow pulse-soft hidden md:block" />
        <div className="absolute bottom-1/3 left-[8%] w-36 h-36 rounded-full bg-accent-warm/15 blur-3xl float-slow hidden md:block" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pb-20 pt-32 md:pb-28">
          <motion.p
            className="font-display text-accent-bright text-sm md:text-base tracking-[0.2em] uppercase mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Portfolio
          </motion.p>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Indy Singh
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/85 mb-4 font-light min-h-[2rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
          >
            {text}
            <Cursor cursorColor="#14b8a6" />
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-white/65 max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
          >
            Building AI products, SaaS platforms, and reliable systems — from idea to production.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center bg-accent-bright text-ink font-semibold py-3.5 px-8 text-base transition-transform duration-300 hover:-translate-y-0.5"
            >
              View CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-white/35 text-white font-medium py-3.5 px-8 text-base backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>

          <motion.a
            href="#about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors hidden sm:flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            aria-label="Scroll to about"
          >
            <span className="text-[11px] tracking-[0.25em] uppercase">Scroll</span>
            <motion.span
              className="w-px h-8 bg-white/40"
              animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 md:py-32 px-5 sm:px-8" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="absolute -inset-3 border border-accent/30 translate-x-3 translate-y-3" />
                <img
                  src="/indy.jpeg"
                  alt="Indy Singh - Senior Engineer and AI/ML Enthusiast"
                  className="relative w-full aspect-[4/5] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={1}
            >
              <p className="font-display text-accent text-sm tracking-[0.18em] uppercase mb-3">About</p>
              <h2 id="about-heading" className="font-display text-4xl md:text-5xl font-semibold text-ink mb-8 tracking-tight">
                Engineer. Builder. Problem solver.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                I&apos;m Indy Singh, a senior engineer and AI/ML enthusiast with over a decade of experience in
                building, supporting, and scaling technology solutions. I specialise in automation, cloud
                infrastructure, and AI-driven products — turning ideas into working SaaS applications.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-10">
                My projects include EventAlpha, CryptoBankStatement, SlangWatch.com, BingoGen.ai, PhotoComply, and
                RageRoom Directory — each built for real-world challenges.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: "https://www.linkedin.com/in/indy-singh-88986617/", label: "LinkedIn" },
                  { href: "https://github.com/indy86-collab/", label: "GitHub" },
                  { href: "mailto:indyz_86@hotmail.com", label: "Email" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center px-5 py-2.5 border border-ink/15 text-ink text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 md:py-28 px-5 sm:px-8 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 grid-fade" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-display text-accent-bright text-sm tracking-[0.18em] uppercase mb-3">Track record</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-14 tracking-tight">
              Key achievements
            </h2>
          </motion.div>

          <ul className="space-y-0">
            {achievements.map((item, index) => (
              <motion.li
                key={index}
                className="flex gap-5 py-6 border-t border-white/10 last:border-b"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={index * 0.4}
              >
                <span className="font-display text-accent-bright text-sm pt-1 tabular-nums w-8 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 md:py-28 px-5 sm:px-8" aria-labelledby="skills-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-display text-accent text-sm tracking-[0.18em] uppercase mb-3">Toolkit</p>
            <h2 id="skills-heading" className="font-display text-4xl md:text-5xl font-semibold text-ink tracking-tight">
              Skills & technologies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={index * 0.5}
              >
                <h3 className="font-display text-xl font-semibold text-ink mb-4 pb-3 border-b border-line">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-muted px-3 py-1.5 bg-white/70 border border-line hover:border-accent/40 hover:text-ink transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-28 px-5 sm:px-8 bg-white/50" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-14 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-display text-accent text-sm tracking-[0.18em] uppercase mb-3">Selected work</p>
            <h2 id="projects-heading" className="font-display text-4xl md:text-5xl font-semibold text-ink tracking-tight mb-4">
              Featured projects
            </h2>
            <p className="text-lg text-muted">
              A selection of products I&apos;ve built — combining AI, SaaS, and real-world problem solving.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={index * 0.35}
              >
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[16/10] overflow-hidden mb-5 bg-ink">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.accent} flex items-end p-6`}>
                        <span className="font-display text-2xl text-white/90 font-semibold">{project.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                  </div>
                </a>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs tracking-wide uppercase text-accent font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-2xl font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="text-muted leading-relaxed mb-4">{project.description}</p>
                <div className="flex gap-4 text-sm font-medium">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ink"
                  >
                    Live demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-muted"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 md:py-28 px-5 sm:px-8" aria-labelledby="experience-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-display text-accent text-sm tracking-[0.18em] uppercase mb-3">Career</p>
            <h2 id="experience-heading" className="font-display text-4xl md:text-5xl font-semibold text-ink tracking-tight">
              Work experience
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-line" aria-hidden="true" />
            <div className="space-y-10">
              {experiences.map((job, index) => (
                <motion.div
                  key={`${job.company}-${job.role}`}
                  className="relative pl-12 md:pl-16"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  custom={index * 0.3}
                >
                  <div className="absolute left-[0.65rem] md:left-[1.35rem] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-surface" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="font-display text-xl font-semibold text-ink">{job.role}</h3>
                    <span className="text-sm text-muted shrink-0">{job.period}</span>
                  </div>
                  <p className="text-accent font-medium mb-4">{job.company}</p>
                  <ul className="space-y-2 mb-4">
                    {job.points.map((point) => (
                      <li key={point} className="text-muted leading-relaxed flex gap-2">
                        <span className="text-accent mt-2 shrink-0 w-1 h-1 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted/80">
                    <span className="text-ink/70 font-medium">Tech: </span>
                    {job.tech}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 md:py-28 px-5 sm:px-8 bg-ink text-white" aria-labelledby="certifications-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-display text-accent-bright text-sm tracking-[0.18em] uppercase mb-3">Credentials</p>
            <h2 id="certifications-heading" className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Certifications
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-ink p-6 md:p-8 hover:bg-ink-soft transition-colors duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index * 0.25}
              >
                <p className="text-accent-bright text-xs tracking-wider uppercase mb-3">{cert.org}</p>
                <h3 className="font-display text-lg font-semibold mb-3 leading-snug">{cert.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{cert.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-28 px-5 sm:px-8" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-14 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-display text-accent text-sm tracking-[0.18em] uppercase mb-3">Work with me</p>
            <h2 id="services-heading" className="font-display text-4xl md:text-5xl font-semibold text-ink tracking-tight mb-4">
              Services I offer
            </h2>
            <p className="text-lg text-muted">Choose the option that fits your needs.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="border border-line bg-white/60 p-8 hover:border-accent/40 transition-colors duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl font-semibold text-ink">Freelance micro-gigs</h3>
                <span className="text-xs font-semibold tracking-wide uppercase text-accent shrink-0">Fast</span>
              </div>
              <p className="text-muted mb-8 leading-relaxed">
                Quick, focused tasks delivered fast. Perfect for urgent fixes and small improvements.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { name: "Fix bugs / speed up site", price: "£50 – £100", note: "1–2 hours" },
                  { name: "Set up Stripe / webhooks", price: "£50 – £100" },
                  { name: "Deploy your app to production", price: "£50 – £100" },
                  { name: "Write scripts / automation", price: "£50 – £100" },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between gap-4 py-3 border-b border-line last:border-0">
                    <div>
                      <p className="font-medium text-ink">{item.name}</p>
                      {item.note && <p className="text-sm text-muted">{item.note}</p>}
                    </div>
                    <p className="text-sm font-semibold text-accent whitespace-nowrap">{item.price}</p>
                  </div>
                ))}
              </div>
              <a
                href="mailto:indyz_86@hotmail.com?subject=Freelance Micro-Gig Inquiry"
                className="btn-primary inline-flex w-full items-center justify-center bg-ink text-white font-semibold py-3.5 px-6 hover:bg-ink-soft transition-colors"
              >
                Get in touch for micro-gigs
              </a>
            </motion.div>

            <motion.div
              className="border border-line bg-white/60 p-8 hover:border-accent-warm/50 transition-colors duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl font-semibold text-ink">Productised services</h3>
                <span className="text-xs font-semibold tracking-wide uppercase text-accent-warm shrink-0">Best value</span>
              </div>
              <p className="text-muted mb-8 leading-relaxed">
                Fixed-price packages with clear deliverables and guaranteed outcomes.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    name: "Website Speed + SEO Quick Fix",
                    price: "£299",
                    detail: "Optimize performance and improve SEO rankings",
                  },
                  {
                    name: "Landing Page + Copy Refresh",
                    price: "£199",
                    detail: "Modernize your landing page with fresh design and copy",
                  },
                  {
                    name: "AI Chatbot Added to Your Site",
                    price: "£499",
                    detail: "Integrate an intelligent chatbot for engagement",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between gap-4 py-3 border-b border-line last:border-0">
                    <div>
                      <p className="font-medium text-ink">{item.name}</p>
                      <p className="text-sm text-muted">{item.detail}</p>
                    </div>
                    <p className="text-sm font-semibold text-accent-warm whitespace-nowrap">{item.price}</p>
                  </div>
                ))}
              </div>
              <a
                href="mailto:indyz_86@hotmail.com?subject=Productised Service Inquiry"
                className="btn-primary inline-flex w-full items-center justify-center bg-accent-warm text-white font-semibold py-3.5 px-6 hover:brightness-110 transition-all"
              >
                Get in touch for packages
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative overflow-hidden bg-ink text-white px-8 py-12 md:px-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">Ready to get started?</h3>
              <p className="text-white/65 mb-8 max-w-xl">
                Whether you need a quick fix or a complete solution — let&apos;s discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:indyz_86@hotmail.com?subject=Service Inquiry"
                  className="inline-flex items-center justify-center bg-white text-ink font-semibold py-3 px-6 hover:bg-white/90 transition-colors"
                >
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/indy-singh-88986617/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white/25 text-white font-medium py-3 px-6 hover:bg-white/10 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://wa.me/447878514912?text=Hi%20Indy,%20I%27d%20like%20to%20discuss%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white/25 text-white font-medium py-3 px-6 hover:bg-white/10 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connect */}
      <section id="connect" className="py-20 px-5 sm:px-8 border-t border-line" aria-labelledby="connect-heading">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 id="connect-heading" className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              Let&apos;s connect
            </h2>
            <p className="text-muted text-lg mb-8">
              Whether for knowledge sharing or a project you&apos;d like to discuss, I&apos;m open to conversation.
            </p>
            <div className="flex justify-center gap-6">
              {[
                { href: "https://www.linkedin.com/in/indy-singh-88986617/", label: "LinkedIn" },
                { href: "https://github.com/indy86-collab/", label: "GitHub" },
                { href: "mailto:indyz_86@hotmail.com", label: "Email" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="link-underline text-ink font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/447878514912?text=Hi%20Indy,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </motion.a>

      <footer className="bg-ink border-t border-white/10" role="contentinfo">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          <p className="text-center text-white/40 text-sm">
            © {new Date().getFullYear()} Indy Singh. Powered by curiosity & code.
          </p>
        </div>
      </footer>
    </div>
  );
}
