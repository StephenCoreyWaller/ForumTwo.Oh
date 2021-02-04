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
import CategoryView from './Category/CategoryView';
import ThreadView from './Threads/ThreadView';

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
		<Container>
			<BrowserRouter>
				<Nav />
				<Container>
					<div>
						<div>
							<Route path='/' exact />
							<Route path='/EditProfile' component={ProfileDetail} />
							<Route path='/Forum' component={CategoryView} />
							<Route path='/Category/:id' component={ThreadView} />
						</div>
					</div>
				</Container>
			</BrowserRouter>
		</Container>
	);
};
export default App;
