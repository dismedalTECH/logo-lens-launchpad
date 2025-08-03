import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl font-bold mb-6 leading-tight md:text-4xl">
            DISMEDAL
            <span className="block bg-gradient-to-r from-brand-light to-white bg-clip-text text-transparent">La diferencia que marca la excelencia.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            En DISMEDAL ofrecemos tecnología médica de vanguardia y servicios especializados 
            para mejorar la calidad de atención en el sector sanitario
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Descubre Nuestros Servicios
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="brand-outline" size="xl" className="group bg-white/10 border-white/30 text-white hover:bg-white hover:text-brand">
              <Play className="w-5 h-5 mr-2" />
              Ver Presentación
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-light mb-2">+500</div>
              <div className="text-gray-300">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-light mb-2">15+</div>
              <div className="text-gray-300">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-light mb-2">24/7</div>
              <div className="text-gray-300">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;