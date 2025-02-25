import React from 'react';
import { PHOTO_GET } from '../../../api/api';
import useFetch from '../../../CustomHooks/useFetch';
import PhotoContent from '../../Photos/PhotoContent/PhotoContent';
import Error from '../../Utilities/Error';
import Loading from '../../Utilities/Loading';

import styles from './FeedModal.module.css';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
