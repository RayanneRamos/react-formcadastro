import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import  ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

const DadosUsuario = ({ aoEnviar }) => {
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField 
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        id='email'
        label='Email'
        type='email'
        name='email'
        variant='outlined'
        margin='normal'
        fullWidth
        required
      />
      <TextField 
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperTexto={erros.senha.texto}
        id='senha'
        label='Senha'
        type='password'
        name='senha'
        variant='outlined'
        margin='normal'
        fullWidth
        required
      />
      <Button 
        type='submit'
        variant='contained'
        color='primary'
      >Próximo</Button>
    </form>
  );
}

export default DadosUsuario;