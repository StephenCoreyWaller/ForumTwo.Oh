import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { GetRequest } from '../AxiosRequest';
import ThreadCard from './ThreadCard';
import IsLoading from '../IsLoading';
import CreateThread from './CreateThread';

const ThreadView = ({ match, location }) => {
	const [threads, setThreads] = useState([]);
	const [isLoaded, setIsLoaded] = useState(true);

	const call = async () => {
		await GetRequest(`threads/${match.params.id}`).then((resp) => {
			if (typeof resp !== 'undefined') {
				setThreads(resp.data.data);
				setIsLoaded(false);
			}
		});
	};
	useEffect(() => {
		call();
	}, []);

	return (
		<>
			<CreateThread threads={threads} setThreads={setThreads} />
			{isLoaded ? (
				<IsLoading />
			) : (
				threads.map((t) => {
					return <ThreadCard key={t.id} thread={t} />;
				})
			)}
		</>
	);
};

export default ThreadView;
