import React, { useState } from 'react';
import { Activity, BookOpen, LayoutDashboard } from 'lucide-react';
import RecallFeed from './components/RecallFeed';
import AboutPage from './components/AboutPage';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-quality-bg">
      <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-recall-critical" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">
                MedTech <span className="text-slate-500">Recall Monitor</span>
              </h1>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">
                Post-Market Surveillance v1.0
              </span>
            </div>
          </div>
          
          <nav className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${
                currentView === 'dashboard' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </button>
            <button 
              onClick={() => setCurrentView('about')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${
                currentView === 'about' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              About
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <span className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              FDA Live
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {currentView === 'dashboard' ? (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-slate-800">Recall Alert Feed</h2>
            </div>
            <RecallFeed />
          </section>
        ) : (
          <AboutPage />
        )}
      </main>
    </div>
  );
}

export default App;
