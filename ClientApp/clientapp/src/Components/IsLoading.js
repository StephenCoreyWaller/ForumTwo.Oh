import React from 'react';

const IsLoading = () => {
	return (
		<button class='btn btn-primary' type='button' disabled>
			<span
				class='spinner-grow spinner-grow-sm'
				role='status'
				aria-hidden='true'
			></span>
			Loading...
		</button>
	);
};

export default IsLoading;
