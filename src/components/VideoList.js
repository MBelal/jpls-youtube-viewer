import React from "react";
import styled from "styled-components";

let Div = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

let LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #f0f0f0;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  transition: all 0.1s;
  box-sizing: border-box;
  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
    border-color: #333;
  }
`;

let Image = styled.div`
  width: 6.5rem;
  height: 5rem;
`;

let Title = styled.p`
  padding: 0 0.25rem;
  width: 150px;
  // white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
`;

const VideoList = props => {
  return (
    <Div>
      {props.videos.length > 0
        ? props.videos.map(video =>
            <LinkContainer
              onClick={() => props.activateVideo(video)}
              key={video.etag}
            >
              <Image
                style={{
                  background: `url(${video.snippet.thumbnails.default.url})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              />
              <Title>
                {video.snippet.title}
              </Title>
            </LinkContainer>
          )
        : null}
    </Div>
  );
};

export default VideoList;
