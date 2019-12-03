import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

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

    onVideoSelect = video => {
        //console.log('from the App compo, ', video)
        this.setState({ selectedVideo: video});
    };


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                            {/*videos will contain array of videos to be rendered on-screen */}
                        </div>
                        <div className="five wide column">
                            <VideoList whenVideoSelected={this.onVideoSelect} videos={this.state.videos} />
                            {/* <br />
                            Found: {this.state.videos.length} videos
                            */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;