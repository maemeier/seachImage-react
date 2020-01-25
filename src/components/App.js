import React from "react";
import SeachBar from "./SearchBar";
import axios from "axios";
import "../styles.css";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {});
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SeachBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
