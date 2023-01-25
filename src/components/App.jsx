import React from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

class App extends React.Component {
  state = {
    query: '',
    page: 1,
  };
  handleFormSubmit = data => {
    const { query, page } = data;
    this.setState({ query, page });
  };
  render() {
    return (
      <div>
        <h1>Image search</h1>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export { App };
