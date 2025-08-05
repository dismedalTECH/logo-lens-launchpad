import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'slide-up' | 'scale-in' | 'bounce-in';
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fade-in',
  delay = 0 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={cn(
        "opacity-0 transition-all duration-700",
        isVisible && `animate-${animation}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;