import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar, ArrowUp, FileText } from 'lucide-react';
import PixelCard from './components/PixelCard';
import SkillBar from './components/SkillBar';
import StatusMenu from './components/StatusMenu';
import SectionReveal from './components/SectionReveal';
import InteractiveProject from './components/InteractiveProject';
import AdventureBook from './components/AdventureBook';
import { EDUCATION, AWARDS, SKILLS, EXPERIENCES, PROJECTS, CATEGORIES } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(true);

  // Initial Loading Simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Loading Screen
  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-pink-bg flex flex-col items-center justify-center font-pixel">
        <div className="text-pink-dark text-lg mb-4 animate-pulse">LOADING WORLD...</div>
        <div className="w-64 h-4 border-4 border-pink-dark p-0.5 bg-white">
           <div className="h-full bg-pink-500 animate-[width_2s_ease-out_forwards] w-0"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-bg to-blue-bg text-dark font-body overflow-x-hidden selection:bg-pink-light selection:text-pink-dark">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-pink-200 shadow-sm py-4 transition-all">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-left cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <h1 className="font-pixel text-gray-800 text-sm md:text-lg tracking-tight hover:text-pink-500 transition-colors">[ Jennifer Truong ]</h1>
            <p className="text-xs text-pink-400 font-bold tracking-widest uppercase">Data Scientist · Game Dev · Marketer</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              { id: 'about', label: '▶ START' },
              { id: 'projects', label: '💾 PROJECTS' },
              { id: 'skills', label: '📊 SKILLS' },
              { id: 'adventure', label: '⚔ LOG' },
              { id: 'contact', label: '💌 CONTACT' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  font-pixel text-[0.6rem] md:text-xs px-3 py-2 border-2 
                  transition-all hover:-translate-y-1 active:translate-y-0
                  ${activeTab === item.id 
                    ? 'bg-pink-50 border-pink-400 text-pink-600 shadow-[2px_2px_0_#ff4da6]' 
                    : 'bg-white border-gray-200 text-gray-500 hover:border-pink-300 shadow-[2px_2px_0_#e5e7eb]'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="pt-48 pb-20 px-4 text-center relative overflow-hidden min-h-[85vh] flex flex-col justify-center items-center">
        <SectionReveal className="relative z-10 max-w-4xl mx-auto w-full">
          {/* Avatar Area - Larger */}
          <div className="inline-block relative group mb-10">
             <div className="absolute top-2 left-2 w-full h-full bg-pink-200 border-2 border-pink-300"></div>
             <img src="https://picsum.photos/300/300" alt="Avatar" className="relative w-48 h-48 md:w-64 md:h-64 border-4 border-white shadow-pixel transition-transform group-hover:scale-[1.02]" style={{imageRendering: 'pixelated'}} />
          </div>

          <h1 className="font-pixel text-2xl md:text-4xl text-gray-800 mb-6 leading-relaxed drop-shadow-sm tracking-tight">
            Leveling Up <span className="text-pink-500">Data</span> & <span className="text-blue-500">Design</span>
          </h1>
          
          {/* RPG Text Box Style */}
          <div className="relative bg-[#fffafb] border-4 border-pink-400 p-6 sm:p-8 max-w-2xl mx-auto mb-10 shadow-pixel-lg text-left group hover:border-pink-500 transition-colors">
            {/* UI Label */}
            <div className="absolute -top-4 left-4 sm:left-6 bg-pink-500 text-white px-3 py-1 font-pixel text-[0.6rem] border-2 border-pink-700 shadow-sm">
              QUEST OBJECTIVE
            </div>

            <p className="font-pixel text-xs md:text-sm leading-7 md:leading-8 text-gray-600 mt-2">
              Crafting interactive experiences through 
              <span className="inline-block mx-1 text-pink-600 font-bold bg-pink-100 px-2 border-b-2 border-pink-300">code</span>, 
              <span className="inline-block mx-1 text-blue-500 font-bold bg-blue-50 px-2 border-b-2 border-blue-200">statistics</span>, 
              and 
              <span className="inline-block mx-1 text-yellow-600 font-bold bg-yellow-50 px-2 border-b-2 border-yellow-200">creative strategy</span>.
              <span className="inline-block w-2 h-4 bg-pink-400 ml-2 animate-pulse align-middle mb-1"></span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
             <a href="#projects" className="bg-pink-500 text-white font-pixel text-xs px-8 py-4 shadow-pixel hover:bg-pink-600 hover:-translate-y-1 transition-all border-2 border-pink-900 w-full md:w-auto">
               VIEW QUESTS
             </a>
             
             <a href="/resume.pdf" target="_blank" className="bg-white text-gray-800 font-pixel text-xs px-6 py-4 shadow-pixel hover:bg-gray-50 hover:-translate-y-1 transition-all border-2 border-gray-400 flex items-center justify-center gap-2 w-full md:w-auto">
                <FileText size={16} /> STAT SHEET
             </a>

             <div className="flex gap-2 justify-center w-full md:w-auto">
               <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-gray-800 text-white p-3 shadow-pixel hover:bg-black hover:-translate-y-1 transition-all border-2 border-gray-900">
                 <Github size={20} />
               </a>
               <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-[#0077b5] text-white p-3 shadow-pixel hover:bg-blue-800 hover:-translate-y-1 transition-all border-2 border-blue-900">
                 <Linkedin size={20} />
               </a>
             </div>
          </div>
        </SectionReveal>
      </header>

      {/* --- About (Status Menu) --- */}
      <section id="about" className="py-24 bg-[#fffafb] border-y-4 border-pink-100 relative">
        <div className="container mx-auto px-4">
          <SectionReveal>
             <StatusMenu education={EDUCATION} awards={AWARDS} />
          </SectionReveal>
        </div>
      </section>

      {/* --- Projects (Interactive Gallery) --- */}
      <section id="projects" className="py-24 bg-gradient-to-b from-[#fffafb] to-blue-bg">
        <div className="container mx-auto px-4 max-w-6xl">
           <SectionReveal className="text-center mb-16">
            <h3 className="font-pixel text-blue-600 text-xl md:text-2xl mb-4 uppercase">Project Gallery</h3>
            <p className="font-body text-gray-500">Select a cartridge to view details or play demo.</p>
          </SectionReveal>

          {/* Categories */}
          <SectionReveal delay={200} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {CATEGORIES.map(cat => {
              const Icon = cat.icon;
              return (
                <div key={cat.id} className="flex flex-col items-center justify-center p-4 bg-white border-2 border-gray-100 hover:border-pink-300 shadow-sm hover:shadow-md transition-all cursor-default group">
                  <div className={`w-10 h-10 flex items-center justify-center bg-gray-50 border border-gray-200 mb-2 group-hover:scale-110 transition-transform ${cat.color}`}>
                    <Icon size={20} />
                  </div>
                  <h4 className="font-pixel text-[0.6rem] text-gray-600 uppercase tracking-wide">{cat.label}</h4>
                </div>
              );
            })}
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PROJECTS.map((project, idx) => (
              <SectionReveal key={project.id} delay={idx * 100}>
                <div className="h-full flex flex-col gap-4">
                   {/* Visual/Interactive Part */}
                   <div className="w-full">
                     {project.category === 'game' || project.category === 'stats' ? (
                       <InteractiveProject 
                          type={project.category === 'game' ? 'game' : 'data'} 
                          title={project.title} 
                          demoUrl={project.demoUrl}
                       />
                     ) : (
                       <div className="w-full h-64 bg-gray-50 border-4 border-gray-200 flex items-center justify-center shadow-inner">
                          <span className="font-pixel text-gray-400 text-xs">STATIC PREVIEW</span>
                       </div>
                     )}
                   </div>

                   {/* Description Part */}
                   <PixelCard className="flex-grow flex flex-col pt-4 pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-pixel text-sm text-pink-dark">{project.title}</h4>
                        <span className={`text-[0.6rem] font-bold px-2 py-1 border-2 uppercase ${
                          project.category === 'game' ? 'bg-blue-50 border-blue-200 text-blue-600' :
                          project.category === 'stats' ? 'bg-pink-50 border-pink-200 text-pink-600' :
                          'bg-gray-50 border-gray-200 text-gray-600'
                        }`}>
                          {project.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="mt-auto">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map(t => (
                              <span key={t} className="text-[0.65rem] bg-white text-gray-500 px-2 py-1 border border-gray-200 font-bold">
                                {t}
                              </span>
                            ))}
                          </div>
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gray-800 text-white font-pixel text-[0.6rem] py-3 hover:bg-pink-dark transition-colors border-2 border-black">
                              VIEW SOURCE CODE
                            </a>
                          )}
                      </div>
                   </PixelCard>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

       {/* --- Skills --- */}
      <section id="skills" className="py-24 bg-blue-bg border-t-4 border-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionReveal className="text-center mb-12">
            <h3 className="font-pixel text-blue-600 text-xl uppercase">Skill Trees</h3>
          </SectionReveal>

          <SectionReveal className="bg-white/80 p-8 border-4 border-white shadow-[8px_8px_0_rgba(167,224,255,0.5)]">
            {SKILLS.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} link={skill.link} />
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* --- Adventure Log --- */}
      <section id="adventure" className="py-24 bg-yellow-pastel border-t-4 border-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionReveal className="text-center mb-16">
            <h3 className="font-pixel text-yellow-800 text-xl uppercase">Adventure Log</h3>
            <div className="inline-block bg-white px-3 py-1 mt-2 border-2 border-yellow-600 text-xs font-bold text-yellow-800 uppercase shadow-sm">
              Quest History
            </div>
          </SectionReveal>

          <SectionReveal>
             <AdventureBook experiences={EXPERIENCES} />
          </SectionReveal>

        </div>
      </section>

      {/* --- Contact / Footer --- */}
      <footer id="contact" className="bg-white border-t-8 border-pink-light pt-24 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <SectionReveal>
            <div className="inline-block animate-bounce mb-4">
              {/* Pixel Perfect SVG Arrow Down */}
              <svg width="40" height="40" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
                <rect x="7" y="2" width="2" height="6" fill="#ff4da6" />
                <rect x="5" y="8" width="6" height="2" fill="#ff4da6" />
                <rect x="6" y="10" width="4" height="2" fill="#ff4da6" />
                <rect x="7" y="12" width="2" height="2" fill="#ff4da6" />
              </svg>
            </div>
            <h3 className="font-pixel text-xl md:text-2xl text-pink-dark mb-8 uppercase tracking-widest">
              Select this character?
            </h3>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
               <a href="mailto:email@example.com" className="group relative bg-yellow-pastel border-4 border-black px-12 py-4 font-pixel text-sm shadow-pixel hover:-translate-y-1 hover:shadow-pixel-lg transition-all active:translate-y-1 active:shadow-none inline-block">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                     {/* Pixel Arrow Right */}
                     <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
                       <rect x="2" y="1" width="1" height="6" fill="#000" />
                       <rect x="3" y="2" width="1" height="4" fill="#000" />
                       <rect x="4" y="3" width="1" height="2" fill="#000" />
                     </svg>
                  </div>
                  YES (Contact Me)
               </a>
               <button className="bg-gray-100 border-4 border-gray-300 px-8 py-4 font-pixel text-xs text-gray-400 cursor-not-allowed opacity-50" title="Locked">
                  NO
               </button>
            </div>

            <div className="flex justify-center gap-10 mb-12">
              <a href="mailto:email@example.com" className="group flex flex-col items-center gap-2 text-gray-400 hover:text-pink-dark transition-colors">
                <div className="bg-gray-50 p-3 border-2 border-gray-200 group-hover:border-pink-300 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-xs font-bold">Email</span>
              </a>
              <a href="#" className="group flex flex-col items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors">
                <div className="bg-gray-50 p-3 border-2 border-gray-200 group-hover:border-blue-300 transition-colors">
                  <Linkedin size={20} />
                </div>
                <span className="text-xs font-bold">LinkedIn</span>
              </a>
            </div>

            <div className="text-xs text-gray-300 font-pixel border-t border-gray-100 pt-8 max-w-md mx-auto">
              <p>© 2025 [Jennifer Truong]</p>
              <p className="mt-2 flex items-center justify-center gap-2">
                Made with <span className="text-green-400">🍵</span> & <span className="text-brown-500">☕</span>
              </p>
            </div>
          </SectionReveal>
        </div>
        
        {/* Scroll to Top */}
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="fixed bottom-8 right-8 bg-white border-2 border-black p-3 shadow-pixel hover:-translate-y-1 transition-transform z-40 opacity-50 hover:opacity-100"
          title="Return to Start"
        >
          <ArrowUp size={20} />
        </button>
      </footer>
    </div>
  );
};

export default App;