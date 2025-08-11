import React from 'react';
import hero from '../../assets/background.jpg'

const Hero = ({handleTotalCoin}) => {
    const coinValue = 90000000;
    return (
        <div>
            <div className='relative'>
                <img src={hero} alt="" />

                <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
                     <h1 className='text-4xl font-bold'>Assemble Your Ultimate Best 11 Footballer List</h1>
                     <p className='text-xl my-5 text-gray-400 font-bold'>Beyond Boundaries Beyond Limits</p>
                     <button onClick={()=>{handleTotalCoin(coinValue)}} className='border-2 font-bold px-3 py-2 rounded- bg-orange-500'>Claim 90M Free Credit</button>
                </div>

            </div>
            
        </div>
    );
};

export default Hero;