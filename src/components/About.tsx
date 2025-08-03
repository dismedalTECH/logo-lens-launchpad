import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Target, Globe, Zap } from "lucide-react";
const About = () => {
  return <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Sobre DISMEDAL
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Con más de 15 años de experiencia en el sector médico, DISMEDAL se ha consolidado 
              como líder en la distribución de dispositivos médicos y soluciones tecnológicas 
              para el sector sanitario en España.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestro compromiso es proporcionar tecnología médica de vanguardia, 
              servicios de mantenimiento especializados y formación técnica que permita 
              a los profesionales sanitarios ofrecer la mejor atención a sus pacientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="brand" size="lg">
                Conoce Nuestro Equipo
              </Button>
              <Button variant="brand-outline" size="lg">
                Nuestra Historia
              </Button>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-brand/10 rounded-lg">
                  <Award className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Calidad</h4>
                  <p className="text-sm text-muted-foreground">Excelencia garantizada</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-brand/10 rounded-lg">
                  <Target className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Precisión</h4>
                  <p className="text-sm text-muted-foreground">Resultados exactos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-brand/10 rounded-lg">
                  <Globe className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Alcance</h4>
                  <p className="text-sm text-muted-foreground">Cobertura nacional</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-brand/10 rounded-lg">
                  <Zap className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Innovación</h4>
                  <p className="text-sm text-muted-foreground">Tecnología avanzada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Director Quote Section */}
          <div className="bg-gradient-brand rounded-2xl p-6 text-white shadow-brand">
            <div className="text-center">
              <div className="mb-4">
                <img src="/lovable-uploads/b614e568-f06f-4051-b0d9-f53a8f1e758a.png" alt="DISMEDAL Logo" className="h-12 w-auto mx-auto brightness-0 invert mb-4" />
              </div>
              <blockquote className="text-base md:text-lg font-medium leading-relaxed">
                "En DISMEDAL creemos que cada dispositivo médico que distribuimos 
                puede marcar la diferencia entre la vida y la muerte. Nuestra 
                responsabilidad va más allá de la venta; somos facilitadores 
                de la esperanza y aliados incondicionales de quienes dedican 
                su vida a salvar otras vidas."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;