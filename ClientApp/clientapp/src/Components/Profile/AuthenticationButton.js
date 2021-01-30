import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';
//Add sign up route and return to login

const AuthenticationButton = () => {
	const { isAuthenticated } = useAuth0();
	return isAuthenticated ? <Logout /> : <Login />;
};
export default AuthenticationButton;