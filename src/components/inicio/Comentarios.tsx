"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define la estructura de un testimonio
interface Testimonio {
  texto: string;
  nombre: string;
  rol: string;
}

const Testimonios: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const testimonios: Testimonio[] = [
    {
      texto: "Una experiencia increíble. Los productos son de la más alta calidad y el servicio al cliente es excepcional.",
      nombre: "Miqueas Retamozo",
      rol: "Cliente Frecuente",
    },
    {
      texto: "Las prendas de la colección de verano son perfectas. Material ligero y diseños muy actuales.",
      nombre: "David Salvatierra",
      rol: "Cliente Nuevo",
    },
    {
      texto: "Excelente relación calidad-precio. Lo recomiendo a todos mis amigos y familiares.",
      nombre: "Laura Sánchez",
      rol: "Cliente Premium",
    },
  ];

  // Función para generar la URL del avatar con iniciales
  const getAvatarUrl = (nombre: string): string => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(nombre)}`;
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center text-gray-700 mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="relative">
          {/* Comillas decorativas */}
          <div className="text-gray-200 text-8xl font-serif absolute -top-10 left-0 opacity-50">
            &quot;
          </div>

          <div className="text-center px-6">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8 max-w-2xl mx-auto">
              {testimonios[currentIndex].texto}
            </p>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 shadow-md">
                <Image
                  src={getAvatarUrl(testimonios[currentIndex].nombre)}
                  alt={`Avatar de ${testimonios[currentIndex].nombre}`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium text-gray-900">
                {testimonios[currentIndex].nombre}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonios[currentIndex].rol}
              </p>
            </div>
          </div>

          {/* Controles de navegación */}
          <div className="flex justify-center mt-12 space-x-4">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-800 w-6" : "bg-gray-300"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;