import { useState } from "react";

const Toast = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  // Mostrar el toast
  const showToast = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, duration);
  };

  return (
    <>
      {/* Botón para disparar el toast (puedes llamarlo desde donde necesites) */}
      <button
        onClick={showToast}
        className="hidden"
        id="show-toast-trigger"
      ></button>

      {/* El Toast */}
      {visible && (
        <div
          className="fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded shadow-lg transition-opacity duration-300"
        >
          {message}
        </div>
      )}
    </>
  );
};

export default Toast;
