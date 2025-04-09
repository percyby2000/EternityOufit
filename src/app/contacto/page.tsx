"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";

// Define la estructura del formulario
interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export default function SeccionContactos() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [isSending, setIsSending] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // Configura tu servicio, plantilla y usuario de EmailJS
    emailjs
      .send(
        "service_99zcfnh", // Reemplaza con tu Service ID
        "template_t0zv9gl", // Reemplaza con tu Template ID
        {
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje,
        },
        "3BEY_8rR0VCX4APiR" // Reemplaza con tu User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("¡Mensaje enviado con éxito!");
          setFormData({ nombre: "", email: "", mensaje: "" });
        },
        (error) => {
          console.error("FAILED...", error);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 font-sans">
      <h2 className="text-2xl font-light mb-8 text-center">Contacto</h2>

      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
        <h3 className="text-lg font-light mb-6 text-center">Envíanos un mensaje</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm text-gray-600 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="mensaje" className="block text-sm text-gray-600 mb-1">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSending}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
            >
              <span>{isSending ? "Enviando..." : "Enviar"}</span>
              <FaPaperPlane size={16} />
            </button>
          </div>
        </form>

        {successMessage && (
          <p className="text-green-600 text-center mt-4">{successMessage}</p>
        )}
      </div>
    </div>
  );
}