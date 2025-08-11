import React from 'react';
import logo from '../../assets/logo.png';
import { CiBitcoin } from 'react-icons/ci';

const Header = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row md:justify-between md:w-4/5 md:mx-auto '>
                <div className=''>
                    <img className='w-1/4 md:w-1/4 mx-auto md:mx-0' src={logo} alt="" />
                </div>
                <div className='flex gap-5 mx-auto md:mx-0'>
                    <button><a className='' href="sturdy-patch.surge.sh">Home</a></button>
                    <button><a href="sturdy-patch.surge.sh">Fixture</a></button>
                    <button><a href="sturdy-patch.surge.sh">Teams</a></button>
                    <button><a href="sturdy-patch.surge.sh">Schedules</a></button>
                    <p className='flex flex-row gap-1 items-center font-bold'>Coin<span className='text-2xl text-orange-500'><CiBitcoin/></span></p>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;