import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

const Urologia = () => {
  const { t } = useTranslation();
  
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
                <h1 className="text-3xl md:text-4xl font-bold">{t.urology.title}</h1>
              </div>
              <p className="text-xl text-white/90 mb-6">
                {t.urology.subtitle}
              </p>
              <Link to="/">
                <Button variant="secondary" className="inline-flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.urology.backToHome}
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
                  {t.urology.solutionsTitle}
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {t.urology.introduction}
                </p>
              </div>

              {/* Services Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-brand" />
                      {t.urology.circumcision.title}
                    </CardTitle>
                    <CardDescription>
                      {t.urology.circumcision.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {t.urology.circumcision.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Stethoscope className="w-5 h-5 mr-2 text-brand" />
                      {t.urology.equipment.title}
                    </CardTitle>
                    <CardDescription>
                      {t.urology.equipment.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {t.urology.equipment.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-brand rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Technical Documentation */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                  {t.urology.documentation.title}
                </h3>
                <p className="text-muted-foreground text-center mb-8">
                  {t.urology.documentation.subtitle}
                </p>

                {/* Unified Technical Documentation */}
                <div className="max-w-4xl mx-auto">
                  <Card className="shadow-elegant hover:shadow-brand transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-gradient-brand rounded-full w-12 h-12 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{t.urology.documentation.productTitle}</CardTitle>
                      <CardDescription>{t.urology.documentation.productDescription}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* First Page - Product Specifications */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4 text-foreground">{t.urology.documentation.specificationsTitle}</h4>
                        <img 
                          src="/lovable-uploads/eb0500e2-84cc-46ea-92d4-ac0792c6f5cb.png" 
                          alt="Ficha técnica grapadora desechable CYS - Especificaciones, indicaciones y beneficios" 
                          className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-4"
                        />
                      </div>

                      {/* Second Page - Technical Data */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-4 text-foreground">{t.urology.documentation.technicalDataTitle}</h4>
                        <img 
                          src="/lovable-uploads/6ff38d01-7968-4beb-ab75-f4a6b5bab921.png" 
                          alt="Datos técnicos grapadora CYS - Fabricante, almacenamiento, referencias y códigos" 
                          className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-4"
                        />
                      </div>

                      {/* Content Summary */}
                      <div className="bg-muted/50 rounded-lg p-4 mb-6">
                        <p className="text-sm font-medium text-foreground mb-2">{t.urology.documentation.contentSummary}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div>
                            <p className="font-medium text-foreground mb-1">{t.urology.documentation.page1.title}</p>
                            <ul className="list-disc list-inside space-y-1">
                              {t.urology.documentation.page1.items.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-foreground mb-1">{t.urology.documentation.page2.title}</p>
                            <ul className="list-disc list-inside space-y-1">
                              {t.urology.documentation.page2.items.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
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
                          {t.urology.documentation.downloadPage1}
                        </Button>
                        <Button 
                          variant="brand-outline" 
                          className="flex-1"
                          onClick={() => window.open('/lovable-uploads/6ff38d01-7968-4beb-ab75-f4a6b5bab921.png', '_blank')}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {t.urology.documentation.downloadPage2}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Section */}
              <div className="text-center bg-white dark:bg-card rounded-2xl p-8 shadow-elegant">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {t.urology.contact.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t.urology.contact.description}
                </p>
                <div className="flex justify-center">
                  <Link to="/contacto" onClick={() => window.scrollTo(0, 0)}>
                    <Button variant="hero" size="lg">
                      {t.urology.contact.button}
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