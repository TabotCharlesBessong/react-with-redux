import axios from 'axios'

const KEY = "AIzaSyBRdGvwZB6ZHlTTyr4RoCjoWzchE4dgyt0";

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:15,
    key:KEY
  }
})

