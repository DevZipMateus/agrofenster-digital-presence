import { MapPin, Clock, Mail, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Entre em contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-primary/20 hover:shadow-lg transition-shadow animate-fade-in">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Endereço</h3>
              <p className="text-muted-foreground">Av. Brasil, 738</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Horário</h3>
              <p className="text-muted-foreground text-sm">
                Segunda a sexta<br />
                08:00 - 12:00 | 13:30 - 18:00
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Sábado<br />
                08:00 - 12:00 | 13:30 - 16:00
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
              <a
                href="mailto:denizefenster@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
              >
                denizefenster@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Instagram</h3>
              <a
                href="https://instagram.com/agrofenster"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                @agrofenster
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
