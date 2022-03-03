import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';

const FormularioCadastro = () => {
  const [ nome, setNome ] = useState('');
  const [ sobrenome, setSobrenome ] = useState('');
  const [ cpf, setCPF ] = useState('');

  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
      }}>
      <TextField
        onChange={(event) => setNome(event.target.value)} 
        value={nome}
        id='nome'
        label='Nome'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        onChange={(event) => setSobrenome(event.target.value)}
        value={sobrenome}
        id='sobrenome'
        label='Sobrenome'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField 
        onChange={(event) => setCPF(event.target.value)}
        value={cpf}
        id='cpf'
        label='CPF'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <FormControlLabel 
        label='Promoções'
        control={
          <Switch 
            name='promoções'
            defaultChecked
            color='primary'
          />
        }
      />
      <FormControlLabel 
        label='Novidades'
        control={
          <Switch 
            name='novidades'
            defaultChecked
            color='primary'
          />
        }
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
      >Cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro;