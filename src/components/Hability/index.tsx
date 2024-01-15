import React from 'react';

// import './hability.scss';

import { DiReact, DiJsBadge, DiDatabase, DiCss3 } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';
import { SiOracle } from 'react-icons/si';

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
          Atualmente estou estudando a biblioteca react para o front-end, e a
          linguagem C# para o back-end. Também estudo linguagem de banco de
          dados, principalmente PLSQL da Oracle. Tenho conhecimento em
          desenvolvimento de animações básicas em css ou em scss. Sempre estou
          em busca de melhorar meu nível técnico para que eu possa assumir novos
          desafios, mas também para poder melhorar minha capacidade de resolver
          novos problemas e adquirir experiência.
        </p>
      </div>
      <div className="icons-hability flex items-center justify-center">
        <a
          href="https://pt-br.reactjs.org"
          target="_blank"
          className="react"
          rel="noreferrer"
        >
          <DiReact className="icon" />
        </a>
        <a
          href="https://www.javascript.com/"
          target="_blank"
          className="js"
          rel="noreferrer"
        >
          <DiJsBadge className="icon" />
        </a>
        <a
          href="https://learn.microsoft.com/pt-br/dotnet/csharp/"
          target="_blank"
          className="csharp"
          rel="noreferrer"
        >
          <TbBrandCSharp className="icon" />
        </a>
        <a
          href="https://www.oracle.com/br/"
          target="_blank"
          className="oracle"
          rel="noreferrer"
        >
          <SiOracle className="icon" />
        </a>
        <a
          href="https://www.w3.org/TR/webdatabase"
          target="_blank"
          className="sql"
          rel="noreferrer"
        >
          <DiDatabase className="icon" />
        </a>
        <a
          href="https://www.w3.org/Style/CSS/Overview.en.html"
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
