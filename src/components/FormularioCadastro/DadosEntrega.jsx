import React, { useState, useContext } from 'react';
import { Button, TextField } from '@mui/material';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

const DadosEntrega = ({ aoEnviar, aoVoltar }) => {
  const [ cep, setCEP ] = useState('');
  const [ endereco, setEndereco ] = useState('');
  const [ numero, setNumero ] = useState('');
  const [ estado, setEstado ] = useState('');
  const [ cidade, setCidade ] = useState('');
  const [ bairro, setBairro ] = useState('');
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos ] = useErros(validacoes);

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
        onBlur={validarCampos}
        error={!erros.cep.valido}
        helperText={erros.cep.texto}
        placeholder='00000-000'
        id='cep'
        label='CEP'
        type='number'
        name='cep'
        variant='outlined'
        margin='normal'
        required
      />
      <TextField
        value={endereco}
        onChange={(event) => setEndereco(event.target.value)} 
        onBlur={validarCampos}
        error={!erros.endereco.valido}
        helperText={erros.endereco.texto}
        placeholder='Rua Barata Ribeiro'
        id='endereco'
        label='Endereço'
        type='text'
        name='endereco'
        variant='outlined'
        margin='normal'
        fullWidth
        required
      />
      <TextField
        style={{ marginRight: 25 }}
        value={numero}
        onChange={(event) => setNumero(event.target.value)} 
        onBlur={validarCampos}
        error={!erros.numero.valido}
        helperText={erros.numero.texto}
        placeholder='10'
        id='numero'
        label='Numero'
        type='number'
        name='numero'
        variant='outlined'
        margin='normal'
        required
      />
      <TextField
        value={estado}
        onChange={(event) => setEstado(event.target.value)} 
        placeholder='RJ'
        id='estado'
        label='Estado'
        type='text'
        name='estado'
        variant='outlined'
        margin='normal'
        required
      />
      <TextField
        style={{ marginRight: 25}}
        value={cidade}
        onChange={(event) => setCidade(event.target.value)} 
        placeholder='Rio de Janeiro'
        id='cidade'
        label='Cidade'
        type='text'
        name='cidade'
        variant='outlined'
        margin='normal'
        required
      />
      <TextField 
        value={bairro}
        onChange={(event) => setBairro(event.target.value)}
        placeholder='Copacabana'
        id='bairro'
        label='Bairro'
        type='text'
        name='bairro'
        variant='outlined'
        margin='normal'
        required
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