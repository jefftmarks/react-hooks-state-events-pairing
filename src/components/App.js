import React, { useState } from "react";
import video from "../data/video.js";
import VideoFrame from "./VideoFrame";
import VideoDetails from "./VideoDetails";
import Comments from "./Comments";

function App() {
  const [likeCount, setLikeCount] = useState(video.upvotes)
	const [dislikeCount, setDislikeCount] = useState(video.downvotes)

  const [commentsHidden, setCommentsHidden] = useState(false);

  const handleLikeClick = () => {
		setLikeCount(likeCount + 1);
	}

	const handleDislikeClick = () => {
		setDislikeCount(dislikeCount + 1);
	}

  const handleCommentsClick = () => {
    setCommentsHidden(!commentsHidden);
  }

  return (
    <div className="App">
      <VideoFrame src={video.embedUrl} title={video.title} />
      <VideoDetails
        title={video.title}
        views={video.views}
        date={video.createdAt}
        likeCount={likeCount}
        dislikeCount={dislikeCount}
        toggleHandleLikeClick={handleLikeClick}
        toggleHandleDislikeClick={handleDislikeClick}
        commentsHidden={commentsHidden}
        toggleHandleCommentsClick={handleCommentsClick}
      />
      {commentsHidden ? null : <Comments comments={video.comments} />}
    </div>
  )
}

export default App;
