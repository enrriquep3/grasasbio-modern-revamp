import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Building, 
  GraduationCap, 
  Store, 
  ShoppingCart,
  MapPin,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
  Recycle,
  Users,
  Shield
} from "lucide-react";

const PuntosLimpios = () => {
  const advantages = [
    {
      icon: Droplets,
      title: "Disposición Adecuada",
      description: "Disposición adecuada del aceite sin riesgo de vertimientos"
    },
    {
      icon: Shield,
      title: "Reducción de Riesgos",
      description: "Reducción de olores, plagas y obstrucciones en tuberías"
    },
    {
      icon: CheckCircle,
      title: "Cumplimiento Normativo",
      description: "Cumplimiento de la normativa ambiental vigente"
    },
    {
      icon: Users,
      title: "Conciencia Ambiental",
      description: "Mayor conciencia ambiental en tu comunidad o empresa"
    },
    {
      icon: Recycle,
      title: "Recolección Programada",
      description: "Recolección programada por parte de nuestro equipo autorizado"
    },
    {
      icon: CheckCircle,
      title: "Objetivos ODS",
      description: "Aporte directo a los Objetivos de Desarrollo Sostenible (ODS)"
    }
  ];

  const locations = [
    {
      icon: Building,
      title: "Conjuntos Residenciales",
      description: "Soluciones para comunidades y edificaciones"
    },
    {
      icon: Store,
      title: "Restaurantes",
      description: "Puntos especializados para establecimientos gastronómicos"
    },
    {
      icon: GraduationCap,
      title: "Centros Educativos",
      description: "Implementación en colegios y universidades"
    },
    {
      icon: Building,
      title: "Empresas Alimenticias",
      description: "Soluciones industriales para el sector alimentario"
    },
    {
      icon: ShoppingCart,
      title: "Supermercados",
      description: "Puntos de recolección en tiendas y supermercados"
    },
    {
      icon: MapPin,
      title: "Espacios Públicos",
      description: "Alcaldías, parques y bibliotecas"
    }
  ];

  const serviceIncludes = [
    "Contenedor rotulado y resistente (capacidades desde 50 hasta 200 L)",
    "Instrucciones visibles para disposición correcta",
    "Acompañamiento técnico y capacitación al punto receptor",
    "Recogida programada y certificación digital del residuo"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold font-monaco">
              PUNTOS LIMPIOS
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Para Aceite de Cocina Usado
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              ¡Adquiere el tuyo! Contenedores especializados para la disposición correcta 
              del ACU en tu comunidad, empresa o establecimiento.
            </p>
            <Button size="lg" className="bg-accent-orange text-accent-orange-foreground hover:opacity-90 shadow-orange">
              Solicita tu Punto Limpio
            </Button>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                ¿Qué es un Punto Limpio para ACU?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Es un contenedor especializado donde los ciudadanos, conjuntos residenciales, 
                restaurantes, colegios y empresas pueden disponer correctamente su aceite de cocina usado (ACU).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En GRASASBIO S.A.S., diseñamos y suministramos puntos limpios a medida, ideales para 
                facilitar la recolección responsable y evitar la contaminación de fuentes hídricas.
              </p>
            </div>
            
            <Card className="shadow-strong">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-24 h-24 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                  <Droplets className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Contenedor Especializado</h3>
                <p className="text-muted-foreground">
                  Diseñado específicamente para la recolección segura y eficiente del aceite de cocina usado
                </p>
                <div className="bg-primary-light p-4 rounded-lg">
                  <p className="text-primary font-semibold">Capacidades disponibles</p>
                  <p className="text-foreground text-lg font-bold">50L - 100L - 150L - 200L</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Ventajas de contar con un Punto Limpio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Múltiples beneficios para tu comunidad, empresa y el medio ambiente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center">
                    <advantage.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              ¿Dónde puedes instalar un Punto Limpio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestros puntos limpios se adaptan a diferentes tipos de establecimientos y comunidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-accent-orange-light rounded-2xl flex items-center justify-center mx-auto">
                    <location.icon className="h-8 w-8 text-accent-orange" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{location.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{location.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-success text-success-foreground">
              <CardContent className="p-6">
                <p className="text-lg font-semibold">
                  También puedes convertirte en aliado comunitario y recibir incentivos por las entregas acumuladas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Includes */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                ¿Qué incluye el servicio?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ofrecemos una solución completa que incluye todo lo necesario para una 
                gestión exitosa del punto limpio.
              </p>
              <ul className="space-y-4">
                {serviceIncludes.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-success-foreground text-sm">✓</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground text-center">
                  Servicio Integral
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                    <Recycle className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Nosotros nos encargamos de todo
                  </h3>
                  <p className="text-muted-foreground">
                    Instalación, operación y trazabilidad completa del proceso
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary-light rounded-lg">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Trazabilidad</div>
                  </div>
                  <div className="text-center p-3 bg-accent-orange-light rounded-lg">
                    <div className="text-2xl font-bold text-accent-orange">24/7</div>
                    <div className="text-sm text-muted-foreground">Soporte</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              ¡Adquiere tu Punto Limpio hoy!
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Ayuda a proteger el agua y el medio ambiente desde tu empresa, hogar o comunidad. 
              Nosotros te lo instalamos, lo operamos y te garantizamos trazabilidad completa.
            </p>
            <Button size="lg" className="bg-accent-orange text-accent-orange-foreground hover:opacity-90 shadow-orange">
              Solicita tu Punto Limpio
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-foreground">¿Tienes dudas?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-center text-lg text-muted-foreground">
                Contáctanos para resolver cualquier inquietud sobre nuestros puntos limpios
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfonos</p>
                    <p className="text-muted-foreground">300 599 5277</p>
                    <p className="text-muted-foreground">320 935 4466</p>
                  </div>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">comercial@grasasbio.com</p>
                  </div>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a 
                      href="https://wa.me/573005995277" 
                      className="text-success hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      300 599 5277
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="bg-success hover:bg-success/90 text-success-foreground">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contactar por WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PuntosLimpios;