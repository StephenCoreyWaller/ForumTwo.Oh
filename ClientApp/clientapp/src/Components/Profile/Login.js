import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'semantic-ui-react';

const Login = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Button primary basic onClick={() => loginWithRedirect()}>
			Login
		</Button>
	);
};
export default Login;