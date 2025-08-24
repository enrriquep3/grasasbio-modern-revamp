import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Download, 
  ExternalLink, 
  Globe, 
  Leaf, 
  Shield, 
  Target,
  Users,
  FileCheck
} from "lucide-react";
import isccLogoNew from "@/assets/iscc-logo-new.png";

const Sostenibilidad = () => {
  const certificationBenefits = [
    {
      icon: Leaf,
      title: "Prácticas Sostenibles",
      description: "Aplicamos prácticas sostenibles en toda la cadena de valor del ACU"
    },
    {
      icon: Target,
      title: "Reducción de Huella de Carbono",
      description: "Medimos y reducimos nuestra huella de carbono de manera continua"
    },
    {
      icon: Shield,
      title: "Trazabilidad Completa",
      description: "Trazabilidad en procesos de recolección, transporte y valorización"
    },
    {
      icon: Globe,
      title: "Estándares Internacionales",
      description: "Cumplimiento con normativas ambientales europeas y globales"
    },
    {
      icon: Users,
      title: "Objetivos ODS",
      description: "Contribución directa a los Objetivos de Desarrollo Sostenible"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold font-monaco">
              SOSTENIBILIDAD
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Nuestra Operación Avalada por Certificaciones Internacionales
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              En GRASASBIO S.A.S. nos regimos bajo estándares internacionales de sostenibilidad. 
              calidad y trazabilidad. Actualmente. operamos bajo el esquema voluntario de 
              certificación ISCC (International Sustainability and Carbon Certification).
            </p>
          </div>
        </div>
      </section>

      {/* ISCC Certification Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={isccLogoNew} 
                  alt="ISCC Certification" 
                  className="h-20 w-auto"
                />
                <div>
                  <h2 className="text-4xl font-bold text-foreground">
                    Certificación ISCC
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    International Sustainability and Carbon Certification
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                ISCC es un sistema internacional de certificación reconocido por la Unión Europea 
                que garantiza el cumplimiento de criterios ambientales. sociales y económicos en 
                la producción y aprovechamiento sostenible de biomasa y residuos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 shadow-green">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar Certificación ISCC
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    href="https://www.iscc-system.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Más información sobre ISCC
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Award className="mr-3 h-6 w-6 text-primary" />
                  Esta certificación nos reconoce por:
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {certificationBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <benefit.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="text-foreground font-semibold">{benefit.title}:</span>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Nuestro Compromiso Ambiental
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trabajamos día a día para reducir el impacto ambiental y contribuir 
              a un futuro más sostenible para todos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="h-10 w-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">10.435.689</h3>
                <p className="text-muted-foreground">Kg de ACU procesados de manera sostenible</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">40.000</h3>
                <p className="text-muted-foreground">Litros de agua protegida por cada litro de ACU</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-20 h-20 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-10 w-10 text-accent-orange" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">7.900</h3>
                <p className="text-muted-foreground">Clientes comprometidos con la sostenibilidad</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              ¿Ya estás vinculado con nosotros?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Si ya eres nuestro cliente. puedes solicitar tu certificado ISCC 
              y demostrar tu compromiso con la sostenibilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-accent-orange text-accent-orange-foreground hover:opacity-90 shadow-orange">
                <FileCheck className="mr-2 h-5 w-5" />
                Solicita tu Certificado ISCC
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Conoce más sobre Sostenibilidad
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sostenibilidad;