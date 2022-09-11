
import React, { Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions'

class UserHeader extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }
  render() {
    const { user }  = this.props
    if(!user) return <h2>Loading....</h2>
    // console.log(user)
    return (
			<div className="header">
				<h3>{user.name}</h3>
			</div>
		);
  }
}

const mapStateToProps = (state,ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
}

export default connect(mapStateToProps,{fetchUser})(UserHeader)