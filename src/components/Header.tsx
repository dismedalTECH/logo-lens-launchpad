import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const Header = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

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
              {t.header.home}
            </Link>
            <Link to="/servicios" className="text-foreground hover:text-brand transition-colors">
              {t.header.services}
            </Link>
            <Link to="/#nosotros" className="text-foreground hover:text-brand transition-colors">
              {t.header.about}
            </Link>
            <Link to={language === 'es' ? '/contacto' : '/contact'} className="text-foreground hover:text-brand transition-colors">
              {t.header.contact}
            </Link>
          </nav>

          {/* Language Selector & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground transition-transform duration-200 hover:scale-125 cursor-pointer" />
              <Select value={language} onValueChange={(value) => setLanguage(value as 'es' | 'en')}>
                <SelectTrigger className="w-20 h-8 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">ES</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                </SelectContent>
              </Select>
            </div>
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