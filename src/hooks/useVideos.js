import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const KEY = "AIzaSyD9ABS6-AyXckP5_fBs8vI1xEYwd1Ft6-c";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        q: term,
        key: KEY,
        maxResults: 5,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
