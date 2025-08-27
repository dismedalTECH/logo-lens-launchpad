import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Cpu, Users, Settings, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hospitalDevicesImage from "@/assets/hospital-medical-devices-professional.jpg";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Heart,
      title: t.services.cardiology.title,
      description: t.services.cardiology.description,
      features: t.services.cardiology.features,
      detailedDescription: "We offer high-precision equipment for the diagnosis and treatment of cardiovascular diseases. Our hemostasis devices guarantee optimal bleeding control during invasive procedures, while our Holter systems provide continuous monitoring of heart rhythm."
    },
    {
      icon: Shield,
      title: t.services.electrophysiology.title,
      description: t.services.electrophysiology.description,
      features: t.services.electrophysiology.features,
      detailedDescription: "Our specialized technical team offers preventive and corrective maintenance services for all medical equipment. We guarantee the availability and optimal operation of your devices with technical support available 24 hours a day."
    },
    {
      icon: Cpu,
      title: t.services.criticalCare.title,
      description: t.services.criticalCare.description,
      features: t.services.criticalCare.features,
      detailedDescription: "We provide integrated fluid management systems and critical care equipment that adapt to the specific needs of each hospital unit. Our solutions include complete digital integration to optimize care processes."
    },
    {
      icon: Users,
      title: t.services.urology.title,
      description: t.services.urology.description,
      features: t.services.urology.features,
      detailedDescription: "Specialists in state-of-the-art urological devices. We offer specific equipment for circumcision procedures and a wide range of urological equipment that guarantees precision and safety in each intervention.",
      hasPage: true,
      link: "/urologia"
    },
    {
      icon: Settings,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      features: t.services.consulting.features,
      detailedDescription: "We offer specialized consulting services for the implementation of comprehensive medical solutions. We analyze the specific needs of each client to provide customized solutions that optimize processes and improve care quality."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center text-brand hover:text-brand-dark transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Specialized medical solutions that transform healthcare
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
                    Innovation in Medical Devices
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    At Dismedal, we distribute high-quality medical devices that improve healthcare and support the work of health professionals. We offer reliable, innovative and safe solutions, designed for the real needs of the medical sector.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    True innovation is not in what we do, but in how we make those we serve feel. In every detail, in every experience, lies the difference between a service and a revolution.
                  </p>
                </div>
                <div className="relative h-64 lg:h-full min-h-[400px]">
                  <img 
                    src={hospitalDevicesImage} 
                    alt="Professional medical devices in hospital environment" 
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
                        <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
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
                            View Service Details
                          </Link>
                        </Button>
                      ) : (
                        <Button 
                          variant="brand-outline" 
                          className="w-full group-hover:bg-brand group-hover:text-white"
                          asChild
                        >
                          <Link to="/contact">
                            Request Information
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
                    Need a customized solution?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Our team of specialists is ready to help you find the perfect medical solution for your specific needs.
                  </p>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">
                      Contact Specialists
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

export default Services;