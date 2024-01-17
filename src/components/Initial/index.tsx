import React from 'react';

import './Initial.scss';

const Initial = () => {
  return (
    <div
      id="initial"
      className="w-full h-screen flex flex-col items-center justify-center initial"
    >
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold">Olá, eu sou o Andrey</h2>
        <p className="text-xl mt-5">
          Sou desenvolvedor front-end residente em Chapecó - SC.
        </p>
        <p className="text-xl mt-5">
          Se quiser saber mais sobre mim clique no botão abaixo!
        </p>
      </div>
      <div className="div-button w-full flex items-center justify-center my-3">
        <button
          type="button"
          className="rounded-xl border-0 p-0 btnInitial mt-3"
        >
          <a
            href="#about"
            className="flex text-white no-underline text-base w-full h-full justify-center items-center"
          >
            Saber mais!
          </a>
        </button>
      </div>
    </div>
  );
};

export default Initial;
