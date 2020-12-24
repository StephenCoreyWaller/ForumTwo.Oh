import react from 'react';
import Nav from './Components/Nav';
import './Components/Components.css';
import { useAuth0 } from '@auth0/auth0-react';
import IsLoading from './Components/IsLoading';

const App = () => {
	const { isLoading } = useAuth0();
	if (isLoading) {
		return <IsLoading />;
	}
	return (
		<div>
			<Nav />
		</div>
	);
};
export default App;
