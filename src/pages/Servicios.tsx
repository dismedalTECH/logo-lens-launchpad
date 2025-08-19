import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Cpu, Users, Settings, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hospitalDevicesImage from "@/assets/hospital-medical-devices-professional.jpg";

const services = [
  {
    icon: Heart,
    title: "Cardiología",
    description: "Soluciones especializadas en equipamiento cardiovascular",
    features: ["Hemostasia", "Holter", "Ecocardiógrafos"],
    detailedDescription: "Ofrecemos equipos de alta precisión para el diagnóstico y tratamiento de enfermedades cardiovasculares. Nuestros dispositivos de hemostasia garantizan un control óptimo del sangrado durante procedimientos invasivos, mientras que nuestros sistemas Holter proporcionan monitorización continua del ritmo cardíaco."
  },
  {
    icon: Shield,
    title: "Electrofisiología",
    description: "Servicios técnicos especializados y mantenimiento preventivo de equipos médicos",
    features: ["Mantenimiento preventivo", "Reparaciones", "Soporte 24/7"],
    detailedDescription: "Nuestro equipo técnico especializado ofrece servicios de mantenimiento preventivo y correctivo para todos los equipos médicos. Garantizamos la disponibilidad y funcionamiento óptimo de sus dispositivos con soporte técnico disponible las 24 horas del día."
  },
  {
    icon: Cpu,
    title: "Critical Care",
    description: "Sistemas de fluidos integrados para la necesidad hospitalaria",
    features: ["Cuidados intensivos", "Integración digital", "Gestión hospitalaria"],
    detailedDescription: "Proporcionamos sistemas integrados de gestión de fluidos y equipos de cuidados críticos que se adaptan a las necesidades específicas de cada unidad hospitalaria. Nuestras soluciones incluyen integración digital completa para optimizar los procesos de atención."
  },
  {
    icon: Users,
    title: "Urología",
    description: "Equipos especializados en urología para diagnóstico y tratamiento preciso de afecciones del tracto urinario",
    features: ["Circuncisión", "Aparatología"],
    detailedDescription: "Especialistas en dispositivos urológicos de última generación. Ofrecemos equipamiento específico para procedimientos de circuncisión y una amplia gama de aparatología urológica que garantiza precisión y seguridad en cada intervención.",
    hasPage: true,
    link: "/urologia"
  },
  {
    icon: Settings,
    title: "Consultoría",
    description: "Asesoramiento especializado en la implementación de soluciones médicas integrales",
    features: ["Análisis de necesidades", "Soluciones personalizadas", "Optimización"],
    detailedDescription: "Ofrecemos servicios de consultoría especializada para la implementación de soluciones médicas integrales. Analizamos las necesidades específicas de cada cliente para proporcionar soluciones personalizadas que optimicen los procesos y mejoren la calidad asistencial."
  }
];

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="inicio" className="pt-24 pb-12 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center text-brand hover:text-brand-dark transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Nuestros Servicios
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Soluciones médicas especializadas que transforman la atención sanitaria
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            {/* Intro Section */}
            <div className="mb-16 bg-white dark:bg-card rounded-2xl shadow-elegant overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                <div className="p-8 lg:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Innovación en Dispositivos Médicos
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    En Dismedal, distribuimos dispositivos médicos de alta calidad que mejoran la atención sanitaria y respaldan el trabajo de los profesionales de la salud. Ofrecemos soluciones confiables, innovadoras y seguras, pensadas para las verdaderas necesidades del sector médico.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    La verdadera innovación no está en lo que hacemos, sino en cómo hacemos sentir a quienes servimos. En cada detalle, en cada experiencia, está la diferencia entre un servicio y una revolución.
                  </p>
                </div>
                <div className="relative h-64 lg:h-full min-h-[400px]">
                  <img 
                    src={hospitalDevicesImage} 
                    alt="Dispositivos médicos profesionales en entorno hospitalario" 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-brand transition-all duration-300 hover:-translate-y-2 border-0 shadow-elegant"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gradient-brand rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-muted-foreground text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.detailedDescription}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-foreground">Características principales:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {service.hasPage ? (
                        <Button 
                          variant="brand-outline" 
                          className="w-full group-hover:bg-brand group-hover:text-white"
                          asChild
                        >
                          <Link to={service.link}>
                            Ver Detalles del Servicio
                          </Link>
                        </Button>
                      ) : (
                        <Button 
                          variant="brand-outline" 
                          className="w-full group-hover:bg-brand group-hover:text-white"
                          asChild
                        >
                          <Link to="/contacto">
                            Solicitar Información
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Card className="shadow-elegant border-0 bg-gradient-subtle">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    ¿Necesita una solución personalizada?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Nuestro equipo de especialistas está listo para ayudarle a encontrar la solución médica perfecta para sus necesidades específicas.
                  </p>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contacto">
                      Contactar con Especialistas
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;