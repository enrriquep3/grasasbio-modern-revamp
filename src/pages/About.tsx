import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Award, Users, Globe, Leaf } from "lucide-react";
import recyclingProcess from "@/assets/recycling-process.jpg";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Comprometidos con prácticas que respeten y protejan el medio ambiente."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Altos estándares de calidad en todos nuestros procesos y servicios."
    },
    {
      icon: Users,
      title: "Compromiso Social",
      description: "Generamos bienestar en las comunidades donde operamos."
    },
    {
      icon: Globe,
      title: "Responsabilidad",
      description: "Operamos con ética y transparencia en cada una de nuestras actividades."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              Quiénes Somos
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Conoce la historia, misión y valores que nos han convertido en líderes 
              en la gestión responsable de aceites de cocina usados en Colombia.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                  GRASASBIO S.A.S.
                </h2>
                <h3 className="text-2xl text-muted-foreground">
                  Líder en Gestión de Aceites Usados
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Es una empresa colombiana líder en la gestión de <strong>aceites de cocina usados (ACU)</strong> y 
                otras grasas vegetales y animales. Nos especializamos en brindar soluciones integrales 
                para empresas del sector gastronómico e industrial.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Brindamos nuestros servicios a empresas grandes, medianas y pequeñas, cumpliendo con 
                altos estándares de calidad, seguridad y atención al cliente. Nuestro propósito es 
                reducir el impacto ambiental y proteger la salud pública a través de una operación 
                ética, sostenible y responsable.
              </p>
              <div className="pt-4">
                <Button className="bg-primary hover:bg-primary/90 shadow-green">
                  Conoce Nuestros Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={recyclingProcess}
                alt="Instalaciones GrasasBio"
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Misión */}
            <Card className="shadow-medium">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">MISIÓN</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gestionamos y valorizamos responsablemente aceites de cocina usados y otras grasas 
                  animales y vegetales, promoviendo soluciones sostenibles que reduzcan el impacto 
                  ambiental y protejan la salud pública. Inspiramos a empresas a sumarse al cambio 
                  mediante servicios con trazabilidad, capacitación y cumplimiento normativo.
                </p>
              </CardContent>
            </Card>

            {/* Visión */}
            <Card className="shadow-medium">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-accent-orange rounded-2xl flex items-center justify-center">
                    <Eye className="h-8 w-8 text-accent-orange-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-accent-orange">VISIÓN</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser la empresa líder en América Latina en la gestión integral de aceites de cocina 
                  usados y grasas residuales, reconocida por nuestra innovación tecnológica, 
                  compromiso ambiental y contribución a la economía circular, transformando desechos 
                  en recursos valiosos para un futuro sostenible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo diario y nos comprometen con 
              la excelencia en cada proyecto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary-light rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Estamos Comprometidos Con
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent-orange rounded-2xl flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent-orange-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Cumplir la normativa ambiental vigente</h3>
                <p className="opacity-90">
                  Operamos bajo los más altos estándares de cumplimiento legal y regulatorio.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent-orange rounded-2xl flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent-orange-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Generar bienestar en nuestras comunidades</h3>
                <p className="opacity-90">
                  Contribuimos al desarrollo sostenible de las comunidades donde operamos.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent-orange rounded-2xl flex items-center justify-center">
                  <Globe className="h-8 w-8 text-accent-orange-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Promover la economía circular</h3>
                <p className="opacity-90">
                  Transformamos residuos en recursos valiosos para un futuro sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              ¿Quieres Ser Parte del Cambio?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Únete a nuestra misión de crear un futuro más sostenible. Contacta con nosotros 
              y descubre cómo podemos trabajar juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-gradient-accent text-accent-orange-foreground hover:opacity-90 shadow-orange">
                Contáctanos Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Ver Nuestros Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;