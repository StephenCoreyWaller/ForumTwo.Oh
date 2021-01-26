import React, { useEffect } from 'react';
import IsLoading from './IsLoading';
import ProfileDetail from './ProfileDetial';
import Nav from './Nav';
import './Components.css';
import { Container } from 'semantic-ui-react';
import { useAuth0 } from '@auth0/auth0-react';
import GetUserData from './GetUserData';

const App = () => {
	const { isLoading } = useAuth0();

	useEffect(() => {}, []);
	if (isLoading) {
		return <IsLoading />;
	}
	return (
		<>
			<Nav />
			<Container>
				<GetUserData />
				<ProfileDetail />
			</Container>
		</>
	);
};
export default App;
