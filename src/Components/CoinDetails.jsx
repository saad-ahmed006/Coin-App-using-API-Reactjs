import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { server } from '../index.js'
import Loader from './Loader.jsx'
import Error from './Error.jsx'
import '../Styles/CoinDetails.css'
import { LinearProgress } from '@mui/material'

export default function CoinDetails() {
  const [coinDetail, setCoinDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currency, setCurrency] = useState('inr')
  let currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const params = useParams()
  const GetCoinDetail = async (url) => {
    try {
      const res = await axios.get(url)
      const Coin = await res.data
      setCoinDetail(Coin);
      console.log(Coin);
      setLoading(false)

    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    GetCoinDetail(`${server}/coins/${params.id}`)
  }, [params.id])

  if (error) return <Error ErrorMessage={"Error While fetching Coin"} />

  return (
    <>
      {loading ? <Loader /> : <>
        <div>Coin graph section  "(but Coin graph section is not creating)"</div>
        <div className='CoinDes'>
          <input type="radio" value="inr" id="inr" name="fav_language" onChange={e => setCurrency(e.target.value)} />
          <label >INR</label>
          <input type="radio" value="usd" id="usd" name="fav_language" onChange={e => setCurrency(e.target.value)} />
          <label >USD</label>
          <input type="radio" value="eur" id='eur' name="fav_language" onChange={e => setCurrency(e.target.value)} />
          <label >EUR</label>
          <h5 className='Time'> Last Updated On{Date(coinDetail.market_data.last_updated).split("G")[0]}</h5>
          <img src={coinDetail.image.large} alt={"feature img"}></img>
          <h5 className='Name'>{coinDetail.name}</h5>
          <h6 className='Price'>{currencySymbol} {coinDetail.market_data.current_price[currency]}</h6>

          <p><i className={coinDetail.market_data.price_change_percentage_24h > 0 ? 'arrow up' : 'arrow down'}></i>
            {coinDetail.market_data.price_change_percentage_24h}%</p>

          <h3 className='rank'>#{coinDetail.market_cap_rank}</h3>

          <div className='ProgressBar'>
            <LinearProgress variant="determinate" value={50} />
            <div className='ProgressIn24Hours'>
              <p className='low'>{currencySymbol}{coinDetail.market_data.low_24h[currency]}</p>
              <h5>24hr Range</h5>
              <p className='high'>{currencySymbol}{coinDetail.market_data.high_24h[currency]}</p>
            </div>
          </div>
          <div className='Item'>
            <p>Currunt Supply</p>
            <p>{coinDetail.market_data.max_supply}</p>
          </div>
          <div className='Item'>
            <p>Circulating Supply</p>
            <p>{coinDetail.market_data.circulating_supply}</p>
          </div>
          <div className='Item'>
            <p>Market Cap</p>
            <p>{currencySymbol}${coinDetail.market_data.market_cap[currency]}</p>
          </div>
          <div className='Item'>
            <p>All Time Low</p>
            <p>{currencySymbol}${coinDetail.market_data.atl[currency]}</p>
          </div>
          <div className='Item'>
            <p>All Time Hig</p>
            <p>{currencySymbol}${coinDetail.market_data.ath[currency]}</p>
          </div>

        </div>
      </>
      }
    </>
  )
}
