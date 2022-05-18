import React, { useState, useEffect } from 'react';
import DadosPessoais from '../DadosPessoais/DadosPessoais';
import DadosUsuario from '../DadosUsuario/DadosUsuario';
import DadosEntrega from '../DadosEntrega/DadosEntrega';
import DadosCartaoCredito from '../DadosCartaoCredito/DadosCartaoCredito';
import { Typography, Stepper, Step, StepLabel } from '@mui/material';

const FormularioCadastro = ({ aoEnviar, validacoes }) => {
  const [ etapaAtual, setEtapaAtual ] = useState(0);
  const [ dadosColetados, setDadosColetados ] = useState({});
  
  useEffect(() => {
    if(etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}  aoVoltar={voltarColetarDados} />,
    <DadosPessoais aoEnviar={coletarDados} aoVoltar={voltarColetarDados} />,
    <DadosCartaoCredito aoEnviar={coletarDados} aoVoltar={voltarColetarDados} />,
    <DadosEntrega aoEnviar={coletarDados}  aoVoltar={voltarColetarDados} />,
    <Typography variant='h5'>Obrigado por se cadastrar!</Typography>
  ];

  function coletarDados(dados) {
    setDadosColetados({...dadosColetados, ...dados});
    proximo();
  }

  function voltarColetarDados(dados) {
    setDadosColetados({...dadosColetados, ...dados});
    voltar();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function voltar() {
    setEtapaAtual(etapaAtual -1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Cartão</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {
        formularios[etapaAtual]
      }
    </>
  );
}

export default FormularioCadastro;