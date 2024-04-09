import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between w-full bg-gray-700 text-lg dark:bg-slate-800 px-12 dark:text-gray-100 items-center sticky top-0 shadow-2xl z-50">
      <section className="w-full flex justify-between py-4">
        <div>
          <h2>Logo</h2>
        </div>
        <div>
          <ul className="flex gap-10">
            <li>Inicio</li>
            <li>Productos</li>
            <li>Preguntas Frecuentes</li>
            <li>Contacto</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Nav;
