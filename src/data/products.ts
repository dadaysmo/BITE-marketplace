import brownieTradicional from "@/assets/brownie-tradicional.png";
import brownieMorango from "@/assets/brownie-morango.png";
import browniePistache from "@/assets/brownie-pistache.png";
import brownieSorvete from "@/assets/brownie-sorvete.png";
import boloBrownie from "@/assets/bolo-brownie.png";
import brownieMenta from "@/assets/brownie-menta.png";
import brownieRecheado from "@/assets/brownie-recheado.png";
import brownieBanana from "@/assets/brownie-banana.png";
import brownieBeijinho from "@/assets/brownie-beijinho.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "destaque" | "bolo" | "recheado";
  isHighlight?: boolean;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Brownie Tradicional",
    description: "Nosso clássico brownie de chocolate belga, com textura densa e sabor intenso. Perfeito para os amantes de chocolate puro.",
    price: 5.50,
    image: brownieTradicional,
    category: "destaque",
    isHighlight: false,
    rating: 4.5,
    reviews: [
      {
        id: "r1",
        userName: "Maria dos Santos",
        rating: 4,
        title: "Gosto agradável",
        comment: "O preço está justo pela qualidade oferecida",
        date: "12/11/2025",
      },
      {
        id: "r2",
        userName: "Joana Antonia",
        rating: 5,
        title: "Compraria de novo",
        comment: "Gostei bastante!",
        date: "11/11/2025",
      },
    ],
  },
  {
    id: "2",
    name: "Brownie de Morango",
    description: "Brownie de chocolate com recheio cremoso de morango e morangos frescos por cima. Uma explosão de sabores.",
    price: 7.00,
    image: brownieMorango,
    category: "destaque",
    isHighlight: true,
    rating: 4.8,
    reviews: [
      {
        id: "r3",
        userName: "Carlos Silva",
        rating: 5,
        title: "Melhor brownie!",
        comment: "Os morangos frescos fazem toda a diferença",
        date: "10/11/2025",
      },
    ],
  },
  {
    id: "3",
    name: "Brownie de Pistache",
    description: "Brownie especial com creme de pistache italiano e pistaches crocantes. Um sabor único e sofisticado.",
    price: 6.50,
    image: browniePistache,
    category: "destaque",
    isHighlight: true,
    rating: 4.7,
    reviews: [
      {
        id: "r4",
        userName: "Ana Paula",
        rating: 5,
        title: "Sensacional",
        comment: "O creme de pistache é divino!",
        date: "09/11/2025",
      },
    ],
  },
  {
    id: "4",
    name: "Brownie com Sorvete",
    description: "Brownie quentinho servido com uma bola de sorvete de baunilha e calda de chocolate. Pura indulgência.",
    price: 12.00,
    image: brownieSorvete,
    category: "destaque",
    isHighlight: false,
    rating: 4.9,
    reviews: [
      {
        id: "r5",
        userName: "Pedro Lima",
        rating: 5,
        title: "Perfeito!",
        comment: "Combinação quente e frio é sensacional",
        date: "08/11/2025",
      },
    ],
  },
  {
    id: "5",
    name: "Bolo de Brownie",
    description: "Torre de brownies empilhados com cobertura de brigadeiro gourmet. Ideal para compartilhar em ocasiões especiais.",
    price: 8.50,
    image: boloBrownie,
    category: "bolo",
    isHighlight: true,
    rating: 4.6,
    reviews: [
      {
        id: "r6",
        userName: "Fernanda Costa",
        rating: 5,
        title: "Incrível!",
        comment: "Cada camada é uma surpresa deliciosa",
        date: "07/11/2025",
      },
    ],
  },
  {
    id: "6",
    name: "Brownie de Chocolate com Menta",
    description: "O sabor diferenciado da menta faz toda diferença! Brownie de chocolate com camada cremosa de menta.",
    price: 7.50,
    image: brownieMenta,
    category: "bolo",
    isHighlight: false,
    rating: 4.4,
    reviews: [
      {
        id: "r7",
        userName: "Lucas Ferreira",
        rating: 4,
        title: "Refrescante",
        comment: "Ótimo para quem gosta de menta",
        date: "06/11/2025",
      },
    ],
  },
  {
    id: "7",
    name: "Brownie Recheado de Chocolate",
    description: "Um dos mais deliciosos da loja! Brownie com recheio cremoso de chocolate belga derretido.",
    price: 8.50,
    image: brownieRecheado,
    category: "recheado",
    isHighlight: true,
    rating: 4.8,
    reviews: [
      {
        id: "r8",
        userName: "Maria dos Santos",
        rating: 4,
        title: "Gosto agradável",
        comment: "O preço está justo pela qualidade oferecida",
        date: "12/11/2025",
      },
      {
        id: "r9",
        userName: "Joana Antonia",
        rating: 5,
        title: "Compraria de novo",
        comment: "Gostei bastante!",
        date: "11/11/2025",
      },
      {
        id: "r10",
        userName: "João Ribeiro",
        rating: 3,
        title: "Achei razoavel",
        comment: "Nada mal.",
        date: "10/11/2025",
      },
    ],
  },
  {
    id: "8",
    name: "Brownie de Banana",
    description: "Brownie úmido com banana caramelizada e chips de chocolate. Um sabor tropical irresistível.",
    price: 5.70,
    image: brownieBanana,
    category: "recheado",
    isHighlight: false,
    rating: 4.3,
    reviews: [
      {
        id: "r11",
        userName: "Roberto Nunes",
        rating: 4,
        title: "Muito bom",
        comment: "A banana caramelizada é perfeita",
        date: "05/11/2025",
      },
    ],
  },
  {
    id: "9",
    name: "Brownie de Beijinho",
    description: "Brownie de chocolate com cobertura cremosa de beijinho e granulado colorido. Sabor brasileiro!",
    price: 11.50,
    image: brownieBeijinho,
    category: "recheado",
    isHighlight: true,
    rating: 4.7,
    reviews: [
      {
        id: "r12",
        userName: "Juliana Alves",
        rating: 5,
        title: "Delicioso!",
        comment: "O beijinho está no ponto certo",
        date: "04/11/2025",
      },
    ],
  },
];

export const getProductsByCategory = (category: Product["category"]) => {
  return products.filter((p) => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find((p) => p.id === id);
};

export const getHighlightProducts = () => {
  return products.filter((p) => p.isHighlight);
};
