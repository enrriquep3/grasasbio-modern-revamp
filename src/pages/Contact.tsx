import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, Users, MessageSquare, FileCheck } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "(601) 7618796",
      action: "tel:6017618796"
    },
    {
      icon: Mail,
      title: "Email",
      content: "comercial@grasasbio.com",
      action: "mailto:comercial@grasasbio.com"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Bogotá, Colombia",
      action: null
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lunes a Viernes: 7:00 AM - 5:00 PM",
      action: null
    }
  ];

  const services = [
    "Recolección de ACU",
    "Procesamiento y Valorización", 
    "Gestión Ambiental",
    "Certificación y Documentación",
    "Capacitación y Asesoría",
    "Consultoría Ambiental",
    "Otro"
  ];

  const reasons = [
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Equipo especializado para atender tus necesidades específicas."
    },
    {
      icon: MessageSquare,
      title: "Respuesta Rápida",
      description: "Respondemos a todas las consultas en máximo 24 horas."
    },
    {
      icon: FileCheck,
      title: "Cotización Gratuita",
      description: "Evaluación sin costo y propuesta personalizada para tu empresa."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              Contáctanos
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estamos aquí para ayudarte con la gestión responsable de tus aceites de cocina usados. 
              Contacta con nuestro equipo de expertos y obtén una solución personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow duration-300 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary-light rounded-2xl flex items-center justify-center">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                    {info.action ? (
                      <a 
                        href={info.action} 
                        className="text-muted-foreground hover:text-primary transition-colors inline-block"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-3xl text-foreground">Envíanos un Mensaje</CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(601) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Servicio de Interés</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Cuéntanos sobre tus necesidades y cómo podemos ayudarte..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-green">
                    Enviar Mensaje
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Why Contact Us */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  ¿Por Qué Contactarnos?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  En GrasasBio estamos comprometidos con brindar el mejor servicio y atención 
                  a nuestros clientes. Aquí te explicamos por qué somos tu mejor opción.
                </p>
              </div>

              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <Card key={index} className="scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                          <reason.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Direct Contact */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="text-2xl font-bold">¿Necesitas Atención Inmediata?</h3>
                  <p className="opacity-90">
                    Llámanos directamente y uno de nuestros especialistas te atenderá de inmediato.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-accent-orange text-accent-orange-foreground hover:opacity-90 shadow-orange"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar Ahora: (601) 7618796
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Áreas de Servicio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Brindamos nuestros servicios en todo el territorio colombiano, 
              con sede principal en Bogotá y cobertura nacional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <MapPin className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Bogotá y Cundinamarca</h3>
                <p className="text-muted-foreground">Cobertura completa en la capital y municipios aledaños</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <MapPin className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Principales Ciudades</h3>
                <p className="text-muted-foreground">Medellín, Cali, Barranquilla, Cartagena y más</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <MapPin className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Cobertura Nacional</h3>
                <p className="text-muted-foreground">Servicios especializados en todo el territorio colombiano</p>
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
              ¿Listo para Comenzar?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              No esperes más para implementar una gestión responsable de aceites usados en tu empresa. 
              Contáctanos hoy y comienza a hacer la diferencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-accent-orange text-accent-orange-foreground hover:opacity-90 shadow-orange">
                Solicita tu Cotización Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;