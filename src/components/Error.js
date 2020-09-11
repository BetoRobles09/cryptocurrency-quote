import styled from '@emotion/styled'
import React from 'react'

const Message = styled.p`
  background-color: #B7322C;
  padding: 1rem;
  color: #FFF;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
`

const Error = ({ message }) => {
  return (
    <Message>{message}</Message>
  )
}

export default Error
