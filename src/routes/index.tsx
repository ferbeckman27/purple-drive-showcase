import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Trophy, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { CarCard } from "@/components/CarCard";
import { cars } from "@/data/cars";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velocity — Supercarros que definem velocidade" },
      { name: "description", content: "Concessionária premium de carros esportivos. Porsche, Ferrari, Lamborghini, McLaren e mais." },
      { property: "og:title", content: "Velocity — Supercarros que definem velocidade" },
      { property: "og:description", content: "Concessionária premium de carros esportivos." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden -mt-20 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.62_0.25_300/30%),transparent_60%)]" aria-hidden />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              <span className="text-xs font-medium uppercase tracking-wider">Nova coleção 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95]">
              Onde a <span className="text-gradient">velocidade</span> encontra o desejo
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Os supercarros mais exclusivos do mundo, reunidos em um único showroom.
              Performance absoluta, design icônico, experiência inesquecível.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/carros"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-smooth animate-glow-pulse"
              >
                Ver coleção <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/fale-conosco"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border bg-card/40 backdrop-blur font-semibold hover:bg-card transition-smooth"
              >
                Agendar test-drive
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md">
              <Stat value="50+" label="Modelos" />
              <Stat value="15" label="Marcas" />
              <Stat value="100%" label="Originais" />
            </div>
          </div>

          <div className="hidden lg:block animate-drive-in" style={{ animationDelay: "300ms" }}>
            <img
              src={cars[2].image}
              alt="Lamborghini Aventador S"
              className="w-full animate-float drop-shadow-[0_30px_60px_oklch(0.62_0.25_300/0.5)]"
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Trophy />, title: "Curadoria premium", desc: "Apenas supercarros selecionados, com procedência impecável." },
            { icon: <Shield />, title: "Garantia total", desc: "Vistoria mecânica completa e garantia exclusiva Velocity." },
            { icon: <Sparkles />, title: "Experiência VIP", desc: "Test-drive privado, financiamento sob medida e atendimento dedicado." },
          ].map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-gradient-card border border-border hover-lift animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-glow font-semibold mb-3">
              Em destaque
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Máquinas que <span className="text-gradient">aceleram o coração</span>
            </h2>
          </div>
          <Link
            to="/carros"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:text-foreground transition-smooth"
          >
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cars.slice(0, 4).map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(1_0_0/20%),transparent_70%)]" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground tracking-tight">
              Pronto para acelerar?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Agende uma visita exclusiva ao nosso showroom e viva uma experiência única.
            </p>
            <Link
              to="/fale-conosco"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-semibold hover:scale-105 transition-smooth"
            >
              Falar com um especialista <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-extrabold text-gradient">{value}</p>
      <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
