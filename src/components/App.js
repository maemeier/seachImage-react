import React from "react";
import SeachBar from "./SearchBar";
import axios from "axios";
import "../styles.css";

class App extends React.Component {
  state = {
    images: []
  };
  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 627ef0a4b6321543c0d0a21528c0e1ebcbdb00df24d3e6e935d1f456335d7f74"
      }
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SeachBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
