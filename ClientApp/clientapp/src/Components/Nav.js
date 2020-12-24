import react from 'react';
import AuthenticationButton from './AuthenticationButton';
import './Components.css';

const Nav = () => {
	return (
		<div>
			<nav className='navbar-nav ml-auto'>
				<div className='container-fluid'>
					<AuthenticationButton />
				</div>
			</nav>
		</div>
	);
};
export default Nav;
