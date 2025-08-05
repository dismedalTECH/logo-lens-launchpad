import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Cpu, Users, Settings, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import hospitalDevicesImage from "@/assets/hospital-medical-devices-professional.jpg";
import modernMedicalFacility from "@/assets/modern-medical-facility.jpg";
import medicalProfessionals from "@/assets/medical-professionals-technology.jpg";

const services = [
  {
    icon: Heart,
    title: "Cardiología",
    description: "Soluciones especializadas en equipamiento cardiovascular",
    features: ["Hemostasia", "Holter", "Ecocardiógrafos"],
    image: hospitalDevicesImage
  },
  {
    icon: Shield,
    title: "Electrofisiología", 
    description: "Servicios técnicos especializados y mantenimiento preventivo de equipos médicos",
    features: ["Mantenimiento preventivo", "Reparaciones", "Soporte 24/7"],
    image: modernMedicalFacility
  },
  {
    icon: Cpu,
    title: "Critical Care",
    description: "Sistemas de fluidos integrados para la necesidad hospitalaria",
    features: ["Cuidados intensivos", "Integración digital", "Gestión hospitalaria"],
    image: medicalProfessionals
  },
  {
    icon: Users,
    title: "Urología",
    description: "Equipos especializados en urología para diagnóstico y tratamiento preciso de afecciones del tracto urinario.",
    features: ["Circuncisión", "Aparatología"],
    image: hospitalDevicesImage
  },
  {
    icon: Settings,
    title: "Consultoría",
    description: "Asesoramiento especializado en la implementación de soluciones médicas integrales",
    features: ["Análisis de necesidades", "Soluciones personalizadas", "Optimización"],
    image: modernMedicalFacility
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-brand opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-brand opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <AnimatedSection animation="fade-in" delay={100}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
              Nuestras Especialidades
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-brand bg-clip-text text-transparent">
              Servicios Médicos Especializados
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              En <strong className="text-brand">Dismedal</strong>, ofrecemos soluciones médicas integrales con tecnología de vanguardia
            </p>
          </div>
        </AnimatedSection>

        {/* Hero service section */}
        <AnimatedSection animation="slide-up" delay={200}>
          <div className="mb-20 bg-white dark:bg-card rounded-3xl shadow-elegant overflow-hidden hover:shadow-brand-lg transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
              <div className="p-8 lg:p-16 order-2 lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Dispositivos Médicos de Vanguardia
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  La verdadera innovación no está en lo que hacemos, sino en cómo hacemos sentir a quienes servimos. 
                  En cada detalle, en cada experiencia, está la diferencia entre un servicio y una revolución. 
                  En <strong className="text-brand">Dismedal</strong>, distribuimos dispositivos médicos de alta calidad 
                  que mejoran la atención sanitaria y respaldan el trabajo de los profesionales de la salud.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="professional" size="lg" className="group">
                    Explorar Catálogo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="elegant" size="lg">
                    Solicitar Demo
                  </Button>
                </div>
              </div>
              
              <div className="relative h-80 lg:h-full min-h-[500px] order-1 lg:order-2 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent z-10"></div>
                <img 
                  src={hospitalDevicesImage} 
                  alt="Dispositivos médicos profesionales en entorno hospitalario" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="text-2xl font-bold text-brand">500+</div>
                    <div className="text-sm text-muted-foreground">Dispositivos Instalados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedSection key={index} animation="scale-in" delay={300 + (index * 100)}>
                <Card className="group hover:shadow-brand-lg transition-all duration-500 hover:-translate-y-3 border-0 shadow-elegant bg-white/80 backdrop-blur-sm overflow-hidden h-full">
                  {/* Service image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="p-3 bg-gradient-brand rounded-full group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl mb-2 text-foreground group-hover:text-brand transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-brand rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="brand-outline" className="w-full group-hover:bg-brand group-hover:text-white">
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection animation="fade-in" delay={800}>
          <div className="text-center">
            <Button variant="professional" size="xl" className="group">
              Ver Todos los Servicios
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;