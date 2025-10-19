import React from 'react';
import swimming from '../../assets/swimming.png';
import classes from '../../assets/class.png'
import playGround from '../../assets/playground.png'
import bg from '../../assets/bg.png'
const QZone = () => {
    return (
        <div className='space-y-10'>
            <div className='mt-5 bg-base-200 px-2 py-4 space-y-3'>
                <h2 className='text-2xl text-primary font-bold'>Q-Zone</h2>
                <div className='flex flex-col gap-1'>
                    <figure>
                        <img className='w-full' src={swimming} alt="" />
                    </figure>
                    <figure>
                        <img className='w-full' src={classes} alt="" />
                    </figure>
                    <figure>
                        <img className='w-full' src={playGround} alt="" />
                    </figure>
                </div>
            </div>
            <figure>
                <img className='w-full' src={bg} alt="" />
            </figure>
        </div>
    );
};

export default QZone;