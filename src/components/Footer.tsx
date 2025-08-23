import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import grasasbioLogo from "@/assets/grasasbio-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={grasasbioLogo} 
                alt="GrasasBio" 
                className="h-8 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-lg font-bold">GrasasBio</h3>
                <p className="text-sm opacity-80">S.A.S.</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Líder en Colombia en la gestión responsable de aceites de cocina usados y grasas vegetales y animales. 
              Promovemos soluciones sostenibles para un futuro más verde.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground hover:text-accent-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 hover:text-accent-orange transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-accent-orange transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-90 hover:opacity-100 hover:text-accent-orange transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/acu" className="text-sm opacity-90 hover:opacity-100 hover:text-accent-orange transition-colors">
                  ACU
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 hover:text-accent-orange transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li className="text-sm opacity-90">Recolección de ACU</li>
              <li className="text-sm opacity-90">Procesamiento y Valorización</li>
              <li className="text-sm opacity-90">Gestión Ambiental</li>
              <li className="text-sm opacity-90">Capacitación</li>
              <li className="text-sm opacity-90">Consultoría Ambiental</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:6017618796" className="text-sm hover:text-accent-orange transition-colors">
                    (601) 7618796
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:comercial@grasasbio.com" className="text-sm hover:text-accent-orange transition-colors">
                    comercial@grasasbio.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    Bogotá, Colombia<br />
                    Cubrimos todo el territorio nacional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2024 GrasasBio S.A.S. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm opacity-80">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Política de Privacidad
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;