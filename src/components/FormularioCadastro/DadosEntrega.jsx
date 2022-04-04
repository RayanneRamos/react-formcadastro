import React, { useState, useContext } from 'react';
import { Button, TextField } from '@mui/material';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';
import NumberFormat from 'react-number-format';

const DadosEntrega = ({ aoEnviar, aoVoltar }) => {
  const [ cep, setCEP ] = useState('');
  const [ endereco, setEndereco ] = useState('');
  const [ numero, setNumero ] = useState('');
  const [ estado, setEstado ] = useState('');
  const [ cidade, setCidade ] = useState('');
  const [ bairro, setBairro ] = useState('');
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos ] = useErros(validacoes);

  const buscarCEP = (event) => {
    const cep = event.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCEP(data.cep)
        setEndereco(data.logradouro)
        setEstado(data.uf)
        setCidade(data.localidade)
        setBairro(data.bairro)
      })
  }

  return(
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, cidade, estado, bairro });
      }}
    >
      <NumberFormat
        onChange={(event) => setCEP(event.target.value)}
        value={cep}
        onBlur={buscarCEP}
        error={!erros.cep.valido}
        helperText={erros.cep.texto}  
        name='cep'
        mask={"_"}
        customInput={TextField}
        format={"#####-###"}
        type="text"
        variant="outlined"
        id='cep'
        label='CEP'
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
        onBlur={validarCampos}
        error={!erros.estado.valido}
        helperText={erros.estado.texto}
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
        onBlur={validarCampos}
        error={!erros.cidade.valido}
        helperText={erros.cidade.texto}
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
        onBlur={validarCampos}
        error={!erros.bairro.valido}
        helperText={erros.bairro.texto}
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