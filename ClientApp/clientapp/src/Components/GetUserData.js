import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../action';
import { useAuth0 } from '@auth0/auth0-react';

const UserObj = () => {
	const { getAccessTokenSilently } = useAuth0();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setUser(getAccessTokenSilently()));
	});
	return <div></div>;
};
export default UserObj;
