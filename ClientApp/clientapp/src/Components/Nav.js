import { useAuth0 } from '@auth0/auth0-react';
import react, { useState } from 'react';
import AuthenticationButton from './AuthenticationButton';
import Profile from './Profile';
import Signup from './Signup';
import './Components.css';

const Nav = () => {
	const { user } = useAuth0();

	return (
		<div className='ui menu'>
			<a href='ss' className='active item'>
				Home
			</a>
			<a href='ss' className='item'>
				Messages
			</a>
			<a href='ss' className='item'>
				Friends
			</a>
			<div className='right menu'>
				<Signup />
				<Profile />
				<div className='ui item'>
					<AuthenticationButton />
				</div>
			</div>
		</div>
	);
};
export default Nav;
