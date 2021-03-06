import React from 'react';
import {connect} from 'react-redux';
import {FetchPosts,FetchPostsAndUsers} from './actions/actions';
import UserName from './user-name';

class PostList extends React.Component {
	componentDidMount(){
		this.props.FetchPostsAndUsers();
	}
	
	renderList() {
		return this.props.posts.map(post => {
			return <div className="item" key={post.id}>
				<i className="large middle aligned icon user" />
				<div className="content">
					<div className="description">
						<h2>{post.title}</h2>
						<i>by </i><UserName userID={post.userId}/>
						<p>{post.body}</p>
					</div>
				</div>
			</div>
		});
	}
	
	render(){
		return <div className="relaxed divided list">{this.renderList()}</div>
	}
}

const mapStateToProps = (state) => {
	return {posts: state.posts};
};

export default connect(mapStateToProps,{FetchPostsAndUsers: FetchPostsAndUsers})(PostList);