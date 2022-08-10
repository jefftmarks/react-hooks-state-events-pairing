import React from "react";

function VideoFrame({src, title}) {

	return(
		<iframe
        width="919"
        height="525"
        src={src}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
	)
}

export default VideoFrame;