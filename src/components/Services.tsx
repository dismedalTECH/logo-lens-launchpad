import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, Shield, Cpu, Users, Settings } from "lucide-react";
const services = [{
  icon: Stethoscope,
  title: "Equipamiento Médico",
  description: "Suministro e instalación de equipos médicos de última generación para diagnóstico y tratamiento",
  features: ["Equipos de diagnóstico", "Tecnología avanzada", "Instalación completa"]
}, {
  icon: Heart,
  title: "Cardiología",
  description: "Soluciones especializadas en equipamiento cardiovascular y sistemas de monitoreo cardíaco",
  features: ["Electrocardiógrafos", "Holter", "Ecocardiógrafos"]
}, {
  icon: Shield,
  title: "Mantenimiento",
  description: "Servicios técnicos especializados y mantenimiento preventivo de equipos médicos",
  features: ["Mantenimiento preventivo", "Reparaciones", "Soporte 24/7"]
}, {
  icon: Cpu,
  title: "Tecnología Digital",
  description: "Sistemas digitales integrados para la gestión hospitalaria y expedientes electrónicos",
  features: ["Software médico", "Integración digital", "Gestión hospitalaria"]
}, {
  icon: Users,
  title: "Capacitación",
  description: "Programas de formación técnica para el personal médico en el uso de equipos especializados",
  features: ["Formación técnica", "Certificaciones", "Soporte continuo"]
}, {
  icon: Settings,
  title: "Consultoría",
  description: "Asesoramiento especializado en la implementación de soluciones médicas integrales",
  features: ["Análisis de necesidades", "Soluciones personalizadas", "Optimización"]
}];
const Services = () => {
  return <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Ofrecemos una amplia gama de servicios especializados en el sector médico, desde dispositivos médicos hasta capacitación técnica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={index} className="group hover:shadow-brand transition-all duration-300 hover:-translate-y-2 border-0 shadow-elegant" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-brand rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                        {feature}
                      </li>)}
                  </ul>
                  <Button variant="brand-outline" className="w-full group-hover:bg-brand group-hover:text-white">
                    Más Información
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Ver Todos los Servicios
          </Button>
        </div>
      </div>
    </section>;
};
export default Services;