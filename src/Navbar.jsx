import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen){
      document.body.style.overflow = "hidden"
    }else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])


  return ( 
    <nav className="flex justify-between items-center z-50 px-4 sm:px-6 md:px-26 py-4 bg-stone-900 fixed top-0 left-0 w-full">
      {/* Logo */}
      <a href="#" className="text-amber-800 text-xl md:text-2xl font-serif font-bold">Ruthiana Mists & Notes</a>

      {/* Desktop Navigation. Visible on larger screens */}
      {/* Navlink */}
      <ul className="hidden md:flex space-x-3 md:space-x-6 items-center font-medium">
        <li>
          <a href="#bestsellers" className="text-white hover:text-green-800">Bestsellers</a>
        </li>

        <li>
          <a href="#collection" className="text-white hover:text-green-800">Collection</a>
        </li>

        <li>
          <a href="#reviews" className="text-white hover:text-green-800">Reviews</a>
        </li>

        <li>
          <a href="#faq" className="text-white hover:text-green-800">FAQ</a>
        </li>
        
      </ul>

      <a
        href="#"
        className="flex items-center rounded-xl bg-green-600 text-white p-2 hover:bg-green-700 hover:-translate-y-1 transition-transform duration-300"
      >
        <FaWhatsapp className="h-5 w-5 md:mr-2" />
        <span className="hidden md:inline font-medium">Order Now</span>
      </a>

      <button 
        onClick={toggleMenu}
        type="button"
        aria-label="Open navigation menu"
        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white">
          <Bars3Icon className="w-7 h-7"/>
      </button>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}   
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div 
        className={`fixed top-0 right-0 z-40 h-full w-[75vw] max-w-sm bg-stone-900 shadow-xl transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <p className="text-white font-semibold text-lg">Menu</p>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="rounded-md text-white hover:bg-white/10 p-2">
              <XMarkIcon className="w-6 h-6"/>
          </button>
        </div>

        <div className="flex flex-col gap-4 px-6-py-6 ml-5">
          <a 
            href="#bestsellers"
            onClick={closeMenu}
            className="text-white hover:text-green-800"
            >
              Bestsellers
          </a>

          <a 
            href="#collections"
            onClick={closeMenu}
            className="text-white hover:text-green-800"
            >
              Collections
          </a>

          <a 
            href="#reviews"
            onClick={closeMenu}
            className="text-white hover:text-green-800"
            >
              Reviews
          </a>

          <a 
            href="#faq"
            onClick={closeMenu}
            className="text-white hover:text-green-800"
            >
              FAQ
          </a>
        </div>
      </div>
    </nav> 
  );
}

export default Navbar;