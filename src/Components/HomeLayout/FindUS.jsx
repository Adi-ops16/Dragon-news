import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';

const FindUS = () => {
    return (
        <div className='mt-14 space-y-3'>
            <h2 className='text-2xl text-primary font-bold'>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item bg-base-100  font-semibold justify-start">
                    <Facebook fill='#58A7DE' color='#58A7DE'/>
                     Facebook</button>
                <button className="btn join-item bg-base-100  font-semibold justify-start"><Twitter fill='#58a7dec7' color='#58a7dec7'/> Twitter</button>
                <button className="btn join-item bg-base-100  font-semibold justify-start"><Instagram fill='#d82d7ec2' color='white'/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUS;