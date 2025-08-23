import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Recycle, Shield, FileCheck, BookOpen, Users, CheckCircle } from "lucide-react";
import recyclingProcess from "@/assets/recycling-process.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Truck,
      title: "Recolección Especializada",
      description: "Servicio de recolección programada con vehículos especializados y personal capacitado para el manejo seguro de aceites usados.",
      features: [
        "Programación flexible de recolecciones",
        "Vehículos especializados y certificados",
        "Personal técnico capacitado",
        "Contenedores apropiados sin costo"
      ]
    },
    {
      icon: Recycle,
      title: "Procesamiento y Valorización",
      description: "Transformamos aceites usados en productos de valor agregado mediante procesos tecnológicos avanzados y eco-amigables.",
      features: [
        "Procesos de purificación avanzados",
        "Conversión en biocombustibles",
        "Productos para industria química",
        "Máximo aprovechamiento del recurso"
      ]
    },
    {
      icon: Shield,
      title: "Gestión Ambiental",
      description: "Garantizamos el cumplimiento de toda la normativa ambiental vigente con procesos certificados y trazables.",
      features: [
        "Cumplimiento normativo 100%",
        "Certificaciones ambientales",
        "Trazabilidad completa del proceso",
        "Reportes de impacto ambiental"
      ]
    },
    {
      icon: FileCheck,
      title: "Certificación y Documentación",
      description: "Proveemos toda la documentación necesaria para el cumplimiento legal y la certificación de procesos.",
      features: [
        "Certificados de disposición final",
        "Manifiestos de transporte",
        "Reportes de gestión",
        "Documentación legal completa"
      ]
    },
    {
      icon: BookOpen,
      title: "Capacitación y Asesoría",
      description: "Programas de capacitación para el personal de nuestros clientes en manejo adecuado de aceites usados.",
      features: [
        "Talleres de capacitación",
        "Manuales de buenas prácticas",
        "Asesoría técnica especializada",
        "Programas de mejora continua"
      ]
    },
    {
      icon: Users,
      title: "Consultoría Ambiental",
      description: "Servicios de consultoría para implementar programas de gestión ambiental integral en su empresa.",
      features: [
        "Diagnóstico ambiental",
        "Diseño de programas de gestión",
        "Implementación de sistemas",
        "Seguimiento y monitoreo"
      ]
    }
  ];

  const benefits = [
    "Cumplimiento total de la normativa ambiental",
    "Reducción del impacto ambiental",
    "Certificación de procesos",
    "Ahorro en costos de gestión",
    "Mejora de imagen corporativa",
    "Contribución a la economía circular"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ofrecemos soluciones integrales para la gestión responsable de aceites de cocina usados, 
              adaptándonos a las necesidades específicas de cada cliente con los más altos estándares de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                      <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <div className="space-y-3 pl-20">
                    <h4 className="font-semibold text-foreground">Características:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Nuestro Proceso
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seguimos un proceso riguroso y certificado que garantiza la máxima eficiencia 
                y el cumplimiento de todos los estándares ambientales y de calidad.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Evaluación Inicial</h4>
                    <p className="text-muted-foreground">Análisis de necesidades y diseño de programa personalizado.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Implementación</h4>
                    <p className="text-muted-foreground">Instalación de sistemas y capacitación del personal.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Recolección</h4>
                    <p className="text-muted-foreground">Servicio programado con vehículos especializados.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Procesamiento</h4>
                    <p className="text-muted-foreground">Transformación en productos de valor agregado.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Certificación</h4>
                    <p className="text-muted-foreground">Entrega de documentación y certificados.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={recyclingProcess}
                alt="Proceso de gestión de aceites"
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Beneficios de Nuestros Servicios
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Al elegir GrasasBio, su empresa obtiene múltiples beneficios que van más allá 
              del cumplimiento normativo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="h-6 w-6 text-accent-orange flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Sectores que Atendemos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Brindamos nuestros servicios a una amplia gama de industrias y sectores comerciales.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Restaurantes",
              "Hoteles",
              "Centros Comerciales",
              "Industria Alimentaria",
              "Catering y Eventos",
              "Panaderías",
              "Frituras Industriales",
              "Instituciones Educativas"
            ].map((sector, index) => (
              <div key={index} className="text-center space-y-3 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto bg-primary-light rounded-2xl flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{sector}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              ¿Necesitas Nuestros Servicios?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Contáctanos para una evaluación gratuita y descubre cómo podemos ayudarte 
              a gestionar tus aceites usados de manera responsable y eficiente.
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

export default Services;