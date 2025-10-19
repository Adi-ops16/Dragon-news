import { CircleUserRound } from 'lucide-react';
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = use(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Career</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/career">Career</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
                <CircleUserRound size={40}></CircleUserRound>
                {
                    user ? <button onClick={handleLogOut} className='btn shadow-none w-24 btn-primary text-base-100'>LogOut</button> : <Link to="/auth/login" className="btn shadow-none w-24 btn-primary text-base-100">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;