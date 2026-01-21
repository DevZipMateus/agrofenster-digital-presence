import { Button } from "@/components/ui/button";
import { Instagram, Mail, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Agrofenster
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            A fenster do agro: soluções completas para o campo e bem-estar animal
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Referência em produtos e serviços agropecuários no Sudoeste, com atendimento especializado e compromisso com a qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary/20"
            >
              Entre em contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("sobre")}
              className="bg-white/10 text-white border-white/60 hover:bg-white hover:text-foreground backdrop-blur-sm"
            >
              Conheça mais
            </Button>
            <Link to="/vitrine">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Ver Vitrine
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://instagram.com/agrofenster"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@agrofenster</span>
            </a>
            <a
              href="mailto:denizefenster@gmail.com"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">denizefenster@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
