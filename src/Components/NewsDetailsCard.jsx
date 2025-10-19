import { MoveLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const { title, details, image_url, category_id } = news || {}
    console.log({ title, details, image_url, category_id });
    return (
        <div className='p-7 border border-base-300 rounded-sm'>
            <div className='space-y-5'>
                <img className='w-full rounded-lg' src={image_url} alt="" />
                <h2 className='text-2xl font-bold text-primary'>{title}</h2>
                <p>{details}</p>
                <div className='bg-secondary w-fit flex items-center gap-2 text-white py-1 px-4 rounded-sm'>
                    <MoveLeft></MoveLeft>
                    <Link to={`/category/${category_id}`} className='cursor-pointer'>All news in this category</Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;