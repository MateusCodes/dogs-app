import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import MyPhotos from '../../Assets/MyPhotos';
import Estatisticas from '../../Assets/Estatisticas';
import Adicionar from '../../Assets/Adicionar';
import Sair from '../../Assets/Sair';
import useMedia from '../../CustomHooks/useMedia';

import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { userLogout } = React.useContext(UserContext);

  const mobile = useMedia('(max-width: 40rem)');

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton}
          ${mobileMenu && styles.mobileButtonActive}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} 
                    ${mobileMenu && styles.navMobileActive}`}
      >
        <NavLink to="/conta" end>
          <MyPhotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <Adicionar />
          {mobile && 'Adicionar Fotos'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
