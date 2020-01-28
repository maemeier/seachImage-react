import React from "react";
import SeachBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";
import "../styles.css";

class App extends React.Component {
  state = {
    images: []
  };
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "40px" }}>
        <SeachBar onSubmit={this.onSearchSubmit} />
        <ImageList
          images={this.state.images}
          text={this.state.images.description}
        />
      </div>
    );
  }
}

export default App;
