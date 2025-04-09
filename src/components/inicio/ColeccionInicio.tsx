"use client";
import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

interface VideoItem {
  id: string | number;
  videoURL: string;
}

interface ColeccionInicioProps {
  data: VideoItem[];
}

function ColeccionInicio({ data }: ColeccionInicioProps) {
  // Crear refs en el nivel superior del componente
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  // Puedes agregar más refs según sea necesario
  
  // Lista de todas las refs
  const allRefs = [ref1, ref2, ref3, ref4, ref5, ref6];
  
  // Estados de visibilidad
  const inView1 = useInView(ref1, { once: true, margin: "-100px" });
  const inView2 = useInView(ref2, { once: true, margin: "-100px" });
  const inView3 = useInView(ref3, { once: true, margin: "-100px" });
  const inView4 = useInView(ref4, { once: true, margin: "-100px" });
  const inView5 = useInView(ref5, { once: true, margin: "-100px" });
  const inView6 = useInView(ref6, { once: true, margin: "-100px" });
  
  // Lista de todos los estados de visibilidad
  const allInViewStates = [inView1, inView2, inView3, inView4, inView5, inView6];
  
  // Agrupar los videos en pares (usar useMemo para evitar recálculos innecesarios)
  const groupedData = useMemo(() => {
    const groups: VideoItem[][] = [];
    for (let i = 0; i < data.length; i += 2) {
      groups.push(data.slice(i, i + 2));
    }
    return groups;
  }, [data]);

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
          {groupedData.map((pair, groupIndex) => (
            <div
              key={groupIndex}
              className="flex flex-col md:flex-row justify-center items-center gap-10"
            >
              {pair.map((item, itemIndex) => {
                const index = groupIndex * 2 + itemIndex;
                // Usar solo las refs y estados que existen
                const ref = index < allRefs.length ? allRefs[index] : null;
                const isInView = index < allInViewStates.length ? allInViewStates[index] : false;
                const direction = itemIndex % 2 === 0 ? -100 : 100;
                
                return (
                  <motion.div
                    key={item.id}
                    ref={ref}
                    className="w-full max-w-xs overflow-hidden rounded-lg"
                    initial={{ opacity: 0, x: direction }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <video
                      src={item.videoURL}
                      className="object-contain"
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