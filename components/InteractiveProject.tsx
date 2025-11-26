import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, BarChart3, Gamepad2, Maximize2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

// --- Types ---
type ProjectType = 'game' | 'data';

interface InteractiveProjectProps {
  type: ProjectType;
  title: string;
  demoUrl?: string;
}

// --- Data for Dashboard ---
const DATA_A = [
  { name: 'Mon', val: 4000 }, { name: 'Tue', val: 3000 },
  { name: 'Wed', val: 2000 }, { name: 'Thu', val: 2780 },
  { name: 'Fri', val: 1890 }, { name: 'Sat', val: 2390 },
  { name: 'Sun', val: 3490 },
];

const DATA_B = [
  { name: 'Mon', val: 2400 }, { name: 'Tue', val: 1398 },
  { name: 'Wed', val: 9800 }, { name: 'Thu', val: 3908 },
  { name: 'Fri', val: 4800 }, { name: 'Sat', val: 3800 },
  { name: 'Sun', val: 4300 },
];

// --- Sub-Component: Data Dashboard ---
const DataDashboard = () => {
  const [activeData, setActiveData] = useState(DATA_A);
  const [dataName, setDataName] = useState('Weekly Revenue');

  return (
    <div className="flex flex-col h-full bg-white font-body">
      <div className="bg-[#f0f9ff] border-b-2 border-blue-100 p-2 flex justify-between items-center">
         <div className="text-xs font-bold text-blue-800">SHINY_APP_V1.R</div>
         <div className="flex gap-2">
            <button 
              onClick={() => { setActiveData(DATA_A); setDataName('Weekly Revenue'); }}
              className={`text-[0.6rem] px-2 py-1 border-2 border-transparent ${activeData === DATA_A ? 'bg-blue-400 text-white' : 'bg-white border-blue-100 text-blue-400'}`}
            >
              Dataset A
            </button>
            <button 
              onClick={() => { setActiveData(DATA_B); setDataName('Active Users'); }}
              className={`text-[0.6rem] px-2 py-1 border-2 border-transparent ${activeData === DATA_B ? 'bg-blue-400 text-white' : 'bg-white border-blue-100 text-blue-400'}`}
            >
              Dataset B
            </button>
         </div>
      </div>
      <div className="p-4 flex-grow flex flex-col justify-center bg-white">
         <h4 className="text-xs text-center font-bold mb-2 text-gray-500 uppercase">{dataName}</h4>
         <div className="h-40 w-full">
           <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="name" tick={{fontSize: 10}} stroke="#ccc" />
                <YAxis tick={{fontSize: 10}} stroke="#ccc" />
                <Tooltip contentStyle={{fontSize: '12px', borderColor: '#eee'}} />
                <Area type="monotone" dataKey="val" stroke="#a7e0ff" fill="#d8f3ff" animationDuration={500} />
              </AreaChart>
           </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
};

// --- Sub-Component: Mini Game (Fallback) ---
const MiniGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  // Game State Refs (to avoid re-renders loop)
  const playerY = useRef(150);
  const velocity = useRef(0);
  const obstacles = useRef<{x: number, w: number}[]>([]);
  const frameId = useRef(0);
  const lastTime = useRef(0);

  const JUMP_FORCE = -8;
  const GRAVITY = 0.4;
  const SPEED = 3;

  const jump = () => {
    if (!isPlaying) {
      startGame();
      return;
    }
    if (playerY.current >= 150) { // Ground check
      velocity.current = JUMP_FORCE;
    }
  };

  const startGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    playerY.current = 150;
    velocity.current = 0;
    obstacles.current = [{x: 300, w: 20}];
    lastTime.current = performance.now();
    gameLoop(performance.now());
  };

  const gameLoop = (time: number) => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Update
    velocity.current += GRAVITY;
    playerY.current += velocity.current;
    
    // Ground collision
    if (playerY.current > 150) {
      playerY.current = 150;
      velocity.current = 0;
    }

    // Obstacles
    obstacles.current.forEach(obs => {
      obs.x -= SPEED;
    });

    // Spawn new obstacle
    if (obstacles.current.length > 0 && obstacles.current[obstacles.current.length - 1].x < 150) {
      if (Math.random() < 0.05) {
         obstacles.current.push({x: 300, w: Math.random() > 0.5 ? 20 : 30});
      }
    }
    // Remove offscreen
    if (obstacles.current.length > 0 && obstacles.current[0].x < -50) {
      obstacles.current.shift();
      setScore(s => s + 10);
    }

    // Collision Check
    const playerRect = {x: 30, y: playerY.current - 20, w: 20, h: 20};
    let hit = false;
    obstacles.current.forEach(obs => {
       if (
         playerRect.x < obs.x + obs.w &&
         playerRect.x + playerRect.w > obs.x &&
         playerRect.y < 150 && // Obstacle Y is implicitly ground
         playerRect.y + playerRect.h > 130 // Obstacle height is approx 20
       ) {
         hit = true;
       }
    });

    if (hit) {
      setGameOver(true);
      setIsPlaying(false);
      return; // Stop loop
    }

    // Draw
    ctx.clearRect(0, 0, 300, 200);
    
    // Background
    ctx.fillStyle = '#fffafb';
    ctx.fillRect(0,0,300,200);
    
    // Ground
    ctx.fillStyle = '#ffc1e3';
    ctx.fillRect(0, 170, 300, 30);
    ctx.fillStyle = '#ff4da6'; // Top border of ground
    ctx.fillRect(0, 170, 300, 2);

    // Player (Pink Square)
    ctx.fillStyle = '#ff4da6';
    ctx.fillRect(playerRect.x, playerRect.y, playerRect.w, playerRect.h);
    
    // Eyes
    ctx.fillStyle = 'white';
    ctx.fillRect(playerRect.x + 12, playerRect.y + 4, 4, 4);

    // Obstacles (Data glitches)
    ctx.fillStyle = '#a7e0ff';
    obstacles.current.forEach(obs => {
      ctx.fillRect(obs.x, 150, obs.w, 20); // Obstacles sit on ground
    });

    frameId.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
     // Initial draw
     if (canvasRef.current && !isPlaying) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
           ctx.fillStyle = '#fffafb';
           ctx.fillRect(0,0,300,200);
           
           // Ground preview
           ctx.fillStyle = '#ffc1e3';
           ctx.fillRect(0, 170, 300, 30);

           ctx.fillStyle = '#ff4da6';
           ctx.font = '10px "Press Start 2P"';
           ctx.fillText("TAP TO START", 90, 100);
        }
     }
     return () => cancelAnimationFrame(frameId.current);
  }, [isPlaying]);

  return (
    <div className="relative w-full h-full bg-white cursor-pointer overflow-hidden" onClick={jump}>
      <canvas ref={canvasRef} width={300} height={200} className="w-full h-full object-contain" />
      
      <div className="absolute top-2 left-2 font-pixel text-xs text-pink-dark">SCORE: {score}</div>
      
      {gameOver && (
        <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center text-pink-dark">
          <p className="font-pixel text-red-400 mb-2">GAME OVER</p>
          <button 
            onClick={(e) => { e.stopPropagation(); startGame(); }}
            className="bg-pink-dark text-white font-pixel text-[0.6rem] px-3 py-2 border-2 border-pink-dark hover:bg-pink-600"
          >
            TRY AGAIN
          </button>
        </div>
      )}
      
      {!isPlaying && !gameOver && (
         <div className="absolute bottom-4 right-4 animate-bounce">
            <span className="bg-pink-dark text-white px-2 py-1 text-[0.6rem] font-pixel border border-white">CLICK TO JUMP</span>
         </div>
      )}
    </div>
  );
};


