import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import customerServiceImg from "@/assets/customer-service.jpg";

const About = () => {
  const values = [
    "Compromisso com o cliente: Atendimento próximo, respeitoso e transparente",
    "Qualidade: Trabalhar sempre com produtos e serviços de alto padrão",
    "Confiança: Relações baseadas em honestidade, ética e credibilidade",
    "Inovação: Buscar constantemente novas soluções para o campo e para o bem-estar animal",
    "Responsabilidade: Cuidar do meio ambiente, dos animais e da comunidade",
    "Dedicação: Entregar o melhor, todos os dias, com amor pelo que fazemos",
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Sobre nós</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso, qualidade e dedicação ao setor agropecuário
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-primary/20 hover:shadow-lg transition-shadow animate-fade-in">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer produtos e serviços de qualidade para o setor agropecuário e para o lar, proporcionando soluções práticas, atendimento acolhedor e orientação técnica confiável. Buscamos apoiar o produtor rural, promover bem-estar animal e contribuir para o desenvolvimento sustentável da região.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como a principal referência agropecuária da região Sudoeste, destacando-se pela confiança, inovação, atendimento humanizado e pela oferta de serviços veterinários e soluções completas para nossos clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
              <ul className="text-left space-y-3 text-muted-foreground">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1 flex-shrink-0">✓</span>
                    <span className="text-sm leading-relaxed">{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Imagem de atendimento */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <img 
            src={customerServiceImg} 
            alt="Atendimento especializado Agrofenster" 
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
