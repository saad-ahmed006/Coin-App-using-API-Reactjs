 import React from 'react'
 import '../Styles/Loader.css'
 import loading from '../assets/833.gif'
 export default function Loader() {
   return (
     <div className='Loader'>
      <img src={loading} alt="loading" />
     </div>
   )
 }
 