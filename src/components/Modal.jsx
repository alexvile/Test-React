import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends React.Component {
  // const { onClose } = this.props;s
  closeByOverlay = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div
        onClick={this.closeByOverlay}
        className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-40 bg-black/80"
      >
        <div className="bg-white max-w-4xl max-h-4xl">
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
