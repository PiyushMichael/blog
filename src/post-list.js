import React from 'react';
import {connect} from 'react-redux';
import {FetchPosts} from './actions/actions';

class PostList extends React.Component {
	componentDidMount(){
		this.props.FetchPosts();
	}
	
	render(){
		return <div>post list :)</div>
	}
}

export default connect(null,{FetchPosts: FetchPosts})(PostList);