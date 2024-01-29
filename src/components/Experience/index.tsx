import React from 'react';
import CardExperience from '@/components/CardExperience';

const Experience = () => {
  return (
    <div id="experience" className="experiences">
      <div className="titulo">
        <h1>Experiência profissionais</h1>
      </div>
      <div className="timelines">
        <CardExperience
          title="Estagiário em TI"
          period="2019 - 2020"
          schoolcompany="Calafate Indústria de Máquinas Agroindustriais LTDA"
          position="left"
          description="Suporte de TI da empresa, responsável por instalação de programas em geral, cabeamento de rede, instalação de impressoras em rede e manutenção de computadores."
        />

        <CardExperience
          title="Desenvolvedor Web Frontend"
          period="2021 - 2022"
          schoolcompany="Zyoncore Sistemas"
          position="left"
          description="Responsável por desenvolver sites novos, fazer manutenção nos sites que estão no ar. Usando typescript para fazer a parte funcional e css puro para fazer o layout."
        />

        <CardExperience
          title="Programador de Sistemas"
          period="2022 - 2024"
          schoolcompany="Hospital Unimed Chapecó"
          position="left"
          description="Dar suporte aos softwares sob minha responsabilidade, atendendo aos chamados, documentando as atividades, realizar visitas técnicas nas áreas, testando e implementando atualizações de sistemas, gerar documentação especifica do sistema e tarefas a serem executadas."
        />
      </div>
    </div>
  );
};

export default Experience;
