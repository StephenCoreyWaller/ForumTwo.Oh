import { SET_USER } from './ReducerDef';
const INIT_STATE = null;

const UserReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_USER:
			return action.payload;
		default:
			return state;
	}
};
export default UserReducer;
