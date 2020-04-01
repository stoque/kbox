import React from 'react'

import * as S from './styles'

type Props = {
  isBigger?: boolean
}

function Logo({ isBigger = true }: Props) {
  return (
    <>
      <S.Logo isBigger={isBigger}>kbox</S.Logo>
    </>
  )
}

export default Logo
