import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const Axios = axios.create({
	baseURL: 'http://localhost:5000',
	headers: {
		'Access-Control-Allow-Origin': '*',
		Accept: 'application/json',
	},
});
export const GetRequestWithBearer = async (path, token) => {
	try {
		const resp = await Axios.get(`http://localhost:5000/${path}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return resp;
	} catch (e) {
		console.log(e.message);
	}
};

export default Axios;
