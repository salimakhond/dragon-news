import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const location = useLocation();
    console.log(location)
    if(loading){
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;

/**
 * ---------------------------
 *             STEPS
 * ---------------------------
 * 
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow to visit the route
 * 3. else redirect the logged in page
 * 4. setup the private route
 * 5. handle loading
 * */ 