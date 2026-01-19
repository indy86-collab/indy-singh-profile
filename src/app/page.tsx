'use client';

import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Home() {
  const [text] = useTypewriter({
    words: ['Senior Engineer', 'AI & SaaS Builder', 'Data & ML Enthusiast'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Name */}
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile Picture */}
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm">
                <img
                  src="/indy.jpeg"
                  alt="Indy Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name */}
              <span className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Indy Singh
              </span>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {[
                { href: "#hero", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#experience", label: "Experience" },
                { href: "#services", label: "Services" },
                { href: "#connect", label: "Contact" }
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 lg:pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Indy Singh</span>
          </motion.h1>
          
          {/* Typewriter Subheading */}
          <motion.h2 
            className="text-xl md:text-2xl mt-4 text-blue-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {text}
            <Cursor cursorColor="#3B82F6" />
          </motion.h2>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6, 
              type: "spring", 
              stiffness: 200, 
              damping: 15 
            }}
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              View CV
            </motion.a>
            <motion.a
              href="#projects"
              className="border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 font-medium py-4 px-10 rounded-full transition-all duration-300 text-lg"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#2563eb",
                color: "#2563eb"
              }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* About Me Section */}
      <section id="about" className="py-24 px-6 lg:px-8 bg-white" role="region" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                                     <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg transform rotate-6"></div>
             <img
               src="/indy.jpeg"
               alt="Indy Singh - Senior Engineer and AI/ML Enthusiast"
               className="relative w-full h-full rounded-lg object-cover shadow-2xl"
             />
          </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                I&apos;m Indy Singh, a senior engineer and AI/ML enthusiast with over a decade of experience in building, supporting, and scaling technology solutions. I specialise in automation, cloud infrastructure, and AI-driven products, with a strong focus on turning ideas into working SaaS applications.
              </p>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
                My projects include SlangWatch.com, MCPCloud.store, BingoGen.ai, PhotoComply, RageRoom Directory, ResumeBoost, and Khalsa Diwan Afghanistan — each built to address real-world challenges with practical, innovative technology.
              </p>
          
          {/* Social Media Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/indy-singh-88986617/"
              target="_blank"
              rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 font-medium py-3 px-6 rounded-full transition-all duration-300"
            >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/indy86-collab/"
              target="_blank"
              rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 font-medium py-3 px-6 rounded-full transition-all duration-300"
            >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
              GitHub
            </a>
            <a
              href="mailto:indyz_86@hotmail.com"
                  className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 font-medium py-3 px-6 rounded-full transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Achievements</span>
          </motion.h2>
          
          {/* Achievements List */}
          <div className="space-y-8">
            {[
              "Delivered multiple SaaS and AI-driven products, including SlangWatch.com, MCPCloud.store, BingoGen.ai, PhotoComply, RageRoom Directory, and ResumeBoost, along with innovative platforms such as Khalsa Diwan Afghanistan.",
              "Led enterprise-scale integrations across Adobe Commerce, ServiceNow, Salesforce, and Jira, improving automation and reliability.",
              "Specialised in data workflows, ML integrations, and generative AI applications to solve real-world business challenges.",
              "Built automation frameworks with n8n, APIs, and CI/CD pipelines, reducing manual workload and improving efficiency.",
              "Provided senior technical leadership and support for large-scale e-commerce deployments, ensuring stability and performance.",
              "Delivered internal training sessions on Adobe Commerce installation, backup, and environment management to Level 2 engineers."
            ].map((achievement, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mt-1 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="bg-white py-16 px-4" role="region" aria-labelledby="skills-heading">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Skills & <span className="text-blue-600">Technologies</span>
          </h2>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI & Data Engineering */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI & Data Engineering</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Generative AI</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Prompt Engineering</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">LangChain</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">SQL</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Data Modelling</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Data Segmentation</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">ML Workflows</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">LLM Integrations</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Power BI</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">New Relic Observability</span>
              </div>
            </div>

            {/* SaaS & Cloud Development */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">SaaS & Cloud Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Flask</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Supabase</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">REST APIs</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Webhooks</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Docker</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Kubernetes</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Linux</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">GitHub Actions</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">CI/CD</span>
              </div>
            </div>

            {/* Enterprise & Commerce */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise & Commerce</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Adobe Commerce (Magento 2)</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">ServiceNow</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Perspectium Integrations</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">ITIL Framework</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">PRINCE2</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Application Support</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Reliability Engineering</span>
              </div>
            </div>

            {/* Automation & Workflow */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automation & Workflow</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">n8n</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Zapier</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Workflow Automation</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">API Integrations</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">System Synchronisation</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Cross-platform Data Sync</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Cloud Performance Optimisation</span>
              </div>
            </div>

            {/* Business & Strategy */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business & Strategy</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">SaaS Product Design & Launch</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">SEO</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Digital Marketing</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Real Estate Tech & Automation</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Stakeholder Communication</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Technical Demonstrations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 px-6 lg:px-8 bg-slate-50" role="region" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.h2 
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-slate-600 mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A selection of projects I&apos;ve built — combining AI, SaaS, and real-world problem solving.
          </motion.p>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SlangWatch.com */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              <div className="w-full h-56 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h3 className="text-xl font-bold">SlangWatch.com</h3>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">AI</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">SaaS</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Language</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">SlangWatch.com</h3>
                
                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A real-time slang dictionary and trend radar that maps global slang, ranks it by popularity, and helps parents, brands, and communities keep up with language.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://slangwatch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/indy86-collab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            {/* MCPCloud.store */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              <div className="w-full h-56 bg-gradient-to-br from-indigo-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <h3 className="text-xl font-bold">MCPCloud.store</h3>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">AI</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Cloud</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Marketplace</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">MCPCloud.store</h3>
                
                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A managed hosting platform and marketplace for MCP (Model Context Protocol) servers, helping developers explore and deploy open-source AI agents quickly.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://mcpcloud.store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/indy86-collab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            {/* BingoGen.ai */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              <div className="w-full h-56 bg-gradient-to-br from-pink-500 to-rose-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h3 className="text-xl font-bold">BingoGen.ai</h3>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full">AI</span>
                  <span className="bg-rose-100 text-rose-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Gaming</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">SaaS</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">BingoGen.ai</h3>
                
                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  An AI-powered bingo generation platform that creates custom bingo cards and experiences using advanced AI technology.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.bingogen.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* PhotoComply.com */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              <div className="w-full h-56 bg-gradient-to-br from-cyan-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                    <h3 className="text-xl font-bold">PhotoComply</h3>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded-full">AI</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Privacy</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">GDPR</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">PhotoComply</h3>
                
                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Free AI-powered GDPR-compliant photo redaction tool that automatically blurs faces and black-boxes screens & documents. All processing happens in-memory with no data storage.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.photocomply.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* RageRoomDirectory.co.uk */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              <div className="w-full h-56 bg-gradient-to-br from-red-500 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                    <h3 className="text-xl font-bold">RageRoom Directory</h3>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Directory</span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">UK Market</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">SaaS</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">RageRoom Directory</h3>
                
                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  UK&apos;s leading directory for rage rooms and smash experiences. Discover and compare 30+ venues across major cities with pricing, packages, and booking options for stress relief activities.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://rageroomdirectory.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ResumeBoost.in */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              <div className="w-full h-56 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    <h3 className="text-xl font-bold">ResumeBoost</h3>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">AI</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Career</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">ATS</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">ResumeBoost</h3>
                
                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  AI-powered resume builder optimized for US job markets. Features include ATS compatibility, instant health checks, AI resume tailoring, and job matching for LinkedIn, Indeed, and Fortune 500 recruiters.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.resumeboost.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Khalsa Diwan Afghanistan */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              <div className="w-full h-56 bg-gradient-to-br from-amber-500 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h3 className="text-xl font-bold">Khalsa Diwan Afghanistan</h3>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Community</span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Cultural</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Non-Profit</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">Khalsa Diwan Afghanistan</h3>
                
                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A community-focused website supporting Khalsa Diwan Afghanistan, preserving Sikh heritage and providing a platform for learning, connection, and cultural awareness.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://khalsadiwanafghanistan.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="bg-white py-20 px-4" role="region" aria-labelledby="experience-heading">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.h2 
            id="experience-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Work <span className="text-blue-600">Experience</span>
          </motion.h2>
          
          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Adobe */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Company Logo */}
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Support Engineer, E-Commerce & Cloud Solutions</h3>
                  <p className="text-slate-500 text-sm mb-4">Adobe • Jan 2018 – Present • London, UK • Hybrid</p>
                  
                  <ul className="text-slate-700 space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Lead complex technical issue resolution for enterprise e-commerce platforms.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Specialized in data integrations, automation, and performance optimisation.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Collaborated with cross-functional teams to improve support processes and deliver high-value outcomes.
                    </li>
                  </ul>
                  
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-sm font-medium text-slate-600">Technologies Used:</p>
                    <p className="text-sm text-slate-500">Adobe Commerce, ServiceNow, SQL, Cloud Infrastructure</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Perspectium */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Company Logo */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Application Support Team Lead / Senior Engineer</h3>
                  <p className="text-slate-500 text-sm mb-4">Perspectium • Jun 2012 – Feb 2018 • London, UK</p>
                  
                  <ul className="text-slate-700 space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Led enterprise data integrations between ServiceNow, Salesforce, Jira, and cloud databases.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Delivered automation solutions for ITSM workflows and cross-system reporting.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Focused on data reliability, automation, and enterprise-scale synchronisation.
                    </li>
                  </ul>
                  
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-sm font-medium text-slate-600">Technologies Used:</p>
                    <p className="text-sm text-slate-500">ServiceNow, Salesforce, Jira, SQL, Data Integration</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sky */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Company Logo */}
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Broadcast Support Engineer</h3>
                  <p className="text-slate-500 text-sm mb-4">Sky • Mar 2016 – Jun 2018 • London, UK</p>
                  
                  <ul className="text-slate-700 space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Supported Sky&apos;s Broadcast Software Engineering team (BSES), ensuring stability of broadcast workflows.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Collaborated with clients on technical troubleshooting and system design.
                    </li>
                  </ul>
                  
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-sm font-medium text-slate-600">Technologies Used:</p>
                    <p className="text-sm text-slate-500">Broadcast Systems, Technical Support, System Design</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experian */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Company Logo */}
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Senior Application Support Analyst / Data Specialist</h3>
                  <p className="text-slate-500 text-sm mb-4">Experian Marketing Services • Jan 2011 – Apr 2016 • London, UK</p>
                  
                  <ul className="text-slate-700 space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Supported enterprise-scale data integration and reporting.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Delivered insights across financial, logistics, and HR processes.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Developed strong data modelling and analytics expertise.
                    </li>
                  </ul>
                  
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-sm font-medium text-slate-600">Technologies Used:</p>
                    <p className="text-sm text-slate-500">Data Integration, Analytics, Reporting, SQL</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SAP */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Company Logo */}
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">BI Analyst</h3>
                  <p className="text-slate-500 text-sm mb-4">SAP BI Analyst – Vizor Consulting • Apr 2010 – Dec 2010 • London, UK</p>
                  
                  <ul className="text-slate-700 space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Worked on SAP BI solutions, creating financial and HR reports.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Delivered business intelligence solutions to enterprise clients.
                    </li>
                  </ul>
                  
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-sm font-medium text-slate-600">Technologies Used:</p>
                    <p className="text-sm text-slate-500">SAP BI, Business Intelligence, Financial Reporting</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Earlier Roles */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Company Logo */}
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.7 2.26V9c0-.55-.45-1-1-1s-1 .45-1 1v6h2v7h4z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Earlier Roles</h3>
                  <p className="text-slate-500 text-sm mb-4">2008 – 2010 • London, UK</p>
                  
                  <ul className="text-slate-700 space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Technical Consultant, Graduate Web Developer, Business Intelligence Assistant.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Gained foundation in software development, BI, and enterprise support.
                    </li>
                  </ul>
                  
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-sm font-medium text-slate-600">Technologies Used:</p>
                    <p className="text-sm text-slate-500">Web Development, Business Intelligence, Technical Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-gray-50 py-20 px-4" role="region" aria-labelledby="certifications-heading">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.h2 
            id="certifications-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600">Certifications</span>
          </motion.h2>
          
          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Generative AI: Prompt Engineering Basics */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Certification Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Generative AI: Prompt Engineering Basics</h3>
                  <p className="text-slate-500 text-sm mb-3">IBM, 2024</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Introduction to prompt engineering techniques for building generative AI solutions and applications.</p>
                </div>
              </div>
            </motion.div>

            {/* Generative AI for Everyone */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Certification Icon */}
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Generative AI for Everyone</h3>
                  <p className="text-slate-500 text-sm mb-3">Coursera, 2023</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Comprehensive introduction to generative AI concepts, applications, and practical implementation.</p>
                </div>
              </div>
            </motion.div>

            {/* What is Generative AI? */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Certification Icon */}
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">What is Generative AI?</h3>
                  <p className="text-slate-500 text-sm mb-3">LinkedIn, 2025</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Foundation course covering the fundamentals of generative AI technology and its business applications.</p>
                </div>
              </div>
            </motion.div>

            {/* Understanding Agentic AI */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Certification Icon */}
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Understanding Agentic AI</h3>
                  <p className="text-slate-500 text-sm mb-3">Digital Workforce Services Plc, Sep 2025</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Comprehensive course covering autonomous AI agents, their capabilities, and practical applications in modern workflows.</p>
                </div>
              </div>
            </motion.div>

            {/* Adobe Certified Professional – Adobe Commerce Developer */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Certification Icon */}
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Adobe Certified Professional – Commerce Developer</h3>
                  <p className="text-slate-500 text-sm mb-3">Adobe, 2024–2026</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Validates skills in developing and deploying Magento 2 solutions for enterprise e-commerce platforms.</p>
                </div>
              </div>
            </motion.div>

            {/* Full Stack Observability Practitioner Exam */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Certification Icon */}
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Full Stack Observability Practitioner Exam</h3>
                  <p className="text-slate-500 text-sm mb-3">New Relic, 2024–2026</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Demonstrates expertise in monitoring, troubleshooting, and optimizing full-stack applications.</p>
                </div>
              </div>
            </motion.div>

            {/* Adobe Commerce Business Practitioner Professional */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Certification Icon */}
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Adobe Commerce Business Practitioner Professional</h3>
                  <p className="text-slate-500 text-sm mb-3">Adobe, 2023</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Validates expertise in managing Adobe Commerce business operations and customer experiences.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-24 px-6 lg:px-8" role="region" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.h2 
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">I Offer</span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-slate-600 mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the service option that works best for your needs
          </motion.p>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Option 1: Freelance Micro-Gigs */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-blue-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Option 1: Freelance Micro-Gigs</h3>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Fast Turnaround</span>
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                Quick, focused tasks delivered fast. Perfect for urgent fixes and small improvements.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Services I Offer:</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-slate-900">Fix bugs / speed up site</span>
                      <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">£50 - £100</span>
                    </div>
                    <p className="text-sm text-slate-600">(1–2 hours)</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-slate-900">Set up Stripe / webhooks</span>
                      <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">£50 - £100</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-slate-900">Deploy your app to production</span>
                      <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">£50 - £100</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-slate-900">Write scripts / automation</span>
                      <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">£50 - £100</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.a
                href="mailto:indyz_86@hotmail.com?subject=Freelance Micro-Gig Inquiry"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 text-center hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch for Micro-Gigs
              </motion.a>
            </motion.div>

            {/* Option 2: Productised Service */}
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-purple-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Option 2: Productised Services</h3>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Best Value</span>
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                Fixed-price packages with clear deliverables and guaranteed outcomes. Perfect for specific needs with defined scopes.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Services I Offer:</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-slate-900">Website Speed + SEO Quick Fix</h5>
                      <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">£299</span>
                    </div>
                    <p className="text-sm text-slate-600">Optimize your website&apos;s performance and improve SEO rankings</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-slate-900">Landing Page + Copy Refresh</h5>
                      <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">£199</span>
                    </div>
                    <p className="text-sm text-slate-600">Modernize your landing page with fresh design and compelling copy</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-slate-900">AI Chatbot Added to Your Site</h5>
                      <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">£499</span>
                    </div>
                    <p className="text-sm text-slate-600">Integrate an intelligent AI chatbot to enhance customer engagement</p>
                  </div>
                </div>
              </div>
              
              <motion.a
                href="mailto:indyz_86@hotmail.com?subject=Productised Service Inquiry"
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 text-center hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch for Productised Services
              </motion.a>
            </motion.div>
          </div>
          
          {/* Contact CTA */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Whether you need a quick fix or a complete solution, I&apos;m here to help. Let&apos;s discuss your project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:indyz_86@hotmail.com?subject=Service Inquiry"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Email Me
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/indy-singh-88986617/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-xl border-2 border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Connect on LinkedIn
              </motion.a>
              <motion.a
                href="https://wa.me/447878514912?text=Hi%20Indy,%20I%27d%20like%20to%20discuss%20your%20services!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-xl border-2 border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                WhatsApp Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section id="connect" className="bg-slate-50 py-16 px-4" role="region" aria-labelledby="connect-heading">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            id="connect-heading"
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let&apos;s Connect
          </motion.h2>
          
          <motion.p 
            className="text-slate-600 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let&apos;s connect. Whether for knowledge sharing or a project you&apos;d like to discuss, I&apos;m open to conversation.
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/indy-singh-88986617/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors duration-300 p-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/indy86-collab/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors duration-300 p-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* Email */}
            <a 
              href="mailto:indyz_86@hotmail.com"
              className="text-slate-400 hover:text-blue-600 transition-colors duration-300 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

              {/* Floating WhatsApp Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.a
            href="https://wa.me/447878514912?text=Hi%20Indy,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          <div className="flex justify-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Indy Singh. Powered by curiosity & code.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
