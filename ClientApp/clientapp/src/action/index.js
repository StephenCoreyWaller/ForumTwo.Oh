import Request from '../Components/AxiosRequest';

export const setUser = (token) => async (dispatch) => {
	if (token) {
		const response = await Request.get('/UserAuth', {
			headers: {
				Authorization: `Bearer ${await token}`,
			},
		});
		dispatch({ type: 'SET_USER', payload: response.data.data });
	}
};
