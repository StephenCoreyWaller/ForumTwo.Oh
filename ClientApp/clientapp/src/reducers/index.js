import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PictureReducer from './PictureReducer';

export default combineReducers({
	user: UserReducer,
	picture: PictureReducer,
});
