import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PictureReducer from './PictureReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	user: UserReducer,
	picture: PictureReducer,
});
