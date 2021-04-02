import React from 'react';
// import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import axios from 'axios'


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.fetch('https://api.unsplash.com/search/photos?client_id=jj4FyLbS7c1rUUgohjS98iysn0AKm3tmyQ0PndjkoXM&query=cloud', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        
      </div>
    );
  }
}

export default App;
