import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const sections = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="shadow-md  top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </a>

        {/* Botón para abrir/cerrar menú */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="sr-only">Toggle Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
          className={`lg:flex items-center gap-6 absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:opacity-100 lg:visible transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 p-4 lg:p-0">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-gray-800 hover:text-blue-500 font-medium transition"
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