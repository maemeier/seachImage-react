import React from "react";
import ImageCard from "./ImageCard";
import "../styles.css";

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} text={image.description} />;
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;
