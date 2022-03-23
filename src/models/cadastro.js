function validarEmail(email) { 
  
  const emailRegex = new RegExp("(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}\.?\w{0,2})");
  const emailValido = document.getElementById('#email').value = email;

  if(emailValido !== emailRegex) {
    return { valido: false, texto: 'Precisa preencher o campo email no formato certo.' }
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

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve ter 11 dígitos.' }
  } else {
    return { valido: true, texto: '' }
  }
}



export { validarEmail, validarSenha, validarCPF };