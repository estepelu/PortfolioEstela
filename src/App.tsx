/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft,
  Mail, 
  Linkedin, 
  FileText, 
  ArrowRight,
  Search,
  X,
  Briefcase,
  User,
  Info,
  MapPin,
  Phone,
  GraduationCap,
  Sparkles,
  Target,
  Cpu,
  Database,
  Rocket
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend
} from 'recharts';
import portfolioData from './data.json';
import TravelerQuiz from './components/TravelerQuiz';
import ResearchProfile from './components/ResearchProfile';

type Project = typeof portfolioData.projects[0];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'portfolio' | 'resume' | 'research' | 'quiz'>('portfolio');

  const filteredProjects = portfolioData.projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen scandi-gradient selection:bg-nord-8/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-semibold tracking-tight lowercase text-nord-0"
          >
            {portfolioData.owner.name}
          </motion.div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-1 bg-nord-4/30 p-1 rounded-full">
              <button 
                onClick={() => setActiveTab('portfolio')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all lowercase ${activeTab === 'portfolio' ? 'bg-white text-nord-0 shadow-sm' : 'text-nord-3 hover:text-nord-0'}`}
              >
                portfolio
              </button>
              <button 
                onClick={() => setActiveTab('resume')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all lowercase ${activeTab === 'resume' ? 'bg-white text-nord-0 shadow-sm' : 'text-nord-3 hover:text-nord-0'}`}
              >
                resume
              </button>
              <button 
                onClick={() => setActiveTab('research')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all lowercase ${activeTab === 'research' ? 'bg-white text-nord-0 shadow-sm' : 'text-nord-3 hover:text-nord-0'}`}
              >
                research profile
              </button>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href={portfolioData.owner.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-nord-3 hover:text-nord-10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${portfolioData.owner.email}`} className="p-2 text-nord-3 hover:text-nord-10 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <section className="mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  className="max-w-4xl"
                >
                  <h1 className="text-5xl md:text-7xl font-display font-bold text-nord-0 leading-[1.1] mb-8">
                    Turning <span style={{ color: '#ff00d8' }}>complex systems</span> into decisions, products, and <span style={{ color: '#ff7f00' }}>customer outcomes</span>.
                  </h1>
                  <p className="text-xl text-nord-3 leading-relaxed mb-10 max-w-2xl">
                    I'm {portfolioData.owner.name.split(' ')[0].toLowerCase()}, a PhD-level data scientist and systems thinker. I bridge deep technical expertise with commercial delivery — from predictive models and validation pipelines to go-to-market strategy and customer success.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => {
                        const el = document.getElementById('about');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-8 py-4 bg-nord-0 text-white rounded-full font-medium hover:bg-nord-1 transition-all flex items-center gap-2 group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a 
                      href={`mailto:${portfolioData.owner.email}`}
                      className="px-8 py-4 bg-white border border-nord-4 text-nord-0 rounded-full font-medium hover:border-nord-10 transition-all"
                    >
                      Get in touch
                    </a>
                  </div>
                </motion.div>
              </section>

              {/* About Section */}
              <section id="about" className="mb-32 scroll-mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h2 className="text-3xl font-display font-bold text-nord-0 mb-8 lowercase">about me</h2>
                    <div className="space-y-6 text-lg text-nord-3 leading-relaxed">
                      <p>
                        I'm a <span className="text-nord-0 font-semibold">PhD-level data scientist and systems thinker</span> with 5+ years of experience connecting technical depth with real-world impact — from predictive modelling and data pipelines to customer-facing delivery and go-to-market execution.
                      </p>
                      <p>
                        I lead cross-functional projects end-to-end: scoping the problem, building the evidence, and translating findings into decisions that stick. I've partnered with Volvo, Scania, and international research institutes, and co-founded a hardware startup where I managed everything from prototyping to investor communications.
                      </p>
                      <p>
                        Whether the role is <span className="text-nord-0 font-semibold">technical, commercial, or at the boundary</span> — I bring the same toolkit: rigorous analysis, clear communication, and a bias for outcomes over outputs.
                      </p>
                    </div>
                    
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-6 bg-white/40 rounded-3xl border border-white/20"
                      >
                        <Target className="w-6 h-6 text-nord-10 mb-4" />
                        <h4 className="text-nord-0 font-bold mb-2">My Mission</h4>
                        <p className="text-sm text-nord-3">To contribute to real-world problems by connecting the dots between complex systems and human needs.</p>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-6 bg-white/40 rounded-3xl border border-white/20"
                      >
                        <Sparkles className="w-6 h-6 text-nord-14 mb-4" />
                        <h4 className="text-nord-0 font-bold mb-2">Interests</h4>
                        <div className="flex flex-wrap gap-2">
                          {portfolioData.interests.map(interest => (
                            <span key={interest} className="text-[10px] px-2 py-1 bg-nord-4/30 text-nord-3 rounded-md uppercase tracking-wider font-bold">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-nord-4 group shadow-2xl"
                  >
                    <img 
                      src="https://picsum.photos/seed/estela-research/1000/1250" 
                      alt="Estela Pérez Luque" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-nord-10/5 mix-blend-multiply group-hover:bg-transparent transition-all" />
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                      <p className="text-white text-sm font-medium italic">"Only understanding the challenges and systems well is that you will get to the right solutions."</p>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="mb-32 scroll-mt-32">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                  <div>
                    <h2 className="text-3xl font-display font-bold text-nord-0 mb-4 lowercase">strategic projects</h2>
                    <p className="text-nord-3">High-impact initiatives driving system optimization and user-centric design.</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="relative group">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-nord-4 group-focus-within:text-nord-10 transition-colors" />
                      <input 
                        type="text"
                        placeholder="search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 bg-white/50 border border-nord-4 rounded-full text-sm focus:outline-none focus:border-nord-10 focus:ring-1 focus:ring-nord-10 transition-all w-full md:w-64"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        onClick={() => setSelectedProject(project)}
                        className={`glass-card rounded-3xl p-8 cursor-pointer flex flex-col h-full group relative overflow-hidden ${project.id === 'phd-thesis' ? 'md:col-span-2 lg:col-span-2 border-nord-10/30 bg-nord-10/5' : ''}`}
                      >
                        {/* Per-project accent glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-[0.06] group-hover:opacity-[0.20] transition-all duration-500" style={{ background: project.accentColor }} />
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full blur-[60px] opacity-[0.04] group-hover:opacity-[0.12] transition-all duration-500" style={{ background: project.accentColor }} />
                        
                        {project.id === 'phd-thesis' && (
                          <div className="absolute top-0 right-0 p-4">
                            <Sparkles className="w-6 h-6 text-nord-10 opacity-20" />
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex flex-wrap items-center gap-2">
                            {project.id === 'phd-thesis' ? (
                              <span className="px-3 py-1 bg-nord-10 text-white text-[10px] uppercase tracking-widest font-bold rounded-full">
                                PhD Thesis
                              </span>
                            ) : (
                              <span className="px-3 py-1 bg-nord-8/10 text-nord-10 text-[10px] uppercase tracking-widest font-bold rounded-full">
                                {project.domains[0]}
                              </span>
                            )}
                            {project.evidence?.paperLabel && (
                              <span className="px-3 py-1 bg-nord-14/10 text-nord-14 text-[10px] uppercase tracking-widest font-bold rounded-full flex items-center gap-1">
                                <Sparkles className="w-3 h-3" /> {project.evidence.paperLabel}
                              </span>
                            )}
                            {project.id === 'sweex-ab' && (
                              <span className="px-3 py-1 bg-nord-11/10 text-nord-11 text-[10px] uppercase tracking-widest font-bold rounded-full flex items-center gap-1">
                                <Rocket className="w-3 h-3" /> Entrepreneurship
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-medium text-nord-4">{project.yearStart}</span>
                        </div>
                        
                        <h3 className={`font-display font-bold text-nord-0 mb-3 group-hover:text-nord-10 transition-colors ${project.id === 'phd-thesis' ? 'text-3xl' : 'text-xl'}`}>
                          {project.title}
                        </h3>
                        
                        <p className={`text-nord-3 leading-relaxed mb-8 flex-grow ${project.id === 'phd-thesis' ? 'text-lg' : 'text-sm'}`}>
                          {project.tagline}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.skills.slice(0, 4).map(skill => (
                            <span key={skill} className="text-[10px] px-2 py-1 bg-nord-4/30 text-nord-3 rounded-md">
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-nord-0 text-sm font-semibold group-hover:gap-2 transition-all">
                          Read Case Study <ChevronRight className="w-4 h-4" />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'resume' && (
            <motion.div
              key="resume"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              {/* Resume Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-10 border-b border-nord-4/30">
                <div>
                  <h1 className="text-4xl font-display font-bold text-nord-0 mb-2">{portfolioData.owner.name}</h1>
                  <p className="font-medium text-lg" style={{ color: '#ff00d8' }}>{portfolioData.owner.title}</p>
                </div>
                <div className="flex flex-col gap-2.5 text-sm text-nord-3 min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <Mail className="w-4 h-4 text-nord-10 shrink-0" />
                    <a href={`mailto:${portfolioData.owner.email}`} className="hover:text-nord-10 break-all">{portfolioData.owner.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-nord-10 shrink-0" />
                    <span>{portfolioData.owner.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-nord-10 shrink-0" />
                    <span>{portfolioData.owner.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-nord-10 shrink-0" />
                    <a href={portfolioData.owner.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-nord-10">LinkedIn Profile</a>
                  </div>
                </div>
              </div>

              {/* Profile Summary */}
              {'resumeProfile' in portfolioData && (
                <div className="mb-10 p-6 rounded-3xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,0,216,0.06) 0%, rgba(255,127,0,0.04) 100%)', border: '1px solid rgba(255,0,216,0.15)' }}>
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ background: '#ff00d8' }} />
                  <p className="text-nord-3 leading-relaxed text-sm relative z-10">{(portfolioData as typeof portfolioData & { resumeProfile: string }).resumeProfile}</p>
                </div>
              )}

              {/* Resume Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-16">
                  {/* Experience */}
                  <section>
                    <h2 className="text-sm uppercase tracking-widest font-bold text-nord-1 mb-8 flex items-center gap-3">
                      <Briefcase className="w-5 h-5" /> Professional Experience
                    </h2>
                    <div className="space-y-12">
                      {(portfolioData as typeof portfolioData & { experience: Array<{ role: string; company: string; period: string; bullets?: string[]; description?: string }> }).experience.map((exp, i) => (
                        <div key={i} className="relative pl-8 border-l-2 border-nord-4/30">
                          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2" style={{ borderColor: i === 0 ? '#ff00d8' : '#5e81ac' }} />
                          <div className="mb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <h3 className="text-lg font-bold text-nord-0">{exp.role}</h3>
                            <span className="text-xs font-bold px-2 py-1 rounded-md" style={{ color: '#5e81ac', background: 'rgba(94,129,172,0.1)' }}>{exp.period}</span>
                          </div>
                          <p className="text-nord-3 font-medium mb-4">{exp.company}</p>
                          <ul className="space-y-2.5">
                            {exp.bullets.map((bullet, bi) => (
                              <li key={bi} className="flex gap-3 text-nord-3 text-sm leading-relaxed">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: i === 0 ? '#ff00d8' : '#5e81ac' }} />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Education */}
                  <section>
                    <h2 className="text-sm uppercase tracking-widest font-bold text-nord-1 mb-8 flex items-center gap-3">
                      <GraduationCap className="w-5 h-5" /> Education
                    </h2>
                    <div className="space-y-8">
                      {portfolioData.education.map((edu, i) => (
                        <div key={i} className="flex justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-nord-0">{edu.degree}</h3>
                            <p className="text-sm text-nord-3">{edu.school}</p>
                            {edu.details && <p className="text-xs text-nord-10 mt-1 italic">{edu.details}</p>}
                          </div>
                          <span className="text-xs font-medium text-nord-3 shrink-0">{edu.period}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-12">
                  {/* Skills Grid */}
                  <section>
                    <h2 className="text-sm uppercase tracking-widest font-bold text-nord-1 mb-6">Technical Expertise</h2>
                    {(() => {
                      const skills = (portfolioData as typeof portfolioData & { skills: { core: string[]; methods: string[]; experimental: string[]; tools: string[] } }).skills;
                      const groups = [
                        { label: 'Core Stack', items: skills.core, bg: 'bg-nord-0 text-white' },
                        { label: 'Methods', items: skills.methods, bg: 'bg-[#ff00d8]/10 text-[#c800a8]' },
                        { label: 'Experimental', items: skills.experimental, bg: 'bg-[#ff7f00]/10 text-[#c06000]' },
                        { label: 'Tools', items: skills.tools, bg: 'bg-nord-6 text-nord-3' },
                      ];
                      return (
                        <div className="space-y-5">
                          {groups.map(g => (
                            <div key={g.label}>
                              <h4 className="text-[10px] font-bold text-nord-2 uppercase tracking-widest mb-2">{g.label}</h4>
                              <div className="flex flex-wrap gap-2">
                                {g.items.map(s => (
                                  <span key={s} className={`text-[10px] px-2 py-1 rounded-md font-medium ${g.bg}`}>{s}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </section>

                  {/* Languages */}
                  <section>
                    <h2 className="text-sm uppercase tracking-widest font-bold text-nord-1 mb-6">Languages</h2>
                    <div className="space-y-3">
                      {(portfolioData as typeof portfolioData & { languages: Array<{ name: string; level: string }> }).languages.map(lang => (
                        <div key={lang.name} className="flex justify-between items-center text-sm">
                          <span className="text-nord-3">{lang.name}</span>
                          <span className="font-bold text-xs px-2 py-0.5 rounded-md" style={{ color: '#ff7f00', background: 'rgba(255,127,0,0.1)' }}>{lang.level}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Awards */}
                  <section className="p-6 bg-nord-0 text-white rounded-3xl relative overflow-hidden">
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-30" style={{ background: '#ff00d8' }} />
                    <h2 className="text-xs uppercase tracking-widest font-bold mb-4 relative z-10">Leadership & Awards</h2>
                    <ul className="space-y-2 relative z-10">
                      {[
                        'Elected Student Representative & Board Member, representing 40+ PhD students in university governance.',
                        'Recipient of multiple international grants and travel awards supporting research dissemination.'
                      ].map((item, i) => (
                        <li key={i} className="text-[11px] leading-relaxed text-nord-4 flex gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#ff00d8' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'research' && (
            <motion.div
              key="research"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ResearchProfile />
            </motion.div>
          )}

          {activeTab === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TravelerQuiz />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section (Shared) */}
        <section id="contact" className="mt-32 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-nord-0 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pop-pink rounded-full blur-[100px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pop-orange rounded-full blur-[100px]" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 lowercase">let's collaborate</h2>
              <p className="text-nord-4 text-lg mb-12 max-w-xl mx-auto">
                Interested in data science, autonomous systems, or human factors research? I'd love to hear from you.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href={`mailto:${portfolioData.owner.email}`}
                  className="flex items-center gap-3 px-8 py-4 bg-white text-nord-0 rounded-full font-bold hover:bg-nord-6 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <a 
                  href={portfolioData.owner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-nord-4/30 text-center">
        <p className="text-sm text-nord-4">
          &copy; {new Date().getFullYear()} {portfolioData.owner.name.toLowerCase()}. built with scandinavian care.
        </p>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div 
              className="absolute inset-0 bg-nord-0/60 backdrop-blur-sm" 
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="absolute top-6 right-6 flex gap-2 z-10">
                {/* Navigation for Thesis Papers */}
                {selectedProject.evidence?.paperLabel && (
                  <div className="flex gap-2 mr-4">
                    {(() => {
                      const papers = portfolioData.projects.filter(p => p.evidence?.paperLabel).sort((a, b) => a.sortOrder - b.sortOrder);
                      const currentIndex = papers.findIndex(p => p.id === selectedProject.id);
                      return (
                        <>
                          {currentIndex > 0 && (
                            <button 
                              onClick={() => setSelectedProject(papers[currentIndex - 1])}
                              className="p-2 bg-nord-6 rounded-full text-nord-3 hover:text-nord-0 transition-colors flex items-center gap-1 text-xs font-bold"
                              title="Previous Paper"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                          )}
                          {currentIndex < papers.length - 1 && (
                            <button 
                              onClick={() => setSelectedProject(papers[currentIndex + 1])}
                              className="p-2 bg-nord-6 rounded-full text-nord-3 hover:text-nord-0 transition-colors flex items-center gap-1 text-xs font-bold"
                              title="Next Paper"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          )}
                        </>
                      );
                    })()}
                  </div>
                )}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-nord-6 rounded-full text-nord-3 hover:text-nord-0 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="overflow-y-auto p-8 md:p-16">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-nord-8/10 text-nord-10 text-[10px] uppercase tracking-widest font-bold rounded-full">
                      {selectedProject.category.replace('-', ' ')}
                    </span>
                    <span className="text-nord-3 text-sm font-medium">{selectedProject.yearStart} to {selectedProject.yearEnd}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-nord-0 mb-6">
                    {selectedProject.title}
                  </h2>
                  
                  <p className="text-xl text-nord-10 font-medium mb-12">
                    {selectedProject.tagline}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="md:col-span-2 space-y-10">
                      <div>
                        <h4 className="text-sm uppercase tracking-widest font-bold text-nord-1 mb-4 flex items-center gap-2">
                          <Info className="w-4 h-4" /> Context & Challenge
                        </h4>
                        <p className="text-nord-3 leading-relaxed">{selectedProject.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-widest font-bold text-nord-1 mb-4 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" /> Action
                        </h4>
                        <ul className="space-y-3">
                          {selectedProject.whatIDid.map((item, i) => (
                            <li key={i} className="flex gap-3 text-nord-3 leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-nord-14 mt-2.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-10">
                      <div>
                        <h4 className="text-sm uppercase tracking-widest font-bold text-nord-1 mb-4">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.skills.map(skill => (
                            <span key={skill} className="text-xs px-3 py-1 bg-nord-6 text-nord-3 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase tracking-widest font-bold text-nord-1 mb-4">Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tools.map(tool => (
                            <span key={tool} className="text-xs px-3 py-1 bg-nord-6 text-nord-3 rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {selectedProject.evidence && (
                        <div>
                          <h4 className="text-sm uppercase tracking-widest font-bold text-nord-1 mb-4">Evidence</h4>
                          <div className="p-4 bg-nord-6 rounded-2xl">
                            <div className="flex items-center gap-2 text-nord-10 font-bold text-xs mb-2">
                              <FileText className="w-3 h-3" />
                              {selectedProject.evidence.paperLabel || 'Reference'}
                            </div>
                            <p className="text-xs text-nord-3 font-medium mb-3">
                              {selectedProject.evidence.publicationTitle || selectedProject.evidence.notes}
                            </p>
                            {selectedProject.evidence.doi && (
                              <a 
                                href={`https://doi.org/${selectedProject.evidence.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] text-nord-10 hover:underline flex items-center gap-1"
                              >
                                View DOI <ExternalLink className="w-2 h-2" />
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-nord-14/10 rounded-3xl p-8 md:p-12 mb-6">
                    <h4 className="text-sm uppercase tracking-widest font-bold text-nord-14 mb-6">Results</h4>
                    <ul className="space-y-4">
                      {selectedProject.impact.map((item, i) => (
                        <li key={i} className="flex gap-4 text-nord-0 font-medium leading-relaxed">
                          <div className="w-6 h-6 rounded-full bg-nord-14 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                            {i + 1}
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(selectedProject as typeof selectedProject & { learning?: string }).learning && (
                    <div className="rounded-3xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, rgba(255,0,216,0.06) 0%, rgba(255,127,0,0.04) 100%)', border: '1px solid rgba(255,0,216,0.15)' }}>
                      <h4 className="text-sm uppercase tracking-widest font-bold mb-4" style={{ color: '#ff00d8' }}>Key Insight</h4>
                      <p className="text-nord-3 leading-relaxed italic">"{(selectedProject as typeof selectedProject & { learning?: string }).learning}"</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
