import { Sprout, Stethoscope, Home, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Sprout,
      title: "Produtos agropecuários",
      description: "Ampla linha de produtos para agricultura e pecuária, com qualidade garantida e orientação técnica especializada.",
      color: "primary",
    },
    {
      icon: Stethoscope,
      title: "Serviços veterinários",
      description: "Atendimento veterinário profissional para garantir a saúde e bem-estar dos seus animais.",
      color: "accent",
    },
    {
      icon: Home,
      title: "Produtos para o lar",
      description: "Soluções práticas e de qualidade para o dia a dia da sua casa e propriedade rural.",
      color: "primary",
    },
    {
      icon: Package,
      title: "Insumos e equipamentos",
      description: "Fornecimento de insumos agrícolas e equipamentos essenciais para otimizar sua produção.",
      color: "accent",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nossos serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para o produtor rural e bem-estar animal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isAccent = service.color === "accent";
            
            return (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-${service.color}/20 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 text-center">
                  <div
                    className={`w-16 h-16 ${
                      isAccent ? "bg-accent/10" : "bg-primary/10"
                    } rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${isAccent ? "text-accent" : "text-primary"}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
