import { Coffee } from "../components/Product";

export const menu: Coffee[] = [
    {
      id: 1,
      tags: ["espresso", "strong"],
      img: {
        url: "./src/assets/products/Image-1.png"
      },
      name: "Espresso",
      description: "Um café forte e encorpado, perfeito para um impulso rápido de energia.",
      price: 4.50
    },
    {
      id: 2,
      tags: ["latte", "milky"],
      img: {
        url: "./src/assets/products/Image-2.png"
      },
      name: "Latte",
      description: "Uma mistura suave de espresso e leite vaporizado, ideal para uma manhã relaxante.",
      price: 5.00
    },
    {
      id: 3,
      tags: ["cappuccino", "foamy"],
      img: {
        url: "./src/assets/products/Image-3.png"
      },
      name: "Cappuccino",
      description: "Um café clássico com espuma de leite cremosa por cima, perfeito para qualquer momento do dia.",
      price: 4.75
    },
    {
      id: 4,
      tags: ["americano", "smooth"],
      img: { 
        url: "./src/assets/products/Image-4.png"
      },
      name: "Americano",
      description: "Um café diluído e suave, ótimo para saborear por um longo período.",
      price: 3.50
    },
    {
      id: 5,
      tags: ["mocha", "chocolate"],
      img: {
        url: "./src/assets/products/Image-5.png"
      },
      name: "Mocha",
      description: "Uma deliciosa combinação de café, leite e chocolate, perfeita para os amantes de doce.",
      price: 5.25
    }
  ];