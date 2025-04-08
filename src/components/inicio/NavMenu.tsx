"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagramSquare, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const urlFacebook = "https://www.facebook.com/profile.php?id=61574429741430";
  const urlInstagram = "https://www.instagram.com/eternityoutfitt/";
  const urlWhatsapp = "https://wa.me/YOURNUMBER";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`relative py-3`}>
      {/* Top Bar - Always Visible */}
      <div className="flex flex-row justify-between items-center px-4 md:px-20 py-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <img
              className="w-[50px] h-[50px] object-contain"
              src="/images/logo.webp"
              alt="logo"
            />
          </Link>
        </div>

        {/* Brand Name */}
        <div className="text-2xl md:text-3xl cursor-pointer font-playfair">ETERNITY</div>

        {/* Social and Cart Icons */}
        <div className="flex space-x-4">
          {/* Mobile Hamburger Menu Toggle */}
          <button
            className="md:hidden z-50"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Social Icons - Hidden on Mobile when Menu is Open */}
          <div className={`hidden md:flex space-x-4 ${isMenuOpen ? "hidden" : ""}`}>
            <a href={urlInstagram} target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare size={18} />
            </a>
            <a href={urlFacebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook size={18} />
            </a>
            <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp size={18} />
            </a>
            <Link href="/carrito" className="relative">
              <FaShoppingCart size={18} />
              
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Mobile and Desktop Versions */}
      <nav
        className={`
          fixed inset-0 z-40 bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:static md:translate-x-0 md:block
        `}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6 md:flex-row md:space-y-0 md:space-x-6 text-lg">
          {/* Logo for Mobile View */}
          <li className="md:hidden mb-6">
            <Link href="/" onClick={toggleMenu}>
              <img
                className="w-[90px] h-[90px] object-contain"
                src="/images/logo.webp"
                alt="logo"
              />
            </Link>
          </li>

          <li onClick={toggleMenu}>
            <Link href="/" className="block py-2 md:py-0">
              Inicio
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/coleccion" className="block py-2 md:py-0">
              Colección
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/nosotros" className="block py-2 md:py-0">
              Nosotros
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/contacto" className="block py-2 md:py-0">
              Contacto
            </Link>
          </li>

          {/* Mobile Social Icons - Only Visible in Mobile Menu */}
          <li className="md:hidden flex space-x-4 mt-6">
            <a href={urlInstagram} target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare size={32} />
            </a>
            <a href={urlFacebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook size={32} />
            </a>
            <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp size={32} />
            </a>
            <Link onClick={toggleMenu} href="/carrito" className="relative" rel="noopener noreferrer">
              <FaShoppingCart size={32} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;