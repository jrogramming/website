import React from 'react';
import { Education } from '../types';
import { Award, GraduationCap, Heart, Zap } from 'lucide-react';

interface StatusMenuProps {
  education: Education[];
  awards: { title: string; desc: string }[];
}

const StatusMenu: React.FC<StatusMenuProps> = ({ education, awards }) => {
  return (
    <div className="w-full max-w-4xl mx-auto font-pixel">
      {/* Main Window Frame - Pink! */}
      <div className="bg-[#fffafb] border-4 border-pink-300 shadow-pixel-lg relative">
        {/* Inner Padding */}
        <div className="border-4 border-pink-100 p-1">

          {/* Header Section - Now with Pink Background */}
          <div className="bg-pink-50 border-b-4 border-pink-100 p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
             <div>
                <h2 className="text-2xl md:text-3xl text-pink-dark mb-3 tracking-tighter uppercase drop-shadow-sm">Jennifer Truong</h2>
                <div className="flex flex-wrap gap-3 text-xs md:text-sm font-bold">
                   <span className="bg-white text-pink-500 px-3 py-1 border-2 border-pink-200 shadow-sm">LV 21</span>
                   <span className="bg-white text-blue-500 px-3 py-1 border-2 border-blue-200 shadow-sm">CLASS: DATA SCIENTIST</span>
                </div>
             </div>
             <div className="text-right hidden md:block">
                <div className="text-[0.6rem] text-pink-300 uppercase tracking-widest mb-1">Status</div>
                <div className="text-green-500 text-xs animate-pulse font-bold tracking-wide border-2 border-green-200 bg-green-50 px-2 py-1">
                   OPEN TO WORK
                </div>
             </div>
          </div>

          <div className="px-6 pb-8 grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* Left Column: Avatar & Stats */}
            <div className="md:col-span-4 flex flex-col gap-6">
               {/* Avatar Frame - Pink Border */}
               <div className="aspect-square bg-white border-4 border-pink-200 relative group shadow-sm">
                  <img
                    src="https://picsum.photos/400"
                    alt="Character Avatar"
                    className="w-full h-full object-cover pixelated opacity-100 group-hover:scale-105 transition-transform duration-500"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  {/* Decorative corner pixels */}
                  <div className="absolute top-0 left-0 w-2 h-2 bg-pink-300"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-pink-300"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-pink-300"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-pink-300"></div>
               </div>

               {/* Stats Box - Keep Yellow/Blue internals for variety, but in a pinker context */}
               <div className="bg-white border-2 border-pink-100 p-4 space-y-4 shadow-sm">
                  <div>
                    <div className="flex justify-between text-[0.6rem] mb-1 text-gray-500 font-bold">
                      <span className="flex items-center gap-1 text-pink-500">HP</span>
                      <span>3450 / 3450</span>
                    </div>
                    {/* Stat Bar */}
                    <div className="h-3 bg-white w-full border border-pink-200">
                       <div className="h-full bg-pink-400 w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[0.6rem] mb-1 text-gray-500 font-bold">
                      <span className="flex items-center gap-1 text-blue-400">MP</span>
                      <span>999 / 999</span>
                    </div>
                    <div className="h-3 bg-white w-full border border-blue-200">
                       <div className="h-full bg-blue-300 w-[85%]"></div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Right Column: Data Lists */}
            <div className="md:col-span-8 space-y-6">

               {/* Merits (Education) */}
               <div className="relative">
                  <h3 className="text-pink-400 text-xs mb-3 flex items-center gap-2 uppercase tracking-wide">
                     <GraduationCap size={16} /> Merits (Education)
                  </h3>
                  <div className="bg-blue-50/30 border-2 border-blue-200 p-4 space-y-4">
                    {education.map((edu, i) => (
                      <div key={i} className="group">
                         <div className="flex justify-between items-start mb-1">
                            <span className="text-sm text-gray-700 font-bold group-hover:text-pink-500 transition-colors">{edu.school}</span>
                            <span className="text-[0.6rem] text-blue-400 uppercase font-bold">{edu.location}</span>
                         </div>
                         <div className="space-y-1 mt-2">
                           {edu.degrees.map((d, idx) => (
                             <div key={idx} className="text-[0.7rem] text-gray-600 pl-3 border-l-4 border-pink-200">
                               {d}
                             </div>
                           ))}
                         </div>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Titles (Awards) */}
               <div className="relative">
                  <h3 className="text-pink-400 text-xs mb-3 flex items-center gap-2 uppercase tracking-wide">
                     <Award size={16} /> Titles (Honors)
                  </h3>
                  <div className="bg-yellow-50/30 border-2 border-yellow-200 p-4">
                    <div className="space-y-3">
                      {awards.map((award, i) => (
                        <div key={i} className="flex items-start gap-3 group cursor-help">
                           <div className="mt-1.5 w-1.5 h-1.5 bg-yellow-400 group-hover:bg-pink-400 transition-colors shrink-0"></div>
                           <div>
                              <div className="text-xs text-gray-700 font-bold group-hover:text-pink-dark transition-colors">{award.title}</div>
                              <div className="text-[0.65rem] text-gray-500 mt-0.5">{award.desc}</div>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusMenu;