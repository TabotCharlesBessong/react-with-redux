import React, { useState } from 'react'
import {SearchBar} from './components'
import youtube from './api/youtube'

const App = () => {
  const [videos,setVideos] = useState([])
  const onSearchTerm = async  (term) => {
    // console.log(term);
    const response = await youtube.get('/search' , {
      params:{
        q:term
      }
    } )
    // console.log(response.data)
    setVideos(response.data.items)
  }
  return (
    <div className='ui container' >
      <SearchBar onFormSubmit={onSearchTerm} />
    </div>
  )
}

export default App
