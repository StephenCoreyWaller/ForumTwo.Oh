import React, { useEffect } from 'react';
import Post from './Post';
import { useAuth0 } from '@auth0/auth0-react';
import Request, { GetRequestWithBearer } from '../AxiosRequest';
import { Container, Feed, Segment } from 'semantic-ui-react';

const RenderPosts = () => {
	const { getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		const call = async () => {
			GetRequestWithBearer('userauth/', await getAccessTokenSilently());
		};
		call();
	}, []);
	return (
		<Segment>
			<Feed>
				<Post />
			</Feed>
		</Segment>
	);
};

export default RenderPosts;
