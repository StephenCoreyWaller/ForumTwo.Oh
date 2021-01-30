import React from 'react';
import { Popup, Image } from 'semantic-ui-react';
import ProfileCard from './ProfileCard';
import { useSelector } from 'react-redux';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';

const ProfileButton = () => {
	const u = useSelector((state) => state.picture);
	const { isAuthenticated } = useAuth0();

	return (
		<>
			{isAuthenticated ? (
				<Popup
					trigger={<Image avatar fluid src={u.picture} />}
					content={<ProfileCard />}
					on='click'
					basic
				/>
			) : (
				<Login />
			)}
		</>
	);
};

export default ProfileButton;
