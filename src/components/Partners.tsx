import { Card } from "@/components/ui/card";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Colaboramos con las mejores empresas del sector para ofrecer soluciones médicas de vanguardia
          </p>
        </div>
        
        <div className="flex justify-center gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
            <a 
              href="https://www.merit.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img 
                src="/lovable-uploads/47fefcc8-fb44-4192-9f3a-5c060741fe6e.png" 
                alt="Merit Medical Logo" 
                className="h-16 w-auto transition-transform duration-300 hover:scale-105"
              />
            </a>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
            <a 
              href="https://www.czswmed.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-brand/20 rounded-lg p-2"
            >
              <img 
                src="/lovable-uploads/8699d4ac-ab4a-46a6-8409-0211ed49f085.png" 
                alt="CZS Logo" 
                className="h-16 w-auto transition-transform duration-300 hover:scale-105"
              />
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partners;