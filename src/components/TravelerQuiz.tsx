import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Trophy,
  Map,
  Utensils,
  Lightbulb,
  BarChart3
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

interface Question {
  id: number;
  type: 'traveler' | 'foodie' | 'curiosity';
  question: string;
  options: string[];
  correctAnswer: string;
  image: string;
  fact: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'traveler',
    question: "In which city can you find this iconic colorful harbor?",
    options: ["Copenhagen", "Stockholm", "Bergen", "Reykjavík"],
    correctAnswer: "Copenhagen",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=800",
    fact: "Nyhavn was originally a busy commercial port where ships from all over the world would dock."
  },
  {
    id: 2,
    type: 'foodie',
    question: "This traditional Spanish dish is a staple in Málaga. What is it called?",
    options: ["Paella", "Espeto de Sardinas", "Gazpacho", "Tortilla de Patatas"],
    correctAnswer: "Espeto de Sardinas",
    image: "https://images.unsplash.com/photo-1534604973900-c41ab4c5e636?auto=format&fit=crop&q=80&w=800",
    fact: "Espetos are sardines skewered on a bamboo stick and grilled over an olive wood fire, usually on a boat-shaped barbecue on the beach."
  },
  {
    id: 3,
    type: 'curiosity',
    question: "Which country is known as the 'Land of a Thousand Lakes'?",
    options: ["Sweden", "Norway", "Finland", "Denmark"],
    correctAnswer: "Finland",
    image: "https://images.unsplash.com/photo-1528156438606-7ac35a859d2f?auto=format&fit=crop&q=80&w=800",
    fact: "Finland actually has about 188,000 lakes!"
  },
  {
    id: 4,
    type: 'traveler',
    question: "This breathtaking viewpoint is located in Norway. What is its name?",
    options: ["Preikestolen", "Trolltunga", "Kjeragbolten", "Geirangerfjord"],
    correctAnswer: "Preikestolen",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",
    fact: "Also known as Pulpit Rock, it towers 604 meters above the Lysefjord."
  },
  {
    id: 5,
    type: 'foodie',
    question: "What is the main ingredient of the traditional Swedish 'Surströmming'?",
    options: ["Fermented Herring", "Smoked Salmon", "Pickled Beets", "Dried Cod"],
    correctAnswer: "Fermented Herring",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&q=80&w=800",
    fact: "It's famous for its extremely strong smell, often opened outdoors or under water!"
  },
  {
    id: 6,
    type: 'curiosity',
    question: "Which of these is a unique feature of the city of Skövde, Sweden?",
    options: ["It has the largest lake in Europe", "It's located between the two largest lakes in Sweden", "It's the birthplace of ABBA", "It has a mountain made of glass"],
    correctAnswer: "It's located between the two largest lakes in Sweden",
    image: "https://images.unsplash.com/photo-1590059431730-806085532274?auto=format&fit=crop&q=80&w=800",
    fact: "Skövde sits between Lake Vänern and Lake Vättern, the two largest lakes in the country."
  }
];

const HISTORICAL_DATA = [
  { category: 'Traveler', average: 75, user: 0 },
  { category: 'Foodie', average: 60, user: 0 },
  { category: 'Curiosity', average: 85, user: 0 },
];

