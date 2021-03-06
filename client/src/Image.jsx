import React from 'react';

class Image extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isImageHidden: true,
    };

    this.handleImageClick = this.handleImageClick.bind (this);
    this.togglePopup = this.togglePopup.bind (this);
  }
  togglePopup () {
    this.setState ({
      isImageHidden: !this.state.isImageHidden,
    });
  }
  handleImageClick (event) {
    this.props.toggleHidden ();
    this.props.selectImage (event.target.src);
  }

  render () {
    return (
      <div className="img" onClick={this.handleImageClick}>
        <img src={this.props.url} height="200" width="300" alt="We're sorry!" />
      </div>
    );
  }
}
export default Image;
