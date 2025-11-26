import React, { useState } from 'react';
import { Experience } from '../types';
import { MapPin, Calendar, Building2 } from 'lucide-react';

interface AdventureBookProps {
  experiences: Experience[];
}

const AdventureBook: React.FC<AdventureBookProps> = ({ experiences }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const totalPages = experiences.length;
  const currentExp = experiences[currentIndex];

  // Logic:
  // Array is [Newest (Index 0) ... Oldest (Index N)]
  // We want Page 7 (Quest 7) to be Index 0.
  // We want Page 1 (Quest 1) to be Index N.
  
  // "Previous Page" (e.g., Page 7 -> Page 6)
  // This means moving to an OLDER quest (Index 0 -> Index 1)
  const goToPreviousPage = () => {
    if (currentIndex < totalPages - 1) {
      triggerFlip(() => setCurrentIndex(prev => prev + 1));
    }
  };

  // "Next Page" (e.g., Page 6 -> Page 7)
  // This means moving to a NEWER quest (Index 1 -> Index 0)
  const goToNextPage = () => {
    if (currentIndex > 0) {
      triggerFlip(() => setCurrentIndex(prev => prev - 1));
    }
  };

  const triggerFlip = (callback: () => void) => {
    setIsFlipping(true);
    setTimeout(() => {
      callback();
      setIsFlipping(false);
    }, 300);
  };

  const currentPageNumber = totalPages - currentIndex;

  return (
    <div className="w-full max-w-4xl mx-auto font-body">
      
      {/* Book Container */}
      <div className="relative bg-pink-700 p-2 md:p-4 rounded-lg shadow-pixel-lg">
        
        {/* Book Pages (Spread) */}
        <div className="bg-[#fffdf5] rounded-sm flex flex-col md:flex-row min-h-[400px] md:h-[450px] relative overflow-hidden border-4 border-[#e3dccb]">
          
          {/* Central Spine (Desktop visual only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-black/5 via-black/10 to-black/5 z-10 pointer-events-none"></div>

          {/* LEFT PAGE: Header & Meta Data */}
          <div className={`w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#e3dccb] transition-opacity duration-300 ${isFlipping ? 'opacity-0' : 'opacity-100'}`}>
            
            <div className="mb-6">
              <span className="font-pixel text-[0.6rem] text-pink-500 bg-pink-100 px-2 py-1 border border-pink-200 uppercase tracking-widest">
                Quest #{currentPageNumber}
              </span>
            </div>

            <h3 className="font-pixel text-xl md:text-2xl text-gray-800 leading-tight mb-2">
              {currentExp.role}
            </h3>
            
            <div className="flex items-center gap-2 text-pink-600 font-bold text-sm mb-6 uppercase tracking-wide">
              <Building2 size={16} />
              {currentExp.company}
            </div>

            <div className="space-y-4 bg-yellow-50/50 p-4 border border-yellow-200/50 rounded-lg">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Calendar size={16} className="text-gray-400" />
                <span>{currentExp.date}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin size={16} className="text-gray-400" />
                <span>{currentExp.location}</span>
              </div>
            </div>

            {/* Mobile-only spacer */}
            <div className="h-4 md:hidden"></div>
          </div>

          {/* RIGHT PAGE: Details & Description */}
          <div className={`w-full md:w-1/2 p-8 md:p-10 flex flex-col relative transition-opacity duration-300 ${isFlipping ? 'opacity-0' : 'opacity-100'}`}>
            
            {/* Paper lines decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-10" 
                 style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #999 28px)' }}>
            </div>

            <div className="relative z-10">
              <h4 className="font-pixel text-xs text-gray-400 mb-6 uppercase border-b-2 border-gray-100 pb-2">
                Mission Report
              </h4>
              
              <ul className="space-y-4">
                {currentExp.description.map((item, i) => (
                  <li key={i} className="text-sm md:text-[0.95rem] text-gray-700 leading-relaxed pl-5 relative">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-pink-400 rounded-none transform rotate-45"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pagination Number (Right Page Bottom) */}
            <div className="mt-auto pt-4 text-right font-pixel text-[0.6rem] text-gray-400">
              Page {currentPageNumber} / {totalPages}
            </div>
          </div>

        </div>

        {/* --- Navigation Controls --- */}

        {/* MOBILE CONTROLS (Below Pages) */}
        <div className="flex md:hidden justify-between items-center mt-4 px-2">
           <button 
              onClick={goToPreviousPage}
              disabled={currentIndex === totalPages - 1}
              className={`flex items-center gap-2 font-pixel text-xs text-white bg-gray-800 px-4 py-3 border-2 border-black shadow-pixel active:translate-y-1 active:shadow-none transition-all ${currentIndex === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
           >
              <span>◄</span> PREV
           </button>

           <button 
              onClick={goToNextPage}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 font-pixel text-xs text-white bg-gray-800 px-4 py-3 border-2 border-black shadow-pixel active:translate-y-1 active:shadow-none transition-all ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
           >
              NEXT <span>►</span>
           </button>
        </div>
        
        {/* DESKTOP CONTROLS (Floating Side Ears) */}
        
        {/* Left Arrow: Previous Page (Lower Number, Older Quest) */}
        <button 
          onClick={goToPreviousPage}
          disabled={currentIndex === totalPages - 1}
          className={`
            hidden md:block absolute top-1/2 -left-12 -translate-y-1/2 z-20
            bg-white border-4 border-gray-800 p-3 shadow-pixel 
            hover:bg-gray-50 transition-all active:translate-y-1 active:shadow-none
            ${currentIndex === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-x-1 cursor-pointer'}
          `}
          title="Previous Page (Older Quest)"
        >
          {/* Pixel Left Arrow */}
          <svg width="20" height="20" viewBox="0 0 10 10" fill="none" className="transform rotate-180">
             <path d="M2 5H8" stroke="black" strokeWidth="1" strokeLinecap="square" />
             <path d="M5 2L8 5L5 8" stroke="black" strokeWidth="1" strokeLinecap="square" />
          </svg>
        </button>

        {/* Right Arrow: Next Page (Higher Number, Newer Quest) */}
        <button 
          onClick={goToNextPage}
          disabled={currentIndex === 0}
          className={`
            hidden md:block absolute top-1/2 -right-12 -translate-y-1/2 z-20
            bg-white border-4 border-gray-800 p-3 shadow-pixel 
            hover:bg-gray-50 transition-all active:translate-y-1 active:shadow-none
            ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:translate-x-1 cursor-pointer'}
          `}
          title="Next Page (Newer Quest)"
        >
          {/* Pixel Right Arrow */}
          <svg width="20" height="20" viewBox="0 0 10 10" fill="none">
             <path d="M2 5H8" stroke="black" strokeWidth="1" strokeLinecap="square" />
             <path d="M5 2L8 5L5 8" stroke="black" strokeWidth="1" strokeLinecap="square" />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default AdventureBook;