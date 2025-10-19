import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 py-3 px-3'>
            <h2 className='bg-secondary text-base-100 px-2 py-1'>Latest</h2>
            <Marquee className='flex gap-5 cursor-pointer' speed={50} pauseOnHover={true}>
                <span className='text-primary w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, laboriosam.</span>
                <span className='text-primary w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, laboriosam.</span>
                <span className='text-primary w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, laboriosam.</span>
                <span className='text-primary w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, laboriosam.</span>
            </Marquee>
        </div>
    );
};

export default LatestNews;