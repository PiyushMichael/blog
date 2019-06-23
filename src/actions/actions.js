import jsonPlaceholder from '../json-placeholder-config';
import _ from 'lodash';

//this is syntax for async actions in redux using thunk
//arrow function to arrow function

export const FetchPostsAndUsers = () => async (dispatch,getState) => {
	await dispatch(FetchPosts());
	const userids = _.uniq(_.map(getState().posts,'userId'));
	userids.forEach(id => dispatch (FetchUser(id))); //mo await used here becuase no subsequent actions needed
};

export const FetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const FetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get('/users/'+id);
	dispatch({type: 'FETCH_USER', payload: response.data});
};

/*export const FetchUser = (id) => dispatch => _fetchUser(id,dispatch);
const _fetchUser = _.memoize(async(id,dispatch) => {
	const response = await jsonPlaceholder.get('/users/'+id);
	dispatch({type: 'FETCH_USER', payload: response.data});
});*/