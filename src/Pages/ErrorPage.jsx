import { ArrowBigLeft } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center min-h-screen flex-col space-y-10'>
            <h2 className='text-4xl font-bold'>The page u are trying to access is currently unavailable,please comeback later</h2>
            <button onClick={() => navigate(-1)} className='btn btn-primary text-white'><ArrowBigLeft/> Go Back</button>
        </div>
    );
};

export default ErrorPage;