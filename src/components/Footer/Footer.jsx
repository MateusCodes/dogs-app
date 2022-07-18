import React from 'react';
import DogsFooter from '../../Assets/DogsFooter';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DogsFooter />
      <p>Dogs. Alguns Direitos Reservados.</p>
    </footer>
  );
};

export default Footer;
