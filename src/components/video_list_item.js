import React from 'react';

const VideoListItem = (props) => {
	const video = props.video;
	const url = props.video.snippet.thumbnails.default.url;
	const title = props.video.snippet.title;
	const selector = props.onVideoSelect;

	return(
			<li onClick={() => selector(props.video)} className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object" src={url}/>
					</div>


						<div className="media-body">
							<div className="media-heading">
								{title};
							</div>
						</div>
				</div>
			</li>
		);
}

export default VideoListItem;