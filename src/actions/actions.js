import jsonPlaceholder from '../json-placeholder-config';

export const FetchPosts = async () => {
	const response = await jsonPlaceholder.get('/posts');
	return {
		type: 'FETCH_POSTS',
		payload: response
	};
};