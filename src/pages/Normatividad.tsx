import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Shield, 
  CheckCircle, 
  Building,
  Download,
  ExternalLink,
  Scale,
  Users,
  MapPin
} from "lucide-react";

const Normatividad = () => {
  const regulations = [
    {
      title: "RESOLUCIÓN 0316 DE 2018",
      subtitle: "Ministerio de Ambiente y Desarrollo Sostenible",
      scope: "Nacional",
      objective: "Establecer requisitos para la gestión integral del ACU",
      appliesTo: [
        "Productores, distribuidores y comercializadores de aceite vegetal comestible",
        "Generadores (hogares, restaurantes, hoteles, industria)",
        "Gestores y transportadores"
      ],
      obligations: [
        "Almacenar el ACU en recipientes adecuados",
        "Entregarlo solo a gestores autorizados",
        "Mantener registros de recolección",
        "No verterlo en redes de alcantarillado o fuentes hídricas",
        "Fomentar el aprovechamiento para biocombustibles"
      ],
      downloadUrl: "https://www.minambiente.gov.co/wp-content/uploads/2021/08/resolucion-0316-de-2018.pdf"
    },
    {
      title: "ACUERDO 634 DE 2015",
      subtitle: "Concejo de Bogotá D.C.",
      scope: "Distrital (Bogotá)",
      objective: "Promover la recolección, transporte y aprovechamiento del ACU",
      appliesTo: [
        "Entidades distritales, generadores y gestores dentro de Bogotá"
      ],
      obligations: [
        "Campañas de recolección y educación ciudadana",
        "Prohibición de verter ACU en alcantarillas",
        "Recolección solo con empresas inscritas en la Secretaria Distrital de Ambiente",
        "Incentivos y alianzas público-privadas"
      ],
      downloadUrl: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=64353&dt=S"
    }
  ];

  const comparisonData = [
    { aspect: "Ámbito", res316: "Nacional", acuerdo634: "Bogotá D.C." },
    { aspect: "Foco", res316: "Gestión integral del ACU", acuerdo634: "Promoción y prevención" },
    { aspect: "Obliga a", res316: "Productores, distribuidores, Generadores, gestores", acuerdo634: "Entes distritales, generadores y gestores" },
    { aspect: "Prohíbe", res316: "Vertimiento y entrega a terceros no autorizados", acuerdo634: "Disposición en alcantarillado y no inscripción" },
    { aspect: "Control", res316: "Autoridades ambientales (CAR)", acuerdo634: "Secretaría Distrital de Ambiente" },
    { aspect: "Fomenta", res316: "Aprovechamiento como biocombustible", acuerdo634: "Alianzas y campañas de sensibilización" }
  ];

  const environmentalAuthorities = [
    "SDA - Secretaría Distrital de Ambiente",
    "CAR - Corporación Autónoma Regional de Cundinamarca",
    "CORPOAMAZONIA - Corporación para el Desarrollo Sostenible del Sur de la Amazonia",
    "CORPOMOJANA - Corporación para el Desarrollo Sostenible de la Mojana y el San Jorge",
    "DAGM - Departamento Administrativo de Gestión del Medio Ambiente de Santiago de Cali",
    "CAM - Corporación Autónoma Regional del Alto Magdalena",
    "CORANTIOQUIA - Corporación Autónoma Regional del Centro de Antioquia",
    "CORPOBOYACA - Corporación Autónoma Regional de Boyacá"
  ];

  const compliance = [
    "Contamos con personal capacitado y vehículos autorizados",
    "Estamos inscritos ante la Secretaría Distrital de Ambiente y diferentes Corporaciones Autónomas Regionales",
    "Emitimos certificados digitales de recolección, transporte y aprovechamiento final",
    "Garantizamos la trazabilidad del residuo desde su origen hasta su aprovechamiento",
    "Apoyamos a nuestros aliados en el cumplimiento legal y documental"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold font-monaco">
              NORMATIVIDAD
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Comprometidos con la ley y el medio ambiente
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              En GRASASBIO S.A.S. operamos bajo el cumplimiento estricto de la normatividad ambiental 
              vigente en Colombia y Bogotá para la gestión responsable del Aceite de Cocina Usado (ACU).
            </p>
            <p className="text-lg opacity-80">
              Te acompañamos para que tu empresa también lo cumpla: con trazabilidad, 
              documentación al día y gestores certificados.
            </p>
          </div>
        </div>
      </section>

      {/* Regulations Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              ¿Qué normas aplican al ACU?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Te presentamos las principales disposiciones legales que regulan la gestión de este residuo:
            </p>
          </div>

          <div className="space-y-12">
            {regulations.map((regulation, index) => (
              <Card key={index} className="shadow-strong">
                <CardHeader className="bg-primary text-primary-foreground">
                  <div className="flex items-center space-x-4">
                    <Scale className="h-8 w-8" />
                    <div>
                      <CardTitle className="text-2xl">{regulation.title}</CardTitle>
                      <p className="text-lg opacity-90">{regulation.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Ámbito:</span>
                        <span>{regulation.scope}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <FileText className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <span className="font-semibold">Objetivo:</span>
                          <p className="text-muted-foreground">{regulation.objective}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Users className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <span className="font-semibold">Aplica a:</span>
                          <ul className="text-muted-foreground space-y-1">
                            {regulation.appliesTo.map((item, i) => (
                              <li key={i} className="text-sm">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <div className="w-full">
                        <span className="font-semibold">Obligaciones destacadas:</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          {regulation.obligations.map((obligation, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{obligation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button asChild>
                      <a href={regulation.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar Norma Completa
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Comparativo Normativo
            </h2>
          </div>

          <Card className="max-w-6xl mx-auto shadow-strong">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 text-left font-semibold">Aspecto</th>
                      <th className="p-4 text-left font-semibold">Resolución 0316 de 2018</th>
                      <th className="p-4 text-left font-semibold">Acuerdo 634 de 2015</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                        <td className="p-4 font-semibold text-foreground">{row.aspect}</td>
                        <td className="p-4 text-muted-foreground">{row.res316}</td>
                        <td className="p-4 text-muted-foreground">{row.acuerdo634}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              ¿Cómo cumplimos desde GRASASBIO S.A.S.?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos comprometidos con el cumplimiento normativo y trabajamos bajo los más altos estándares legales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ul className="space-y-4">
                {compliance.map((item, index) => (
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
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Building className="mr-3 h-6 w-6 text-primary" />
                  Autoridades Ambientales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Estamos registrados ante las siguientes entidades:
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {environmentalAuthorities.map((authority, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-primary-light rounded">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">{authority}</span>
                    </div>
                  ))}
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
              Cumple con la ley. Protege el agua. Confía en GRASASBIO.
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Te ayudamos a cumplir con toda la normatividad vigente y a mantener 
              tu documentación al día para evitar sanciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-accent-orange text-accent-orange-foreground hover:opacity-90 shadow-orange">
                Solicita asesoría normativa
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <FileText className="mr-2 h-5 w-5" />
                Descargar Normas
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Normatividad;