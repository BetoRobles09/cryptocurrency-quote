import styled from '@emotion/styled'
import React, { useState } from 'react'

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`
const SelectCurrency = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`

const useCryptocurrency = (label, initialState, options) => {
  const [state, setState] = useState(initialState)

  const SelectCrypto = () => (
    <>
      <Label>{label}</Label>
      <SelectCurrency onChange={e => setState(e.target.value)} value={state}>
        <option value=''>-- Select currency</option>
        {options.map(option => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
        ))}
      </SelectCurrency>
    </>
  )

  return [state, SelectCrypto, setState]
}

export default useCryptocurrency
