import React, { useState } from 'react'
import {SearchBar, VideoDetail, VideoList} from './components'
import youtube from './api/youtube'

const App = () => {
  const [videos,setVideos] = useState([])
  const [selectedVideo,setSelectedVideo] = useState(null)
  const onSearchTerm = async  (term) => {
    // console.log(term);
    const response = await youtube.get('/search' , {
      params:{
        q:term
      }
    } )
    console.log(response.data.items)
    setVideos(response.data.items)
  }

  const onVideoSelect = (video)=>{
    // console.log('video app',video)
    setSelectedVideo(video)
  }
  return (
		<div className="ui container">
			<SearchBar onFormSubmit={onSearchTerm} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList onVideoSelect={onVideoSelect} videos={videos} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App
