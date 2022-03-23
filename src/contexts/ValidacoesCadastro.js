import React from 'react';
import { validarEmail, validarSenha, validarConfirmaSenha, validarCPF  } from '../models/cadastro';

const ValidacoesCadastro = React.createContext(
  {
    email: validarEmail,
    senha: validarSenha,
    confirmaSenha: validarConfirmaSenha,
    cpf: validarCPF,
  }
);

export default ValidacoesCadastro;