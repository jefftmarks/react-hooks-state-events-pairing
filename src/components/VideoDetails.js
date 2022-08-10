import React from "react";

function VideoDetails({
	title,
	views,
	date,
	likeCount,
	dislikeCount,
	toggleHandleLikeClick,
	toggleHandleDislikeClick,
	commentsHidden,
	toggleHandleCommentsClick
}) {

	const onLikeClick = () => {
		toggleHandleLikeClick();
	}

	const onDislikeClick = () => {
		toggleHandleDislikeClick();
	}

	const onCommentsClick = () => {
		toggleHandleCommentsClick();
	}

	return (
		<div>
			<h1>{title}</h1>
			<p>{views} Views | Uploaded: {date}</p>

			<button
				className="upvotes"
				onClick={onLikeClick}
			>
				{likeCount} 👍
			</button>

			<button
				className="downvotes"
				onClick={onDislikeClick}
			>
				{dislikeCount} 👎
			</button>

			<button
				className="commentsBtn"
				style={{display: "block", margin: "0 auto"}}
				onClick={onCommentsClick}
			>
				{commentsHidden ? "Show Comments" : "Hide Comments"}
			</button>

			<hr/>
		</div>
	)
}

export default VideoDetails;