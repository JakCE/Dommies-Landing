import React, { useEffect, useState, useRef } from "react";

const CounterSection = () => {
  const counters = [
    { id: 1, value: 903, description: "Analizados para el entrenamiento IA" },
    { id: 2, value: 71, description: "Precisión de Recomendaciones", suffix: "%" },
    { id: 3, value: 4, description: "Enfoques de Personalidad MBTI" },
    { id: 4, value: 100, description: "Usuarios con validación de identidad", suffix: "%" },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Observer to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-wrap justify-evenly items-center px-5 gap-5 p-2 py-5 bg-[#6241A0]"
    >
      <div className="container mx-auto w-full flex flex-wrap justify-evenly items-center px-5 gap-5 p-2 py-5">
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          value={counter.value}
          description={counter.description}
          visible={visible}
          suffix={counter.suffix || ""}
        />
      ))}
      </div>
    </section>
  );
};

const Counter = ({ value, description, visible, suffix }) => {
  const [count, setCount] = useState(0);
  const MAX_DURATION = 1000; // Total animation time in ms for all counters

  useEffect(() => {
    if (visible) {
      const totalSteps = 100; // Fixed number of steps for all counters
      const stepIncrement = value / totalSteps; // Value to increment per step
      const stepTime = MAX_DURATION / totalSteps; // Time per step

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        setCount((prev) => Math.min(prev + stepIncrement, value));

        if (currentStep >= totalSteps) {
          clearInterval(interval);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [visible, value]);

  return (
    <div className="w-40 lg:w-52 flex flex-col justify-center items-center text-white text-center">
      <h1 className="text-3xl lg:text-5xl mb-4 font-bold">
        {Math.round(count)}
        {suffix}
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default CounterSection;
