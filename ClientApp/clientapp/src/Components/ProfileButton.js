import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Popup, Image } from 'semantic-ui-react';
import ProfileCard from './ProfileCard';
import { useDispatch } from 'react-redux';

const ProfileButton = () => {
	const { user } = useAuth0();
	const { picture } = user ? user : '';
	const dispatch = useDispatch();

	useEffect(() => {
		if (picture !== null) {
			dispatch({ type: 'SET_PICTURE', payload: picture });
		}
	}, [dispatch, picture]);

	if (user === '') {
		return <div></div>;
	}
	return (
		<>
			<Popup
				trigger={<Image avatar fluid src={picture} />}
				content={<ProfileCard />}
			/>
		</>
	);
};

export default ProfileButton;
