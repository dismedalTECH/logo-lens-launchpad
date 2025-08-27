import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import medicalBgImage from "@/assets/dismedal-medical-bg.jpg";
import { useTranslation } from "@/hooks/useTranslation";
const Hero = () => {
  const { t } = useTranslation();

  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 leading-tight md:text-5xl">
            {t.hero.title}
          </h1>
          
          {/* Medical Background Image */}
          <div className="relative w-full h-32 mb-6 rounded-lg overflow-hidden bg-cover bg-center opacity-80" 
               style={{ backgroundImage: `url(${medicalBgImage})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-brand-light/10"></div>
          </div>
          
          <span className="block text-4xl font-bold bg-gradient-to-r from-brand-light to-white bg-clip-text text-transparent mb-6">
            {t.hero.subtitle}
          </span>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#servicios" className="inline-block">
              <Button variant="hero" size="xl" className="group">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-light mb-2">+300</div>
              <div className="text-gray-300">{t.about.clients}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-light mb-2">7+</div>
              <div className="text-gray-300">{t.about.experience}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-light mb-2">24/7</div>
              <div className="text-gray-300">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;