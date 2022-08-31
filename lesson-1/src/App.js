import React, { useEffect, useState } from 'react'
import {SearchBar, VideoDetail, VideoList} from './components'
import youtube from './api/youtube'
import search from './constant/constant'

const App = () => {
  const [videos,setVideos] = useState([])
  const [selectedVideo,setSelectedVideo] = useState(null)
  const selectedNumber = Math.floor(Math.random() * videos.length )
  const selectedNumber1 = Math.floor(Math.random() * search.length);
  const onSearchTerm = async  (term) => {
    // console.log(term);
    const response = await youtube.get('/search' , {
      params:{
        q:term
      }
    } )
    console.log(response.data.items)
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[selectedNumber])
  }

  const onVideoSelect = (video)=>{
    // console.log('video app',video)
    setSelectedVideo(video)
  }

  useEffect(()=>{
    onSearchTerm(search[selectedNumber1])
  },[])
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
