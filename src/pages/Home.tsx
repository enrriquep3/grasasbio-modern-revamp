import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Recycle, Shield, Truck, Users, Leaf, Award, UtensilsCrossed, School, Building, ShoppingCart, Coffee, Home as HomeIcon } from "lucide-react";
import recyclingProcess from "@/assets/recycling-process.jpg";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const Home = () => {
  const stats = [
    { number: 10435689, label: "KG Aceite Recolectado", icon: Recycle },
    { number: 7900, label: "Clientes Atendidos", icon: Users },
    { number: 40000, label: "Litros de Agua Protegida", icon: Leaf },
  ];

  const clientTypes = [
    { icon: UtensilsCrossed, label: "Restaurantes" },
    { icon: School, label: "Centros Educativos" },
    { icon: Building, label: "Cadenas" },
    { icon: Coffee, label: "Industria Alimentaria" },
    { icon: HomeIcon, label: "Panaderías" },
    { icon: Building, label: "Conjuntos Residenciales" },
    { icon: ShoppingCart, label: "Supermercados" },
    { icon: Truck, label: "Catering" },
  ];

  const services = [
    {
      icon: Truck,
      title: "Recolección Especializada",
      description: "Servicio de recolección programada con vehículos especializados y personal capacitado."
    },
    {
      icon: Recycle,
      title: "Procesamiento Sostenible",
      description: "Transformamos aceites usados en productos de valor agregado mediante procesos eco-amigables."
    },
    {
      icon: Shield,
      title: "Cumplimiento Normativo",
      description: "Garantizamos el cumplimiento de toda la normativa ambiental vigente."
    },
    {
      icon: Award,
      title: "Certificación y Trazabilidad",
      description: "Proveemos certificados y seguimiento completo del proceso de gestión."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/api/placeholder/1920/1080"
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6 fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Recycle className="h-8 w-8 text-accent-orange" />
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transformamos tu{" "}
                <span className="text-gradient-orange">aceite de cocina usado</span> en{" "}
                <span className="text-gradient-green">soluciones sostenibles</span>
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-2xl">🌍</span>
              <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Únete al cambio con GRASASBIO S.A.S.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-gradient-accent text-accent-orange-foreground hover:opacity-90 shadow-orange">
                Solicita tu Recolección
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                Conoce Nuestros Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const { count, elementRef } = useAnimatedCounter({ 
                end: stat.number,
                duration: 2500 + index * 300 
              });
              
              return (
                <div key={index} ref={elementRef} className="text-center space-y-4 slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <stat.icon className="h-12 w-12 mx-auto text-accent-orange" />
                  <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-bold text-accent-orange font-mono">
                      {count.toLocaleString()}
                    </div>
                    <p className="text-lg opacity-90">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-foreground">
            Trabajamos con Diferentes Tipos de Clientes
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_20s_linear_infinite] gap-8 items-center justify-center">
              {[...clientTypes, ...clientTypes].map((client, index) => (
                <div key={index} className="flex flex-col items-center gap-3 min-w-[120px] group">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <client.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{client.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-accent text-accent-orange-foreground hover:opacity-90"
              onClick={() => window.open('https://wa.me/573005995277', '_blank')}
            >
              Únete con Nosotros
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Quiénes Somos
                </h2>
                <h3 className="text-2xl lg:text-3xl font-semibold text-primary">
                  GRASASBIO S.A.S.
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Es una empresa colombiana líder en la gestión de <strong>aceites de cocina usados (ACU)</strong> y 
                otras grasas vegetales y animales.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Brindamos nuestros servicios a empresas del sector gastronómico e industrial (grandes, medianas y pequeñas), 
                cumpliendo con altos estándares de calidad, seguridad y atención al cliente. Nuestro propósito es reducir 
                el impacto ambiental y proteger la salud pública a través de una operación ética, sostenible y responsable.
              </p>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-foreground">Estamos comprometidos con:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Cumplir la normativa ambiental vigente
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Generar bienestar en nuestras comunidades
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Promover la economía circular
                  </li>
                </ul>
              </div>
              <Button className="bg-primary hover:bg-primary/90 shadow-green">
                Conoce Más Sobre Nosotros
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src={recyclingProcess}
                alt="Proceso de reciclaje de aceites"
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos soluciones integrales para la gestión responsable de aceites usados, 
              adaptándonos a las necesidades específicas de cada cliente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary-light rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aliados Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-foreground">
            Nuestros Aliados
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Empresas líderes que confían en nuestros servicios para la gestión responsable de aceites usados
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-medium max-w-4xl">
              <img 
                src="/lovable-uploads/fe8216cb-25b1-41d4-83dc-2c4a17e48e94.png" 
                alt="Logos de empresas aliadas" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-6 italic">
            En espera del envío de las imágenes en PNG para incluirlas
          </p>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              El Impacto de la Mala Disposición del ACU
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              La mala disposición del Aceite de Cocina Usado (ACU) tiene consecuencias ambientales y sanitarias graves.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { title: "Contaminar cuerpos de agua y suelos", icon: "💧" },
                { title: "Afectar negativamente la fauna y flora local", icon: "🌱" },
                { title: "Contribuir al cambio climático", icon: "🌍" },
                { title: "Generar obstrucciones en redes de saneamiento", icon: "🚰" },
                { title: "Agravar problemas de salud pública", icon: "⚕️" },
              ].map((impact, index) => (
                <Card key={index} className="p-6 text-center scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-4">{impact.icon}</div>
                  <p className="text-sm text-muted-foreground">{impact.title}</p>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-hero text-primary-foreground p-8 rounded-2xl mt-12">
              <h3 className="text-2xl font-bold mb-4">📌 Dato Impactante</h3>
              <p className="text-lg leading-relaxed">
                Un solo litro de ACU puede contaminar hasta <strong>40.000 litros de agua</strong>, 
                lo que equivale al consumo doméstico de agua de una persona durante un año.
              </p>
            </div>

            <div className="text-left max-w-2xl mx-auto mt-12">
              <h3 className="text-2xl font-bold mb-6 text-foreground">¿Cómo prevenirlo?</h3>
              <p className="text-lg mb-4 text-muted-foreground">Recicla el aceite de manera adecuada:</p>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🧴</span>
                <p className="text-muted-foreground">
                  Almacénalo en un recipiente plástico con tapa y programa tu recolección con GRASASBIO.
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-accent text-accent-orange-foreground hover:opacity-90 w-full"
                onClick={() => window.open('https://wa.me/573005995277', '_blank')}
              >
                Solicita tu Recolección
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              ¿Listo para Hacer el Cambio?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Únete a miles de empresas que ya confían en GrasasBio para la gestión 
              responsable de sus aceites usados. Contribuye al cuidado del medio ambiente 
              mientras cumples con la normativa vigente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-accent-orange text-accent-orange-foreground hover:opacity-90 shadow-orange">
                Solicita tu Cotización Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Llámanos: (601) 7618796
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;