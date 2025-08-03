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
                  <p className="text-sm text-muted-foreground">Integridad</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-brand/10 rounded-lg">
                  <Target className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Excelencia</h4>
                  <p className="text-sm text-muted-foreground">Innovación</p>
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

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center p-8 shadow-elegant border-0 hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-brand mb-2">300+</div>
                <div className="text-lg font-semibold text-foreground mb-1">Clientes</div>
                <div className="text-sm text-muted-foreground">En toda España</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-elegant border-0 hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-brand mb-2">7+</div>
                <div className="text-lg font-semibold text-foreground mb-1">Años</div>
                <div className="text-sm text-muted-foreground">De experiencia</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-elegant border-0 hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-brand mb-2">1000+</div>
                <div className="text-lg font-semibold text-foreground mb-1">Equipos</div>
                <div className="text-sm text-muted-foreground">Instalados</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-elegant border-0 hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-brand mb-2">24/7</div>
                <div className="text-lg font-semibold text-foreground mb-1">Soporte</div>
                <div className="text-sm text-muted-foreground">Técnico disponible</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision Quote */}
        <div className="mt-16">
          <div className="max-w-3xl mx-auto text-center bg-brand/5 rounded-2xl p-8 border border-brand/10">
            <img 
              src="/lovable-uploads/b614e568-f06f-4051-b0d9-f53a8f1e758a.png" 
              alt="DISMEDAL Logo" 
              className="h-12 w-auto mx-auto mb-6"
            />
            <blockquote className="text-lg md:text-xl font-medium text-brand leading-relaxed mb-6 italic">
              "Nuestra visión es convertirnos en el socio más confiable para las instituciones de salud, proporcionando dispositivos médicos innovadores que salvan vidas y mejoran la calidad de la atención"
            </blockquote>
            <cite className="text-base text-brand/80 font-medium">
              - Equipo directivo, Dismedal
            </cite>
          </div>
        </div>
      </div>
    </section>;
};
export default About;