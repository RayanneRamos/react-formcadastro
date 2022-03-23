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
    return { valido: false, texto: 'O campo Confirma Senha não pode ser vazio.' }
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



export { validarEmail, validarSenha, validarConfirmaSenha, validarCPF };