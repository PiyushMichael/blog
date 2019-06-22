import jsonPlaceholder from '../json-placeholder-config';

//this is syntax for async actions in redux using thunk
//arrow function to arrow function
export const FetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const FetchUser = (id) => async dispatch => {
	const response = await jsonPlaceholder.get('/users/'+id);
	dispatch({type: 'FETCH_USER', payload: response.data});
};