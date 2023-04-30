import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/category/0'

    const { signIn } = useContext(AuthContext);

    const [success, setSuccess] = useState('');

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setSuccess('')
        signIn(email, password)
            .then(result => {
                const signInUser = result.user;
                console.log(signInUser)
                setSuccess('Create a User Successfully')
                navigate(from, { replace: true })
            })
            .catch(error=>{
                console.log(error)
            })
    }


    return (
        <Container className='w-25  mx-auto'>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br></br>


                <Form.Text className="text-success">
                    Dont't Have An Account ?  <Link to={'/register'}>Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-muted">
                    {success}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;