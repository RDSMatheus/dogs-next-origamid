'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/error';
import React from 'react';
import styles from './login-form.module.css';
import passwordLost from '@/actions/password-lost';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar Email</Button>
      )}
    </>
  );
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  });

  const [url, setUrl] = React.useState('');

  // necessário setar o url de forma reativa ou usar o force dynamic, caso contrário irá quebrar a aplicação quando o next tentar acessar o window no servidor
  React.useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'));
  }, []);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Email / usuário" name="login" type="text" />
        <input
          type="hidden"
          name="url"
          value={`${window.location.href.replace('perdeu', 'resetar')}`}
        />
        {state.ok ? (
          <p style={{ color: '#4c1' }}>Email enviado</p>
        ) : (
          <FormButton />
        )}
        <ErrorMessage error={state.error} />

        <p>{state.error}</p>
      </form>
    </>
  );
}
