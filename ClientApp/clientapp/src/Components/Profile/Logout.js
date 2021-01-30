import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'semantic-ui-react';

const Logout = () => {
	const { logout } = useAuth0();
	return (
		<Button
			primary
			basic
			onClick={() => logout({ returnTo: window.location.origin })}
		>
			Logout
		</Button>
	);
};

export default Logout;