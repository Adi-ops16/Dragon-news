import React from 'react';
import { RingLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <RingLoader size={80}></RingLoader>
        </div>
    );
};

export default Loading;