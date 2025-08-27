import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const TerminosCondiciones = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-brand/5 to-brand-light/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-6 text-muted-foreground hover:text-foreground"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.termsConditions.backToHome}
            </Button>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.termsConditions.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.termsConditions.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none">
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t.termsConditions.section1.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t.termsConditions.section1.content}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t.termsConditions.section2.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t.termsConditions.section2.content}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t.termsConditions.section3.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t.termsConditions.section3.content}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t.termsConditions.section4.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t.termsConditions.section4.content}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t.termsConditions.section5.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t.termsConditions.section5.content}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t.termsConditions.section6.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t.termsConditions.section6.content}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t.termsConditions.section7.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t.termsConditions.section7.content}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {t.termsConditions.section8.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t.termsConditions.section8.content}
                  </p>
                </section>

                <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {t.termsConditions.contact.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.termsConditions.contact.content}
                  </p>
                  <p className="text-muted-foreground mt-2">
                    <strong>Email:</strong> {t.contact.emailAddress}<br />
                    <strong>Teléfono:</strong> {t.contact.phoneNumber}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TerminosCondiciones;