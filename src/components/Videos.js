import { useState } from "react";
import Video from "../components/Video";
import {Link} from "react-router-dom"
import useVideoList from "../hooks/useVideolist";
import InfiniteScroll from 'react-infinite-scroll-component';

const Videos = () => {
  const [page, setPage] =  useState(1);
  const {loading, error, videos, hasMore, loader} = useVideoList(page);

  return ( 
    <div>
      {videos.length > 0 && (
        <InfiniteScroll 
          dataLength={videos.length} 
          next={() => setPage(page + 9)} 
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {videos.map(video => (
            <Link to="/quiz" key={video.youtubeID}>
              <Video 
                title={video.title}  
                id={video.youtubeID}
                noq={video.noq}
              />
            </Link>
          ))}
        </InfiniteScroll>
      )}
        {!loading && videos.length === 0 && (
          <div>No data Found !</div>
        )}

        {error &&  ( <div>There was an error !</div> )}

        {loading &&  ( <div>Loading ...</div> )}
    </div>
  );
}
 
export default Videos;