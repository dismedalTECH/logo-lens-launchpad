import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacto = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [showWebhookConfig, setShowWebhookConfig] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    asunto: "",
    servicio: "",
    mensaje: ""
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    if (!acceptTerms) {
      toast({
        title: "Error",
        description: "Debes aceptar los términos y condiciones para continuar",
        variant: "destructive",
      });
      return;
    }

    if (!webhookUrl) {
      toast({
        title: "Configuración requerida",
        description: "Configura tu webhook de Zapier para enviar emails a dismedal@dismedal.es",
        variant: "destructive",
      });
      setShowWebhookConfig(true);
      return;
    }

    setIsLoading(true);

    try {
      const emailData = {
        timestamp: new Date().toISOString(),
        triggered_from: window.location.origin,
        to_email: "dismedal@dismedal.es",
        subject: `Nuevo contacto: ${formData.asunto}`,
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        empresa: formData.empresa,
        asunto: formData.asunto,
        servicio: formData.servicio,
        mensaje: formData.mensaje
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(emailData),
      });

      toast({
        title: "Mensaje enviado",
        description: "Tu mensaje ha sido enviado a dismedal@dismedal.es. Te responderemos en breve.",
      });

      // Reset form
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        asunto: "",
        servicio: "",
        mensaje: ""
      });
      setAcceptTerms(false);

    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-brand text-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contacta con Nosotros</h1>
              <p className="text-xl text-white/90 mb-6">
                Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo para cualquier consulta o solicitud de información
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

        {/* Contact Content */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            
            {/* Contact Form */}
            <Card className="shadow-elegant border-0 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Zapier Webhook Configuration */}
                {showWebhookConfig && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-3">
                      <Settings className="w-5 h-5 text-yellow-600 mr-2" />
                      <h3 className="font-medium text-yellow-800 dark:text-yellow-200">Configuración de Zapier</h3>
                    </div>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
                      Para enviar emails automáticamente a dismedal@dismedal.es, necesitas crear un Zap en Zapier con un webhook trigger 
                      que envíe emails. Pega aquí tu webhook URL:
                    </p>
                    <Input
                      placeholder="https://hooks.zapier.com/hooks/catch/..."
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      className="mb-3"
                    />
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => setShowWebhookConfig(false)}
                        variant="outline" 
                        size="sm"
                      >
                        Cerrar
                      </Button>
                    </div>
                  </div>
                )}

                {/* Toggle Webhook Config Button */}
                <div className="flex justify-center mb-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowWebhookConfig(!showWebhookConfig)}
                    className="inline-flex items-center"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {showWebhookConfig ? "Ocultar" : "Configurar"} Webhook Zapier
                  </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nombre *
                      </label>
                      <Input 
                        placeholder="Tu nombre completo" 
                        className="border-border focus:border-brand"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange("nombre", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="tu@email.com" 
                        className="border-border focus:border-brand"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
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
                        placeholder="+34 600 000 000" 
                        className="border-border focus:border-brand"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange("telefono", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Empresa
                      </label>
                      <Input 
                        placeholder="Nombre de tu empresa" 
                        className="border-border focus:border-brand"
                        value={formData.empresa}
                        onChange={(e) => handleInputChange("empresa", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Asunto *
                      </label>
                      <Input 
                        placeholder="¿En qué podemos ayudarte?" 
                        className="border-border focus:border-brand"
                        value={formData.asunto}
                        onChange={(e) => handleInputChange("asunto", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Servicio de Interés
                      </label>
                      <Select onValueChange={(value) => handleInputChange("servicio", value)}>
                        <SelectTrigger className="border-border focus:border-brand">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiologia">Cardiología</SelectItem>
                          <SelectItem value="electrofisiologia">Electrofisiología</SelectItem>
                          <SelectItem value="critical-care">Critical Care</SelectItem>
                          <SelectItem value="urologia">Urología</SelectItem>
                          <SelectItem value="consultoria">Consultoría</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mensaje *
                    </label>
                    <Textarea 
                      placeholder="Describe tu consulta o necesidad..." 
                      className="min-h-32 border-border focus:border-brand"
                      value={formData.mensaje}
                      onChange={(e) => handleInputChange("mensaje", e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                      className="data-[state=checked]:bg-brand data-[state=checked]:text-white"
                    />
                    <label 
                      htmlFor="terms" 
                      className="text-sm font-medium text-foreground cursor-pointer"
                    >
                      Acepto los{" "}
                      <Link 
                        to="/terminos-condiciones" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand hover:text-brand-light underline"
                      >
                        términos y condiciones
                      </Link>
                    </label>
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      type="submit" 
                      disabled={isLoading || !formData.nombre || !formData.email || !formData.asunto || !formData.mensaje || !acceptTerms}
                    >
                      {isLoading ? "Enviando..." : "Enviar Mensaje"}
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    Al enviar este formulario, aceptas nuestros términos y condiciones. 
                    Nos pondremos en contacto contigo en un plazo máximo de 24 horas.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;