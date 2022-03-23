import React from 'react';
import { validarEmail, validarSenha, validarConfirmaSenha, validarNome, validarSobrenome, validarCPF, validarCEP, validarEndereco, validarNumero, validarEstado  } from '../models/cadastro';

const ValidacoesCadastro = React.createContext(
  {
    email: validarEmail,
    senha: validarSenha,
    confirmaSenha: validarConfirmaSenha,
    nome: validarNome,
    sobrenome: validarSobrenome,
    cpf: validarCPF,
    cep: validarCEP,
    endereco: validarEndereco,
    numero: validarNumero,
    estado: validarEstado,
  }
);

export default ValidacoesCadastro;