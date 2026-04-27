import { Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Gauge as GaugeIcon, Timer } from "lucide-react";
import type { Car } from "@/data/cars";

export function CarCard({ car, index = 0 }: { car: Car; index?: number }) {
  return (
    <article
      className="group relative overflow-hidden rounded-3xl bg-gradient-card border border-border hover-lift animate-fade-in-up"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth pointer-events-none" />

      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-secondary to-card flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.25_300/30%),transparent_70%)]" />
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          loading="lazy"
          className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-2xl"
        />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow font-semibold">
            {car.brand}
          </p>
          <h3 className="text-2xl font-bold mt-1">{car.name}</h3>
          <p className="text-sm text-muted-foreground italic mt-1">{car.tagline}</p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {car.description}
        </p>

        <div className="grid grid-cols-3 gap-2 py-3 border-y border-border">
          <Spec icon={<Zap className="h-3.5 w-3.5" />} label={car.specs.power} />
          <Spec icon={<GaugeIcon className="h-3.5 w-3.5" />} label={car.specs.topSpeed} />
          <Spec icon={<Timer className="h-3.5 w-3.5" />} label={car.specs.acceleration} />
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-gradient">{car.price}</span>
          <Link
            to="/fale-conosco"
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
          >
            Saiba mais <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-1">
      <span className="text-primary-glow">{icon}</span>
      <span className="text-[11px] font-medium text-muted-foreground">{label}</span>
    </div>
  );
}