import porsche from "@/assets/porsche.png";
import ferrari from "@/assets/ferrari.png";
import lamborghini from "@/assets/lamborghini.png";
import mclaren from "@/assets/mclaren.png";

export type Car = {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  description: string;
  image: string;
  specs: { power: string; topSpeed: string; acceleration: string };
  price: string;
};

export const cars: Car[] = [
  {
    id: "porsche-911-turbo-s",
    name: "911 Turbo S",
    brand: "Porsche",
    tagline: "Precisão alemã em estado puro",
    description:
      "O ícone esportivo redefinido. Motor biturbo de 3.8L que entrega resposta instantânea, tração integral inteligente e o design atemporal que atravessa gerações.",
    image: porsche,
    specs: { power: "650 cv", topSpeed: "330 km/h", acceleration: "2.7s 0-100" },
    price: "R$ 2.890.000",
  },
  {
    id: "ferrari-portofino-m",
    name: "Portofino M",
    brand: "Ferrari",
    tagline: "Elegância italiana, alma de pista",
    description:
      "Conversível V8 turbo que combina luxo grand tourer com performance Ferrari. Capota retrátil em 14 segundos e um ronco que ecoa a tradição de Maranello.",
    image: ferrari,
    specs: { power: "620 cv", topSpeed: "320 km/h", acceleration: "3.45s 0-100" },
    price: "R$ 3.450.000",
  },
  {
    id: "lamborghini-aventador-s",
    name: "Aventador S",
    brand: "Lamborghini",
    tagline: "Toro indomável de Sant'Agata",
    description:
      "V12 aspirado naturalmente de 6.5 litros. Direção nas quatro rodas, modos de condução exclusivos e o design angular que define o que um supercarro deve ser.",
    image: lamborghini,
    specs: { power: "740 cv", topSpeed: "350 km/h", acceleration: "2.9s 0-100" },
    price: "R$ 4.120.000",
  },
  {
    id: "mclaren-720s",
    name: "720S",
    brand: "McLaren",
    tagline: "Engenharia de Fórmula 1",
    description:
      "Chassi de fibra de carbono Monocage II, motor V8 biturbo de 4.0L e aerodinâmica ativa. A pureza de uma máquina concebida para dominar qualquer asfalto.",
    image: mclaren,
    specs: { power: "720 cv", topSpeed: "341 km/h", acceleration: "2.8s 0-100" },
    price: "R$ 3.980.000",
  },
];