import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="w-24 h-24 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Página No Encontrada</h2>
          <p className="text-muted-foreground leading-relaxed">
            Lo sentimos, la página que buscas no existe. Es posible que haya sido movida o eliminada.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Volver al Inicio
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/contact">Contactar Soporte</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
