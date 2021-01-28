import React from 'react';
import { Popup, Image } from 'semantic-ui-react';
import ProfileCard from './ProfileCard';
import { useSelector } from 'react-redux';
import Login from './Login';

const ProfileButton = () => {
	const { picture } = useSelector((state) => state.picture);

	return (
		<>
			{picture !== '' ? (
				<Popup
					trigger={<Image avatar fluid src={picture} />}
					content={<ProfileCard />}
					on='click'
				/>
			) : (
				<Login />
			)}
		</>
	);
};

export default ProfileButton;
