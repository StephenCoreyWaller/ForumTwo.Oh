import React from 'react';
import { Feed, Image } from 'semantic-ui-react';

const Post = ({ Post }) => {
	return (
		<>
			<Feed.Event>
				<Feed.Label>{'Post.name'}</Feed.Label>
			</Feed.Event>
		</>
	);
};

export default Post;
