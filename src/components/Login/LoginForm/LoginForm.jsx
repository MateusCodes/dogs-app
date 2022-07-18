import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../CustomHooks/useForm';
import Button from '../../FormUtilities/Button/Button';
import Input from '../../FormUtilities/Input/Input';
import { UserContext } from '../../../Contexts/UserContext';
import Error from '../../Utilities/Error';

import styles from './LoginForm.module.css';
import stylesBtn from '../../FormUtilities/Button/Button.module.css';
import Head from '../../Utilities/Head';

const LoginForm = () => {
  const username = useForm();

  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />

      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados Incorretos'} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perde a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtn.button} to="/login/criar">
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
