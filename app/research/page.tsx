'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const papers = [
  {
    number: '01',
    title: 'Graphing the Jam: GNSS-Powered Modeling and Forecasting of Urban Traffic Congestion',
    venue: 'NetMob 2025 Conference',
    status: 'Poster presentation',
    date: '2025',
    location: 'Paris, France',
    summary: 'A research project using GNSS data to model urban traffic patterns and forecast congestion, with the goal of helping cities understand mobility at scale.',
  },
  {
    number: '02',
    title: 'Analyzing Software Resource Consumption Data for Sustainable Green Software Development',
    venue: '5th International Conference on Applied Intelligence and Informatics (AII 2025)',
    status: 'Conference paper · Springer CCIS Proceedings',
    date: '2025',
    location: 'Washington, D.C., USA',
    summary: 'A predictive model for reducing and optimizing energy consumption in software systems by turning resource-consumption data into practical sustainability insights.',
  },
  {
    number: '03',
    title: 'Machine Learning-Based Multi-Objective Optimization Framework for Energy–Latency Tradeoff in Sustainable Cloud Communication Systems',
    venue: 'SN Computer Science · Springer Nature',
    status: 'Under review',
    date: '2025',
    location: 'Manuscript in review',
    summary: 'A machine learning framework that explores the balance between energy efficiency and latency in cloud communication systems.',
  },
]

export default function ResearchPage() {
  const [dark, setDark] = useState(false)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    setDark(window.localStorage.getItem('portfolio-theme') === 'dark')

    const updateBottomState = () => {
      const distanceFromBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight)
      setAtBottom(distanceFromBottom <= 8)
    }

    updateBottomState()
    window.addEventListener('scroll', updateBottomState, { passive: true })
    window.addEventListener('resize', updateBottomState)
    return () => {
      window.removeEventListener('scroll', updateBottomState)
      window.removeEventListener('resize', updateBottomState)
    }
  }, [])

  function toggleTheme() {
    setDark((current) => {
      const next = !current
      window.localStorage.setItem('portfolio-theme', next ? 'dark' : 'light')
      return next
    })
  }

  return (
    <main className={dark ? 'site dark research-page' : 'site research-page'}>
      <nav className="nav wrap">
        <Link className="brand" href="/" aria-label="Fady Desoky home"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-pic-ZnrqPpIpQOMpbd5ljARzdK40Yky5Dc.jpg" alt="Fady Desoky" /><b>Fady Desoky</b></Link>
        <div className="nav-links research-nav"><Link href="/">Portfolio</Link><span className="nav-divider" aria-hidden="true">/</span><Link href="/#about">About</Link><Link href="/#certifications">Certifications</Link><Link href="/#contact">Contact</Link><Link className="research-parent" href="/research" aria-current="page"><span>Research</span><span aria-hidden="true">↗</span></Link><button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? '☼' : '◐'}</button></div>
      </nav>
      <header id="top" className="research-hero wrap">
        <p className="eyebrow">RESEARCH &amp; PUBLICATIONS</p>
        <h1>Questions worth<br /><em>investigating.</em></h1>
        <p className="lede">My research explores the relationship between data, intelligent systems, urban mobility, and sustainable software.</p>
      </header>
      <section className="papers wrap" aria-labelledby="papers-heading">
        <div className="section-label" id="papers-heading">01 / SELECTED PAPERS</div>
        <div>{papers.map((paper) => <article className="paper" key={paper.title}><div className="paper-number">{paper.number}</div><div><p className="paper-meta">{paper.status} · {paper.date}</p><h2>{paper.title}</h2><p className="paper-venue">{paper.venue}</p><p className="muted">{paper.summary}</p><p className="paper-location">{paper.location}</p></div></article>)}</div>
      </section>
      <section className="research-cta wrap"><p className="eyebrow">COLLABORATE</p><h2>Have a research question<br /><em>in mind?</em></h2><a className="button primary" href="mailto:fadydesoky45@gmail.com">Start a conversation <span>↗</span></a></section>
      <footer className="footer wrap"><span>© 2026 Fady Desoky</span><div className="footer-nav"><a href="#top">Back to top ↑</a><Link href="/">Portfolio</Link><Link href="/#about">About</Link><Link href="/#experience">Experience</Link><Link href="/#projects">Projects</Link><Link href="/#contact">Contact</Link></div><Link href="/">Back to portfolio ↗</Link></footer>
      <div className={atBottom ? 'bottom-navigator is-hidden' : 'bottom-navigator'} aria-label="Section navigation"><a href="#top">Top</a><a href="/">Portfolio</a><a href="/#about">About</a><a href="/#experience">Experience</a><a href="/#projects">Projects</a><a href="/#certifications">Certifications</a><a href="/research" aria-current="page">Research</a><a href="/#contact">Contact</a></div>
    </main>
  )
}
