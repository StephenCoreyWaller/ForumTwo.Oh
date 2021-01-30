import { SET_PICTURE } from './ReducerDef';
const INIT_STATE = { picture: '' };

const PictureReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_PICTURE:
			return { ...state, picture: action.payload };
		default:
			return state;
	}
};
export default PictureReducer;
