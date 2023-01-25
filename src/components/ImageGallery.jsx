import React from 'react';
import { getImages } from '../services/getImages';

class ImageGallery extends React.Component {
  state = {
    images: [],
  };
  componentDidUpdate(prevProps, _) {
    //   console.log(prevProps);
    console.log('did mount');
    console.log('cdu ', this.props.query);
    console.log('prev cdu ', prevProps);
    if (this.props.query !== prevProps.query) {
      getImages(this.props.query).then(images => {
        console.log(images);
        //   console.log(images.hits);

        this.setState({ images: images.hits });
      });
    }
  }
  render() {
    const { previewURL, id, tags } = this.state.images;
    return (
      <div>
        <h2>Gallery</h2>
        <ul className="flex flex-wrap gap-2">
          {this.state.images.map(({ previewURL, id }) => (
            <li className="basis-1/6 " key={id}>
              <img
                src={previewURL}
                alt={tags}
                className="w-full h-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export { ImageGallery };
