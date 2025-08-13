import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const AllPlayer = ({handleMarketValue}) => {
    const [playerData, setPlayerData] = useState([]);

    useEffect(()=>{
        fetch('playerData.json')
        .then(res => res.json())
        .then(data => setPlayerData(data))
    },[])

    return (
        <div>

            <div className='flex justify-between w-4/5 mx-auto  mt-14 mb-10'>
                <div>
                    <p className='text-xl font-bold'>Top Players</p>
                </div>
                <div className='flex gap-4'>
                    <button className='text-md font-bold'>All</button>
                    <button className='text-md font-bold'>Selected</button>
                </div>
            </div>
            <div className='grid grid-cols-3 w-5/6 mx-auto gap-x-8 gap-y-12 '>
              {
                playerData.map(playerData => <Player playerData={playerData} handleMarketValue={handleMarketValue}></Player> )
              }
            </div>
            
        </div>
    );
};

export default AllPlayer;