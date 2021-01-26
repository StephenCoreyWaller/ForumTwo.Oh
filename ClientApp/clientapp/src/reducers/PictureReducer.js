const PictureReducer = (state = null, action) => {
	switch (action.type) {
		case 'SET_PICTURE':
			return action.payload;
		default:
			return state;
	}
};
export default PictureReducer;
