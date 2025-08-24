import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import grasasbioLogo from "@/assets/grasasbio-logo.png";
import isccLogo from "@/assets/iscc-logo-new.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "INICIO", href: "/" },
    { name: "SERVICIOS", href: "/services" },
    { name: "QUIÉNES SOMOS", href: "/about" },
    { name: "¿CÓMO LO HACEMOS?", href: "/proceso" },
    { name: "¿QUÉ ES EL ACU?", href: "/acu" },
    { name: "NORMATIVIDAD", href: "/normatividad" },
    { name: "CONTACTO", href: "/contact" },
    { name: "GRABITEC", href: "/grabitec" },
    { name: "PUNTOS LIMPIOS", href: "/puntos-limpios" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-muted py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:6017618796" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              (601) 7618796
            </a>
            <a href="mailto:comercial@grasasbio.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
              comercial@grasasbio.com
            </a>
            <a 
              href="https://wa.me/573005995277" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-success transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp: 300 599 5277
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img 
              src={isccLogo} 
              alt="ISCC Certificación" 
              className="h-6 w-auto"
            />
            <div className="text-muted-foreground text-xs">
              Líderes en gestión responsable de aceites usados
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={grasasbioLogo} 
                alt="GrasasBio" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">GrasasBio</span>
                <span className="text-xs text-muted-foreground">Recolección de Aceites Vegetales Usados</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-xs font-monaco font-bold transition-colors hover:text-primary ${
                    isActive(item.href) 
                      ? "text-primary" 
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="default" className="bg-gradient-accent text-accent-orange-foreground hover:opacity-90">
                Solicita tu Recolección
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-monaco font-bold transition-colors hover:text-primary px-2 py-1 ${
                      isActive(item.href)
                        ? "text-primary bg-primary-light"
                        : "text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="default" className="bg-gradient-accent text-accent-orange-foreground hover:opacity-90 mx-2">
                  Solicita tu Recolección
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;