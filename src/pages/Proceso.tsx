import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowDown, 
  Truck, 
  Factory, 
  Droplets, 
  Recycle, 
  FileCheck,
  AlertTriangle,
  X,
  CheckCircle,
  Fuel
} from "lucide-react";

const Proceso = () => {
  const processSteps = [
    {
      icon: Truck,
      title: "Recolección del ACU",
      description: "Recolección en puntos generadores con vehículos autorizados"
    },
    {
      icon: Factory,
      title: "Transporte Seguro",
      description: "Transporte especializado hasta nuestra planta de procesamiento"
    },
    {
      icon: Droplets,
      title: "Pretratamiento",
      description: "Proceso para retirar humedad e impurezas del aceite usado"
    },
    {
      icon: Fuel,
      title: "Transformación",
      description: "Conversión en materias primas para biocombustible certificado"
    },
    {
      icon: FileCheck,
      title: "Certificación",
      description: "Emisión de certificados digitales y trazabilidad completa"
    }
  ];

  const informalRisks = [
    {
      icon: X,
      title: "Reenvasado Ilegal",
      description: "Puede ser vendido como aceite 'nuevo', poniendo en riesgo la salud pública"
    },
    {
      icon: X,
      title: "Fabricación de Jabones sin Control",
      description: "El uso no regulado del ACU puede generar productos contaminantes o inseguros"
    },
    {
      icon: X,
      title: "Alimento para Animales",
      description: "El aceite degradado puede provocar enfermedades digestivas y metabólicas"
    },
    {
      icon: X,
      title: "Uso No Autorizado",
      description: "La normativa colombiana solo permite su aprovechamiento como biocombustible"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground font-monaco">
              ¿CÓMO LO HACEMOS?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Conoce nuestro proceso completo de gestión responsable del Aceite de Cocina Usado (ACU),
              desde la recolección hasta su transformación en biocombustible certificado.
            </p>
          </div>
        </div>
      </section>

      {/* ACU Definition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">
                ACEITE VEGETAL USADO (ACU)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                El Aceite de Cocina Usado (ACU) es un residuo generado tras la fritura de alimentos. 
                Al ser expuesto a temperaturas mayores a 190°C, sufre alteraciones físicas y químicas, 
                lo que lo convierte en un desecho potencialmente contaminante.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              ¿CÓMO RECICLAMOS EL ACEITE?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestro proceso certificado garantiza la trazabilidad completa y el aprovechamiento responsable del ACU.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center mb-12">
                <Card className="w-full max-w-2xl hover:shadow-medium transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <ArrowDown className="h-8 w-8 text-primary mt-6 mb-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informal Collectors Warning */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="flex items-center justify-center space-x-4">
              <AlertTriangle className="h-12 w-12 text-destructive" />
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                No entregues tu aceite a recolectores informales
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A pesar de que parezca una solución rápida, entregar tu Aceite de Cocina Usado (ACU) 
              a recolectores no autorizados puede tener graves consecuencias para la salud y el ambiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {informalRisks.map((risk, index) => (
              <Card key={index} className="border-destructive/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <risk.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{risk.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{risk.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Legal Compliance */}
          <Card className="bg-primary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-3xl font-bold">¿Qué dice la ley?</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                Según la Resolución 0316 de 2018, el único destino permitido para el ACU en Colombia 
                es la producción de biocombustibles.
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                Solo los gestores autorizados, como GRASASBIO S.A.S., pueden recolectarlo y 
                garantizar trazabilidad y disposición legal.
              </p>
              <div className="flex items-center justify-center space-x-4 pt-4">
                <CheckCircle className="h-8 w-8 text-accent-orange" />
                <span className="text-xl font-semibold">BIOCOMBUSTIBLE CERTIFICADO</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              ¡Evita riesgos y contribuye al cuidado del medio ambiente!
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Entrega tu ACU a gestores autorizados y solicita tu certificado 
              de recolección y aprovechamiento final.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-accent-orange text-accent-orange-foreground hover:opacity-90 shadow-orange">
                Quiero entregar mi aceite correctamente
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Solicita tu certificado
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proceso;