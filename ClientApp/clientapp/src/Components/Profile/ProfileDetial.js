import Request from '../AxiosRequest';
import { useState, useEffect } from 'react';
import {
	Form,
	Grid,
	Segment,
	Button,
	Checkbox,
	Input,
	TextArea,
} from 'semantic-ui-react';
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
							<Form.Field
								control={Input}
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
							<Form.Field
								control={Input}
								name='fName'
								onChange={onChangeHandler}
								value={data.fName || ''}
								type='text'
								placeholder='First Name'
							/>
						</Grid.Column>
						<Grid.Column width={7}>
							<Form.Field
								control={Input}
								name='lName'
								onChange={onChangeHandler}
								value={data.lName || ''}
								type='text'
								placeholder='Last Name'
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={8}>
							<Form.Field
								control={Input}
								name='email'
								onChange={onChangeHandler}
								value={data.email || ''}
								type='text'
								placeholder='Email'
							/>
						</Grid.Column>
						<Grid.Column width={6}>
							<Form.Field
								control={Input}
								name='phoneNumber'
								onChange={onChangeHandler}
								value={data.phoneNumber || ''}
								type='text'
								placeholder='Phone Number'
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={9}>
							<Form.Field
								control={Input}
								name='company'
								onChange={onChangeHandler}
								value={data.company || ''}
								type='text'
								placeholder='Company'
							/>
						</Grid.Column>
						<Grid.Column width={5} style={{ paddingTop: '1em' }}>
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
							<Form.Field
								control={TextArea}
								name='about'
								onChange={onChangeHandler}
								value={data.about || ''}
							/>
						</Grid.Column>
					</Grid.Row>
					<Button color='green'>Submit</Button>
				</Grid>
			</Form>
		</Segment>
	);
};

export default ProfileDetail;
