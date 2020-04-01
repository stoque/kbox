import React from 'react'
import { render } from '@testing-library/react'

import Logo from '.'

describe('Logo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Logo />)
    expect(baseElement).toBeTruthy()
  })

  it('should have a greeting as the title', () => {
    const { getByText } = render(<Logo />)
    expect(getByText('kbox')).toBeTruthy()
  })
})
