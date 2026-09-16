'use client'

import { useState } from 'react'

const experience = [
  { role: 'Advanced Data Analytics', company: 'National Telecommunication Institute (NTI) · Internship', date: 'Aug 2026 — Sep 2026 · 2 mos', text: 'Advanced training in data analysis and statistical data analysis, delivered remotely from Egypt.' },
  { role: 'Data Analytics Intern', company: 'Nestlé Business Solutions', date: 'Apr 2026 — Present', text: 'Developing interactive Power BI and Excel dashboards, structuring datasets, and contributing to forecasting models across MENA.' },
  { role: 'HR Operations Process Optimizer', company: 'Nestlé Business Solutions', date: 'Jul 2025 — Mar 2026', text: 'Collected, cleaned, and validated employee data with regional HRS teams across KSA, Kuwait, Oman, Bahrain, Qatar, and UAE.' },
  { role: 'Data Analytics & Urban Mobility Research Intern', company: 'Nile University', date: 'Jun 2025 — Sep 2025', text: 'Analyzed urban mobility patterns for the NetMob25 Data Challenge; research was accepted as a conference poster.' },
  { role: 'Software Engineering & IT Intern', company: 'Maher Ahmed Belal Consulting', date: 'Jun 2025 — Aug 2025', text: 'Built and optimized internal document workflow tools, reducing processing time by 30%.' },
]

