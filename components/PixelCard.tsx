import React from 'react';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  headerRight?: React.ReactNode;
  variant?: 'white' | 'yellow' | 'blue';
}

const PixelCard: React.FC<PixelCardProps> = ({ children, className = "", title, headerRight, variant = 'white' }) => {
  let bgColor = "bg-[#fffafb]";
  if (variant === 'yellow') bgColor = "bg-[#f6f0e9]"; // parchment look
  if (variant === 'blue') bgColor = "bg-blue-50";

  return (
    <div className={`
      ${bgColor} 
      border-[3px] border-black 
      rounded-md 
      shadow-pixel 
      p-6 
      transition-transform duration-200 
      hover:-translate-y-1 hover:shadow-pixel-lg
      ${className}
    `}>
      {(title || headerRight) && (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b-2 border-dashed border-gray-300 pb-2">
          {title && <h3 className="font-pixel text-sm md:text-base text-gray-800">{title}</h3>}
          {headerRight && <div className="mt-2 md:mt-0">{headerRight}</div>}
        </div>
      )}
      <div className="font-body text-sm md:text-base leading-relaxed text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default PixelCard;