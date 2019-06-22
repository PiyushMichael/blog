import React from 'react';
import {connect} from 'react-redux';
import {FetchUser} from './actions/actions';

class UserName extends React.Component {
	componentDidMount(){
		this.props.FetchUser(this.props.userID);
	}
	
	render(){
		if(!this.props.user) return null;
		return <div className="header">{this.props.user.name}</div>
	}
}

const mapStateToProps = (state,ownProps) => {
	return {user: state.users.find(user => user.id === ownProps.userID)};
};

export default connect(mapStateToProps,{FetchUser: FetchUser})(UserName);