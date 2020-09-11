import styled from '@emotion/styled'
import React from 'react'

const ResultDiv = styled.div`
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
`

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`

const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`

const Result = ({ quote }) => {
  if (Object.keys(quote).length === 0) return null
  return (
    <ResultDiv>
      <Price>The price is: <span>{quote.PRICE}</span></Price>
      <Info>Highest price of the day: <span>{quote.HIGHDAY}</span></Info>
      <Info>Lowest price of the day: <span>{quote.LOWDAY}</span></Info>
      <Info>Variation last 24hrs: <span>{quote.CHANGEPCT24HOUR}%</span></Info>
      <Info>Last Update: <span>{quote.LASTUPDATE}</span></Info>
    </ResultDiv>
  )
}

export default Result
