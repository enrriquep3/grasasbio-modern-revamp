import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GoogleMap = () => {
  const address = "Calle 9 #32a-83, Bogotá, Cundinamarca, Colombia";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/${encodedAddress}`;
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`;

  return (
    <Card className="shadow-strong">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <MapPin className="h-6 w-6 text-primary" />
          Nuestra Ubicación
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-foreground font-semibold">GrasasBio S.A.S.</p>
          <p className="text-muted-foreground">{address}</p>
        </div>
        
        {/* Map Container */}
        <div className="w-full h-64 bg-muted rounded-lg relative overflow-hidden">
          {/* Static map placeholder with styling */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-subtle">
            <div className="text-center space-y-4">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <div className="space-y-2">
                <p className="text-foreground font-semibold">GrasasBio S.A.S.</p>
                <p className="text-muted-foreground text-sm">{address}</p>
              </div>
              <Button 
                variant="outline" 
                asChild
                className="text-foreground border-foreground hover:bg-foreground hover:text-background"
              >
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Ver en Google Maps
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">Horarios de Atención</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Lunes - Viernes: 8:00 AM - 5:00 PM</p>
              <p>Sábados: 8:00 AM - 12:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">Información de Contacto</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Tel: (601) 7618796</p>
              <p>Cel: 300 599 5277</p>
              <p>Email: comercial@grasasbio.com</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleMap;