import React from 'react'

import Logo from '../../shared/components/logo'
import Container from '../../shared/styles/container'
import * as S from './styles'

function LoginPage() {
  return (
    <Container>
      <Logo />

      <S.PageTitle>Login</S.PageTitle>

      <S.Form>
        <S.Input type="text" placeholder="Usuário" />
        <S.Input type="text" placeholder="Senha" />

        <S.Button>Entrar</S.Button>
      </S.Form>

      <S.RegisterLink to="register">
        Não tem conta? <strong>Cadastre-se</strong>
      </S.RegisterLink>
    </Container>
  )
}

export default LoginPage
