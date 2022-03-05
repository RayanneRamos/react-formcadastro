import React from 'react';
import { TextField, Button } from '@mui/material';

const DadosUsuario = ({ aoEnviar }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}
    >
      <TextField 
        id='email'
        label='Email'
        type='email'
        variant='outlined'
        margin='normal'
        fullWidth
        required
      />
      <TextField 
        id='senha'
        label='Senha'
        type='password'
        variant='outlined'
        margin='normal'
        fullWidth
        required
      />
      <Button 
        type='submit'
        variant='contained'
        color='primary'
      >Cadastrar</Button>
    </form>
  );
}

export default DadosUsuario;