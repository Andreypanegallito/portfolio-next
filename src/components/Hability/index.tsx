import React from 'react';

import { DiReact, DiDatabase, DiCss3 } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';
import { SiTypescript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

const Hability = () => {
  return (
    <div
      id="hability"
      className="div-hability flex flex-col justify-center w-full"
    >
      <div className="titulo">
        <h1>Habilidades</h1>
      </div>
      <div className="text-hability">
        <p className="text-justify text-xl my-5">
          Atualmente estudo angular para o front-end e C# para o back-end.
          Também estudo linguagem de banco de dados PLSQL da Oracle. Sempre
          estou em busca de melhorar meu nível técnico para que eu possa assumir
          novos desafios, mas também para poder melhorar minha capacidade de
          resolver novos problemas e adquirir experiência.
        </p>
      </div>
      <div className="icons-hability flex items-center justify-center">
        <a
          href="https://github.com/Andreypanegallito/portfolio-next"
          target="_blank"
          className="react"
          rel="noreferrer"
        >
          <DiReact className="icon" />
        </a>
        <a
          href="https://github.com/Andreypanegallito/GameDoors"
          target="_blank"
          className="ts"
          rel="noreferrer"
        >
          <SiTypescript className="icon" />
        </a>
        <a
          href="https://github.com/Andreypanegallito/primeiraAPI"
          target="_blank"
          className="csharp"
          rel="noreferrer"
        >
          <TbBrandCSharp className="icon" />
        </a>
        <a
          href="https://github.com/Andreypanegallito/node-email"
          target="_blank"
          className="node"
          rel="noreferrer"
        >
          <FaNodeJs className="icon" />
        </a>
        <a
          href="https://github.com/Andreypanegallito/cadastroNode"
          target="_blank"
          className="sql"
          rel="noreferrer"
        >
          <DiDatabase className="icon" />
        </a>
        <a
          href="https://github.com/Andreypanegallito/portfolio-next"
          target="_blank"
          className="css3"
          rel="noreferrer"
        >
          <DiCss3 className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Hability;
