import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Recycle, Shield, AlertTriangle, CheckCircle, Leaf, Factory } from "lucide-react";
import recyclingProcess from "@/assets/recycling-process.jpg";

const ACU = () => {
  const acuFacts = [
    {
      icon: AlertTriangle,
      title: "Impacto Ambiental",
      stat: "1 litro",
      description: "de ACU puede contaminar hasta 40,000 litros de agua"
    },
    {
      icon: Droplets,
      title: "Recolección Anual",
      stat: "10+ millones",
      description: "de kilogramos de ACU gestionados por GrasasBio"
    },
    {
      icon: Recycle,
      title: "Valorización",
      stat: "100%",
      description: "del ACU recolectado se convierte en productos útiles"
    }
  ];

  const regulations = [
    {
      title: "Resolución 613 de 2018",
      description: "Establece los lineamientos para la gestión ambientalmente adecuada de los aceites de cocina usados (ACU)."
    },
    {
      title: "Acuerdo 634 de 2015",
      description: "Reglamenta la gestión integral de residuos sólidos en Bogotá, incluyendo ACU."
    },
    {
      title: "Decreto 1076 de 2015",
      description: "Marco normativo para la gestión integral de residuos peligrosos y especiales."
    }
  ];

  const benefits = [
    "Reducción significativa de la contaminación del agua",
    "Prevención de obstrucciones en sistemas de alcantarillado",
    "Contribución a la economía circular",
    "Generación de biocombustibles y productos químicos",
    "Cumplimiento de la normativa ambiental",
    "Mejora de la imagen corporativa empresarial"
  ];

  const process = [
    {
      step: "1",
      title: "Generación",
      description: "Aceites usados en cocinas comerciales e industriales"
    },
    {
      step: "2", 
      title: "Almacenamiento",
      description: "Contenedores especializados para evitar contaminación"
    },
    {
      step: "3",
      title: "Recolección",
      description: "Transporte especializado con vehículos certificados"
    },
    {
      step: "4",
      title: "Procesamiento",
      description: "Purificación y transformación en productos de valor"
    },
    {
      step: "5",
      title: "Valorización",
      description: "Conversión en biocombustibles y productos químicos"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              Aceites de Cocina Usados
              <span className="block text-primary">(ACU)</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Conoce todo sobre la gestión responsable de aceites de cocina usados, 
              su impacto ambiental y cómo GrasasBio transforma este residuo en recursos valiosos.
            </p>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Datos Importantes sobre ACU
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conoce el impacto real de los aceites de cocina usados y por qué su gestión adecuada es fundamental.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {acuFacts.map((fact, index) => (
              <Card key={index} className="text-center shadow-medium hover:shadow-strong transition-all duration-300 scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary-light rounded-2xl flex items-center justify-center">
                    <fact.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-accent-orange">{fact.stat}</div>
                    <h3 className="text-xl font-semibold text-foreground">{fact.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{fact.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is ACU */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                ¿Qué son los ACU?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Los <strong>Aceites de Cocina Usados (ACU)</strong> son todos aquellos aceites y grasas vegetales o animales 
                que han sido utilizados en procesos de cocción y fritura, perdiendo sus propiedades originales y 
                convirtiéndose en un residuo que requiere gestión especializada.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Características principales:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Aceites vegetales usados en fritura</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Grasas animales de procesos culinarios</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Mezclas de aceites y grasas degradadas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Residuos de procesos industriales alimentarios</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src={recyclingProcess}
                alt="Aceites de cocina usados"
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Proceso de Gestión ACU
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde la generación hasta la valorización, conoce cada etapa del proceso que seguimos en GrasasBio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center space-y-4 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-primary transform -translate-x-4" 
                       style={{ marginLeft: '2rem' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Beneficios de la Gestión Adecuada
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              La correcta gestión de ACU genera múltiples beneficios ambientales, económicos y sociales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Leaf className="h-6 w-6 text-accent-orange flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Marco Normativo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conoce las principales regulaciones que rigen la gestión de aceites de cocina usados en Colombia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regulations.map((regulation, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-shadow duration-300 scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{regulation.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{regulation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Impacto Ambiental
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                    <h3 className="text-2xl font-semibold text-foreground">Problemas del Mal Manejo</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span>Contaminación masiva de fuentes hídricas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span>Obstrucción de sistemas de alcantarillado</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span>Daños a la fauna y flora acuática</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span>Costos elevados de tratamiento de aguas</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Factory className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">Soluciones GrasasBio</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Recolección especializada y segura</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Procesamiento en plantas certificadas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Conversión en productos útiles</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Contribución a la economía circular</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              ¿Tu Empresa Genera ACU?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              No permitas que los aceites de cocina usados de tu empresa contaminen el medio ambiente. 
              Únete a la gestión responsable con GrasasBio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-accent-orange text-accent-orange-foreground hover:opacity-90 shadow-orange">
                Solicita Recolección de ACU
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Conoce Nuestro Proceso
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ACU;