import React from 'react';

export default function NosotrosPage() {

    const teamMembers = [
        { name: "Victor", role: "Ventas" },
        { name: "Percy", role: "Diseñador" },
        { name: "Brayan", role: "Desarrollador" },
    ];

    return (
        <>
            <div className="w-[60%] p-10  flex flex-col items-center justify-center mx-auto">
                {/* About Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-light mb-8 text-center">¿Quienes somos? </h2>
                    <div className="rounded-lg p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed">
                            En Eternity Outfit, creemos que la moda es una forma de expresar lo que llevamos en el corazón. Somos una tienda de ropa juvenil cristiana que busca inspirar, motivar y compartir el mensaje de fe a través de cada prenda.

                            Nos dedicamos a diseñar y ofrecer polos, poleras y accesorios con estilo, ideales para jóvenes que desean vestir con propósito y marcar la diferencia en su día a día. Cada diseño tiene un mensaje, una verdad, una promesa que refleja nuestra identidad en Cristo.

                            Eternity Outfit no es solo ropa, es una declaración de fe con actitud. Queremos que te sientas orgulloso de lo que creés y que lo puedas mostrar con autenticidad y estilo.

                            Vestí tu fe. Vestí Eternity.
                        </p>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-light mb-8 text-center">Nuestro Equipo</h2>
                    <div className="flex justify-center gap-12 flex-wrap">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="h-24 w-24 rounded-full bg-gray-100 mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center overflow-hidden border border-gray-200">
                                    <span className="text-xs text-gray-400">{member.name}</span>
                                </div>
                                <p className="text-sm text-gray-700">{member.name}</p>
                                <p className="text-xs text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* Map Section */}
            <h2 className='text-3xl text-center p-5 text-gray-700'>Ubicanos en: A.h la Paz, Ayacucho 05002  </h2>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.6960997430974!2d-74.21931047030569!3d-13.191393746831178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127d7e06d38135%3A0xe20a9c4eedc77773!2sA.h%20la%20Paz%2C%20Ayacucho%2005002!5e0!3m2!1ses!2spe!4v1744124931292!5m2!1ses!2spe"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>

        </>
    );
}