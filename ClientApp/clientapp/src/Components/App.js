import React, { useEffect } from 'react';
import IsLoading from './IsLoading';
import ProfileDetail from './Profile/ProfileDetial';
import Nav from './Nav';
import './Components.css';
import { Container } from 'semantic-ui-react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { setUser } from '../action';
import { BrowserRouter, Route } from 'react-router-dom';
import RenderPosts from './Posts/RenderPosts';

const App = () => {
	const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
	const { user } = useAuth0();
	const dispatch = useDispatch();

	useEffect(() => {
		if (isAuthenticated) {
			dispatch({ type: 'SET_PICTURE', payload: user.picture });
			dispatch(setUser(getAccessTokenSilently()));
		}
	}, [dispatch, user, isAuthenticated, getAccessTokenSilently]);

	if (isLoading) {
		return <IsLoading />;
	}

	return (
		<>
			<BrowserRouter>
				<Nav />
				<Container>
					<div>
						<div>
							<Route path='/' exact />
							<Route path='/EditProfile' component={ProfileDetail} />
							<Route path='/Forum' component={RenderPosts} />
						</div>
					</div>
				</Container>
			</BrowserRouter>
		</>
	);
};
export default App;
