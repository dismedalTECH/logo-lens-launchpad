import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";
const AnimatedPhoneIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`mx-auto mb-4 p-4 bg-gradient-brand rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300 ${
        isVisible ? 'animate-ring' : ''
      }`}
    >
      <Phone className="w-8 h-8 text-white" />
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
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
  const [isLoading, setIsLoading] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("https://hooks.zapier.com/hooks/catch/24291950/utrcp5p/");
  const [showWebhookConfig, setShowWebhookConfig] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      servicio: value
    }));
  };

  // Check if all required fields are filled
  const isFormValid = formData.nombre.trim() !== "" && 
                      formData.email.trim() !== "" && 
                      formData.asunto.trim() !== "" && 
                      formData.mensaje.trim() !== "" && 
                      acceptTerms;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      toast({
        title: t.contact.form.error,
        description: t.contact.form.errorRequired,
        variant: "destructive",
      });
      return;
    }

    if (!acceptTerms) {
      toast({
        title: t.contact.form.error,
        description: t.contact.form.errorTerms,
        variant: "destructive",
      });
      return;
    }

    if (!webhookUrl.trim()) {
      toast({
        title: "Error",
        description: "Por favor configura tu URL de Zapier webhook",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log("Enviando formulario con datos:", {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        empresa: formData.empresa,
        asunto: formData.asunto,
        servicio: formData.servicio,
        mensaje: formData.mensaje
      });

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Necesario para Zapier webhooks
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          empresa: formData.empresa,
          asunto: formData.asunto,
          servicio: formData.servicio,
          mensaje: formData.mensaje,
          timestamp: new Date().toISOString(),
          page: "contact-form",
          url: window.location.href
        }),
      });

      console.log("Request enviada a Zapier");

      // Con no-cors, no podemos verificar el status, así que asumimos éxito
      toast({
        title: t.contact.form.success,
        description: t.contact.form.successDescription,
      });

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
      console.error("Error enviando formulario:", error);
      toast({
        title: t.contact.form.error,
        description: t.contact.form.errorDescription,
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
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.contact.subtitle}</p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-elegant border-0 hover:shadow-brand transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <AnimatedPhoneIcon />
                <CardTitle className="text-lg">{t.contact.phone}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand font-semibold mb-2">{t.contact.phoneNumber}</p>
                <p className="text-sm text-muted-foreground">{t.contact.scheduleHours}</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 hover:shadow-brand transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-brand rounded-full w-16 h-16 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{t.contact.email}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand font-semibold mb-2">{t.contact.emailAddress}</p>
                <p className="text-sm text-muted-foreground">{t.contact.response}</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 hover:shadow-brand transition-all duration-300">
              <CardHeader className="text-center pb-4">
                 <div className="mx-auto mb-4 p-4 bg-gradient-brand rounded-full w-16 h-16 flex items-center justify-center animate-spin">
                   <MapPin className="w-8 h-8 text-white animate-[spin_2s_linear_infinite]" />
                 </div>
                <CardTitle className="text-lg">{t.contact.office}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand font-semibold mb-2"> Barcelona, España</p>
                <p className="text-sm text-muted-foreground">{t.contact.officeAddress}</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 hover:shadow-brand transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-brand rounded-full w-16 h-16 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{t.contact.hours}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand font-semibold mb-2">{t.contact.schedule}</p>
                <p className="text-sm text-muted-foreground">{t.contact.emergency}</p>
              </CardContent>
            </Card>
          </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <Card className="shadow-elegant border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">{t.contact.form.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Webhook Configuration Section */}
              {showWebhookConfig && (
                <div className="bg-muted/50 rounded-lg p-6 border border-border">
                  <h4 className="font-semibold mb-3 text-foreground">🔗 Configuración de Zapier Webhook</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Introduce tu URL de webhook de Zapier personalizada. Los datos se enviarán con los siguientes campos:<br/>
                    <code className="bg-muted px-1 rounded">nombre, email, telefono, empresa, asunto, servicio, mensaje, timestamp, page, url</code>
                  </p>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">URL del Webhook de Zapier:</label>
                    <Input
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      placeholder="https://hooks.zapier.com/hooks/catch/YOUR_ID/YOUR_KEY/"
                      className="font-mono text-sm border-border focus:border-brand"
                    />
                    <p className="text-xs text-muted-foreground">
                      💡 Encuentra esta URL en tu Zap → Trigger → Settings → "Custom Webhook URL"
                    </p>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.contact.form.nameRequired}
                  </label>
                  <Input 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.namePlaceholder} 
                    className="border-border focus:border-brand" 
                    required 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.contact.form.emailRequired}
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.emailPlaceholder} 
                    className="border-border focus:border-brand" 
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.contact.form.phone}
                  </label>
                  <Input 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.phonePlaceholder} 
                    className="border-border focus:border-brand" 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.contact.form.company}
                  </label>
                  <Input 
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.companyPlaceholder} 
                    className="border-border focus:border-brand" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.contact.form.subjectRequired}
                  </label>
                  <Input 
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.subjectPlaceholder} 
                    className="border-border focus:border-brand" 
                    required 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t.contact.form.service}
                  </label>
                  <Select onValueChange={handleSelectChange} value={formData.servicio}>
                    <SelectTrigger className="border-border focus:border-brand">
                      <SelectValue placeholder={t.contact.form.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultoria">{t.services.consulting.title}</SelectItem>
                      <SelectItem value="critical-care">{t.services.criticalCare.title}</SelectItem>
                      <SelectItem value="urologia">{t.services.urology.title}</SelectItem>
                      <SelectItem value="electrofisiologia">{t.services.electrophysiology.title}</SelectItem>
                      <SelectItem value="cardiologia">{t.services.cardiology.title}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t.contact.form.messageRequired}
                </label>
                <Textarea 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder={t.contact.form.messagePlaceholder} 
                  className="min-h-32 border-border focus:border-brand" 
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
                  {t.contact.form.acceptTerms}{" "}
                  <a 
                    href="/terminos-condiciones" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-light underline"
                  >
                    (Ver términos y condiciones)
                  </a>
                </label>
              </div>

              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isLoading || !isFormValid}
                >
                  {isLoading ? t.contact.form.sending : t.contact.form.submit}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                {t.contact.form.terms}
              </p>
            </CardContent>
          </Card>
        </form>
      </div>
    </section>;
};
export default Contact;