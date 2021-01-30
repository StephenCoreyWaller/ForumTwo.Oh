import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import AuthenticationButton from './AuthenticationButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
	const user = useSelector((state) => state.user);
	const { picture } = useSelector((state) => state.picture);

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
					<Card.Header>Signed in as {user.userName}</Card.Header>
					<Card.Meta>{user.email}</Card.Meta>
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
