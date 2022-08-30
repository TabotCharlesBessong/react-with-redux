
import React from 'react'
import {VideoItem} from './index'

const VideoList = (props) => {
  const {videos} = props
  return (
		<div className='ui relaxed divided list' >
			{videos.map((video , index) => (
				<VideoItem key={index} video={video} />
			))}
		</div>
	);
}

export default VideoList
