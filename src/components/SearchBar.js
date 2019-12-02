import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        // console.log(event.target.value);
        this.setState({ term: event.target.value })
    };

    onFormSubmit = event => {
        event.preventDefault();

       //TODO: call callback func from parent compo, to tell parent user submitted a term and that parent should initiate ajax requext to youtubeAPI
       this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input onChange={this.onInputChange} type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        ); 
    }
}

export default SearchBar;