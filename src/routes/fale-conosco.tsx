import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/fale-conosco")({
  head: () => ({
    meta: [
      { title: "Fale Conosco — Velocity Motors" },
      { name: "description", content: "Entre em contato com nossa equipe e agende seu test-drive exclusivo." },
      { property: "og:title", content: "Fale Conosco — Velocity Motors" },
      { property: "og:description", content: "Agende um test-drive ou tire suas dúvidas." },
    ],
  }),
  component: FaleConoscoPage,
});

function FaleConoscoPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Mensagem enviada!", {
        description: "Em breve nossa equipe entrará em contato.",
      });
    }, 900);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <Toaster />
      <div className="max-w-3xl mb-12 animate-fade-in-up">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-glow font-semibold mb-4">
          Estamos prontos
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Fale <span className="text-gradient">conosco</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Agende um test-drive privado, solicite uma cotação ou converse com nossos especialistas.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4 animate-slide-in-left">
          <ContactItem icon={<Phone />} title="Telefone" value="+55 (11) 4000-0911" />
          <ContactItem icon={<Mail />} title="E-mail" value="contato@velocity.com.br" />
          <ContactItem icon={<MapPin />} title="Showroom" value="Av. Paulista, 1500 — São Paulo" />
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 bg-gradient-card border border-border rounded-3xl p-8 md:p-10 shadow-elegant animate-fade-in-up space-y-5"
          style={{ animationDelay: "200ms" }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field name="nome" label="Nome" required />
            <Field name="email" label="E-mail" type="email" required />
          </div>
          <Field name="telefone" label="Telefone" />
          <Field name="modelo" label="Modelo de interesse" placeholder="Ex.: Lamborghini Aventador S" />
          <div className="space-y-2">
            <label className="text-sm font-medium">Mensagem</label>
            <textarea
              name="mensagem"
              required
              rows={5}
              className="w-full rounded-xl bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
              placeholder="Como podemos ajudar?"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground font-semibold py-4 shadow-glow hover:scale-[1.02] transition-smooth disabled:opacity-60"
          >
            {loading ? "Enviando..." : (<>Enviar mensagem <Send className="h-4 w-4" /></>)}
          </button>
        </form>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-card border border-border hover-lift">
      <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="font-semibold mt-1">{value}</p>
      </div>
    </div>
  );
}

function Field({
  name, label, type = "text", required, placeholder,
}: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}{required && <span className="text-primary-glow"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
      />
    </div>
  );
}