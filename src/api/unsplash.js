import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 627ef0a4b6321543c0d0a21528c0e1ebcbdb00df24d3e6e935d1f456335d7f74"
  }
});
