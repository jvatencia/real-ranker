import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
const ProtectedRoute = (props: any) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            console.log('not logged in!');
            return navigate('/auth/login');
        }
            console.log('logged in:)');
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;