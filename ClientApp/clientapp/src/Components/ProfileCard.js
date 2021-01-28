import React, { useEffect, useState } from 'react';
import { Card, Image, Grid, Button } from 'semantic-ui-react';
import AuthenticationButton from './AuthenticationButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
	const user = useSelector((state) => state.user);
	const { picture } = useSelector((state) => state.picture);
	const [userProfile, setUserProfile] = useState('');

	useEffect(() => {
		if (user !== null) {
			setUserProfile(user);
		}
	}, [user]);
	return (
		<Card fluid>
			<Grid
				padded
				centered
				style={{ paddingTop: '.4em', paddingBottom: '1em' }}
			>
				<Card.Content style={{ marginTop: '1em', marginBottom: '1em' }}>
					<Image
						src={picture}
						circular
						size='tiny'
						style={{ marginBottom: '1em' }}
					/>
					<Card.Header>Signed in as {userProfile.userName}</Card.Header>
					<Card.Meta>{userProfile.email}</Card.Meta>
					<Link to='EditProfile'>Edit</Link>
				</Card.Content>
				<Card.Content extra>
					<AuthenticationButton />
				</Card.Content>
			</Grid>
		</Card>
	);
};

export default ProfileCard;
