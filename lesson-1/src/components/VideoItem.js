
import React from 'react'

const VideoItem = (props) => {
  const {video} = props
  return (
		<div className="video-item  item">
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt=""
			/>
			<div className='content' >
				<div classname='header' >{video.snippet.title}</div>
			</div>
		</div>
	);
}

export default VideoItem
