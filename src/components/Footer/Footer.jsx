import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mateus-sobreira-734433184/"
        >
          <FaLinkedin size={35} />
        </a>
        <a target="_blank" href="https://github.com/MateusCodes">
          <FaGithub size={35} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
