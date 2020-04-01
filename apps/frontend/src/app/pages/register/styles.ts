import styled from 'styled-components'

export const PageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`

export const Form = styled.form`
  margin-bottom: 32px;
`

export const Input = styled.input`
  border: 3px solid #000;
  border-radius: 8px;
  height: 48px;
  font-size: 16px;
  margin-bottom: 16px;
  outline: none;
  text-indent: 1ch;
  transition: border 0.1s linear;
  width: 100%;

  &:focus {
    border: 3px solid lightblue;
  }
`

export const Button = styled.button`
  background-color: #000;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 48px;
  width: 100%;
`
