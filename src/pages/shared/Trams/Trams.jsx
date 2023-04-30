import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trams = () => {
    return (
        <Container>
            <h2>Our trams and condition</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quo voluptatem placeat maiores expedita recusandae, aut rerum aperiam perferendis ex eveniet quia perspiciatis assumenda quis cum explicabo minima nobis voluptatum quam beatae itaque earum adipisci accusamus? Illo ex quas aperiam minus? Consequatur facilis ut debitis id cumque, at numquam quos.</p>
            <p>Go Back <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Trams;