import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b614e568-f06f-4051-b0d9-f53a8f1e758a.png" 
              alt="DISMEDAL Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-brand transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-foreground hover:text-brand transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-foreground hover:text-brand transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-foreground hover:text-brand transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="brand-outline" size="sm">
              Solicitar Información
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;