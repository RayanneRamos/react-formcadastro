import React from 'react';
import { validarCPF, validarSenha, validarEmail } from '../models/cadastro';

const ValidacoesCadastro = React.createContext(
  {
    email: validarEmail,
    senha: validarSenha,
    cpf: validarCPF,
  }
);

export default ValidacoesCadastro;