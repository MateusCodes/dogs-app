import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import Feed from '../Feed/Feed';
import NotFound404 from '../NotFound404/NotFound404';
import Head from '../Utilities/Head';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title='Minha Conta'/>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </section>
  );
};

export default User;
