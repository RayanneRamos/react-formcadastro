import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

const DadosPessoais = ({ aoEnviar }) => {
  const [ nome, setNome ] = useState('');
  const [ sobrenome, setSobrenome ] = useState('');
  const [ cpf, setCPF ] = useState('');
  const [ promocoes, setPromocoes ] = useState(true);
  const [ novidades, setNovidades ] = useState(true);
  const [ erros, setErros ] = useState({ cpf: { valido: true, texto: '' } });

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = {...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for(let campo in erros) {
      if(!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }
  
  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
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
      >Próximo</Button>
    </form>
  );
}

export default DadosPessoais;