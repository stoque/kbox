import React from 'react'
import { Link } from 'react-router-dom'

function BackButton({ page }) {
  return <Link to={page}>Voltar</Link>
}

export default BackButton
