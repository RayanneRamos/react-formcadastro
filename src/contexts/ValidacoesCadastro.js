import React from 'react';
import { validarCPF, validarSenha } from '../models/cadastro';

const ValidacoesCadastro = React.createContext(
  {
    senha: validarSenha,
    cpf: validarCPF,
  }
);

export default ValidacoesCadastro;