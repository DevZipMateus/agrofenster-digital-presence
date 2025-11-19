import { MapPin, Clock, Mail, Instagram, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
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
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Slogan */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Agrofenster" className="h-12 w-auto" />
              <span className="text-xl font-bold">Agrofenster</span>
            </div>
            <p className="text-background/80 mb-4">A fenster do agro</p>
            <p className="text-sm text-background/70 leading-relaxed">
              Referência em produtos e serviços agropecuários no Sudoeste, com atendimento especializado e compromisso com a qualidade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              {[
                { id: "inicio", label: "Início" },
                { id: "sobre", label: "Sobre" },
                { id: "servicos", label: "Serviços" },
                { id: "contato", label: "Contato" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Horário de funcionamento
            </h3>
            <div className="space-y-2 text-sm text-background/80">
              <div>
                <p className="font-semibold text-background">Segunda a sexta</p>
                <p>08:00 - 12:00</p>
                <p>13:30 - 18:00</p>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-background">Sábado</p>
                <p>08:00 - 12:00</p>
                <p>13:30 - 16:00</p>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://instagram.com/agrofenster"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@agrofenster</span>
              </a>
              <a
                href="mailto:denizefenster@gmail.com"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="break-all">denizefenster@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Av. Brasil, 738</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-background/20 pt-6">
          <div className="text-center text-sm text-background/70">
            <p>© {new Date().getFullYear()} Agrofenster. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
