"use client";
import { useState } from "react";
import { products } from "@/service/products";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "next/navigation";
import { agregarAlCarrito } from "@/service/carrtito";
import { CiShoppingCart } from "react-icons/ci";
import { IoArrowBack } from "react-icons/io5";
import ProductoNoEncontrado from "./ProductoNoEncontrado";

function DetalleProducto() {
    const params = useParams();
    const { id } = params;

    const producto = products.find((prod) => prod.id === id);

    const [imagenPrincipal, setImagenPrincipal] = useState(producto?.images[0] || "");

    if (!producto) {
        return <ProductoNoEncontrado />;
    }

    const whatsappMessage = `Hola, estoy interesado en el producto "${producto.name}". ¿Está disponible?`;
    const whatsappLink = `https://wa.me/+51973103134?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                onClick={() => window.history.back()}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
                <IoArrowBack size={16} />
                <span>Volver a la colección</span>
            </button>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Contenedor de imágenes */} 
                <div className="md:w-1/2 flex flex-col gap-4">
                    {/* Imagen principal */}
                    <div className="w-full h-96  rounded-xl overflow-hidden">
                        <img
                            src={imagenPrincipal}
                            alt={`${producto.name} - Imagen principal`}
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Miniaturas */}
                    <div className="flex gap-2 overflow-x-auto">
                        {producto.images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setImagenPrincipal(img)}
                                className={`w-20 h-20 rounded-lg overflow-hidden border transition ${
                                    img === imagenPrincipal
                                        ? "border-black"
                                        : "border-gray-200 hover:border-black"
                                }`}
                            >
                                <img
                                    src={img}
                                    alt={`Miniatura ${index + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Detalles del producto */}
                <div className="md:w-1/2">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold">{producto.name}</h1>
                            <div className="mt-2">
                                <span className="badge badge-lg bg-green-600 border-none text-white py-3 px-4 text-lg font-semibold">
                                    S/{producto.price.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <div className="prose max-w-none">
                            <p className="text-gray-600">
                                {producto.description} Este producto está diseñado con materiales de alta calidad para garantizar comodidad y durabilidad. Perfecto para cualquier ocasión, ya sea casual o formal.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-y-3 border-t border-b border-gray-100 py-4">
                            <span className="text-gray-500">Categoría:</span>
                            <span className="font-medium">{producto.category}</span>

                            <span className="text-gray-500">Tallas:</span>
                            <span>
                                <span className="badge">{producto.size}</span>
                            </span>

                            <span className="text-gray-500">Disponibilidad:</span>
                            <span className="text-green-600 font-medium">En stock</span>
                        </div>

                        <div className="space-y-3 pt-2">
                            <button
                                className="w-full btn bg-slate-900 border-none text-gray-100 flex items-center justify-center gap-2"
                                onClick={() => agregarAlCarrito(producto)}
                            >
                                <CiShoppingCart size={20} color="white" />
                                Agregar al carrito
                            </button>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full btn bg-green-600 border-none text-gray-100 flex items-center justify-center gap-2"
                            >
                                <FaWhatsapp size={20} color="white" />
                                Consultar por WhatsApp
                            </a>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg mt-4">
                            <p className="text-sm text-gray-600">
                                <span className="font-medium">Envío gratuito</span> en pedidos superiores a S/100.
                                Para más información sobre envíos y devoluciones, contáctanos por WhatsApp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetalleProducto;
