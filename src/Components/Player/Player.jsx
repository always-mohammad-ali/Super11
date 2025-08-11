import React from 'react';
import { BsPersonCheckFill } from "react-icons/bs";
import { FaFlag } from "react-icons/fa";


const Player = ({playerData}) => {
    const {name, nationality, current_club, total_goals, market_value, image_url, player_position} = playerData;
    return (
        <div className=''>
            
            <div>
                <div className='max-w-sm rounded-lg shadow-lg overflow-hidden px-7 py-11 border-2'>
                    <img className='w-full h-48 object-cover' src={image_url} alt="" />

                    <div className='flex gap-4 text-xl font-bold my-4'>
                        <BsPersonCheckFill/>
                        <p>{name}</p>
                    </div>

                    <div className='flex justify-between w-3/4  items-center my-2'>
                        <div className='flex gap-2 font-bold items-center'>
                            <FaFlag/>
                            <p>{nationality}</p>
                        </div>
                        <div>
                            <p className='text-sm text-gray-600'><span className='font-bold'>Position:</span> {player_position}</p>
                        </div>
                    </div>
                    
                    <hr className='border-2 text-gray-800' />
                    
                   
                        <div className='flex gap-8 my-2'>
                            <p className='text-gray-600'><span className='font-bold'>Club: </span>{current_club}</p>
                            <p className='text-gray-600'><span className='font-bold'>Goals: </span>{total_goals}</p>
                        </div>
                      


                    <div className='flex gap-8'>
                            <p className='text-gray-600'><span className='font-bold '>Value: </span>{market_value}</p>  
                            <button className='font-bold'>Choose Player</button>
                    </div>
                        
                </div>


            </div>
            
        </div>
    );
};

export default Player;