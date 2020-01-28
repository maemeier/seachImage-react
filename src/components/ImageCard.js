import React from "react";

class ImageCard extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <div>
        <img alt={image.description} src={image.urls.regular} key={image.id} />
      </div>
    );
  }
}
export default ImageCard;
