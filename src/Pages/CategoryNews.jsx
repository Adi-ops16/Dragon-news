import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams()
    const news = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])
    console.log(news);
    useEffect(() => {
        if (id == "0") {
            setCategoryNews(news)
            return
        } else if (id == "1") {
            const filteredBreakingNews = news?.filter(n => n.others?.is_today_pick === true)
            setCategoryNews(filteredBreakingNews)
            return
        } else {
            const filteredNews = news?.filter(n => n.category_id == parseInt(id))
            setCategoryNews(filteredNews)
        }
    }, [news, id])

    return (
        <div>
            <h2 className='font-bold text-primary'>Dragon News Home</h2>
            <div className='grid grid-cols-1 gap-5 my-5'>
                {
                    categoryNews?.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;