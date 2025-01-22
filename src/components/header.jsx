import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Manejar el bloqueo de scroll al abrir el menú
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Desactiva el scroll
    } else {
      document.body.style.overflow = ""; // Reactiva el scroll
    }
  }, [isOpen]);

  const sections = [
    { id: "Encuentra-Roommate", label: "Encuentra Roommate" },
    { id: "Features", label: "Features" },
    { id: "Dommies", label: "Dommies" },
    { id: "Conócenos", label: "Conócenos" },
    { id: "FAQ", label: "FAQ" },
  ];

  return (
    <header
      className={`shadow-md sticky top-0 z-50 ${
        isOpen ? "bg-[#6241A0] text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          <img src={isOpen ? "/Logoheader.webp" : "/logo.png"} alt="Logo" className="h-10" />
        </a>

        {/* Botón para abrir/cerrar menú */}
        <button
          className="flex items-center justify-center w-10 h-10 rounded"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            stroke={isOpen ? "white" : "black"}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú */}
        <nav
          className={`fixed top-[64px] left-0 w-full ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } h-[calc(100vh-64px)] bg-[#6241A0] text-white z-40 transition-opacity duration-300`}
          role="menu"
        >
          <ul className="flex flex-col items-center gap-4 p-4 h-full justify-center">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="hover:text-blue-500 font-medium transition"
                  role="menuitem"
                  onClick={closeMenu} // Cierra el menú al hacer clic
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;