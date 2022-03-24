import React, { useState, useContext } from 'react';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import  ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const DadosUsuario = ({ aoEnviar }) => {
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ confirmaSenha, setConfirmaSenha ] = useState('');
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  const [ verSenha, setVerSenha ] = useState(false);
  const [ verConfirmaSenha, setVerConfirmaSenha ] = useState(false);

  const handleClickShowPassword = () => {
    setVerSenha(!verSenha);
  }

  const handleMouseDownPassword = () => {
    setVerSenha(!verSenha);
  }

  const handleClickShowConfirmPassword = () => {
    setVerConfirmaSenha(!verConfirmaSenha);
  }

  const handleMouseDownConfirmPassword = () => {
    setVerConfirmaSenha(!verConfirmaSenha);
  }


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()) {
          aoEnviar({ email, senha, confirmaSenha });
        }
      }}
    >
      <TextField 
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={validarCampos}
        error={!erros.email.valido}
        helperText={erros.email.texto}
        placeholder='joaosilva@gmail.com'
        id='email'
        label='Email'
        type='email'
        name='email'
        variant='outlined'
        margin='normal'
        fullWidth
        required
      />
      <TextField 
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                { verSenha ? <Visibility /> : <VisibilityOff /> }
              </IconButton>
            </InputAdornment>
          )
        }}
        placeholder='**********'
        id='senha'
        label='Senha'
        type={ verSenha ? 'text' : 'password' }
        name='senha'
        variant='outlined'
        margin='normal'
        fullWidth
        required
      />
      <TextField 
        value={confirmaSenha}
        onChange={(event) => setConfirmaSenha(event.target.value)}
        onBlur={validarCampos}
        error={!erros.confirmaSenha.valido}
        helperText={erros.confirmaSenha.texto}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle confirm password visibility'
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownConfirmPassword}
              >
                { verConfirmaSenha ? <Visibility /> : <VisibilityOff /> }
              </IconButton>
            </InputAdornment>
          )
        }}
        placeholder='**********'
        id='confirmaSenha'
        label='Confirma Senha'
        type={ verConfirmaSenha ? 'text' : 'password' }
        name='confirmaSenha'
        variant='outlined'
        margin='normal'
        fullWidth
        required
      />
      <Button 
        type='submit'
        variant='contained'
        color='primary'
      >Próximo</Button>
    </form>
  );
}

export default DadosUsuario;