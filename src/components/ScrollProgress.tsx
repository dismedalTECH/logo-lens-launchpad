import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setScrollProgress((currentProgress / scrollHeight) * 100);
      }
      
      // Hide indicator when near bottom of page
      setIsVisible(currentProgress < scrollHeight - 100);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Fixed scroll progress bar at top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/20 z-50">
        <div 
          className="h-full bg-white transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated mouse scroll indicator that moves with scroll */}
      <div 
        className="fixed left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ease-out"
        style={{ 
          top: `${20 + (scrollProgress * 0.6)}%`,
          transform: `translateX(-50%) rotate(${scrollProgress * 3.6}deg)`
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          {/* Mouse icon */}
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center relative animate-pulse">
            <div 
              className="w-1 h-3 bg-white/80 rounded-full mt-2 transition-all duration-200"
              style={{ transform: `translateY(${scrollProgress * 0.02}px)` }}
            />
          </div>
          {/* Arrow pointing down */}
          <ChevronDown 
            className="w-4 h-4 text-white/70 animate-bounce" 
            style={{ animationDelay: '0.5s' }}
          />
        </div>
      </div>

      {/* Vertical scroll indicator on the right */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-0.5 h-20 bg-white/30 relative">
            <div 
              className="w-full bg-white transition-all duration-100 ease-out"
              style={{ height: `${scrollProgress}%` }}
            />
            <div 
              className="absolute w-3 h-3 bg-white rounded-full transform -translate-x-1/2 transition-all duration-100 ease-out"
              style={{ top: `${scrollProgress}%`, left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;