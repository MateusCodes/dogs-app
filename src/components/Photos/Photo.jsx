import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_PHOTO_GET } from '../../api/api';
import useFetch from '../../CustomHooks/useFetch';
import Error from '../Utilities/Error';
import Head from '../Utilities/Head';
import Loading from '../Utilities/Loading';
import PhotoContent from './PhotoContent/PhotoContent';

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url } = PHOTO_PHOTO_GET(id);
    request(url);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
