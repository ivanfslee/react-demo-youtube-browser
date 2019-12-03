import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    //renderedList is an Array of <VideoItem /> components 
    const renderedList = videos.map(video => {
        return <VideoItem video={video}/>;
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