function validarEmail(email) { 
  if(email === "") {
    return { valido: false, texto: 'O campo email não pode ser vazio.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarSenha(senha) {
  if(senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: 'Senha deve ter entre 4 e 72 dígitos.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarConfirmaSenha(confirmaSenha) {
  if(confirmaSenha === "") {
    return { valido: false, texto: 'O campo confirma senha não pode ser vazio.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarNome(nome) {
  if(nome.length < 3) {
    return { valido: false, texto: 'O campo nome precisa ter mais de 3 letras.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarSobrenome(sobrenome) {
  if(sobrenome.length < 3) {
    return { valido: false, texto: 'O campo sobrenome precisa ter mais de 3 letras.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve ter 11 dígitos.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarCEP(cep) {
  if(cep.length < 8) {
    return { valido: false, texto: 'CEP deve ter 8 dígitos.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarEndereco(endereco) {
  if(endereco === "") {
    return { valido: false, texto: 'O campo endereço não pode ser vazio.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarNumero(numero) {
  if(numero.length <= 0 ) {
    return { valido: false, texto: 'O campo número precisa ser maior do que 0.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarEstado(estado) {
  if(estado.length !== 2) {
    return { valido: false, texto: 'O campo estado precisa ter a sigla do seu estado.' }
  } else {
    return { valido: true, texto: '' }
  }
}

export { validarEmail, validarSenha, validarConfirmaSenha, validarNome, validarSobrenome, validarCPF, validarCEP, validarEndereco, validarNumero, validarEstado };