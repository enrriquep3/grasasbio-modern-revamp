import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Recycle, Shield, Truck, Users, Leaf, Award } from "lucide-react";
import heroFleet from "@/assets/hero-fleet.jpg";
import recyclingProcess from "@/assets/recycling-process.jpg";

const Home = () => {
  const stats = [
    { number: "10,435,689", label: "KG Aceite Recolectado", icon: Recycle },
    { number: "7,900", label: "Clientes Atendidos", icon: Users },
    { number: "40,000", label: "Litros de Agua Protegida", icon: Leaf },
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
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroFleet})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6 fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transformamos tu{" "}
              <span className="text-gradient-orange">aceite usado</span> en{" "}
              <span className="text-gradient-green">soluciones sostenibles</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Únete al cambio con GRASASBIO S.A.S. Líder en Colombia en la gestión responsable 
              de aceites de cocina usados y grasas vegetales y animales.
            </p>
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

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4 slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <stat.icon className="h-12 w-12 mx-auto text-accent-orange" />
                <div className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-accent-orange">
                    {stat.number}
                  </div>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </div>
              </div>
            ))}
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