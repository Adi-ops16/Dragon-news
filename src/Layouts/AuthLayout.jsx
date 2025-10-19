import React from 'react';
import Navbar from '../Components/Navbar';
import Login from '../Pages/Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className=' bg-base-200 min-h-screen'>
            <div className='max-w-11/12 mx-auto'>
                <header>
                    <Navbar></Navbar>
                </header>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;