import react from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import './Components/Components.css';
import { useAuth0 } from '@auth0/auth0-react';
import IsLoading from './Components/IsLoading';
import ProtectedRoute from './auth/ProtectedRoute';

const App = () => {
	const { isLoading } = useAuth0();
	if (isLoading) {
		return <IsLoading />;
	}
	return (
		<div>
			<Nav />
			<div className='ui container'></div>
		</div>
	);
};
export default App;
