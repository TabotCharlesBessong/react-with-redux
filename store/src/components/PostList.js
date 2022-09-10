import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList = () =>{
    return this.props.posts.map((post) => (
			<div className="item" key={post.id}>
				<img
					src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/302130535_521766356619749_8855567073182127505_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGyQ7bIHq7nldKcTbMMgEMuw44VUvVP6NbDjhVS9U_o1nNwKjW3u0keEiRFgwUrrOHscw4gZ0HBi74VmPhzhKdg&_nc_ohc=wWq_pC5aOTIAX-R_ECf&_nc_ht=scontent-iad3-2.xx&oh=00_AT9wnz6R461MBI4_-lJKXDkfOsZRgEmOJEKza-H6uN4MPw&oe=6321CC29"
					className="small rounded"
					style={{
						width: "60px",
						height: "60px",
						borderRadius: "50%",
					}}
					alt=""
				/>
				<div className="content">
					<div className="description">
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
					<UserHeader userId={post.userId} />
				</div>
			</div>
		));
  }

  render() {
    // console.log(this.props.posts)
    return( <div className='ui relaxed divided list' >
      {this.renderList()}
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
