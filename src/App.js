import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from './Components/Home';
import Exchange from './Components/Exchange';
import Coin from './Components/Coin';
import CoinDetails from './Components/CoinDetails';
function App() {
  return (
    <>
        <Router>
        <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/exchange" element={<Exchange/>} />
        <Route path="/Coin" element={<Coin/>} />
        <Route path="/Coin/:id" element={<CoinDetails/>} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
