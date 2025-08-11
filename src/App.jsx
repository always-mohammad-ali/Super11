import './index.css'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import { useState } from 'react';

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
     
    </>
  )
}

export default App
