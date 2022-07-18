import React from 'react';
import Input from '../../FormUtilities/Input/Input';
import Button from '../../FormUtilities/Button/Button';
import useForm from '../../../CustomHooks/useForm';
import useFetch from '../../../CustomHooks/useFetch';
import Error from '../../Utilities/Error';
import { PASSWORD_RESET } from '../../../api/api';
import { useNavigate } from 'react-router-dom';
import Head from '../../Utilities/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.validate) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      });

      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Resete a Senha" />

      <form onSubmit={handleSubmit}>
        <h1 className="title">Resete a Senha.</h1>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
