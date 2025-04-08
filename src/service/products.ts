import { Product } from "@/types/Product";

//variables necesarios para el producto
const PATH_IMAGE = "/images/coleccion/width_449_";
const EXTENSION_IMAGE = ".webp";

export const products: Product[] = [
  {
    id: "T1P1",
    name: "Polo Oversize Heredero del Rey",
    description: "Camiseta oversized de alta calidad, confeccionada en tela 17/1 y 20/1, garantizando suavidad, resistencia y durabilidad. Diseño exclusivo con estampado 'Heredero del Rey', ideal para un estilo urbano y moderno. Cómoda, transpirable y premium, perfecta para cualquier ocasión. Corte holgado que brinda libertad de movimiento y un ajuste relajado.",
    color: "Beige",
    size: "S-M",
    price: 59.99,
    images: [`${PATH_IMAGE}1_front${EXTENSION_IMAGE}`, `${PATH_IMAGE}1_back${EXTENSION_IMAGE}`],
    category: "polos",
    isNew: false
  },
  {
    id: "T1P2",
    name: "Polo Oversize Toda la Gloria sea al Rey",
    description: "Camiseta oversized de calidad premium, confeccionada en tela 17/1 y 20/1, suave, resistente y duradera. Diseño con estampado 'Toda la gloria sea al Rey', inspirado en Mateo 5:16. Cómoda y transpirable, ideal para cualquier ocasión. Corte holgado que brinda un ajuste relajado y libertad de movimiento con estilo moderno.",
    color: "Rojado pastel",
    size: "S-M",
    price: 59.99,
    images: [`${PATH_IMAGE}2_front${EXTENSION_IMAGE}`, `${PATH_IMAGE}2_back${EXTENSION_IMAGE}`],
    category: "polos",
    isNew: false
  },
  {
    id: "T1P3",
    name: "Polo Oversize Jesus te está Esperando a tí",
    color: "Verde Esmeralda",
    description: "Camiseta oversized de calidad premium, confeccionada en tela 17/1 y 20/1, suave, resistente y duradera. Diseño con estampado 'Jesus te está Esperando a tí'. Cómoda y transpirable, ideal para cualquier ocasión. Corte holgado que brinda un ajuste relajado y libertad de movimiento con estilo moderno.",
    size: "S-M",
    price: 59.99,
    images: [`${PATH_IMAGE}3_front${EXTENSION_IMAGE}`, `${PATH_IMAGE}3_back${EXTENSION_IMAGE}`],
    category: "polos",
    isNew: true
  },
  {
    id: "T1P4",
    name: "Polo Oversize Jesus",
    color: "Beige",
    description: "Camiseta oversized de calidad premium, confeccionada en tela 17/1 y 20/1, suave, resistente y duradera. Diseño con estampado 'Jesús'. Cómoda y transpirable, ideal para cualquier ocasión. Corte holgado que brinda un ajuste relajado y libertad de movimiento con estilo moderno.",
    size: "S-M",
    price: 59.99,
    images: [`${PATH_IMAGE}4_front${EXTENSION_IMAGE}`, `${PATH_IMAGE}4_back${EXTENSION_IMAGE}`],
    category: "polos",
    isNew: true
  },
  {
    id: "T1P5",
    name: "Polo Oversize Toda la Gloria sea al Rey",
    description: "Camiseta oversized de calidad premium, confeccionada en tela 17/1 y 20/1, suave, resistente y duradera. Diseño con estampado 'Toda la gloria sea al Rey', inspirado en Mateo 5:16. Cómoda y transpirable, ideal para cualquier ocasión. Corte holgado que brinda un ajuste relajado y libertad de movimiento con estilo moderno.",
    color: "Gris Londres",
    size: "S-M",
    price: 59.99,
    images: [`${PATH_IMAGE}5_front${EXTENSION_IMAGE}`, `${PATH_IMAGE}5_back${EXTENSION_IMAGE}`],
    category: "polos",
    isNew: true
  },
  {
    id:"T1P6",
    name: "Polo Oversize Jesus te está Esperando a tí",
    color: "Negro",
    description: "Camiseta oversized de calidad premium, confeccionada en tela 17/1 y 20/1, suave, resistente y duradera. Diseño con estampado 'Jesus te está Esperando a tí'. Cómoda y transpirable, ideal para cualquier ocasión. Corte holgado que brinda un ajuste relajado y libertad de movimiento con estilo moderno.",
    size: "S-M",
    price: 59.99,
    images: [`${PATH_IMAGE}6_front${EXTENSION_IMAGE}`, `${PATH_IMAGE}6_back${EXTENSION_IMAGE}`],
    category: "polos",
    isNew: false
  },
  {
    id: "T1P7",
    name: "Polo Oversize Jesus",
    description: "Camiseta oversized de calidad premium, confeccionada en tela 17/1 y 20/1, suave, resistente y duradera. Diseño con estampado 'Jesús'. Cómoda y transpirable, ideal para cualquier ocasión. Corte holgado que brinda un ajuste relajado y libertad de movimiento con estilo moderno.",
    color:"Slate",
    size: "S-M",
    price: 59.99,
    images: [`${PATH_IMAGE}7_front${EXTENSION_IMAGE}`, `${PATH_IMAGE}7_back${EXTENSION_IMAGE}`],
    category: "polos",
    isNew: true
  },
  {
    id: "T1P8",
    name: "Polo Oversize Jesus",
    description: "Camiseta oversized de calidad premium, confeccionada en tela 17/1 y 20/1, suave, resistente y duradera. Diseño con estampado 'Jesús'. Cómoda y transpirable, ideal para cualquier ocasión. Corte holgado que brinda un ajuste relajado y libertad de movimiento con estilo moderno.",
    color: "Plomo",
    size: "S-M",
    price: 59.99,
    images: [`${PATH_IMAGE}8_front${EXTENSION_IMAGE}`, `${PATH_IMAGE}8_back${EXTENSION_IMAGE}`],
    category: "polos",
    isNew: true
  },
];
