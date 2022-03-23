import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

const DadosPessoais = ({ aoEnviar, aoVoltar }) => {
  const [ nome, setNome ] = useState('');
  const [ sobrenome, setSobrenome ] = useState('');
  const [ cpf, setCPF ] = useState('');
  const [ promocoes, setPromocoes ] = useState(true);
  const [ novidades, setNovidades ] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

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
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        placeholder='João'
        id='nome'
        label='Nome'
        name='nome'
        variant='outlined'
        fullWidth
        margin='normal'
        required
      />
      <TextField
        onChange={(event) => setSobrenome(event.target.value)}
        value={sobrenome}
        placeholder='Silva'
        id='sobrenome'
        label='Sobrenome'
        name='sobrenome'
        variant='outlined'
        fullWidth
        margin='normal'
        required
      />
      <TextField 
        onChange={(event) => setCPF(event.target.value)}
        value={cpf}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={validarCampos}
        placeholder='11122233310'
        id='cpf'
        label='CPF'
        name='cpf'
        type='number'
        variant='outlined'
        fullWidth
        margin='normal'
        required
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
        style={{ marginRight: 10}}
        onClick={aoVoltar}
        type='submit'
        variant='contained'
        color='error'
      >Voltar</Button>
      <Button
        type='submit'
        variant='contained'
        color='primary'
      >Próximo</Button>
    </form>
  );
}

export default DadosPessoais;