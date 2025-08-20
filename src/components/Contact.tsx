import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    asunto: "",
    mensaje: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log("Enviando formulario con datos:", {
        name: formData.nombre,
        email: formData.email,
        phone: formData.telefono,
        company: formData.empresa,
        subject: formData.asunto,
        message: formData.mensaje
      });

      const response = await fetch("https://hooks.zapier.com/hooks/catch/24291950/utrcp5p/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Necesario para Zapier webhooks
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          phone: formData.telefono,
          company: formData.empresa,
          subject: formData.asunto,
          message: formData.mensaje,
          timestamp: new Date().toISOString(),
          page: "contact-form",
          url: window.location.href
        }),
      });

      console.log("Request enviada a Zapier");

      // Con no-cors, no podemos verificar el status, así que asumimos éxito
      toast({
        title: "Mensaje enviado",
        description: "Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.",
      });

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        asunto: "",
        mensaje: ""
      });

    } catch (error) {
      console.error("Error enviando formulario:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-sky-900 md:text-2xl">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo para cualquier consulta o solicitud de información</p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
        <form onSubmit={handleSubmit}>
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
                  <Input 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo" 
                    className="border-border focus:border-brand" 
                    required 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com" 
                    className="border-border focus:border-brand" 
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Teléfono
                  </label>
                  <Input 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="+34 600 000 000" 
                    className="border-border focus:border-brand" 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Empresa
                  </label>
                  <Input 
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    placeholder="Nombre de tu empresa" 
                    className="border-border focus:border-brand" 
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Asunto *
                </label>
                <Input 
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  placeholder="¿En qué podemos ayudarte?" 
                  className="border-border focus:border-brand" 
                  required 
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensaje *
                </label>
                <Textarea 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder="Describe tu consulta o necesidad..." 
                  className="min-h-32 border-border focus:border-brand" 
                  required 
                />
              </div>

              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Al enviar este formulario, aceptas nuestros términos y condiciones. 
                Nos pondremos en contacto contigo en un plazo máximo de 24 horas.
              </p>
            </CardContent>
          </Card>
        </form>
      </div>
    </section>;
};
export default Contact;