import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { server } from '../index.js'
import Loader from './Loader.jsx'
import CoinCard from './CoinCard.jsx'
import '../Styles/Exchange.css'
import Error from './Error.jsx'
export default function Coin() {
  const [coin, setCoin] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currency, setCurrency] = useState('inr')
  let currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const GetCoin = async (url) => {
    try {
      const res = await axios.get(url)
      const Coin = await res.data
      setCoin(Coin);
      setLoading(false)

    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    GetCoin(`${server}/coins/markets?vs_currency=${currency}`)
  }, [currency])

  if (error) return <Error message={"Error While fetching Coin"} />


  return (
    <>
      {loading ? <Loader /> : <>
        <div className='RadioButton'>
          <input type="radio" value="inr" id="inr" name="fav_language" onChange={e => setCurrency(e.target.value)} />
          <label >INR</label>
          <input type="radio" value="usd" id="usd" name="fav_language" onChange={e => setCurrency(e.target.value)} />
          <label >USD</label>
          <input type="radio" value="eur" id='eur' name="fav_language" onChange={e => setCurrency(e.target.value)} />
          <label >EUR</label>
        </div>

        <div className='ExchangeContainer'>

          {coin.map((currElem) => {
            return <CoinCard
              id={currElem.id}
              name={currElem.name}
              image={currElem.image}
              price={currElem.current_price}
              symbol={currElem.symbol}
              currencySymbol={currencySymbol}
              url={currElem.url} />
          })}

        </div>
      </>
      }
    </>
  )
}

