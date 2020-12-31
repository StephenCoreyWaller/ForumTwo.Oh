import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import IsLoading from './IsLoading';

const Profile = () => {
	const { user } = useAuth0();
	const { picture } = user ? user : '';

	if (user === '') {
		return <div></div>;
	}
	console.log(user);
	return (
		<div>
			<a href=''>
				<img
					src={picture}
					alt=''
					className='ui mini image circular right spaced'
					style={{ marginTop: '.5vw', marginRight: '1.5vw' }}
				/>
			</a>
		</div>
	);
};

export default Profile;
