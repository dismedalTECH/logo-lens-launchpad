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
import { useTranslation } from "@/hooks/useTranslation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { t } = useTranslation();
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
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      toast({
        title: t.contact.form.error,
        description: t.contact.form.errorRequired,
        variant: "destructive"
      });
      return;
    }

    if (!acceptTerms) {
      toast({
        title: t.contact.form.error,
        description: t.contact.form.errorTerms,
        variant: "destructive"
      });
      return;
    }

    if (!webhookUrl) {
      toast({
        title: "Configuration Required",
        description: "Configure your Zapier webhook to send emails to dismedal@dismedal.es",
        variant: "destructive"
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
        subject: `New contact: ${formData.asunto}`,
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
          "Content-Type": "application/json"
        },
        mode: "no-cors",
        body: JSON.stringify(emailData)
      });

      toast({
        title: t.contact.form.success,
        description: "Your message has been sent to dismedal@dismedal.es. We will respond shortly."
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
        title: t.contact.form.error,
        description: t.contact.form.errorDescription,
        variant: "destructive"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h1>
              <p className="text-xl text-white/90 mb-6">
                {t.contact.subtitle}
              </p>
              <Link to="/">
                
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
                <CardTitle className="text-2xl text-center">{t.contact.form.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Zapier Webhook Configuration */}
                {showWebhookConfig && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-3">
                      <Settings className="w-5 h-5 text-yellow-600 mr-2" />
                      <h3 className="font-medium text-yellow-800 dark:text-yellow-200">Zapier Configuration</h3>
                    </div>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
                      To automatically send emails to dismedal@dismedal.es, you need to create a Zap in Zapier with a webhook trigger 
                      that sends emails. Paste your webhook URL here:
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
                        Close
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
                    {showWebhookConfig ? "Hide" : "Configure"} Zapier Webhook
                  </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t.contact.form.nameRequired}
                      </label>
                      <Input 
                        placeholder={t.contact.form.namePlaceholder}
                        className="border-border focus:border-brand" 
                        value={formData.nombre} 
                        onChange={(e) => handleInputChange("nombre", e.target.value)} 
                        required 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t.contact.form.emailRequired}
                      </label>
                      <Input 
                        type="email" 
                        placeholder={t.contact.form.emailPlaceholder}
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
                        {t.contact.form.phone}
                      </label>
                      <Input 
                        placeholder={t.contact.form.phonePlaceholder}
                        className="border-border focus:border-brand" 
                        value={formData.telefono} 
                        onChange={(e) => handleInputChange("telefono", e.target.value)} 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t.contact.form.company}
                      </label>
                      <Input 
                        placeholder={t.contact.form.companyPlaceholder}
                        className="border-border focus:border-brand" 
                        value={formData.empresa} 
                        onChange={(e) => handleInputChange("empresa", e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t.contact.form.subjectRequired}
                      </label>
                      <Input 
                        placeholder={t.contact.form.subjectPlaceholder}
                        className="border-border focus:border-brand" 
                        value={formData.asunto} 
                        onChange={(e) => handleInputChange("asunto", e.target.value)} 
                        required 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t.contact.form.service}
                      </label>
                      <Select onValueChange={(value) => handleInputChange("servicio", value)}>
                        <SelectTrigger className="border-border focus:border-brand">
                          <SelectValue placeholder={t.contact.form.servicePlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiologia">Cardiology</SelectItem>
                          <SelectItem value="electrofisiologia">Electrophysiology</SelectItem>
                          <SelectItem value="critical-care">Critical Care</SelectItem>
                          <SelectItem value="urologia">Urology</SelectItem>
                          <SelectItem value="consultoria">Consulting</SelectItem>
                          <SelectItem value="otro">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t.contact.form.messageRequired}
                    </label>
                    <Textarea 
                      placeholder={t.contact.form.messagePlaceholder}
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
                    <label htmlFor="terms" className="text-sm font-medium text-foreground cursor-pointer">
                      I accept the{" "}
                      <Link 
                        to="/terms-conditions" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-brand hover:text-brand-light underline"
                      >
                        terms and conditions
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
                      {isLoading ? t.contact.form.sending : t.contact.form.submit}
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    {t.contact.form.terms}
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

export default Contact;