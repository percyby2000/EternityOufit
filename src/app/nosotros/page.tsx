import React from 'react';

export default function NosotrosPage() {
    const teamMembers = [
        { name: "Victor", role: "Ventas" },
        { name: "Percy", role: "Diseñador" },
        { name: "Brayan", role: "Desarrollador" },
    ];

    return (
        <>
            {/* Contenedor principal - Ajustado para diferentes tamaños de pantalla */}
            <div className="w-[95%] md:w-[80%] lg:w-[60%] p-4 md:p-8 lg:p-10 flex flex-col items-center justify-center mx-auto">
                {/* About Section */}
                <section className="mb-8 md:mb-16">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 md:mb-8 text-center">
                        ¿Quienes somos?
                    </h2>
                    <div className="rounded-lg p-4 md:p-6 mb-6 md:mb-8">
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed space-y-4">
                            <span className="block mb-4">
                                En Eternity Outfit, creemos que la moda es una forma de expresar lo que llevamos en el corazón. 
                                Somos una tienda de ropa juvenil cristiana que busca inspirar, motivar y compartir el mensaje 
                                de fe a través de cada prenda.
                            </span>

                            <span className="block mb-4">
                                Nos dedicamos a diseñar y ofrecer polos, poleras y accesorios con estilo, ideales para 
                                jóvenes que desean vestir con propósito y marcar la diferencia en su día a día. Cada diseño 
                                tiene un mensaje, una verdad, una promesa que refleja nuestra identidad en Cristo.
                            </span>

                            <span className="block mb-4">
                                Eternity Outfit no es solo ropa, es una declaración de fe con actitud. Queremos que te 
                                sientas orgulloso de lo que creés y que lo puedas mostrar con autenticidad y estilo.
                            </span>

                            <span className="block font-medium">
                                Vestí tu fe. Vestí Eternity.
                            </span>
                        </p>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-8 md:mb-16 w-full">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 md:mb-8 text-center">
                        Nuestro Equipo
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 justify-items-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center group w-full max-w-[200px]">
                                <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gray-100 mx-auto mb-3 md:mb-4 
                                    group-hover:bg-gray-200 transition-colors duration-300 flex items-center 
                                    justify-center overflow-hidden border border-gray-200">
                                    <span className="text-xs md:text-sm text-gray-400">{member.name}</span>
                                </div>
                                <p className="text-sm md:text-base text-gray-700">{member.name}</p>
                                <p className="text-xs md:text-sm text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Map Section */}
            <h2 className="text-2xl md:text-3xl text-center p-3 md:p-5 text-gray-700">
                Ubicanos en: A.h la Paz, Ayacucho 05002
            </h2>

            <div className="w-full h-[300px] md:h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.6960997430974!2d-74.21931047030569!3d-13.191393746831178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127d7e06d38135%3A0xe20a9c4eedc77773!2sA.h%20la%20Paz%2C%20Ayacucho%2005002!5e0!3m2!1ses!2spe!4v1744124931292!5m2!1ses!2spe"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </>
    );
}