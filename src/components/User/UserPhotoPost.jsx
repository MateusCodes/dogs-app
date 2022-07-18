import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PHOTO_POST } from '../../api/api';
import useFetch from '../../CustomHooks/useFetch';
import useForm from '../../CustomHooks/useForm';
import Button from '../FormUtilities/Button/Button';
import Input from '../FormUtilities/Input/Input';
import Error from '../Utilities/Error';
import Head from '../Utilities/Head'

import styles from './UserPhotoPost.module.css';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const navigate = useNavigate();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = localStorage.getItem('token');

    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0])
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title='Poste sua Foto' description='Home do site Dogs' />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <Input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            style={{ backgroundImage: `url('${img.preview}')` }}
            className={styles.preview}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
