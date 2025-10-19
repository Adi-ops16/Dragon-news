import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center px-1 space-y-3 mt-5'>
            <figure >
                <img src={logo} alt="" />
            </figure>
            <h1 className='text-accent'>Journalism Without Fear or Favour</h1>
            <div className='flex items-center'>
                <p className='font-semibold text-base-content'>
                    {format(new Date(), "EEEE ")}
                </p>
                <span className='text-accent'>
                    ,{format(new Date(), "MMMM, MM, yyyy")}
                </span>
            </div>
        </div>
    );
};

export default Header;