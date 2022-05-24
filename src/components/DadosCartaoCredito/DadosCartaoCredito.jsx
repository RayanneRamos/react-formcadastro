import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

const DadosCartaoCredito = ({ aoEnviar, aoVoltar }) => {

  const [ numeroCartao, setNumeroCartao ] = useState('');
  const [ nome, setNome ] = useState('');
  const [ validade, setValidade ] = useState('');
  const [ codigoSeguranca, setCodigoSeguranca ] = useState('');
  const [ focused, setFocused ] = useState('');
  const validacoes = useContext(ValidacoesCadastro);
  const [ erros, validarCampos ] = useErros(validacoes);

  function adicionarFocus(event) {
    setFocused(event.target.name);
  }

  return(
    <>
      <div id='PaymentForm'>
        <Cards 
          id='cards'
          cvc={codigoSeguranca}
          expiry={validade}
          focused={focused}
          name={nome}
          number={numeroCartao}
        />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ numeroCartao, nome, validade, codigoSeguranca });
          }}
        >
          <TextField 
            value={numeroCartao}
            onChange={(event) => setNumeroCartao(event.target.value)}
            onFocus={adicionarFocus}
            onBlur={validarCampos}
            error={!erros.numeroCartao.valido}
            helperText={erros.numeroCartao.texto}
            name='numeroCartao'
            id='númeroDoCartao'
            label='Número do Cartão'
            type='number'
            placeholder='3434 3434 3434 3434'
            variant='outlined'
            margin='normal'
            fullWidth
            required
          />
          <TextField 
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            onFocus={adicionarFocus}
            onBlur={validarCampos}
            error={!erros.nome.valido}
            helperText={erros.nome.texto}
            id='nome'
            name='nome'
            label='Nome'
            type='text'
            placeholder='João Silva'
            variant='outlined'
            margin='normal'
            fullWidth
            required
          />
          <TextField
            value={validade}
            onChange={(event) => setValidade(event.target.value)}
            onFocus={adicionarFocus}
            style={{ marginRight: 25 }}
            onBlur={validarCampos}
            error={!erros.validade.valido}
            helperText={erros.validade.texto}
            id='validade'
            name='validade'
            label='Validade'
            placeholder='02/23'
            type='number'
            variant='outlined'
            margin='normal'
            required
          />
          <TextField 
            value={codigoSeguranca}
            onChange={(event) => setCodigoSeguranca(event.target.value)}
            onFocus={adicionarFocus}
            onBlur={validarCampos}
            error={!erros.cvc.valido}
            helperText={erros.cvc.texto}
            style={{ marginRight: 25 }}
            id='codigoSeguranca'
            name='cvc'
            label='Código de Segurança'
            placeholder='465'
            type='number'
            variant='outlined'
            margin='normal'
            required
          />
          <Button
            style={{ marginRight: 25 }}
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
      </div>
    </>
  );
}

export default DadosCartaoCredito;