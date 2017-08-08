import React, { Component } from "react";
import { render } from "react-snapshot";
import styled from "styled-components";
import axios from "axios";
import debounce from "lodash/debounce";

import "./index.css";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

// const YOUTUBE_API_KEY = require("./secret");
// const ROOT_URL = "https://www.googleapis.com/youtube/v3/search";
const ROOT_URL =
  "https://us-central1-jpls-youtube-viewer.cloudfunctions.net/helloWorld";

const Div = styled.div`
  background: #fefefe;
  position: fixed;
  height: 100%;
  width: 20rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      videos: [],
      activeVideo: null
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleSearchCapture = this.handleSearchCapture.bind(this);
  }

  fetchData(term) {
    axios
      .get(ROOT_URL, {
        params: {
          q: term
        }
      })
      .then(response => {
        // console.log(response);
        this.setState({
          videos: response.data,
          activeVideo: response.data[0]
        });
      });
  }

  componentWillMount() {
    this.fetchData("Linkin Park");
  }

  handleSearchCapture(event) {
    this.fetchData(event.target.value);
  }

  activateVideo(video) {
    this.setState({ activeVideo: video });
  }

  render() {
    const searchVideo = debounce(term => {
      this.fetchData(term);
    }, 300);
    return (
      <Div>
        <SearchBar searchTerm={this.state.searchTerm} onChange={searchVideo} />
        <VideoList
          videos={this.state.videos}
          activateVideo={this.activateVideo.bind(this)}
        />
        <VideoPlayer activeVideo={this.state.activeVideo} />
      </Div>
    );
  }
}

render(<App />, document.getElementById("root"));
