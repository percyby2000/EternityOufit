"use client";

import React, { useState } from "react";
import { products } from "@/service/products";
import Link from "next/link";
import Image from "next/image";

const ColeccionCompleta = () => {
  const [activeTab, setActiveTab] = useState("todos");

  // Filtrar productos según la categoría seleccionada
  const productosFiltrados =
    activeTab === "todos"
      ? products
      : products.filter((producto) => producto.category === activeTab);

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Nuestra Colección 2025</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra exclusiva selección de prendas y accesorios para
            disfrutar del verano con estilo y comodidad.
          </p>
        </div>

        {/* Tabs para filtrar productos */}
        <div className="tabs tabs-boxed flex justify-center bg-transparent mb-8">
          <button
            className={`tab ${activeTab === "todos"
              ? "tab-active bg-black rounded-full text-white hover:text-white"
              : "text-gray-100"
              }`}
            onClick={() => setActiveTab("todos")}
          >
            Todos
          </button>
          <button
            className={`tab ${activeTab === "polos"
              ? "tab-active bg-black rounded-full text-white hover:text-white"
              : "text-gray-700"
              }`}
            onClick={() => setActiveTab("polos")}
          >
            Polos
          </button>
          <button
            className={`tab ${activeTab === "poleras"
              ? "tab-active bg-black rounded-full text-white hover:text-white"
              : "text-gray-700"
              }`}
            onClick={() => setActiveTab("poleras")}
          >
            Poleras
          </button>
          <button
            className={`tab ${activeTab === "accesorios"
              ? "tab-active bg-black rounded-full text-white hover:text-white"
              : "text-gray-700"
              }`}
            onClick={() => setActiveTab("accesorios")}
          >
            Accesorios
          </button>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="card transition-all duration-300 overflow-hidden group transform hover:scale-105"
            >
              <figure className="relative group">
                <Link href={`/coleccion/${producto.id}`} className="block">
                  <Image
                    src={producto.images[0]}
                    alt={producto.name}
                    className="h-64 w-full object-contain group-hover:hidden "
                    width={1000}
                    height={1000}
                  />
                  <Image
                    src={producto.images[1]}
                    alt={`${producto.name} - alternate`}
                    className="h-64 w-full object-contain hidden group-hover:block"
                    width={1000}
                    height={1000}
                  />
                  {producto.isNew && (
                    <div className="badge badge-success absolute top-4 left-4 text-white ">
                      Nuevo
                    </div>
                  )}
                </Link>
              </figure>
              <div className="card-body bg-orange-50">
                <h4 className="text-md text-gray-800 hover:underline">{producto.name}</h4>
                <div>
                  <span className="badge badge-sm badge-neutral text-sm">
                    S/{producto.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColeccionCompleta;