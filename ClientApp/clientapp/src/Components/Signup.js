import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Signup = () => {
	const { user, loginWithRedirect } = useAuth0();

	// const createUser = async () => {
	// 	const response = await AxiosRequest.post('/UserAuth', {

	// 	});
	// };
	console.log(user);
	return (
		<button
			className='ui positive basic button'
			onClick={() =>
				loginWithRedirect({
					screen_hint: 'signup',
				})
			}
		>
			Sign Up
		</button>
	);
};

export default Signup;
