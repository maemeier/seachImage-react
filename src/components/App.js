import React from "react";
import SeachBar from "./SearchBar";
import "../styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SeachBar />
      </div>
    );
  }
}

export default App;
