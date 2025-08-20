import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return <footer className="bg-brand-darker text-white">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/b614e568-f06f-4051-b0d9-f53a8f1e758a.png" alt="DISMEDAL Logo" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-300 leading-relaxed">{t.footer.description}</p>
            
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.services}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Dispositivos Médicos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t.services.cardiology.title}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t.services.electrophysiology.title}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t.services.criticalCare.title}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t.services.urology.title}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Nuestro Equipo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-light" />
                <span className="text-gray-300">{t.contact.phoneNumber}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-light" />
                <span className="text-gray-300">{t.contact.emailAddress}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-light" />
                <span className="text-gray-300">{t.contact.officeAddress}, {t.contact.officeLocation}</span>
              </div>
            </div>

            <div className="mt-6">
              
              <div className="flex space-x-2">
                
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">© 2025 DISMEDAL. {t.footer.rights}</div>
            <div className="flex space-x-6 text-sm">
              <a href="/politica-privacidad" className="text-gray-300 hover:text-white transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Términos de Uso
              </a>
              <a href="/politica-cookies" className="text-gray-300 hover:text-white transition-colors">
                {t.footer.cookies}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;