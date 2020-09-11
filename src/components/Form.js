import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Axios from 'axios'

import useCurrency from '../hooks/useCurrency'
import useCryptocurrency from '../hooks/useCryptocurrency'

import Error from './Error'

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66A2FE;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition; background-color .3s ease;

  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
`

const Form = ({ getCurrency, getCrypto }) => {
  const [cryptoList, getCryptoList] = useState([])
  const [error, getError] = useState(false)

  const CURRENCY = [
    { code: 'USD', name: 'USA Dolar' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Pound Sterling' }
  ]

  const [currency, SelectCurrency] = useCurrency('Choose currency', '', CURRENCY)
  const [cryptocurrency, SelectCrypto] = useCryptocurrency('Choose cryptocurrency', '', cryptoList)

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const result = await Axios.get(url)
      getCryptoList(result.data.Data)
    }
    fetchAPI()
  }, [])

  const quoteCurrency = e => {
    e.preventDefault()

    if (currency === '' || cryptocurrency === '') {
      getError(true)
      return
    }
    getError(false)

    getCurrency(currency)
    getCrypto(cryptocurrency)
  }

  return (
    <form onSubmit={quoteCurrency}>
      {error ? <Error message='There was an error' /> : null}
      <SelectCurrency />
      <SelectCrypto />
      <Button type='submit' value='Calculate' />
    </form>
  )
}

export default Form