export default function TravelerQuiz() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleAnswer = (option: string) => {
    if (showFeedback) return;
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: option }));
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentStep('results');
    }
  };

  const resetQuiz = () => {
    setCurrentStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowFeedback(false);
  };

  const scores = useMemo(() => {
    const counts = { traveler: 0, foodie: 0, curiosity: 0 };
    const totals = { traveler: 0, foodie: 0, curiosity: 0 };

    QUESTIONS.forEach(q => {
      totals[q.type]++;
      if (answers[q.id] === q.correctAnswer) {
        counts[q.type]++;
      }
    });

    return [
      { subject: 'Traveler', A: (counts.traveler / totals.traveler) * 100, fullMark: 100 },
      { subject: 'Foodie', A: (counts.foodie / totals.foodie) * 100, fullMark: 100 },
      { subject: 'Curiosity', A: (counts.curiosity / totals.curiosity) * 100, fullMark: 100 },
    ];
  }, [answers]);

  const comparisonData = useMemo(() => {
    return HISTORICAL_DATA.map(d => ({
      ...d,
      user: scores.find(s => s.subject === d.category)?.A || 0
    }));
  }, [scores]);

  const totalCorrect = Object.entries(answers).filter(([id, ans]) => 
    QUESTIONS.find(q => q.id === Number(id))?.correctAnswer === ans
  ).length;

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <AnimatePresence mode="wait">
        {currentStep === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex p-4 bg-nord-10/10 rounded-full text-nord-10 mb-4">
              <Map className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-nord-0">
              test how traveler and foodie you are
            </h1>
            <p className="text-xl text-nord-3 max-w-2xl mx-auto">
              A small easter egg to explore my passions for travel, food, and curiosities while showcasing some data science visualization.
            </p>
            <button
              onClick={() => setCurrentStep('quiz')}
              className="px-12 py-4 bg-nord-0 text-white rounded-full font-bold hover:bg-nord-1 transition-all flex items-center gap-3 mx-auto group"
            >
              Start the Test
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {currentStep === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                {currentQuestion.type === 'traveler' && <Map className="w-5 h-5 text-nord-10" />}
                {currentQuestion.type === 'foodie' && <Utensils className="w-5 h-5 text-nord-14" />}
                {currentQuestion.type === 'curiosity' && <Lightbulb className="w-5 h-5 text-nord-13" />}
                <span className="text-xs font-bold uppercase tracking-widest text-nord-4">
                  {currentQuestion.type} — {currentQuestionIndex + 1} of {QUESTIONS.length}
                </span>
              </div>
              <div className="w-32 h-2 bg-nord-4/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-nord-10 transition-all duration-500" 
                  style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl border border-nord-4/30">
                <img 
                  src={currentQuestion.image} 
                  alt="Question context" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-nord-0 leading-tight">
                  {currentQuestion.question}
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options.map((option) => {
                    const isSelected = answers[currentQuestion.id] === option;
                    const isCorrect = option === currentQuestion.correctAnswer;
                    
                    let buttonClass = "w-full p-4 text-left rounded-2xl border-2 transition-all font-medium ";
                    if (!showFeedback) {
                      buttonClass += "border-nord-4/30 hover:border-nord-10 hover:bg-nord-10/5 text-nord-3";
                    } else {
                      if (isCorrect) {
                        buttonClass += "border-nord-14 bg-nord-14/10 text-nord-14";
                      } else if (isSelected) {
                        buttonClass += "border-nord-11 bg-nord-11/10 text-nord-11";
                      } else {
                        buttonClass += "border-nord-4/10 text-nord-4 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        disabled={showFeedback}
                        className={buttonClass}
                      >
                        <div className="flex justify-between items-center">
                          {option}
                          {showFeedback && isCorrect && <CheckCircle2 className="w-5 h-5" />}
                          {showFeedback && isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-nord-4/30 flex flex-col md:flex-row justify-between items-center gap-6"
              >
                <div className="flex-grow">
                  <h4 className="text-sm font-bold text-nord-0 mb-1 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-nord-13" /> Did you know?
                  </h4>
                  <p className="text-sm text-nord-3 italic">{currentQuestion.fact}</p>
                </div>
                <button
                  onClick={nextQuestion}
                  className="px-8 py-3 bg-nord-0 text-white rounded-full font-bold hover:bg-nord-1 transition-all flex items-center gap-2 shrink-0"
                >
                  {currentQuestionIndex < QUESTIONS.length - 1 ? 'Next Question' : 'See Results'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {currentStep === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 bg-nord-14/10 rounded-full text-nord-14 mb-4">
                <Trophy className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-display font-bold text-nord-0">Your Explorer Profile</h2>
              <p className="text-nord-3 text-lg">
                You got {totalCorrect} out of {QUESTIONS.length} correct! Here's how your profile breaks down.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Radar Chart for Profile Breakdown */}
              <div className="glass-card p-8 rounded-[2.5rem] space-y-6">
                <h3 className="text-lg font-bold text-nord-0 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-nord-10" /> Profile Dimensions
                </h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={scores}>
                      <PolarGrid stroke="#d8dee9" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#4c566a', fontSize: 12 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar
                        name="Score"
                        dataKey="A"
                        stroke="#88c0d0"
                        fill="#88c0d0"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-nord-3 text-center italic">
                  This radar chart visualizes your performance across three key domains of exploration.
                </p>
              </div>

              {/* Bar Chart for Comparison */}
              <div className="glass-card p-8 rounded-[2.5rem] space-y-6">
                <h3 className="text-lg font-bold text-nord-0 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-nord-14" /> Historical Comparison
                </h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e9f0" />
                      <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fill: '#4c566a', fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#4c566a', fontSize: 12 }} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      />
                      <Legend iconType="circle" />
                      <Bar name="Global Average" dataKey="average" fill="#d8dee9" radius={[4, 4, 0, 0]} />
                      <Bar name="Your Score" dataKey="user" fill="#81a1c1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-nord-3 text-center italic">
                  Benchmarking your results against the historical average of previous explorers.
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <button
                onClick={resetQuiz}
                className="px-8 py-4 bg-nord-6 text-nord-0 rounded-full font-bold hover:bg-nord-4 transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" /> Retake Test
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-4 bg-nord-0 text-white rounded-full font-bold hover:bg-nord-1 transition-all"
              >
                Back to Top
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
