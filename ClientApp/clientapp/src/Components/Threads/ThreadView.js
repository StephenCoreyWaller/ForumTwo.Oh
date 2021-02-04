import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { GetRequest } from '../AxiosRequest';

const ThreadView = ({ match, location }) => {
	const { getAccessTokenSilently } = useAuth0();
	console.log(match);
	useEffect(() => {
		GetRequest(
			`threads/${match.params.id}`,
			getAccessTokenSilently()
		).then((resp) => console.log(resp));
	}, []);
	return (
		<div>
			<input />
		</div>
	);
};

export default ThreadView;
