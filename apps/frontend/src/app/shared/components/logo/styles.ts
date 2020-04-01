import styled from 'styled-components'

type LogoProps = {
  isBigger: boolean
}

export const Logo = styled.h1`
  font-family: 'Roboto';
  font-size: ${(props: LogoProps) => (props.isBigger ? '32px' : '24px')};
  font-weight: bold;
  margin: 24px 0;
  text-align: center;
`
