"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function ColeccionInicio({ data }: any) {
  // Agrupar los videos en pares
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

  return (
    <section className="py-16 px-4 bg-[#FAF7F5] flex justify-center items-center">
      <div className="max-w-6xl w-full">
        <header className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight relative inline-block">
            Nuestra Colección
            <span className="block h-1 w-20 bg-gray-900 mx-auto mt-2 rounded-full"></span>
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-xl mx-auto">
            Descubre nuestra exclusiva selección de ropa con mensajes que inspiran.
          </p>
        </header>

        <div className="flex flex-col gap-20">
          {groupedData.map((pair: any[], groupIndex: number) => (
            <div
              key={groupIndex}
              className="flex flex-col md:flex-row justify-center items-center gap-10"
            >
              {pair.map((item, itemIndex) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true, margin: "-100px" });
                const direction = itemIndex % 2 === 0 ? -100 : 100;

                return (
                  <motion.div
                    key={item.id || itemIndex}
                    ref={ref}
                    className="w-full max-w-xs overflow-hidden rounded-lg"
                    initial={{ opacity: 0, x: direction }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <video
                      src={item.videoURL}
                      className=" object-contain"
                      autoPlay
                      loop
                      muted
                    />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ColeccionInicio;

