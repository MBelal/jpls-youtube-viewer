import React, { Component } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  border: 1px solid black;
  height: 360px;
  width: 640px;
  position: absolute;
  left: 25rem;
  top: 5rem;
`;

const Iframe = styled.iframe`
  height: 360px;
  width: 640px;
`;

export default class VideoPlayer extends Component {
  render() {
    if (!this.props.activeVideo) return <span>Loading...</span>;
    if (this.props.activeVideo) console.log(this.props.activeVideo);
    return (
      <VideoContainer>
        <Iframe
          src={`https://www.youtube.com/embed/${this.props.activeVideo.id
            .videoId}`}
        />
      </VideoContainer>
    );
  }
}
