import { Link } from 'react-router-dom'
const ExchangeCard = ({ name, image, rank, url }) => {
  return (

    <div className='ExchangeItemCont'>
      <Link to={url} target={"_blank"}>
        <div className='ExchangeItem'>
          <img src={image} alt='coin img'></img>
          <h3>{rank}</h3>
          <h5>{name}</h5>
        </div>
      </Link>
    </div>
  )
}

export default ExchangeCard