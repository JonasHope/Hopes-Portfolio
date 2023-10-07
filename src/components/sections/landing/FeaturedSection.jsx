import React from "react";
import featuredVideo from "../../../video/vid10.mp4";
import TextTypingAnimation from "./textanimation/TextTypingAnimation";
import styled from "styled-components";

const BackgroundVideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

/*const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;*/

function VideoPlayer() {
  return (
    <BackgroundVideoContainer>
      <BackgroundVideo autoPlay muted loop>
        <source src={featuredVideo} type="video/mp4"></source>
      </BackgroundVideo>

      <TextTypingAnimation />
    </BackgroundVideoContainer>
  );
}

export default VideoPlayer;
