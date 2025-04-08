import Link from "next/link";

function ProductoNoEncontrado() {
    return (
        <div className="flex flex-col items-center justify-center h-[300px] md:h-[520px] bg-white px-4">
            <div className="text-center max-w-md">
                <div className="mb-6 bg-red-50 inline-flex items-center justify-center w-16 h-16 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Producto no encontrado</h1>
                <p className="text-gray-600 mb-6">
                    Lo sentimos, el producto que estás buscando no existe o ha sido removido de nuestra tienda.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={() => window.history.back()}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        Volver atrás
                    </button>
                    <Link
                        href="/coleccion"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                        Ver otros productos
                    </Link>
                </div>
            </div>
            <div className="mt-12 text-sm text-gray-500">
                <p>¿Necesitas ayuda? <a href="/contacto" className="text-indigo-600 hover:underline">Contacta con nosotros</a></p>
            </div>
        </div>
    );
}



export default ProductoNoEncontrado;