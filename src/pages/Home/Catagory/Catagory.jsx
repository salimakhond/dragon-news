import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Catagory = () => {

    const {id} = useParams();

    const categoryNews = useLoaderData();
    return (
        <div>
            {
                id && <h2 className='mb-4'>Dragon News Home : {categoryNews.length}</h2>
            }
            {
                categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Catagory;