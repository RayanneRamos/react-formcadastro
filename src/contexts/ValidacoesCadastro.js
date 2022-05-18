import React from 'react';
import { validarEmail, validarSenha, validarConfirmaSenha, validarNome, validarSobrenome, validarCPF, validarCEP, validarEndereco, validarNumero, validarEstado, validarCidade, validarBairro, validarNumeroCartao, validarValidade, validarCodigoSeguranca  } from '../models/cadastro';

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
    cidade: validarCidade,
    bairro: validarBairro,
    numeroCartao: validarNumeroCartao,
    cvc: validarValidade,
    codigoSeguranca: validarCodigoSeguranca,
  }
);

export default ValidacoesCadastro;