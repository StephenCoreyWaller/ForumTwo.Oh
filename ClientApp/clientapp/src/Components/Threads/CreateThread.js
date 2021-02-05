import React, { useState } from 'react';
import { Button, Container, Form, Grid, Input } from 'semantic-ui-react';
import { useAuth0 } from '@auth0/auth0-react';
import { PostRequest } from '../AxiosRequest';

const CreateThread = ({ threads, setThreads }) => {
	const parentCategory = window.location.pathname.split('/');
	const { getAccessTokenSilently } = useAuth0();
	const [error, setError] = useState(false);
	const [newThread, setnewThread] = useState({
		id: parentCategory[2],
		title: '',
	});

	const handleSubmitThread = async () => {
		console.log(newThread);
		if (newThread.title === '') {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 3000);
		} else {
			await PostRequest(
				'threads',
				await getAccessTokenSilently(),
				newThread
			).then((resp) => setThreads([...threads, resp.data.data]));
		}
	};
	return (
        <div style={ { margin: '2em 0 2em 0' } }>

			<Form onSubmit={() => handleSubmitThread()}>
				<Form.Field required error={error}>
					<Input
						onChange={(e) =>
							setnewThread({ ...newThread, title: e.target.value })
						}
						fluid
						value={newThread.title}
						placeholder='New Discussion'
						action={{
							content: 'Post',
							color: 'blue',
							onClick: () => handleSubmitThread(),
						}}
					/>
				</Form.Field>
			</Form>
		</div>
	);
};

export default CreateThread;
