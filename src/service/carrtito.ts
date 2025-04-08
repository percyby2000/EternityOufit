import { Product } from "@/types/Product";
import Swal from "sweetalert2";

// Función para agregar un producto al carrito
export const agregarAlCarrito = (producto: any) => {
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  const productoExistente = carrito.find((item: any) => item.id === producto.id);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Emitir un evento personalizado para notificar que el carrito ha cambiado
  const event = new CustomEvent("carritoActualizado", { detail: carrito });
  window.dispatchEvent(event);

  // Mostrar una notificación con SweetAlert2
  Swal.fire({
    icon: "success",
    title: "Producto agregado al carrito",
    text: `Has agregado ${producto.name} al carrito.`,
    showConfirmButton: false,
    timer: 1500,
    toast: true,
    position: "top-end",
    customClass: {
      popup: "swal-popup",
    },
  });
};

// Función para eliminar un producto del carrito
export const eliminarDelCarrito = (id: string) => {
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  const nuevoCarrito = carrito.filter((producto: Product) => producto.id !== id);

  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

  // Emitir un evento personalizado para notificar que el carrito ha cambiado
  const event = new CustomEvent("carritoActualizado", { detail: nuevoCarrito });
  window.dispatchEvent(event);

  // Mostrar una notificación con SweetAlert2
  Swal.fire({
    icon: "success",
    title: "Producto eliminado del carrito",
    text: "El producto ha sido eliminado correctamente.",
    showConfirmButton: false,
    timer: 1500,
    toast: true,
    position: "top-end",
    customClass: {
      popup: "swal-popup",
    },
  });
};


