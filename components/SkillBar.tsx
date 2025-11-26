import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  link?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, link }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level * 10);
    }, 200);
    return () => clearTimeout(timer);
  }, [level]);

  // The specific gradient from the user's CSS for the "10 block" look
  const fillGradient = {
    backgroundImage: `linear-gradient(
      to right,
      #ffd7e8 0%, #ffd7e8 10%, 
      #ffc2de 10%, #ffc2de 20%, 
      #ffadd3 20%, #ffadd3 30%, 
      #ffa0d4 30%, #ffa0d4 40%, 
      #ff93d3 40%, #ff93d3 50%, 
      #f6a7e4 50%, #f6a7e4 60%, 
      #e4b7ef 60%, #e4b7ef 70%, 
      #d1c7f6 70%, #d1c7f6 80%, 
      #bcd8fa 80%, #bcd8fa 90%, 
      #a7e0ff 90%, #a7e0ff 100%
    )`,
    backgroundSize: '100% 100%',
    width: `${width}%`
  };

  return (
    <div className="mb-6 group font-pixel">
      <div className="flex justify-between items-end mb-1">
        <div className="text-xs md:text-sm text-gray-600 group-hover:text-pink-dark transition-colors">
          {link ? <a href={link} className="no-underline">{name}</a> : name}
        </div>
        <div className="text-[0.6rem] text-blue-pastel">LVL {level}</div>
      </div>
      
      {/* Container - Removed border, just a light track */}
      <div className="h-5 bg-gray-100 relative overflow-hidden">
        
        {/* Fill */}
        <div 
          className="h-full transition-all duration-1000 ease-out"
          style={fillGradient}
        />

        {/* Grid Overlay - White lines to separate blocks instead of transparent/black */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent calc(10% - 2px), rgba(255,255,255,0.8) calc(10% - 2px), rgba(255,255,255,0.8) 10%)'
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;