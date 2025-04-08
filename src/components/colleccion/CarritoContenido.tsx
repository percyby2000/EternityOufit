"use client";
import React, { useState, useEffect } from "react";
import { FaTrashAlt, FaShoppingBag, FaCreditCard, FaChevronRight } from "react-icons/fa";
import { CartProduct } from "@/types/Product";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { eliminarDelCarrito } from "@/service/carrtito";
import { MdPayment } from "react-icons/md";

function CarritoContenido() {
  // Estado para los productos del carrito
  const [productos, setProductos] = useState<CartProduct[]>([]);

  // Cargar productos desde localStorage al montar el componente
  useEffect(() => {
    const cargarCarrito = () => {
      const carrito: CartProduct[] = JSON.parse(localStorage.getItem("carrito") || "[]");
      setProductos(carrito);
    };

    cargarCarrito();

    // Escuchar el evento "carritoActualizado"
    const handleCarritoActualizado = () => {
      cargarCarrito();
    };

    window.addEventListener("carritoActualizado", handleCarritoActualizado);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("carritoActualizado", handleCarritoActualizado);
    };
  }, []);

  // Calcular el subtotal
  const subtotal = productos.reduce((total, producto) => total + producto.price * producto.cantidad, 0);
  const envio = 0.00;
  const total = subtotal + envio;

  // Función para actualizar cantidad
  const actualizarCantidad = (id: string, nuevaCantidad: number) => {
    if (nuevaCantidad < 1) return;
    const nuevoCarrito = productos.map((producto) =>
      producto.id === id ? { ...producto, cantidad: nuevaCantidad } : producto
    );
    setProductos(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    // Emitir el evento personalizado
    const event = new CustomEvent("carritoActualizado", { detail: nuevoCarrito });
    window.dispatchEvent(event);
  };

  // Generar el enlace de WhatsApp
  const whatsappMessage = productos
    .map((producto) => `- ${producto.name} (Cantidad: ${producto.cantidad}, Precio: S/${producto.price.toFixed(2)})`)
    .join("\n");

  const whatsappLink = `https://wa.me/+51973103134?text=${encodeURIComponent(
    `Hola, estoy interesado en los siguientes productos:\n\n${whatsappMessage}\n\nTotal: S/${total.toFixed(2)}`)}`;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="flex items-center gap-2 mb-8">
        <FaShoppingBag className="text-gray-800" size={24} />
        <h1 className="text-2xl font-semibold text-gray-800">Tu Carrito</h1>
      </div>

      {productos.length === 0 ? (
        <div className="text-center py-12">
          <FaShoppingBag className="mx-auto mb-4 text-gray-400" size={48} />
          <p className="text-gray-500">Tu carrito está vacío</p>
          <Link
            href="/coleccion"
            className="btn border-none mt-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            Continuar comprando
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="md:col-span-2">
            <div className="rounded-lg border bg-white ">
              {productos.map((producto) => (
                <div key={producto.id} className="p-4 border-b border-gray-100 flex space-x-4">
                  <img
                    src={producto.images[0]}
                    alt={producto.name}
                    className="w-20 h-20 object-contain rounded-md"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">{producto.name}</h3>
                      <p className="font-medium">${producto.price.toFixed(2)}</p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border rounded-md">
                        <button
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}
                        >
                          -
                        </button>
                        <span className="px-3 py-1">{producto.cantidad}</span>
                        <button
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        onClick={() => eliminarDelCarrito(producto.id)}
                      >
                        <FaTrashAlt size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resumen y checkout */}
          <div>
            <div className="rounded-lg border bg-white  p-4">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Resumen de compra</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>S/{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Envío</span>
                  <span>S/{envio.toFixed(2)}</span>
                </div>
                <div className="h-px bg-gray-200 my-2"></div>
                <div className="flex justify-between font-medium text-gray-800">
                  <span>Total</span>
                  <span>S/{total.toFixed(2)}</span>
                </div>
              </div>

              <a href={whatsappLink} target="_blank"
                className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <IoLogoWhatsapp size={18} />
                <span>Comprar en WhatsApp</span>
                <FaChevronRight size={16} />
              </a>

              <a href="https://8gxq22l8.forms.app/formulario-de-pago-transferencia" target="_blank"
                className="w-full bg-gray-900 mt-2 text-[13px] text-white py-3 rounded-md hover:bg-gray-950 transition-colors flex items-center justify-center gap-2">
                <MdPayment size={18} />
                <span>Pagar con Transferencia</span>
                <FaChevronRight size={16} />
              </a>

              <Link href="/coleccion" className="w-full mt-2 text-gray-600 py-2 text-sm hover:underline">
                Continuar comprando
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarritoContenido;