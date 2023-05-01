import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://the-news-dragon-server-salimakhond.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))

            .catch(error => {
                console.error(error)
            })
    }, [])


    return (
        <div>
            <h4 className='mb-4'>All Category</h4>
            <div className=''>
                {
                    categories.map(category => <p key={category.id}>

                        <Link className='text-black text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
            <Row xs={1} md={1} className="g-4 mt-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </div>
    );
};

export default LeftNav;