import React from 'react';
import Input from '../../FormUtilities/Input/Input';
import Button from '../../FormUtilities/Button/Button';
import useForm from '../../../CustomHooks/useForm';
import { USER_POST } from '../../../api/api';
import { UserContext } from '../../../Contexts/UserContext';
import useFetch from '../../../CustomHooks/useFetch';
import Error from '../../Utilities/Error';
import Head from '../../Utilities/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);
  
  const { loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title='Crie sua Conta'/>

      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
