import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Request from './AxiosRequest';

const Signup = () => {
	const { getAccessTokenSilently, loginWithRedirect } = useAuth0();

	return (
		<button
			className='ui positive basic button'
			onClick={() =>
				loginWithRedirect(
					Request.get('/UserAuth', {
						headers: {
							Authorization: `Bearer ${getAccessTokenSilently()}`,
						},
					})
				)
			}
		>
			Sign Up
		</button>
	);
};

export default Signup;
