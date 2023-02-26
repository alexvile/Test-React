import React from 'react';
import { getImages } from '../services/getImages';
import { ImageItem } from './ImageItem';
import Modal from './Modal';

class ImageGallery extends React.Component {
  state = {
    images: [],
    status: 'idle',
    showModal: false,
    modalImg: null,
    error: '',
  };
  toggleModal = () => {
    // console.log('toggle');
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  onImgClick = id => {
    const clickedImg = this.state.images.find(el => el.id === id);
    this.setState({ modalImg: clickedImg });
    this.toggleModal();
  };
  componentDidUpdate(prevProps, _) {
    // console.log('cdu current query ', this.props);
    // console.log('cdu prev querry ', prevProps);
    const currentQuery = this.props.query;
    const prevQuery = prevProps.query;
    const currentPage = this.props.page;
    const prevPage = prevProps.page;

    if (currentQuery !== prevQuery || prevPage < currentPage) {
      this.setState({ status: 'pending' });

      getImages(currentQuery, currentPage)
        .then(images => {
          // for new query
          if (currentQuery !== prevQuery) {
            this.setState({
              images: images.hits,
              status: 'resolved',
            });
          }
          // for additional request
          if (currentQuery === prevQuery) {
            this.setState(prevState => ({
              images: [...prevState.images, ...images.hits],
              status: 'resolved',
            }));
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { pageIncrement } = this.props;
    const { showModal, modalImg, status } = this.state;
    return (
      <div>
        {status === 'idle' && <p>Try to find something</p>}
        {status === 'rejected' && <p>Something went wrong</p>}
        <ul className="flex flex-wrap gap-4">
          {this.state.images.map(({ webformatURL, id, tags }) => (
            <ImageItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              tags={tags}
              onImgClick={this.onImgClick}
            />
          ))}
        </ul>
        {status === 'resolved' && (
          <button
            onClick={pageIncrement}
            type="button"
            className="border p-2 mx-2 bg-red-300 text-white hover:opacity-75"
          >
            Load more
          </button>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImg.largeImageURL} alt={modalImg.tags} />
          </Modal>
        )}
      </div>
    );
  }
}
export { ImageGallery };
