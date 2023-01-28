import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { server } from '../index.js'
import Loader from './Loader.jsx'
import { Link } from 'react-router-dom'
import '../Styles/Exchange.css'
import Error from './Error.js'
export default function Exchanges() {
  const [exchange, setExchange] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const GetExchangeCoin = async (url) => {
    try {
      const res = await axios.get(url)
      const Coin = await res.data
      setExchange(Coin);
      setLoading(false)

    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  useEffect(() => {
    GetExchangeCoin(`${server}/exchanges`)
  }, [])

  if (error) return <Error message={"Error While fetching Exchange"} />


  return (
    <div className='ExchangeContainer'>
      {loading ? <Loader /> : <>
        {exchange.map((currElem) => {
          return <ExchangeCard
            key={currElem.id}
            name={currElem.name}
            image={currElem.image}
            rank={currElem.trust_score_rank}
            url={currElem.url} />
        })}

      </>
      }
    </div>
  )
}

const ExchangeCard = ({ name, image, rank, url }) => {
  return (<Link to={url}><div className='ExchangeItem'>
    <img src={image} alt='coin img'></img>
    <h3>{rank}</h3>
    <h5>{name}</h5>
  </div>
  </Link>
  )
}