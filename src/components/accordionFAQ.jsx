import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { 
        title: "¿Con quién compartiré piso?", 
        content: (
            <div className="w-full flex flex-col justify-center items-start">
                <p className="font-bold">¿Cómo aseguran que mi roommate será compatible conmigo?</p>
                <p className="">En Dommies usamos un test de personalidad basado en los 4 enfoques del MBTI, además de filtros de hábitos, intereses y estilo de vida, para encontrar roommates compatibles en Lima que se adapten a ti.</p><br />
                <p className="font-bold">¿Qué tipo de información puedo ver sobre mi futuro roommate?</p>
                <p className="">Podrás acceder a perfiles completos con detalles sobre hábitos, horarios, personalidad, preferencias (como pet friendly, extrovertido) y otra información clave para la convivencia. Esto incluye opciones para encontrar roommates en Lima que sean compatibles con tus necesidades.</p><br />
                <p className="font-bold">¿Los perfiles están verificados?</p>
                <p className="">Sí, todos los perfiles pasan por un proceso de validación para garantizar que la información sea confiable.</p>
            </div>
        ),
    },
    { 
        title: "¿A quién está dirigido?", 
        content: (
            <div className="w-full flex flex-col justify-center items-start">
                <p className="font-bold">¿Dommies es solo para estudiantes?</p>
                <p className="">No. Aunque muchos usuarios son estudiantes, también está diseñado para jóvenes profesionales que buscan roommates en Lima para compartir gastos o simplemente encontrar a un compañero confiable.</p><br />
                <p className="font-bold">¿Puedo usar Dommies si ya tengo un departamento y busco un roommate?</p>
                <p className="">¡Claro! Dommies es perfecto para quienes ya tienen vivienda en Lima y quieren compartirla con alguien compatible, sea por compañía o para dividir costos.</p><br />
                <p className="font-bold">¿Qué pasa si soy muy específico en lo que busco?</p>
                <p className="">No te preocupes, nuestra plataforma cuenta con filtros avanzados (ubicación, presupuesto, intereses, etc.) para ayudarte a encontrar el roommate ideal en Lima que se ajuste a tus necesidades.</p>
            </div>
        ) 
    },
    { 
        title: "¿Cómo uso Dommies?", 
        content: (
            <div className="w-full flex flex-col justify-center items-start">
                <p className="font-bold">¿Cómo empiezo y publico mi espacio?</p>
                <p className="">Solo tienes que registrarte en nuestro formulario, te contactamos, nos compartes detalles de tus intereses sobre con quién deseas convivir en Lima y realizas el test de personalidad. Luego, te mostraremos todas las recomendaciones basadas en tus preferencias, ayudándote a encontrar roommates en Lima rápidamente.</p><br />
                <p className="font-bold">¿Cuánto tiempo tarda encontrar un match?</p>
                <p className="">Eso depende de tus preferencias, pero con nuestros filtros y sistema de compatibilidad, ahorrarás mucho tiempo comparado con métodos tradicionales para encontrar roommates en Lima que sean compatibles contigo.</p>
            </div>
        ) 
    },
    { 
        title: "¿Por qué elegir Dommies?", 
        content: (
            <div className="w-full flex flex-col justify-center items-start">
                <p className="font-bold">¿Qué diferencia a Dommies de otras plataformas?</p>
                <p className="">Dommies no es solo una herramienta para buscar roommates, es un sistema diseñado para priorizar la compatibilidad y la seguridad. Aquí encontrarás roommates con hábitos, estilos de vida e intereses que encajan contigo.</p><br />
                <p className="font-bold">¿Cómo garantizan la seguridad de los usuarios?</p>
                <p className="">Validamos todos los perfiles para garantizar información confiable. Además, promovemos acuerdos claros para evitar malentendidos en la convivencia.</p><br />
                <p className="font-bold">¿Dommies me ayuda a evitar malas experiencias?</p>
                <p className="">Te ayudamos a tener una convivencia con las mínimas posibilidades de conflicto. Nuestro enfoque en compatibilidad, verificación y reglas claras minimiza los problemas comunes de la convivencia, como diferencias de hábitos o falta de comunicación, siempre primando el respeto.</p>
            </div>
        ) 
    },
    { 
        title: "¿Qué pasa después de encontrar un match?", 
        content: (
            <div className="w-full flex flex-col justify-center items-start">
                <p className="font-bold">¿Puedo comunicarme con mi roommate antes de mudarme?</p>
                <p className="">Sí, una vez que hagas match, puedes interactuar con tu futuro compañero para conocerse mejor y asegurarte de que la convivencia será adecuada.</p><br />
                <p className="font-bold">¿Dommies me ayuda a establecer reglas de convivencia?</p>
                <p className="">Pronto implementaremos herramientas que te permitirán definir acuerdos sobre limpieza, horarios, pagos y más, para una convivencia armoniosa.</p><br />
                <p className="font-bold">¿Qué pasa si el match no funciona?</p>
                <p className="">Puedes seguir explorando opciones hasta encontrar a alguien que realmente encaje contigo. Estamos aquí para ayudarte en el proceso de encontrar roommates en Lima que sean compatibles contigo.</p>
            </div>
        ) 
    },
  ];

  return (
    <div className="w-full max-w-full mx-auto mt-10 space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-[#6241A0] rounded-md shadow-sm"
        >
          <button
            className="w-full flex justify-between items-center rounded-sm px-4 py-3 bg-transparent text-left text-[#6241A0] font-medium transition"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span
              className={`transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4 text-gray-800">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;