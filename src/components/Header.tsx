import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/b614e568-f06f-4051-b0d9-f53a8f1e758a.png" alt="DISMEDAL Logo" className="h-8 w-auto" />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#inicio" className="text-foreground hover:text-brand transition-colors">
              Inicio
            </Link>
            <Link to="/servicios" className="text-foreground hover:text-brand transition-colors">
              Servicios
            </Link>
            <Link to="/#nosotros" className="text-foreground hover:text-brand transition-colors">
              Nosotros
            </Link>
            <Link to="/contacto" className="text-foreground hover:text-brand transition-colors">
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;