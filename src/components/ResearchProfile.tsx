import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Users,
  Calendar,
  ExternalLink,
  TrendingUp,
  Award,
  BookOpen,
  Quote,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import portfolioData from '../data.json';

const CITATION_THRESHOLD_HIGH = 10;
const CITATION_THRESHOLD_MED = 4;

function getCitationColor(citations: number) {
  if (citations >= CITATION_THRESHOLD_HIGH) return '#ff00d8';
  if (citations >= CITATION_THRESHOLD_MED) return '#ff7f00';
  return '#5e81ac';
}

function getCitationBg(citations: number) {
  if (citations >= CITATION_THRESHOLD_HIGH) return 'bg-[#ff00d8]/10 text-[#ff00d8] border-[#ff00d8]/30';
  if (citations >= CITATION_THRESHOLD_MED) return 'bg-[#ff7f00]/10 text-[#ff7f00] border-[#ff7f00]/30';
  return 'bg-nord-10/10 text-nord-10 border-nord-10/30';
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 320, damping: 28 }
  }
};

export default function ResearchProfile() {
  const { publications, scholarStats } = portfolioData as typeof portfolioData & {
    scholarStats: {
      totalCitations: number;
      hIndex: number;
      hIndex5y: number;
      i10Index: number;
      i10Index5y: number;
      scholarUrl: string;
      citationsPerYear: { year: number; citations: number }[];
    };
  };

  const [showAll, setShowAll] = useState(false);

  const sorted = [...publications].sort((a, b) => b.citations - a.citations);
  const visible = showAll ? sorted : sorted.slice(0, 10);
  const maxCitations = Math.max(...scholarStats.citationsPerYear.map(d => d.citations));

  const statCards = [
    { label: 'Citations', value: scholarStats.totalCitations, sub: `${scholarStats.since2020Citations} since 2020`, icon: Quote, color: '#ff00d8' },
    { label: 'h-index', value: scholarStats.hIndex, sub: `${scholarStats.hIndex5y} since 2020`, icon: TrendingUp, color: '#ff7f00' },
    { label: 'i10-index', value: scholarStats.i10Index, sub: `${scholarStats.i10Index5y} since 2020`, icon: Award, color: '#5e81ac' },
    { label: 'Papers', value: publications.length, sub: 'peer-reviewed', icon: FileText, color: '#a3be8c' },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-display font-bold text-nord-0 mb-2">Research Profile</h1>
        <p className="text-nord-3">
          Data pulled from{' '}
          <a
            href={scholarStats.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-nord-10 hover:text-[#ff00d8] transition-colors underline underline-offset-2"
          >
            Google Scholar
          </a>
        </p>
      </motion.div>

      {/* Stat cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {statCards.map((card) => (
          <motion.div
            key={card.label}
            variants={itemVariants}
            whileHover={{ scale: 1.04, y: -2 }}
            className="glass-card p-6 rounded-3xl relative overflow-hidden"
          >
            <div
              className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-10 blur-xl"
              style={{ background: card.color }}
            />
            <card.icon className="w-5 h-5 mb-3" style={{ color: card.color }} />
            <div className="text-3xl font-display font-bold text-nord-0 mb-1">{card.value}</div>
            <div className="text-xs font-bold text-nord-0 mb-0.5">{card.label}</div>
            <div className="text-[10px] text-nord-4">{card.sub}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Citations per year */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28, delay: 0.15 }}
            className="glass-card p-6 rounded-[2rem]"
          >
            <h3 className="text-xs font-bold text-nord-4 uppercase tracking-widest mb-5 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" style={{ color: '#ff00d8' }} /> Citation Trend
            </h3>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scholarStats.citationsPerYear} barSize={14}>
                  <XAxis dataKey="year" tick={{ fill: '#d8dee9', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    cursor={{ fill: 'rgba(94,129,172,0.08)' }}
                    contentStyle={{ borderRadius: '0.75rem', border: 'none', fontSize: '11px', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
                    formatter={(v: number) => [`${v} citations`, '']}
                  />
                  <Bar dataKey="citations" radius={[4, 4, 0, 0]}>
                    {scholarStats.citationsPerYear.map((entry, i) => (
                      <Cell
                        key={i}
                        fill={entry.citations === maxCitations ? '#ff00d8' : entry.citations > maxCitations * 0.6 ? '#ff7f00' : '#88c0d0'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Research interests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28, delay: 0.25 }}
            className="p-6 bg-nord-0 text-white rounded-[2rem] relative overflow-hidden"
          >
            <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full opacity-20 blur-2xl" style={{ background: '#ff00d8' }} />
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full opacity-10 blur-2xl" style={{ background: '#ff7f00' }} />
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2 relative z-10">
              <BookOpen className="w-4 h-4" style={{ color: '#ff7f00' }} /> Research Interests
            </h4>
            <div className="flex flex-wrap gap-2 relative z-10">
              {['Predictive Modelling', 'Simulation V&V', 'Human Motion', 'Optimisation', 'Motion Capture', 'DHM Tools'].map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-white/10 rounded-md hover:bg-white/20 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Citation legend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28, delay: 0.35 }}
            className="glass-card p-5 rounded-[2rem]"
          >
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-nord-4 mb-3">Citation Key</h4>
            <div className="space-y-2">
              {[
                { label: `≥ ${CITATION_THRESHOLD_HIGH} citations`, color: '#ff00d8' },
                { label: `≥ ${CITATION_THRESHOLD_MED} citations`, color: '#ff7f00' },
                { label: '< 4 citations', color: '#5e81ac' }
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-nord-3">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ background: item.color }} />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Publications list */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-display font-bold text-nord-0">Publications</h2>
            <span className="text-sm text-nord-4 flex items-center gap-1">
              <FileText className="w-4 h-4" /> {publications.length} total
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            <AnimatePresence>
              {visible.map((pub, index) => (
                <motion.div
                  key={pub.id || index}
                  variants={itemVariants}
                  layout
                  whileHover={{ scale: 1.01, x: 3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  className="group glass-card px-6 py-5 rounded-2xl border border-transparent hover:border-white/40 transition-all relative overflow-hidden"
                >
                  {/* Subtle glow based on citation tier */}
                  {pub.citations >= CITATION_THRESHOLD_HIGH && (
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'linear-gradient(135deg, rgba(255,0,216,0.04) 0%, transparent 60%)' }}
                    />
                  )}
                  {pub.citations >= CITATION_THRESHOLD_MED && pub.citations < CITATION_THRESHOLD_HIGH && (
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'linear-gradient(135deg, rgba(255,127,0,0.04) 0%, transparent 60%)' }}
                    />
                  )}

                  <div className="flex flex-col md:flex-row justify-between gap-4 relative z-10">
                    <div className="space-y-2 flex-grow min-w-0">
                      <div className="flex items-start gap-2">
                        {pub.citations >= CITATION_THRESHOLD_HIGH && (
                          <Star className="w-3.5 h-3.5 mt-1 shrink-0" style={{ color: '#ff00d8', fill: '#ff00d8' }} />
                        )}
                        <h3 className="text-base font-semibold text-nord-0 group-hover:text-nord-10 transition-colors leading-snug">
                          {pub.title}
                        </h3>
                      </div>
                      <div className="flex items-start gap-1.5 text-xs text-nord-3">
                        <Users className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pub.authors}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-nord-4">
                        <span className="flex items-center gap-1 italic">
                          <BookOpen className="w-3 h-3" /> {pub.publication}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {pub.year}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-3 shrink-0">
                      {pub.citations > 0 && (
                        <div className={`text-center px-3 py-1.5 rounded-xl border text-xs font-bold ${getCitationBg(pub.citations)}`}>
                          <span className="block text-lg font-display font-bold leading-none mb-0.5" style={{ color: getCitationColor(pub.citations) }}>
                            {pub.citations}
                          </span>
                          cited
                        </div>
                      )}
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-nord-6 text-nord-3 rounded-full hover:bg-nord-10 hover:text-white transition-all"
                          title="View Publication"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show more / less */}
          {publications.length > 10 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setShowAll(v => !v)}
              className="w-full py-4 mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-nord-3 hover:text-nord-0 border border-nord-4/30 rounded-2xl hover:border-nord-10/50 hover:bg-white/40 transition-all group"
            >
              {showAll ? (
                <><ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Show fewer</>
              ) : (
                <><ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> Show all {publications.length} papers</>
              )}
            </motion.button>
          )}

          <div className="text-center pt-4">
            <p className="text-nord-4 text-xs italic">
              Citation data sourced from{' '}
              <a href={scholarStats.scholarUrl} target="_blank" rel="noopener noreferrer" className="hover:text-nord-10 underline underline-offset-2">
                Google Scholar
              </a>
              . Updated April 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
