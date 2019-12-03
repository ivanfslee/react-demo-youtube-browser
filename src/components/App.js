import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async (term) => {
        console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        //response.data.items is an array of videos (obj)
        this.setState({ videos: response.data.items })
    };



    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                {/*videos will contain array of videos to be rendered on-screen */}
                <VideoList videos={this.state.videos} />
                {/* <br />
                Found: {this.state.videos.length} videos
                */}
            </div>
        );
    }
}

export default App;