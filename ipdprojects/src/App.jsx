import './App.css'
import { useState } from 'react'

const PROJECTS = [
  {
    number: '01',
    title: 'Gardener Marketplace',
    tagline: 'A multi-sided marketplace connecting gardeners with customers',
    insight: 'The cold start problem IS the product design problem. Build for the moment before both sides exist.',
    modes: {
      code: 'MVP — gardener profiles, listing search by location and specialty, in-app messaging, Stripe checkout, map view.',
      augment: 'Stress-test the cold start problem. Who do you acquire first — gardeners or customers?',
      automate: 'New gardener signups → auto-generate profiles, flag geographic gaps, send weekly booking digests.',
    },
  },
  {
    number: '02',
    title: 'AI Internship Platform',
    tagline: 'AI-powered matching between students and internship opportunities',
    insight: "The tool you're pitching IS the tool that builds and validates it. The self-referential demo is your strongest pitch moment.",
    modes: {
      code: 'Student intake + resume upload, employer job posting, Claude fit scoring, ranked candidate dashboard, interview prep module.',
      augment: 'Draft the matching rubric. Think through pricing — per-placement, SaaS, or freemium?',
      automate: 'Applications in → Claude screens, generates candidate summaries, emails digest to employer. Zero manual review until interview.',
    },
  },
  {
    number: '03',
    title: 'Pet Health Detector',
    tagline: 'Detecting health issues in pets through symptom analysis',
    insight: 'The triage model is the product. The defensible thing is knowing exactly where the line is between "reassure" and "escalate."',
    modes: {
      code: 'Symptom intake flow → Claude triage: monitor at home / schedule a vet / go to emergency now — with plain-English next steps.',
      augment: 'Think through liability edge cases. Draft a responsible disclosure framework and terms of service.',
      automate: 'Sessions log symptom + triage output. Claude identifies patterns, flags protocols getting poor feedback.',
    },
  },
  {
    number: '04',
    title: 'Language Learning for Intermediates',
    tagline: 'Improving language skills for intermediate speakers',
    insight: "The intermediate plateau exists because learners need a patient, adaptive sparring partner — not more flashcards. That's the moat.",
    modes: {
      code: 'Conversational practice interface — pick language + topic, Claude tracks struggles, surfaces personalized vocab and grammar notes.',
      augment: 'Map the intermediate plateau. Draft positioning against Duolingo, Babbel, and iTalki.',
      automate: "After each session, Claude generates a progress summary, updates the user's difficulty profile, queues next focus areas.",
    },
  },
  {
    number: '05',
    title: 'City Guide for Foreigners',
    tagline: 'Helping foreigners navigate and settle into a new city',
    insight: '"Foreigner in a new city" is not one persona. Claude lets you serve a Japanese engineer, Brazilian student, and French retiree with one product.',
    modes: {
      code: 'Dynamic onboarding quiz → personalized city guide with ranked recommendations and "why this fits you" explanations.',
      augment: 'Define what makes the curation defensible. Synthesize expat forums and community sources into structured local knowledge.',
      automate: 'As users save and rate places, Claude updates their preference model and proactively surfaces new recommendations.',
    },
  },
  {
    number: '06',
    title: 'Robot Tree Saw',
    tagline: 'An autonomous robot saw for trimming trees',
    insight: 'For hardware projects, the software layer is often under-designed. Claude lets you go deep on UX and safety without pulling engineering time from the saw.',
    modes: {
      code: 'Operator dashboard — live sensor feed, safety threshold config, job scheduling, anomaly alerts, job log with documentation.',
      augment: 'Draft safety protocols, failure mode analysis, operator training manual, and OSHA/ANSI regulatory requirements.',
      automate: 'After each job, Claude processes sensor logs, flags anomalies, auto-generates maintenance checklists, drafts job reports.',
    },
  },
  {
    number: '07',
    title: 'Family Habit Device',
    tagline: 'A toy/device helping families and kids develop good habits',
    insight: 'Habit products live and die on week 3, not week 1. Design for the moment when it stops being fun.',
    modes: {
      code: 'Habit tracking app — family profiles, custom goals, streak tracking, reward system, parent dashboard, weekly family report.',
      augment: 'Model engagement decay across family archetypes. Generate a library of age-appropriate encouragement messages.',
      automate: 'Weekly: personalized family report card, new habit suggestions, encouragement messages, early-abandon flags for parents.',
    },
  },
  {
    number: '08',
    title: 'Athletic Gear Cleaner',
    tagline: 'Cleaning hard-to-clean athletic gear',
    insight: "The product is not the cleaning solution — it's the protocol and the education. Claude builds a knowledge base that would take months of research.",
    modes: {
      code: 'Gear intake quiz (sport, material, problem) → personalized cleaning protocol with product recs, steps, care schedule, and what NOT to do.',
      augment: 'Build the underlying knowledge base from manufacturer guidelines, athlete forums, and materials science.',
      automate: 'Post-protocol follow-up, structured feedback capture, recommendation model updates, flag underperforming protocols.',
    },
  },
]

