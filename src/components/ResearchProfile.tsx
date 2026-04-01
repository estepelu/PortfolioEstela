import { motion } from 'motion/react';
import { 
  FileText, 
  Users, 
  Calendar, 
  ExternalLink, 
  TrendingUp,
  Award,
  BookOpen,
  Quote
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import portfolioData from '../data.json';

const CITATION_DATA = [
  { year: 2021, citations: 2 },
  { year: 2022, citations: 8 },
  { year: 2023, citations: 15 },
  { year: 2024, citations: 24 },
  { year: 2025, citations: 38 },
  { year: 2026, citations: 45 },
];

export default function ResearchProfile() {
  const { publications } = portfolioData;

  const totalCitations = publications.reduce((acc, pub) => acc + pub.citations, 0);
  const hIndex = 4; // Mock h-index
  const i10Index = 6; // Mock i10-index

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar - Profile Stats */}
        <div className="lg:col-span-1 space-y-8">
          <div className="glass-card p-8 rounded-[2.5rem] border border-nord-4/30">
            <div className="mb-8 text-center">
              <div className="w-24 h-24 rounded-full bg-nord-4 mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://picsum.photos/seed/estela-profile/200/200" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-xl font-display font-bold text-nord-0">{portfolioData.owner.name}</h2>
              <p className="text-xs text-nord-3 mt-1">{portfolioData.owner.title}</p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-nord-3 flex items-center gap-2">
                  <Quote className="w-4 h-4 text-nord-10" /> Citations
                </span>
                <span className="font-bold text-nord-0">{totalCitations}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-nord-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-nord-14" /> h-index
                </span>
                <span className="font-bold text-nord-0">{hIndex}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-nord-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-nord-13" /> i10-index
                </span>
                <span className="font-bold text-nord-0">{i10Index}</span>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-nord-4/30">
              <h4 className="text-xs font-bold text-nord-4 uppercase tracking-widest mb-4">Citation Trend</h4>
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CITATION_DATA}>
                    <Bar dataKey="citations" fill="#88c0d0" radius={[2, 2, 0, 0]}>
                      {CITATION_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === CITATION_DATA.length - 1 ? '#81a1c1' : '#88c0d0'} />
                      ))}
                    </Bar>
                    <XAxis dataKey="year" hide />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ borderRadius: '0.5rem', border: 'none', fontSize: '10px' }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="p-6 bg-nord-0 text-white rounded-3xl">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Research Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Human Factors', 'Ergonomics', 'Digital Human Modelling', 'Automotive Safety', 'Simulation Validation'].map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-white/10 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Publications List */}
        <div className="lg:col-span-3 space-y-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-display font-bold text-nord-0">Publications</h1>
            <div className="flex items-center gap-4 text-sm text-nord-4">
              <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> {publications.length} Papers</span>
            </div>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id || index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group glass-card p-8 rounded-3xl border border-nord-4/10 hover:border-nord-10/30 transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="space-y-3 flex-grow">
                    <h3 className="text-xl font-bold text-nord-0 group-hover:text-nord-10 transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-nord-3">
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {pub.authors}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-nord-4 font-medium">
                      <span className="flex items-center gap-1 italic"><BookOpen className="w-3 h-3" /> {pub.publication}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {pub.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 shrink-0">
                    <div className="text-center md:text-right">
                      <div className="text-xs font-bold text-nord-4 uppercase tracking-widest mb-1">Citations</div>
                      <div className="text-2xl font-display font-bold text-nord-10">{pub.citations}</div>
                    </div>
                    {pub.doi && (
                      <a 
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-nord-6 text-nord-3 rounded-full hover:bg-nord-10 hover:text-white transition-all"
                        title="View Publication"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center py-12">
            <p className="text-nord-4 text-sm italic">
              * Citation data is periodically updated from Google Scholar and Scopus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
