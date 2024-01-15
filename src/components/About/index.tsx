// import ImagemLogo from '../../assets/images/logo_about.jpg';

const About = () => {
  return (
    <div id="about" className="about my-8 w-full">
      <div className="img-about">
        {/* <img src={ImagemLogo} alt="teste" /> */}
      </div>
      <div className="infos-about">
        <div className="info-about text-left my-4">
          <h3 className="ms-0 me-0 text-xl">Nome:</h3>
          <p className="text-left ms-0 me-0 text-lg">
            Andrey Lucas Machado Panegalli
          </p>
        </div>
        <div className="info-about text-left my-4">
          <h3 className="ms-0 me-0 text-xl">Nascimento:</h3>
          <p className="text-left ms-0 me-0 text-lg">10/10/2001</p>
        </div>
        {/* <div className="info-about text-left my-4">
          <h3 className="ms-0 me-0 text-xl">Cidade:</h3>
          <p className="text-left ms-0 me-0 text-lg">Chapecó - SC</p>
        </div> */}
        <div className="info-about text-left my-4">
          <h3 className="ms-0 me-0 text-xl">E-mail:</h3>
          <p className="text-left ms-0 me-0 text-lg">
            andrey.panegalli@gmail.com
          </p>
        </div>
      </div>
      <div className="text-about">
        <p className="text-justify text-xl my-5">
          Sou um programador front-end que tem alguns pontos de conhecimento em
          sql, nodeJS e C#. Sou formado no IFSC Campus Chapecó no curso de
          técnico em informática integrado ao ensino médio. No curso descobri um
          pouco sobre o mundo da programação e resolvi me aprofundar na área
          fazendo cursos e trabalhando para que pudesse adquirir experiência.
        </p>
        <p className="text-justify text-xl my-5">
          Me considero alguém proativo e sempre com vontade de adquirir
          conhecimentos novos, buscando elevar e melhorar meu nível técnico mas
          também buscando sempre melhorar o lado interpessoal.
        </p>
      </div>
    </div>
  );
};

export default About;
