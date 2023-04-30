import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsides from '../EditorsInsides/EditorsInsides';

const News = () => {

    const news = useLoaderData();
    const { _id, title, details, image_url, category_id } = news;

    return (
        <>
            <Card className='p-4'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>

                <Link to={`/category/${category_id}`}><Button className='block mt-4' variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
            </Card>
            <EditorsInsides></EditorsInsides>
        </>
    );
};

export default News;