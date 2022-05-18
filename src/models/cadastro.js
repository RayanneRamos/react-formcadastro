function validarEmail(email) { 
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  document.getElementsByName('email').value = email;
  const emailTest = emailRegex.test(email);

  if(!emailTest) {
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
  const senhaTest = document.querySelector("#senha").value;
  const confirmaSenhaTest = document.querySelector("#confirmaSenha").value;

  if(senhaTest !== confirmaSenhaTest) {
    return { valido: false, texto: 'As senhas não são iguais.' }
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
  const cpfRegex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;
  document.getElementsByName('cpf').value = cpf;
  const cpfTest = cpfRegex.test(cpf);

  if(!cpfTest) {
    return { valido: false, texto: 'CPF deve ter 11 dígitos.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarCEP(cep) {
  const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
  document.getElementsByName('cep').value = cep;
  const cepTest = cepRegex.test(cep);

  if(!cepTest) {
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
    return { valido: false, texto: 'O campo número precisa ser maior que 0.' }
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

function validarCidade(cidade) {
  if(cidade === "") {
    return { valido: false, texto: 'O campo cidade não pode ser vazio.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarBairro(bairro) {
  if(bairro === "") {
    return { valido: false, texto: 'O campo bairro não pode ser vazio.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarNumeroCartao(numeroCartao) {
  if(numeroCartao.length <= 0) {
    return { valido: false, texto: 'O campo número do cartão precisa não pode ser zero.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarValidade(cvc) {
  if(cvc.length !== 4) {
    return { valido: false, texto: 'O campo validade precisa ser igual a quatro.' }
  } else {
    return { valido: true, texto: '' }
  }
}

function validarCodigoSeguranca(codigoSeguranca) {
  if(codigoSeguranca.length < 3) {
    return { valido: false, texto: 'O campo cvc precisa ser maior do que três.' }
  } else {
    return { valido: true, texto: '' }
  }
}

export { validarEmail, validarSenha, validarConfirmaSenha, validarNome, validarSobrenome, validarCPF, validarCEP, validarEndereco, validarNumero, validarEstado, validarCidade, validarBairro, validarNumeroCartao, validarValidade, validarCodigoSeguranca };