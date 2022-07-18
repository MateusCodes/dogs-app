import React from 'react';
import { PHOTOS_GET } from '../../../api/api';
import useFetch from '../../../CustomHooks/useFetch';
import Error from '../../Utilities/Error';
import Loading from '../../Utilities/Loading';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';

import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ setModalPhoto, user, page, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      let total = 6;

      const { url, options } = PHOTOS_GET({ page, total, user });

      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
