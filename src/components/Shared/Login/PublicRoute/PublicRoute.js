import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const PublicRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading){return <CircularProgress/>}
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                    <Redirect
                        to={{
                        pathname: "/",
                        state: { from: location }
                        }}
                    />
                    ) : (
                        children
                    )
                }
            />
        </div>
    );
};

export default PublicRoute;