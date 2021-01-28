import Request from './AxiosRequest';
import { useState, useEffect } from 'react';
import { Form, Grid, Segment, Button, Checkbox } from 'semantic-ui-react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';

const ProfileDetail = () => {
	const { getAccessTokenSilently } = useAuth0();
	const [data, setData] = useState('');
	const user = useSelector((state) => state.user);

	const onClickHandler = () => {
		setData({ ...data, recruiting: !data.recruiting });
	};
	const onChangeHandler = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};
	const PutUserProfile = async (event) => {
		event.preventDefault();
		try {
			await Request.put('/UserAuth', data, {
				headers: {
					Authorization: `Bearer ${await getAccessTokenSilently()}`,
				},
			}).then((response) => console.log(response));
		} catch (e) {
			console.log(e.message);
		}
	};
	useEffect(() => {
		if (user !== null) {
			setData(user);
		}
	}, [user]);

	return (
		<Segment>
			<Form action='submit' onSubmit={(event) => PutUserProfile(event)}>
				<Grid padded centered>
					<Grid.Row>
						<Grid.Column width={14}>
							<label>User Name</label>
							<input
								name='userName'
								onChange={onChangeHandler}
								value={data.userName || ''}
								type='text'
								placeholder='User Name'
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={7}>
							<label htmlFor=''>First Name</label>
							<input
								name='fName'
								onChange={onChangeHandler}
								value={data.fName || ''}
								type='text'
							/>
						</Grid.Column>
						<Grid.Column width={7}>
							<label htmlFor=''>Last Name</label>
							<input
								name='lName'
								onChange={onChangeHandler}
								value={data.lName || ''}
								type='text'
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={8}>
							<label htmlFor=''>Email</label>
							<input
								name='email'
								onChange={onChangeHandler}
								value={data.email || ''}
								type='text'
							/>
						</Grid.Column>
						<Grid.Column width={6}>
							<label htmlFor=''>Phone Number</label>
							<input
								name='phoneNumber'
								onChange={onChangeHandler}
								value={data.phoneNumber || ''}
								type='text'
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={9}>
							<label htmlFor=''>Company</label>
							<input
								name='company'
								onChange={onChangeHandler}
								value={data.company || ''}
								type='text'
							/>
						</Grid.Column>
						<Grid.Column width={5} style={{ paddingTop: '1.9em' }}>
							<div>
								<Checkbox
									toggle
									onChange={onClickHandler}
									checked={data.recruiting || false}
									label={'Recruiting'}
								/>
							</div>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={14}>
							<label htmlFor=''>About</label>
							<textarea
								name='about'
								onChange={onChangeHandler}
								value={data.about || ''}
							></textarea>
						</Grid.Column>
					</Grid.Row>
					<Button color='green'>Submit</Button>
				</Grid>
			</Form>
		</Segment>
	);
};

export default ProfileDetail;
