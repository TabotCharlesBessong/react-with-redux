
import React from 'react'
import {VideoItem} from './index'

const VideoList = (props) => {
  const {videos,onVideoSelect} = props
  return (
		<div className='ui relaxed divided list' >
			{videos.map((video ) => (
				<VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />
			))}
		</div>
	);
}

export default VideoList
