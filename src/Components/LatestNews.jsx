import React from 'react';
import Marquee from 'react-fast-marquee';
import { useLoaderData } from 'react-router';

const LatestNews = () => {
    const data = useLoaderData() || []
    return (
        <div className='flex items-center gap-5 bg-base-200 py-3 px-3'>
            <h2 className='bg-secondary text-base-100 px-2 py-1'>Latest</h2>
            <Marquee className='flex cursor-pointer' speed={50} pauseOnHover={true}>
                {
                    data.map(news => <span className=' ml-4 text-primary w-full'>*{news?.title}</span>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;