import React from 'react';
import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import Dogs from '../../Assets/Dogs';
import { UserContext } from '../../Contexts/UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Cadastrar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
