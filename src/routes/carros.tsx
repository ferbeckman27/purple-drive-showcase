import { createFileRoute } from "@tanstack/react-router";
import { CarCard } from "@/components/CarCard";
import { cars } from "@/data/cars";

export const Route = createFileRoute("/carros")({
  head: () => ({
    meta: [
      { title: "Coleção — Velocity Motors" },
      { name: "description", content: "Explore nossa coleção exclusiva de supercarros: Porsche, Ferrari, Lamborghini e McLaren." },
      { property: "og:title", content: "Coleção de Supercarros — Velocity" },
      { property: "og:description", content: "Performance, exclusividade e design no mais alto nível." },
    ],
  }),
  component: CarrosPage,
});

function CarrosPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mb-16 animate-fade-in-up">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-glow font-semibold mb-4">
          Coleção exclusiva
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Nossos <span className="text-gradient">supercarros</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Cada veículo da nossa coleção é selecionado a dedo. Engenharia premiada, performance
          extrema e o status que apenas poucos conseguem alcançar.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
        {cars.map((car, i) => (
          <CarCard key={car.id} car={car} index={i} />
        ))}
      </div>
    </div>
  );
}