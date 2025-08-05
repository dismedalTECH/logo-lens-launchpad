import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-bg.jpg";
import medicalInnovationBg from "@/assets/medical-innovation-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darker/95 via-brand-dark/90 to-brand/85 z-10"></div>
        <img 
          src={heroImage} 
          alt="Medical innovation background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-dots rounded-full animate-float opacity-30"></div>
        <div className="absolute top-1/3 right-20 w-20 h-20 bg-gradient-dots rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-dots rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">
                  Innovación Médica de Vanguardia
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="block">Bienvenidos a</span>
                  <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    DISMEDAL
                  </span>
                </h1>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" delay={400}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Transformamos la atención sanitaria con <strong>soluciones médicas innovadoras</strong>, 
                equipos de última generación y un servicio técnico excepcional.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button variant="hero" size="xl" className="group">
                  Descubre Nuestros Servicios
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="elegant" size="xl" className="group">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" delay={800}>
              <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    500+
                  </div>
                  <div className="text-white/80 text-sm">Clientes Satisfechos</div>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    15+
                  </div>
                  <div className="text-white/80 text-sm">Años de Experiencia</div>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    24/7
                  </div>
                  <div className="text-white/80 text-sm">Soporte Técnico</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Image */}
          <div className="relative">
            <AnimatedSection animation="fade-in-right" delay={400}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl"></div>
                <img 
                  src={medicalInnovationBg} 
                  alt="Medical innovation and technology" 
                  className="w-full h-auto rounded-3xl shadow-2xl hover:shadow-brand-lg transition-all duration-500 hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-brand rounded-full flex items-center justify-center animate-pulse-brand">
                  <Play className="w-10 h-10 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <AnimatedSection 
        animation="bounce-in" 
        delay={1200}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/80 animate-float">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1 mb-2">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
          </div>
          <span className="text-xs font-medium">Scroll para explorar</span>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Hero;