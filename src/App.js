import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography  } from '@mui/material';
import 'fontsource-roboto';
import { validarEmail, validarSenha, validarConfirmaSenha, validarNome, validarSobrenome, validarCPF, validarCEP  } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>Formulário Cadastro</Typography>
      <ValidacoesCadastro.Provider value={
        { 
          email: validarEmail,
          senha: validarSenha, 
          confirmaSenha: validarConfirmaSenha,
          nome: validarNome,
          sobrenome: validarSobrenome,
          cpf: validarCPF, 
          cep: validarCEP,
        }}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
