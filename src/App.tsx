import { useEffect, useState } from 'react';
import { Timer, Rocket, } from 'lucide-react';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/image/image4.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Rocket className="w-16 h-16 text-indigo-400 animate-bounce" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Working On Something
              <span className="text-indigo-400"> Amazing</span>
            </h1>
            
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              We're crafting something spectacular that will revolutionize your experience. 
              Stay tuned for the big reveal.
            </p>
            
            

            {/* Timer Section */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-medium">
              <Timer className="w-5 h-5 mr-2 text-indigo-400" />
              Coming Soon
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;