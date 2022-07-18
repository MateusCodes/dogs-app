import React from 'react';
import Input from '../../FormUtilities/Input/Input';
import Button from '../../FormUtilities/Button/Button';
import useForm from '../../../CustomHooks/useForm';
import useFetch from '../../../CustomHooks/useFetch';
import Error from '../../Utilities/Error';
import { PASSWORD_LOST } from '../../../api/api';
import Head from '../../Utilities/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (login.validate) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar')
      });

      request(url, options);
    }
  }

  return (
    <section className='animeLeft'>
      <Head title='Perdeu a Senha?'/>

      <h1 className="title">Perdeu a Senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