// --- Main Wrapper ---
const InteractiveProject: React.FC<InteractiveProjectProps> = ({ type, title, demoUrl }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`w-full ${isActive && type === 'game' ? 'aspect-square' : 'h-64'} transition-all duration-300 border-4 border-pink-100 bg-white relative shadow-sm group overflow-hidden`}>
      
      {/* Inactive State: Cartridge View */}
      {!isActive && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#fffafb] text-gray-700 p-6 text-center">
           <div className="mb-4 text-pink-300 opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">
             {type === 'game' ? <Gamepad2 size={48} /> : <BarChart3 size={48} />}
           </div>
           <h3 className="font-pixel text-sm text-pink-dark mb-2">{title}</h3>
           <p className="font-body text-xs text-gray-400 mb-6">Interactive Embed</p>
           
           <button 
             onClick={() => setIsActive(true)}
             className="flex items-center gap-2 bg-white text-pink-dark border-2 border-pink-dark hover:bg-pink-dark hover:text-white font-pixel text-xs px-4 py-2 transition-all shadow-[2px_2px_0_#ff4da6] active:translate-y-1 active:shadow-none"
           >
             <Play size={12} fill="currentColor" /> {type === 'game' ? 'START DEMO' : 'LOAD DATA'}
           </button>
        </div>
      )}

      {/* Active State: The "Embed" */}
      {isActive && (
        <div className="w-full h-full flex flex-col">
          <div className="h-full relative">
            {type === 'game' ? (
              demoUrl ? (
                <iframe 
                  src={demoUrl} 
                  title={title} 
                  className="w-full h-full border-0" 
                  allowFullScreen
                />
              ) : (
                <MiniGame />
              )
            ) : (
              <DataDashboard />
            )}
            
            {/* Close Button */}
            <button 
              onClick={() => setIsActive(false)}
              className="absolute top-2 right-2 bg-pink-100 text-pink-dark p-1 border border-pink-200 hover:bg-pink-200 transition-colors z-20"
              title="Close Demo"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveProject;