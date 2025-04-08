"use client"

import Link from "next/link";
import { FaArrowRightToCity } from "react-icons/fa6";
import { BsCollectionFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { AiFillTikTok, AiFillFacebook, AiFillInstagram } from "react-icons/ai";


function Footer() {

    const urlFacebook = "https://www.facebook.com/share/15vXNtNHAt/";
    const urlInstagram = "https://www.instagram.com/eternityoutfitt?igsh=MWo4bncxbjJiMGRpcg==";
    const urlTiktok = "https://www.tiktok.com/@eternityoutfit";

    return (
        <>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <nav>
                    <h2 className="footer-title text-2xl cursor-pointer">ETERNITY</h2>
                    <Link href="/coleccion" className="link link-hover flex gap-2 items-center">
                        <BsCollectionFill />Colección
                    </Link>
                    <Link href="/nosotros" className="link link-hover flex gap-2 items-center">
                        <FaArrowRightToCity />Nosotros
                    </Link>
                    <Link href="/contacto" className="link link-hover flex gap-2 items-center">
                        <FaHandsHelping />Contacto
                    </Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Síguenos en </h6>
                    <div className="flex gap-4">
                        <a className="link link-hover"
                            href={urlInstagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Instagram: ${urlInstagram}`}>
                            <AiFillInstagram size={50} />
                        </a>
                        <a className="link link-hover"
                            href={urlFacebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Facebook: ${urlFacebook}`}>
                            <AiFillFacebook size={50} />
                        </a>
                        <a className="link link-hover"
                            href={urlTiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Tiktok: ${urlTiktok}`}>
                            <AiFillTikTok size={50} />
                        </a>
                    </div>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="text-2xl">¿Es tu primera compra?</h6>
                    <p className="text-md">¡Obten tu cupón de descuento!</p>
                    <form>
                        <input type="email"
                            placeholder="Ingresa tu correo"
                            className="input w-full max-w-xs text-gray-700" />
                        <button className="btn mt-2 w-full">Enviar</button>
                    </form>
                </nav>
            </footer>
        </>
    );
}

export default Footer;