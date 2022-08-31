
import React from 'react'

const VideoDetail = ({video}) => {

  if(!video) {
    return (
      <h2>
        Loading...
      </h2>
    )
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
		<div>
      <div className="ui embed">
        <iframe title='videoPlayer' src={videoSrc} frameBorder="0"/>
      </div>
			<div className="ui segment">
				<h4 className="ui header">
					{ video.snippet.title }
				</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetail
 