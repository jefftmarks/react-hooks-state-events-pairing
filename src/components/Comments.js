import React from "react";

function Comments({comments}) {
	return (
		<div>
			<h2>{comments.length} Comments</h2>
			{comments.map(comment =>(
				<div key={comment.id}>
					<h3>{comment.user}</h3>
					<p>{comment.comment}</p>
				</div>
			))}
		</div>
	)
}

export default Comments;