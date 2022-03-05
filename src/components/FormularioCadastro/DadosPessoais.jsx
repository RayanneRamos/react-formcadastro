import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';

const DadosPessoais = ({ aoEnviar, validacoes }) => {
  const [ nome, setNome ] = useState('');
  const [ sobrenome, setSobrenome ] = useState('');
  const [ cpf, setCPF ] = useState('');
  const [ promocoes, setPromocoes ] = useState(true);
  const [ novidades, setNovidades ] = useState(true);
  const [ erros, setErros ] = useState({ cpf: { valido: true, texto: '' } });

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = {...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }
  
  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        onChange={(event) => setNome(event.target.value)} 
        value={nome}
        id='nome'
        label='Nome'
        name='nome'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        onChange={(event) => setSobrenome(event.target.value)}
        value={sobrenome}
        id='sobrenome'
        label='Sobrenome'
        name='sobrenome'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField 
        onChange={(event) => setCPF(event.target.value)}
        value={cpf}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={validarCampos}
        id='cpf'
        label='CPF'
        name='cpf'
        type='number'
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

export default DadosPessoais;