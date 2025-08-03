import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
const Contact = () => {
  return <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo de expertos 
            para cualquier consulta o solicitud de información
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="shadow-elegant border-0 hover:shadow-brand transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-brand rounded-full w-16 h-16 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Teléfono</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand font-semibold mb-2">+34 690 639 648</p>
                <p className="text-sm text-muted-foreground">Lunes a Viernes 9:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 hover:shadow-brand transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-brand rounded-full w-16 h-16 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand font-semibold mb-2">dismedal@dismedal.es</p>
                <p className="text-sm text-muted-foreground">Respuesta en 24h</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 hover:shadow-brand transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-brand rounded-full w-16 h-16 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Oficina</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand font-semibold mb-2"> Barcelona, España</p>
                <p className="text-sm text-muted-foreground">Paseo de Gracia 21, 08007</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 hover:shadow-brand transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-brand rounded-full w-16 h-16 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Horarios</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand font-semibold mb-2">Lun - Vie: 9:00 - 18:00</p>
                <p className="text-sm text-muted-foreground">Emergencias 24/7</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre *
                    </label>
                    <Input placeholder="Tu nombre completo" className="border-border focus:border-brand" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input type="email" placeholder="tu@email.com" className="border-border focus:border-brand" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Teléfono
                    </label>
                    <Input placeholder="+34 600 000 000" className="border-border focus:border-brand" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input placeholder="Nombre de tu empresa" className="border-border focus:border-brand" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Asunto *
                  </label>
                  <Input placeholder="¿En qué podemos ayudarte?" className="border-border focus:border-brand" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje *
                  </label>
                  <Textarea placeholder="Describe tu consulta o necesidad..." className="min-h-32 border-border focus:border-brand" />
                </div>

                <div className="flex justify-center">
                  <Button variant="hero" size="default">
                    Enviar Mensaje
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  Al enviar este formulario, aceptas nuestros términos y condiciones. 
                  Nos pondremos en contacto contigo en un plazo máximo de 24 horas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;