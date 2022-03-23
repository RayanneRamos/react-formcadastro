import React from 'react';
import { validarEmail, validarSenha, validarConfirmaSenha, validarNome, validarCPF  } from '../models/cadastro';

const ValidacoesCadastro = React.createContext(
  {
    email: validarEmail,
    senha: validarSenha,
    confirmaSenha: validarConfirmaSenha,
    nome: validarNome,
    cpf: validarCPF,
  }
);

export default ValidacoesCadastro;