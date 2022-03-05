import React, { useState, useEffect } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
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
    <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
    <Typography variant='h5'>Obrigado por se cadastrar!</Typography>
  ];

  function coletarDados(dados) {
    setDadosColetados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
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