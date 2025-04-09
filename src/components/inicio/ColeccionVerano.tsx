"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const ColeccionVerano = () => {
    return (
        <div className='flex flex-col py-10 bg-black opacity-90'>
            <div className="relative w-full h-screen md:h-96 overflow-hidden bg-gray-800">
                {/* Imagen de fondo con capa de oscurecimiento */}
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <Image
                    width={1000}
                    height={1000}
                        src="/images/slides/portada.png"
                        alt="Colección Verano"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>

                {/* Contenido superpuesto centrado */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-wider drop-shadow-lg">
                        Colección <span className="text-yellow-400">Verano</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white mb-8 max-w-md opacity-90 drop-shadow-md">
                        Descubre piezas frescas y elegantes para los días más cálidos.
                    </p>

                    {/* Botón con efecto hover */}
                    <Link href="/coleccion" className="btn btn-outline btn-warning hover:text-white">
                        Ver Colección
                    </Link>

                    {/* Etiqueta de novedad */}
                    <div className="absolute top-6 right-6 bg-yellow-400 text-gray-900 px-4 py-1 font-bold text-sm md:text-base tracking-wide rotate-3 shadow-lg">
                        Nuevo
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColeccionVerano;