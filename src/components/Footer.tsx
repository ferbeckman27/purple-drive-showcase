import { Gauge, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Gauge className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold">VELOCITY<span className="text-gradient">.</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            A concessionária dos sonhos. Onde performance encontra exclusividade.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Showroom</h4>
          <p className="text-sm text-muted-foreground">Av. Paulista, 1500<br />São Paulo — SP</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Siga-nos</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-gradient-primary transition-smooth"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 Velocity Motors. Todos os direitos reservados.
      </div>
    </footer>
  );
}