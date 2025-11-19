import { Sprout, Stethoscope, Home, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import feedProductsImg from "@/assets/feed-products.jpg";
import veterinaryServiceImg from "@/assets/veterinary-service.jpg";
import farmToolsImg from "@/assets/farm-tools.jpg";

const Services = () => {
  const services = [
    {
      icon: Sprout,
      title: "Produtos agropecuários",
      description: "Ampla linha de produtos para agricultura e pecuária, com qualidade garantida e orientação técnica especializada.",
      color: "primary",
      image: feedProductsImg,
    },
    {
      icon: Stethoscope,
      title: "Serviços veterinários",
      description: "Atendimento veterinário profissional para garantir a saúde e bem-estar dos seus animais.",
      color: "accent",
      image: veterinaryServiceImg,
    },
    {
      icon: Home,
      title: "Produtos para o lar",
      description: "Soluções práticas e de qualidade para o dia a dia da sua casa e propriedade rural.",
      color: "primary",
      image: farmToolsImg,
    },
    {
      icon: Package,
      title: "Insumos e equipamentos",
      description: "Fornecimento de insumos agrícolas e equipamentos essenciais para otimizar sua produção.",
      color: "accent",
      image: feedProductsImg,
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
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-${service.color}/20 animate-fade-in overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div
                    className={`absolute bottom-4 left-4 w-12 h-12 ${
                      isAccent ? "bg-accent/90" : "bg-primary/90"
                    } rounded-full flex items-center justify-center backdrop-blur-sm`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="pt-6 text-center">
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
