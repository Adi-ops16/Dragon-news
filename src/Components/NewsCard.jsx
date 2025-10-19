import { BookMarked, Eye, Share2, Star } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const { id, title, image_url, details, author, total_view, rating } = news;
    const { name, published_date, img } = author;

    const [isExpanded, setIsExpanded] = useState(false);

    // Step 2: Create a shortened version of the details
    const shortText = details.length > 250 ? details.slice(0, 250) + '...' : details;

    return (
        <div className=''>
            {/* Top Section - Author Info */}
            <div className='flex justify-between bg-base-200 px-5 py-3'>
                <div className='flex gap-2 items-center'>
                    <figure className='w-10 h-10'>
                        <img className='rounded-full' src={img} alt='' />
                    </figure>
                    <div className='space-y-1'>
                        <h2 className='text-primary font-bold'>{name}</h2>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <BookMarked />
                    <Share2 />
                </div>
            </div>

            {/* News Content */}
            <div className='border border-base-200 px-4 pt-4'>
                <div className='space-y-4'>
                    <h1 className='text-primary text-xl font-bold'>{title}</h1>
                    <figure>
                        <img className='w-full rounded-sm' src={image_url} alt='' />
                    </figure>

                    {/* Step 3: Conditionally render details */}
                    <p className='mx-4 border-b border-base-200 pb-4'>
                        {isExpanded ? details : shortText}
                        {details.length > 250 && (
                            <Link to={`/news-details/${id}`}
                                onClick={() => setIsExpanded(!isExpanded)}
                                className='text-blue-600 ml-2 font-semibold hover:underline'
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </Link>
                        )}
                    </p>
                </div>

                {/* Bottom Section - Rating & Views */}
                <div className='flex justify-between px-4 py-3'>
                    <div className='flex gap-3 items-center'>
                        <div className='flex gap-1 items-center'>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} fill='#FF8C47' color='#FF8C47' />
                            ))}
                        </div>
                        <p>{rating.number}</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <Eye />
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