const MODES = [
  {
    label: 'Augment',
    icon: '🧠',
    description: 'Claude as a thinking partner — research synthesis, competitive analysis, brand copy, financial logic.',
  },
  {
    label: 'Automate',
    icon: '⚙️',
    description: 'Claude as a workflow engine — pipelines that run repeatedly without you.',
  },
  {
    label: 'Agentic (Claude Code)',
    icon: '🤖',
    description: 'Claude as a builder — reads your codebase, writes files, runs commands, ships working prototypes.',
  },
]

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="project-card">
      <div className="project-number">{project.number}</div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <button className="toggle-btn" onClick={() => setOpen(o => !o)}>
          {open ? 'Hide details ↑' : 'See how Claude helps ↓'}
        </button>
        {open && (
          <div className="project-details">
            <div className="mode-row">
              <span className="mode-tag code">Claude Code</span>
              <span>{project.modes.code}</span>
            </div>
            <div className="mode-row">
              <span className="mode-tag augment">Augment</span>
              <span>{project.modes.augment}</span>
            </div>
            <div className="mode-row">
              <span className="mode-tag automate">Automate</span>
              <span>{project.modes.automate}</span>
            </div>
            <div className="insight-box">
              <span className="insight-label">Key insight</span>
              <span>{project.insight}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="page">

      {/* Hero */}
      <header className="hero">
        <div className="eyebrow">February 18, 2026 · Tangen Hall · Spring 2026</div>
        <h1>Claude Builder Club @ Penn<br />× IPD 7990</h1>
        <p className="hero-sub">
          A live workshop exploring how IPD students can use Claude and Claude Code to accelerate every stage of their final projects — from user research synthesis to working prototypes.
        </p>
        <div className="presenter-line">
          Presented by <strong>Albert Opher</strong> — M&T '25 · Anthropic Campus Ambassador · Founder, Penn Claude Builder Club
        </div>
        <div className="badge-row">
          <a href="https://penncbc.com" target="_blank" rel="noreferrer" className="badge">Penn Claude Builder Club ↗</a>
          <a href="https://docs.anthropic.com" target="_blank" rel="noreferrer" className="badge">Anthropic Docs ↗</a>
          <a href="https://claude.ai/code" target="_blank" rel="noreferrer" className="badge">Claude Code ↗</a>
        </div>
      </header>

      {/* Three Modes */}
      <section className="section">
        <h2>Three Ways to Work with Claude</h2>
        <div className="modes-grid">
          {MODES.map(m => (
            <div key={m.label} className="mode-card">
              <div className="mode-icon">{m.icon}</div>
              <h3>{m.label}</h3>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>The 8 IPD Final Projects</h2>
        <p className="section-sub">Each project gets a live Claude Code demo — ideation through working prototype, in real time. Click any project to see the full breakdown.</p>
        <div className="projects-list">
          {PROJECTS.map(p => <ProjectCard key={p.number} project={p} />)}
        </div>
      </section>

      {/* About */}
      <section className="section about-section">
        <h2>About the Presenter</h2>
        <p>
          <strong>Albert Opher</strong> is a M&T '25 grad (CS + Economics, Penn), 3× AWS Solutions Architect Intern,
          Anthropic Campus Ambassador, and founder of the Penn Claude Builder Club.
        </p>
        <p>
          The Claude Builder Club runs workshops, hackathons, and distributes API credits to Penn students building with Claude.
        </p>
        <div className="badge-row">
          <a href="https://penncbc.com" target="_blank" rel="noreferrer" className="badge">penncbc.com ↗</a>
          <a href="https://github.com/anthropics/claude-code/issues" target="_blank" rel="noreferrer" className="badge">Give Feedback ↗</a>
        </div>
      </section>

      <footer className="footer">
        CBC @ Penn × IPD 7990 · Spring 2026 · Tangen Hall
      </footer>
    </div>
  )
}
