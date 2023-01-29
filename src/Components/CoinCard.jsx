import { NavLink } from "react-router-dom"

const CoinCard = ({ id, name, image, symbol, price, currencySymbol }) => {
    return (
        <div className="ExchangeItemCont">
            <NavLink to={`/coin/${id}`}>
                <div className='ExchangeItem'>
                    <img src={image} alt='coin img'></img>
                    <h3>{symbol}</h3>
                    <h5>{name}</h5>
                    <h5>{currencySymbol} {price}</h5>
                </div>
            </NavLink>
        </div>
    )
}
export default CoinCard