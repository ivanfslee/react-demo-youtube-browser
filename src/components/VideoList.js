import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    //renderedList is an Array of <VideoItem /> components 
    const renderedList = props.videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={props.whenVideoSelected} video={video}/>;
    })
    //props.videos - will contain the array of videos to be rendered. props.videos is from App.js 
    return (
        <div className="ui relaxed divided list">
            {renderedList}
            {/*{[<div>1</div>, <div>2</div>, 3]}*/}
        </div>
    );
};

export default VideoList;