import React from 'react'
import '../Styles/Home.css'
import MainImage from '../assets/btc.png'
export default function Home() {
  return (
    <div className='MainSection'>
      <img src={MainImage} alt={"MainImg"}></img>
      <h1>Xcrypto</h1>
    </div>
  )
}
