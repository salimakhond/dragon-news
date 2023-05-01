import moment from 'moment/moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaBookmark, FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ms-3'>
                        <h4>{author?.name}</h4>
                        <p>{moment(author?.published_date).format('YYYY-MM-D')}</p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <FaRegBookmark className='me-2' style={{ height: '24px' }}></FaRegBookmark>
                    <FaShareAlt className='me-2' style={{ height: '24px' }}></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='mb-5 mt-4' variant="top" src={image_url} />
                <Card.Text>
                    {details < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div className='d-flex gap-2'>
                    <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                    <span> {rating?.number}</span>
                </div>
                <p><FaEye className='me-2' style={{ height: '24px' }}></FaEye>{total_view}</p>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;