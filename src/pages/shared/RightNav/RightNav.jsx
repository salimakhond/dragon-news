import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import Bg1 from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div>
                <h4 className='mb-4'>Login With</h4>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            </div>
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>

            <div className='img-fluid'>
                <img className='img-fluid' src={Bg1} alt="" />
            </div>
        </div>
    );
};

export default RightNav;