import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header></header>
            <section className='max-w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='max-w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <main className='max-w-11/12 mx-auto my-10 grid grid-cols-12 gap-10'>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;