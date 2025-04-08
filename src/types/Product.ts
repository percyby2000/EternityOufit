export type Product = {
    id: string; 
    name: string;
    description: string; 
    color: string;
    size: string;
    price: number;
    images: string[];
    category: "polos" | "poleras" | "pantalones" | "gorras" | "accesorios"; 
    isNew: boolean; 
  };

  
export type CartProduct = Product & {
    cantidad: number; 
};