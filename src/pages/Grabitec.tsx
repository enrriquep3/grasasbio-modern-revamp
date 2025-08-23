import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Shield, 
  FileText, 
  Clock, 
  BarChart3, 
  Settings,
  Lock,
  Download,
  Calendar,
  MapPin
} from "lucide-react";

const Grabitec = () => {
  const features = [
    {
      icon: Users,
      title: "Gestión de Clientes",
      description: "Administra tu información de contacto, ubicaciones y detalles de servicio"
    },
    {
      icon: Calendar,
      title: "Programación de Recolecciones",
      description: "Agenda y reprograma tus servicios de recolección de forma fácil"
    },
    {
      icon: FileText,
      title: "Certificados Digitales",
      description: "Accede y descarga todos tus certificados de recolección y aprovechamiento"
    },
    {
      icon: BarChart3,
      title: "Reportes y Estadísticas",
      description: "Visualiza tu historial de recolecciones y impacto ambiental"
    },
    {
      icon: MapPin,
      title: "Seguimiento de Rutas",
      description: "Monitorea en tiempo real el estado de tus recolecciones"
    },
    {
      icon: Shield,
      title: "Cumplimiento Normativo",
      description: "Mantente al día con toda la documentación legal requerida"
    }
  ];

  const benefits = [
    "Acceso 24/7 desde cualquier dispositivo",
    "Certificados digitales con trazabilidad completa",
    "Notificaciones automáticas de servicios",
    "Historial completo de todas las operaciones",
    "Soporte técnico especializado",
    "Cumplimiento automático de normativas"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold font-monaco">
              GRABITEC
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Portal de Clientes
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Tu plataforma digital para gestionar todos los servicios de recolección y 
              aprovechamiento de ACU con GrasasBio S.A.S.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-accent-orange text-accent-orange-foreground hover:opacity-90 shadow-orange">
                <Lock className="mr-2 h-5 w-5" />
                Acceder al Portal
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Solicitar Acceso
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Funcionalidades del Portal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              GRABITEC te proporciona todas las herramientas necesarias para gestionar 
              tus servicios de manera eficiente y transparente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Beneficios de usar GRABITEC
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nuestra plataforma está diseñada para simplificar la gestión de tus 
                servicios y garantizar el cumplimiento normativo completo.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-success-foreground text-sm">✓</span>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Settings className="mr-3 h-6 w-6 text-primary" />
                  Panel de Control
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-light p-4 rounded-lg text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">24/7</div>
                    <div className="text-sm text-muted-foreground">Disponibilidad</div>
                  </div>
                  <div className="bg-accent-orange-light p-4 rounded-lg text-center">
                    <FileText className="h-8 w-8 text-accent-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Trazabilidad</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Certificados Emitidos</span>
                    <span className="font-semibold text-foreground">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Recolecciones Activas</span>
                    <span className="font-semibold text-foreground">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Última Actualización</span>
                    <span className="font-semibold text-foreground">Hace 2 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-3xl font-bold">¿Cómo acceder a GRABITEC?</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Si ya eres cliente de GrasasBio S.A.S., puedes solicitar acceso a tu portal personalizado. 
                Si aún no eres cliente, contáctanos para conocer nuestros servicios.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Clientes Existentes</h4>
                  <p className="opacity-90 mb-4">
                    Solicita tus credenciales de acceso
                  </p>
                  <Button className="bg-accent-orange text-accent-orange-foreground hover:opacity-90">
                    Solicitar Acceso
                  </Button>
                </div>
                <div className="bg-primary-foreground/10 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Nuevos Clientes</h4>
                  <p className="opacity-90 mb-4">
                    Conoce nuestros servicios primero
                  </p>
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Contactar Ventas
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Soporte Técnico
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nuestro equipo técnico está disponible para ayudarte con cualquier 
              duda o problema técnico que puedas tener con la plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-green">
                <Download className="mr-2 h-5 w-5" />
                Manual de Usuario
              </Button>
              <Button size="lg" variant="outline">
                Contactar Soporte
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grabitec;