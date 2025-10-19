import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData()
    const { newsId } = useParams()
    const [news, setNews] = useState()
    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id === newsId)
        setNews(newsDetails)
    }, [data, newsId])

    return (
        <div className='max-w-11/12 mx-auto'>
            <header><Header></Header></header>
            <main className='grid grid-cols-12 gap-5 mt-10'>
                <section className='col-span-9 space-y-5'>
                    <h2 className='text-xl font-bold text-primary'>Dragon News</h2>
                    <div>
                        <NewsDetailsCard news={news}></NewsDetailsCard>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;