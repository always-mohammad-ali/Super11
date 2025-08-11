import './index.css'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import { useState } from 'react';
import AllPlayer from './Components/AllPlayer/AllPlayer';

function App() {
  const [coin, setCoin] = useState(0);

    const handleTotalCoin = currentCoin => {
          const totalCoin = coin + currentCoin;
          setCoin(totalCoin)
    }



  return (
    <>
     
     <Header coin={coin}></Header>
     <Hero handleTotalCoin={handleTotalCoin}></Hero>
     <AllPlayer></AllPlayer>
     
    </>
  )
}

export default App
