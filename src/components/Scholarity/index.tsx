import React from 'react';
import CardExperience from '@/components/CardExperience';

// import './scholarity.css';

const Scholarity = () => {
  return (
    <div id="scholarity" className="experiences">
      <div className="titulo">
        <h1>Experiência</h1>
      </div>
      <div className="timelines">
        <CardExperience
          title="Ensino médio técnico"
          period="2017 - 2021"
          schoolcompany="IFSC Campus Chapecó"
          position="left"
          description="Técnico em informática integrado ao ensino médio"
        />

        <CardExperience
          title="Bacharelado de Sistemas de Informação"
          period="2022 - andamento"
          schoolcompany="UNOESC Campus Chapecó"
          position="left"
          description="Curso de bacharelado em sistema de informação"
        />
      </div>
    </div>
  );
};

export default Scholarity;
