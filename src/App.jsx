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

    const handleMarketValue = currentMarketValue =>{
      const newTotalCoinAfterValue = coin - currentMarketValue;
      if(newTotalCoinAfterValue<=currentMarketValue){
                console.log('it is not possible to go minus')
      }
      setCoin(newTotalCoinAfterValue)
      
    }



  return (
    <>
     
     <Header coin={coin}></Header>
     <Hero handleTotalCoin={handleTotalCoin}></Hero>
     <AllPlayer handleMarketValue={handleMarketValue}></AllPlayer>
     
    </>
  )
}

export default App
