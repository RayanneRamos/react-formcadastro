import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';

const FormularioCadastro = () => {
  const [ nome, setNome ] = useState('');
  const [ sobrenome, setSobrenome ] = useState('');
  const [ cpf, setCPF ] = useState('');
  const [ promocoes, setPromocoes ] = useState(true);
  const [ novidades, setNovidades ] = useState(true);

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
            checked={promocoes}
            onChange={(event) => setPromocoes(event.target.checked)}
            name='promoções'
            defaultChecked={promocoes}
            color='primary'
          />
        }
      />
      <FormControlLabel 
        label='Novidades'
        control={
          <Switch
            checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
            name='novidades'
            defaultChecked={novidades}
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