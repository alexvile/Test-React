import React from 'react';
class Searchbar extends React.Component {
  state = {
    query: '',
    page: 1,
  };
  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { query, page } = this.state;
    if (query.trim() === '') {
      return alert('Empty query');
    }
    this.props.onSubmit({ query, page });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="border p-2 inline-block">
          Search form
          <input
            type="text"
            className="border inline-block px-2 mx-2"
            onChange={this.handleChange}
            value={this.state.query}
          />
        </label>
        <button
          type="submit"
          className="border p-2 mx-2 bg-red-300 text-white hover:opacity-75"
        >
          Search
        </button>
      </form>
    );
  }
}
export { Searchbar };
