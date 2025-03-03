import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { 
        title: "¿Con quién compartiré espacio?", 
        content: (
            <div className="w-full flex flex-col justify-center items-start">
                <p className="font-bold">¿Cómo aseguran que mi roommate será compatible conmigo?</p>
                <p className="">En Dommies, utilizamos un test de personalidad basado en el MBTI (uno de los modelos más reconocidos a nivel mundial) para analizar tus preferencias y estilo de vida. Además, aplicamos filtros avanzados que consideran hábitos, intereses y rutinas. Esto nos permite conectarte con roommates en Lima que no solo respeten tus diferencias, sino que también complementen tu personalidad. ¡Queremos que tu convivencia sea lo más armoniosa posible!</p><br />
                <p className="font-bold">¿Qué tipo de información puedo ver sobre mi próximo roommate?</p>
                <span className="">En Dommies, accederás a perfiles completos y detallados que incluyen:
<ul className="list-disc list-inside space-y-2">
<li>Hábitos y horarios (madrugadores, noctámbulos, etc.).</li>
<li>Preferencias de convivencia (pet friendly, extrovertido, introvertido, etc.).</li>
<li>Información sobre personalidad (resultados del test MBTI).</li>
<li>Detalles sobre intereses y estilo de vida.</li> 
</ul>
Todo esto está diseñado para que encuentres roommates en Lima que se adapten perfectamente a tus necesidades y expectativas.</span><br />
                <p className="font-bold">¿Los perfiles están verificados?</p>
                <p className="">¡Sí! En Dommies, la seguridad es una prioridad. Todos los perfiles pasan por un riguroso proceso de verificación para garantizar que la información sea confiable y transparente. Así, puedes tomar decisiones con total confianza y sin sorpresas.</p>
            </div>
        ),
    },
    { 
        title: "¿A quién está dirigido Dommies?", 
        content: (
            <div className="w-full flex flex-col justify-center items-start">
                <p className="font-bold">¿Dommies es solo para estudiantes?</p>
                <span className="">No, Dommies está diseñado para todos los jóvenes que buscan roommates en Lima. Aunque muchos de nuestros usuarios son estudiantes, también es ideal para:
                <ul className="list-disc list-inside space-y-2">
                  <li>Jóvenes profesionales que quieren compartir gastos y encontrar un compañero confiable.  </li>
                  <li>Personas que buscan independizarse y necesitan un roommate compatible.                  </li>
                  <li>Quienes ya tienen un departamento y desean compartirlo con alguien que se ajuste a su estilo de vida.
                  </li>
                </ul></span><br />
                <p className="font-bold">¿Puedo usar Dommies si ya tengo un departamento y busco un roommate?</p>
                <p className="">¡Claro que sí! Dommies es perfecto para quienes ya tienen vivienda en Lima y quieren compartirla con alguien compatible. Ya sea por compañía, para dividir costos o simplemente para hacer más amena la convivencia, nuestra plataforma te ayuda a encontrar al roommate ideal.</p><br />
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
                <p className="">Registrarte en Dommies es muy sencillo. Solo tienes que completar nuestro registro en la plataforma, y nuestro equipo se pondrá en contacto contigo. Nos compartirás detalles sobre tus intereses, hábitos y preferencias para la convivencia en Lima, y realizarás nuestro test de personalidad MBTI. Luego, te mostraremos recomendaciones personalizadas basadas en tus preferencias, ayudándote a encontrar roommates en Lima de manera rápida y eficiente.</p><br />
                <p className="font-bold">¿Cuánto tiempo tarda encontrar un match?</p>
                <p className="">El tiempo puede variar según tus preferencias, pero con nuestros filtros avanzados y sistema de compatibilidad, ahorrarás mucho tiempo en comparación con los métodos tradicionales. Dommies está diseñado para conectarte con roommates en Lima que sean compatibles contigo en el menor tiempo posible.</p>
            </div>
        ) 
    },
    { 
        title: "¿Por qué elegir Dommies?", 
        content: (
            <div className="w-full flex flex-col justify-center items-start">
                <p className="font-bold">¿Qué diferencia a Dommies de otras plataformas?</p>
                <p className="">Dommies no es solo una plataforma para buscar roommates; es un sistema diseñado para priorizar la compatibilidad y la seguridad. Aquí no solo encontrarás a alguien con quien compartir un espacio, sino a un roommate cuyos hábitos, estilo de vida e intereses encajan contigo. Nuestro enfoque en la inteligencia artificial y el test de personalidad MBTI asegura que tus matches sean pensados para una convivencia armoniosa y menos conflicitva.</p><br />
                <p className="font-bold">¿Cómo garantizan la seguridad de los usuarios?</p>
                <p className="">En Dommies, la seguridad es una prioridad. Todos los perfiles pasan por un riguroso proceso de verificación para garantizar que la información sea confiable y transparente. Además, fomentamos acuerdos claros entre roommates para evitar malentendidos y asegurar una convivencia respetuosa.</p><br />
                <p className="font-bold">¿Dommies me ayuda a evitar malas experiencias?</p>
                <p className="">¡Absolutamente! Nuestro enfoque en compatibilidad, verificación y reglas claras minimiza los problemas comunes de la convivencia, como diferencias de hábitos o falta de comunicación. Queremos que tu experiencia sea lo más positiva y libre de conflictos posible.</p>
            </div>
        ) 
    },
    { 
        title: "¿Qué pasa después de encontrar un match?", 
        content: (
            <div className="w-full flex flex-col justify-center items-start">
                <p className="font-bold">¿Puedo comunicarme con mi roommate antes de mudarme?</p>
                <p className="">Sí, una vez que hagas match, podrás interactuar con tu futuro roommate a través de nuestra plataforma. Esto te permitirá conocerse mejor, resolver dudas y asegurarte de que la convivencia será adecuada antes de tomar una decisión final.</p><br />
                <p className="font-bold">¿Dommies me ayuda a establecer reglas de convivencia?</p>
                <p className="">Próximamente, implementaremos herramientas especiales que te permitirán definir acuerdos claros sobre limpieza, horarios, pagos y más. Estas herramientas están diseñadas para facilitar una convivencia armoniosa y evitar malentendidos.</p><br />
                <p className="font-bold">¿Qué pasa si el match no funciona?</p>
                <p className="">No te preocupes, en Dommies entendemos que no todos los matches son perfectos. Si la convivencia no funciona como esperabas, puedes seguir explorando opciones en nuestra plataforma hasta encontrar a alguien que realmente encaje contigo. Estamos aquí para apoyarte en todo el proceso.</p>
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