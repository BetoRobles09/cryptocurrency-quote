import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import image from './cryptomonedas.png'
import Axios from 'axios'

import Form from './components/Form'
import Result from './components/Result'
import Spinner from './components/Spinner'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`

function App () {
  const [currency, getCurrency] = useState('')
  const [cryptocurrency, getCrypto] = useState('')
  const [quote, getQuote] = useState({})
  const [loading, getLoading] = useState(false)

  useEffect(() => {
    const quoteCrypto = async () => {
      if (currency === '') return
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`
      const result = await Axios.get(url)

      getLoading(true)

      setTimeout(() => {
        getLoading(false)
        getQuote(result.data.DISPLAY[cryptocurrency][currency])
      }, 3000)
    }
    quoteCrypto()
  }, [currency, cryptocurrency])

  const component = (loading) ? <Spinner /> : <Result quote={quote} />

  return (
    <Container>
      <div>
        <Image src={image} alt='imagen crypto' />
      </div>
      <div>
        <Heading>Quote cryptocurrencies instantly</Heading>
        <Form getCurrency={getCurrency} getCrypto={getCrypto} />
        {component}
      </div>
    </Container>
  )
}

export default App
