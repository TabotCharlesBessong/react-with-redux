import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
    console.log(this.state.images)
    console.log(this.state.images[0])
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images

        <div>
          {
            this.state.images.map(image => (
              <h3>
                {image.created_at}
              </h3>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
