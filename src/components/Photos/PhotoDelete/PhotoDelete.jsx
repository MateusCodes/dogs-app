import React from 'react';
import { PHOTO_DELETE } from '../../../api/api';
import useFetch from '../../../CustomHooks/useFetch';

import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Você realmente deseja apagar a foto?');

    if (confirm) {
      const token = localStorage.getItem('token');

      const { url, options } = PHOTO_DELETE(id, token);

      const response = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
