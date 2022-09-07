// import React , {useEffect} from "react";
// import SearchBar from "./components/SearchBar";
// import youtube from "./apis/youtube";
// import VideoList from "./components/VideoList";
// import VideoDetail from "./components/VideoDetail";

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   componentDidMount() {
//     this.onTermSubmit("buildings");
//   }
  
//   // useEffect(()=>{
//   //   this.onTermSubmit("nadal");
//   // },[])

//   onTermSubmit = async (term) => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });

//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState, useEffect } from 'react'
import { SearchBar,VideoList,VideoDetail } from './components'
import youtube from './apis/youtube'

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const onVideoSelect = (video) => {
		setSelectedVideo(video);
	};

	const  onTermSubmit = async (term) => {
	    const response = await youtube.get("/search", {
	      params: {
	        q: term,
	      },
	    });

      setVideos(response.data.items)
      setSelectedVideo(response.data.items[0])
	  };

  useEffect(() => {
		onTermSubmit("nadal");
	}, []);
	return (
		<div className="ui container">
			<SearchBar onFormSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList
							onVideoSelect={onVideoSelect}
							videos={videos}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App
