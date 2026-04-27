import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Gauge } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/carros", label: "Carros" },
  { to: "/fale-conosco", label: "Fale Conosco" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-primary shadow-glow group-hover:animate-glow-pulse">
            <Gauge className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            VELOCITY<span className="text-gradient">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-primary after:transition-all hover:after:w-full"
              activeProps={{ className: "text-foreground after:w-full" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}