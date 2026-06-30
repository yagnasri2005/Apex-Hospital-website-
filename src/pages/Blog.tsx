import { useState, useEffect } from 'react';
import { ARTICLES } from '../data/mockData';
import { Article } from '../types';
import { ArrowLeft, Clock, User, Calendar, Printer, Share2, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BlogProps {
  selectedArticleId?: string;
  onSelectArticle: (articleId: string) => void;
}

export default function Blog({ selectedArticleId, onSelectArticle }: BlogProps) {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (selectedArticleId) {
      const art = ARTICLES.find(a => a.id === selectedArticleId);
      if (art) setActiveArticle(art);
    } else {
      setActiveArticle(null);
    }
  }, [selectedArticleId]);

  const handleSelectArticle = (art: Article) => {
    setActiveArticle(art);
    onSelectArticle(art.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setActiveArticle(null);
    onSelectArticle('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <AnimatePresence mode="wait">
        {!activeArticle ? (
          // Grid list of articles
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-12"
          >
            <div className="text-center max-w-2xl mx-auto space-y-2 mt-4">
              <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Clinical Publications
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Health Insights & Guidelines
              </h1>
              <p className="text-slate-500 text-sm">
                Examine academic wellness blogs, coronary recommendations, and pediatric guidelines written by our on-campus Board Specialists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {ARTICLES.map((art) => (
                <div
                  key={art.id}
                  onClick={() => handleSelectArticle(art)}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="relative h-48 overflow-hidden bg-slate-50">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition"
                      />
                      <span className="absolute bottom-3 left-3 bg-teal-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        {art.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {art.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-950 group-hover:text-teal-600 transition line-clamp-2 leading-snug">
                        {art.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-teal-500 shrink-0" /> By {art.author.split(',')[0]}</span>
                    <span className="text-teal-600 group-hover:translate-x-1 transition">Read Article ›</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          // Detailed article reader view
          <motion.article
            key="reader"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto space-y-8 mt-4"
          >
            {/* Navigation back */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <button
                onClick={handleBack}
                className="text-xs font-bold text-slate-500 hover:text-teal-600 flex items-center gap-1.5 transition uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Articles
              </button>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="p-1.5 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-lg transition border border-slate-100"
                  title="Print article instructions"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => alert('Article link copied to clipboard!')}
                  className="p-1.5 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-lg transition border border-slate-100"
                  title="Copy article link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Banner Picture */}
            <div className="relative h-80 rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {activeArticle.category}
              </span>
            </div>

            {/* Header specifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activeArticle.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activeArticle.readTime}</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
                {activeArticle.title}
              </h1>

              {/* Author Badge */}
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 p-3 rounded-2xl w-fit">
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                  <User className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-800 leading-none">{activeArticle.author}</p>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">Board-Certified Clinician</p>
                </div>
              </div>
            </div>

            {/* Body Content */}
            <div className="text-slate-700 text-sm leading-relaxed space-y-6 border-t border-slate-100 pt-6 prose prose-slate max-w-none">
              {activeArticle.content.split('\n\n').map((para, pIdx) => {
                // Simple markdown parsing for headers
                if (para.startsWith('### ')) {
                  return <h3 key={pIdx} className="text-base font-extrabold text-slate-900 mt-6 pt-2">{para.replace('### ', '')}</h3>;
                }
                if (para.startsWith('## ')) {
                  return <h2 key={pIdx} className="text-lg font-black text-slate-900 mt-8 border-b border-slate-50 pb-1">{para.replace('## ', '')}</h2>;
                }
                if (para.startsWith('1. ') || para.startsWith('* ')) {
                  const listItems = para.split('\n');
                  return (
                    <ul key={pIdx} className="list-disc list-inside space-y-2.5 pl-2 font-medium">
                      {listItems.map((li, lIdx) => {
                        // clean list indicators
                        const text = li.replace(/^\d+\.\s+\*\*/, '').replace(/^\*\s+\*\*/, '').replace(/\*\*/g, ': ');
                        const boldText = li.match(/\*\*(.*?)\*\*/)?.[1] || '';
                        const regularText = li.replace(/\*\*(.*?)\*\*/, '');
                        return (
                          <li key={lIdx} className="text-slate-600">
                            {boldText && <span className="font-extrabold text-slate-800">{boldText}</span>}
                            {regularText.replace(/^\d+\.\s+/, '').replace(/^\*\s+/, '')}
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
                return <p key={pIdx} className="leading-relaxed">{para}</p>;
              })}
            </div>

            {/* Footer disclosure */}
            <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
                <span>Prepared under HIPAA safety standards.</span>
              </div>
              <button
                onClick={handleBack}
                className="px-5 py-2 border border-slate-200 text-slate-700 font-bold rounded-xl text-xs hover:bg-slate-50 transition"
              >
                Return to Insights
              </button>
            </div>

          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}
