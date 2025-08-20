import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";
import { useTranslation } from "@/hooks/useTranslation";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section id="partners" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/90 via-brand-dark/80 to-brand/70"></div>
      </div>

      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-4 h-4 bg-brand-light rounded-full animate-pulse-brand"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-brand rounded-full animate-float" style={{
          animationDelay: '1s'
        }}></div>
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-brand-light rounded-full animate-pulse-brand" style={{
          animationDelay: '2s'
        }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-brand rounded-full animate-float" style={{
          animationDelay: '0.5s'
        }}></div>
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-brand-light rounded-full animate-pulse-brand" style={{
          animationDelay: '1.5s'
        }}></div>
        <div className="absolute top-1/3 right-16 w-4 h-4 bg-brand rounded-full animate-float" style={{
          animationDelay: '3s'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.partners.title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t.partners.subtitle}
          </p>
        </div>
        
        <div className="flex justify-center gap-16">
          <a 
            href="https://www.merit.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <img 
              src="/lovable-uploads/47fefcc8-fb44-4192-9f3a-5c060741fe6e.png" 
              alt="Merit Medical Logo" 
              className="h-14 w-auto"
            />
          </a>
          
          <a 
            href="https://www.czswmed.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <img 
              src="/lovable-uploads/8699d4ac-ab4a-46a6-8409-0211ed49f085.png" 
              alt="CZS Logo" 
              className="h-16 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;