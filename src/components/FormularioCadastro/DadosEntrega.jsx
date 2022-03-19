import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const DadosEntrega = ({ aoEnviar, aoVoltar }) => {
  const [ cep, setCEP ] = useState('');
  const [ endereco, setEndereco ] = useState('');
  const [ numero, setNumero ] = useState('');
  const [ estado, setEstado ] = useState('');
  const [ cidade, setCidade ] = useState('');
  const [ bairro, setBairro ] = useState('');

  return(
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, cidade, estado, bairro });
      }}
    >
      <TextField 
        value={cep}
        onChange={(event) => setCEP(event.target.value)}
        id='cep'
        label='CEP'
        type='number'
        name='cep'
        variant='outlined'
        margin='normal'
      />
      <TextField
        value={endereco}
        onChange={(event) => setEndereco(event.target.value)} 
        id='endereco'
        label='Endereço'
        type='text'
        name='endereco'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        style={{ marginRight: 25 }}
        value={numero}
        onChange={(event) => setNumero(event.target.value)} 
        id='numero'
        label='Numero'
        type='number'
        name='numero'
        variant='outlined'
        margin='normal'
      />
      <TextField
        value={estado}
        onChange={(event) => setEstado(event.target.value)} 
        id='estado'
        label='Estado'
        type='text'
        name='estado'
        variant='outlined'
        margin='normal'
      />
      <TextField
        style={{ marginRight: 25}}
        value={cidade}
        onChange={(event) => setCidade(event.target.value)} 
        id='cidade'
        label='Cidade'
        type='text'
        name='cidade'
        variant='outlined'
        margin='normal'
      />
      <TextField 
        value={bairro}
        onChange={(event) => setBairro(event.target.value)}
        id='bairro'
        label='Bairro'
        type='text'
        name='bairro'
        variant='outlined'
        margin='normal'
      />
      <Button
        onClick={aoVoltar}
        style={{ marginRight: 25 }}  
        type='submit' 
        variant='contained' 
        color='error' 
      >Voltar</Button>
      <Button
        type='submit' 
        variant='contained' 
        color='primary' 
      >Finalizar Cadastro</Button>
    </form>
  );
}

export default DadosEntrega;