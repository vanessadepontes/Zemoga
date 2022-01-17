import { combineReducers } from 'redux';

import {
  SET_POSTS,
	INITIAL_STATE,
	SET_LOADING,
	SET_ERROR,
	SET_USER,
	SET_COMMENTS,
} from './actionTypes';

const initialState = {
	loading: false,
  posts: [],
	error: false,
	user: [],
	comments: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
		case SET_POSTS:
			return {
				...state, 
        posts: action.payload,
			}

		case SET_USER:
			return {
				...state, 
        user: action.payload,
			}
			
		case SET_COMMENTS:
			return {
				...state, 
        comments: action.payload,
			}

			case INITIAL_STATE:
			return {
				...state, 
				posts: [],
			}

			case SET_LOADING:
				return {
					...state, 
					loading: action.payload,
				}

				case SET_ERROR:
					return {
						...state, 
						error: action.payload,
					}

			default:
				return state;
  	}
};

export default combineReducers({
  data: reducer
});