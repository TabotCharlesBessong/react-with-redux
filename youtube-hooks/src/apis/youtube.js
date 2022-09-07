import axios from "axios";

const KEY = "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";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 15,
    key: KEY,
  },
});
