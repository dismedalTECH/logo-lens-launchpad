import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Urologia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-brand text-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <Stethoscope className="w-12 h-12 mr-4" />
                <h1 className="text-3xl md:text-4xl font-bold">Urología</h1>
              </div>
              <p className="text-xl text-white/90 mb-6">
                Equipos especializados en urología para diagnóstico y tratamiento preciso de afecciones del tracto urinario
              </p>
              <Link to="/">
                <Button variant="secondary" className="inline-flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              
              {/* Introduction */}
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Soluciones Especializadas en Urología
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  En DISMEDAL ofrecemos equipamiento médico de alta calidad para procedimientos urológicos, 
                  incluyendo dispositivos para circuncisión y aparatología especializada que garantizan 
                  precisión y seguridad en cada intervención.
                </p>
              </div>

              {/* Services Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-brand" />
                      Circuncisión
                    </CardTitle>
                    <CardDescription>
                      Instrumentos especializados para procedimientos de circuncisión seguros y precisos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                        Grapadoras desechables especializadas
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                        Instrumentos estériles de un solo uso
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                        Múltiples tamaños disponibles
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Stethoscope className="w-5 h-5 mr-2 text-brand" />
                      Aparatología
                    </CardTitle>
                    <CardDescription>
                      Equipamiento médico avanzado para diagnóstico y tratamiento urológico
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                        Equipos de diagnóstico precisos
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                        Tecnología médica avanzada
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                        Soporte técnico especializado
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Technical Documentation */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                  Documentación Técnica
                </h3>
                <p className="text-muted-foreground text-center mb-8">
                  Accede a las fichas técnicas completas de nuestros productos especializados en urología
                </p>

                {/* Unified Technical Documentation */}
                <div className="max-w-4xl mx-auto">
                  <Card className="shadow-elegant hover:shadow-brand transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-gradient-brand rounded-full w-12 h-12 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">Grapadora Desechable CYS</CardTitle>
                      <CardDescription>Ficha Técnica Completa - Especificaciones y Datos Técnicos</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* First Page - Product Specifications */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Especificaciones del Producto</h4>
                        <img 
                          src="/lovable-uploads/eb0500e2-84cc-46ea-92d4-ac0792c6f5cb.png" 
                          alt="Ficha técnica grapadora desechable CYS - Especificaciones, indicaciones y beneficios" 
                          className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-4"
                        />
                      </div>

                      {/* Second Page - Technical Data */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Datos Técnicos y Referencias</h4>
                        <img 
                          src="/lovable-uploads/6ff38d01-7968-4beb-ab75-f4a6b5bab921.png" 
                          alt="Datos técnicos grapadora CYS - Fabricante, almacenamiento, referencias y códigos" 
                          className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-4"
                        />
                      </div>

                      {/* Content Summary */}
                      <div className="bg-muted/50 rounded-lg p-4 mb-6">
                        <p className="text-sm font-medium text-foreground mb-2">Contenido de la documentación:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div>
                            <p className="font-medium text-foreground mb-1">Página 1:</p>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Descripción del producto</li>
                              <li>Indicaciones médicas</li>
                              <li>Beneficios del procedimiento</li>
                              <li>Componentes y materiales</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-foreground mb-1">Página 2:</p>
                            <ul className="list-disc list-inside space-y-1">
                              <li>Datos del fabricante</li>
                              <li>Información de almacenamiento</li>
                              <li>Tabla de referencias y códigos</li>
                              <li>Datos de contacto distribuidor</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Download Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          variant="hero" 
                          className="flex-1"
                          onClick={() => window.open('/lovable-uploads/eb0500e2-84cc-46ea-92d4-ac0792c6f5cb.png', '_blank')}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Descargar Página 1
                        </Button>
                        <Button 
                          variant="brand-outline" 
                          className="flex-1"
                          onClick={() => window.open('/lovable-uploads/6ff38d01-7968-4beb-ab75-f4a6b5bab921.png', '_blank')}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Descargar Página 2
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Section */}
              <div className="text-center bg-white dark:bg-card rounded-2xl p-8 shadow-elegant">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  ¿Necesitas más información?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nuestro equipo especializado está disponible para resolver tus dudas sobre 
                  nuestros productos urológicos y ofrecer asesoramiento técnico personalizado.
                </p>
                <div className="flex justify-center">
                  <Link to="/contacto">
                    <Button variant="hero" size="lg">
                      Contactar Especialista
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Urologia;