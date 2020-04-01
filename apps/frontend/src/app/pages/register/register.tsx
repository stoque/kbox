import React from 'react'

import BackButton from '../../shared/components/back-button'
import Logo from '../../shared/components/logo'
import Container from '../../shared/styles/container'
import * as S from './styles'

function LoginPage() {
  return (
    <Container>
      <BackButton page="login" />

      <Logo />

      <S.PageTitle>Cadastro</S.PageTitle>

      <S.Form>
        <S.Input type="text" placeholder="Nome" />
        <S.Input type="text" placeholder="Usuário" />
        <S.Input type="text" placeholder="Email" />
        <S.Input type="text" placeholder="Senha" />
        <S.Input type="text" placeholder="Confirme sua senha" />

        <S.Button>Cadastrar</S.Button>
      </S.Form>
    </Container>
  )
}

export default LoginPage
