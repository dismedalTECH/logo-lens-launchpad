import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Cpu, Users, Settings } from "lucide-react";
import hospitalDevicesImage from "@/assets/hospital-medical-devices-professional.jpg";
const services = [{
  icon: Heart,
  title: "Cardiología",
  description: "Soluciones especializadas en equipamiento cardiovascular",
  features: ["Hemostasia", "Holter", "Ecocardiógrafos"]
}, {
  icon: Shield,
  title: "Electrofisiología",
  description: "Servicios técnicos especializados y mantenimiento preventivo de equipos médicos",
  features: ["Mantenimiento preventivo", "Reparaciones", "Soporte 24/7"]
}, {
  icon: Cpu,
  title: "Critical Care",
  description: "Sistemas de fluidos integrados para la necesidad hospitalaria",
  features: ["Cuidados intensivos", "Integración digital", "Gestión hospitalaria"]
}, {
  icon: Users,
  title: "Urología",
  description: "Equipos especializados en urología para diagnóstico y tratamiento preciso de afecciones del tracto urinario.",
  features: ["Circuncisión", "Aparatología"]
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
          
          
        </div>

        {/* Dispositivos Médicos Section */}
        <div className="mb-16 bg-white dark:bg-card rounded-2xl shadow-elegant overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="p-8 lg:p-12 rounded-none">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Nuestros Servicios</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">La verdadera innovación no está en lo que hacemos, sino en cómo hacemos sentir a quienes servimos. En cada detalle, en cada experiencia, está la diferencia entre un servicio y una revolución. En Dismedal, distribuimos dispositivos médicos de alta calidad que mejoran la atención sanitaria y respaldan el trabajo de los profesionales de la salud. Ofrecemos soluciones confiables, innovadoras y seguras, pensadas para las verdaderas necesidades del sector médico.</p>
              
            </div>
            
            <div className="relative h-64 lg:h-full min-h-[400px]">
              <img src={hospitalDevicesImage} alt="Dispositivos médicos profesionales en entorno hospitalario" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
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
                  <Button 
                    variant="brand-outline" 
                    className="w-full group-hover:bg-brand group-hover:text-white"
                    onClick={() => {
                      if (service.title === "Urología") {
                        window.location.href = "/urologia";
                      }
                    }}
                  >
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