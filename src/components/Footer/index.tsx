import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import './footer.scss';

const Footer = () => {
  return (
    <footer id="footer" className="w-full flex flex-col mt-6">
      <div className="footer-text text-center">
        <p className="m-0 text-base">Todos os direitos reservados.</p>
      </div>
      <div className="footer-icons flex  justify-center">
        <a
          href="https://www.instagram.com/andrey_panegalli"
          target={'_blank'}
          rel="noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrey-panegalli-2699811b0"
          target={'_blank'}
          rel="noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/Andreypanegallito"
          target={'_blank'}
          rel="noreferrer"
        >
          <FaGithub className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