const projects = [
  { number: '01', eyebrow: 'AI · SOFTWARE QUALITY · FULL STACK', title: 'Qualioro: AI-powered software quality intelligence', text: 'An explainable quality intelligence platform that turns code metrics into actionable insight, helping teams understand what is going wrong and what to fix next.', tags: ['AI', 'Software Quality', 'Analytics'], github: 'https://github.com/Fadydesoky/Qualioro', live: 'https://qualioro.vercel.app/' },
  { number: '02', eyebrow: 'PYTHON · BUSINESS INTELLIGENCE · FMCG', title: 'Retail FMCG Sales Analytics', text: 'Analysis of a 2024 Indian FMCG retail dataset to uncover insights across sales, revenue, profitability, customer behavior, store performance, and inventory.', tags: ['Python', 'Pandas', 'Streamlit'], github: 'https://github.com/Fadydesoky/Retail-FMCG-Analytics', live: 'https://retail-fmcg-analytics.streamlit.app/' },
  { number: '03', eyebrow: 'CLOUD · MICROSERVICES · OBSERVABILITY', title: 'Mobile Cloud System', text: 'A production-grade cloud-native system demonstrating modern software engineering through microservices, failure recovery, and an interactive observability dashboard.', tags: ['Cloud Native', 'Microservices', 'Docker'], github: 'https://github.com/Fadydesoky/Mobile-Cloud-System', live: 'https://cloud-native-pipeline.vercel.app/' },
  { number: '04', eyebrow: 'NLP · POWER BI · SENTIMENT ANALYSIS', title: 'AI-Powered Emotional Analysis of The Tell-Tale Heart', text: 'An exploration of emotional patterns in a story using NLP techniques, transformed into an interactive Power BI dashboard for visual analysis.', tags: ['NLP', 'Python', 'Power BI'], github: 'https://github.com/Fadydesoky/ai-story-sentiment-analysis' },
  { number: '05', eyebrow: 'PYTHON · MACHINE LEARNING · SUSTAINABILITY', title: 'Energy Consumption Analysis for Software Systems', text: 'An exploratory and predictive analysis of software energy consumption. Built data pipelines, visualized patterns, and developed models to forecast energy usage trends.', tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'], github: 'https://github.com/Fadydesoky/Energy-Consumption-Analysis-for-Software-Systems' },
]

const skills = ['Python', 'SQL', 'Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'MySQL', 'MongoDB', 'React.js', 'Flask', 'Docker', 'Git']

export default function Page() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className={dark ? 'site dark' : 'site'}>
      <nav className="nav wrap">
        <a className="brand" href="#top" aria-label="Fady Desoky home"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-pic-ZnrqPpIpQOMpbd5ljARzdK40Yky5Dc.jpg" alt="Fady Desoky" /><b>Fady Desoky</b></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button>
        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
<a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a className="route-link" href="/research">Research <span aria-hidden="true">↗</span></a><a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? '☼' : '◐'}</button>
        </div>
      </nav>

      <header id="top" className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">DATA ANALYTICS · DATA ENGINEERING · SUSTAINABLE COMPUTING</p>
          <h1>Turning complex data into <em>clear direction.</em></h1>
          <p className="profile-title">Data Analytics &amp; Reporting @ Nestlé | Data Management &amp; Enterprise Systems | Data Engineering &amp; Analytics | Green Software &amp; Sustainable Computing</p><p className="lede">I&apos;m Fady, a software engineering student and data analytics intern based in Cairo. I build thoughtful dashboards, predictive models, and sustainable data solutions.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">View my work <span>↗</span></a><a className="button secondary" href="mailto:fadydesoky45@gmail.com">Let&apos;s connect</a></div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="data-cube"><span /><span /><span /><span /></div>
          <div className="visual-caption">DATA / SYSTEMS / IMPACT</div>
        </div>
      </header>

      <section id="about" className="about wrap section-grid"><div className="section-label">01 / ABOUT</div><div><h2>Curious by nature.<br /><span>Impact-driven by choice.</span></h2><p>I&apos;m a senior Software Engineering student at Sadat Academy for Management Sciences, with a focus on analytics, data engineering, and sustainability. My work sits at the intersection of technical systems and the people they serve.</p><p>From multinational HR operations to green software research, I enjoy making messy information useful, measurable, and actionable.</p></div></section>

      <section id="experience" className="experience wrap section-grid"><div className="section-label">02 / EXPERIENCE</div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><div className="dot" /><div><p className="date">{item.date}</p><h3>{item.role}</h3><p className="company">{item.company}</p><p className="muted">{item.text}</p></div></article>)}<a className="text-link" href="https://www.linkedin.com/in/fadydesokysaeedabdelaziz/" target="_blank" rel="noreferrer">See full experience on LinkedIn ↗</a></div></section>

      <section id="projects" className="projects wrap section-grid"><div className="section-label">03 / SELECTED WORK</div><div className="project-list">{projects.map(project => <article className="project-card" key={project.title}><div className="project-number">{project.number}</div><div><p className="eyebrow">{project.eyebrow}</p><h2>{project.title}</h2><p className="muted">{project.text}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>{project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Live project ↗</a>}</div></div></article>)}</div></section>

      <section className="skills wrap section-grid"><div className="section-label">04 / TOOLKIT</div><div><h2>Tools I use to<br /><span>make things happen.</span></h2><div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></section>

      <section id="contact" className="contact wrap"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let&apos;s make something<br /><em>meaningful.</em></h2><div className="contact-actions"><a className="button primary" href="mailto:fadydesoky45@gmail.com">Start a conversation <span>↗</span></a><a className="button secondary" href="https://wa.me/201030356690" target="_blank" rel="noreferrer">WhatsApp / SMS <span>↗</span></a></div><p className="location">Based in Nasr City, Cairo, Egypt</p></section>
      <footer className="footer wrap"><span>© 2026 Fady Desoky</span><div className="footer-nav"><a href="#top">Back to top ↑</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="/research">Research</a><a href="#contact">Contact</a></div><div><a href="mailto:fadydesoky45@gmail.com">Email</a><a href="https://wa.me/201030356690" target="_blank" rel="noreferrer">WhatsApp</a><a href="https://github.com/fadydesoky" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/fadydesokysaeedabdelaziz/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
      <div className="bottom-navigator" aria-label="Portfolio section navigation"><a href="#top">Top</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
    </main>
  )
}
