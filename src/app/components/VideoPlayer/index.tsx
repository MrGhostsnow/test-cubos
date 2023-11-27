import React from "react";
import { SectionVideoPlayer } from "./styles";

interface VideoPlayerProps {
  videoKey: any[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoKey }) => {
  const videoBaseUrl = "https://www.youtube.com/embed/";

  return (
    <SectionVideoPlayer
      src={videoBaseUrl + videoKey}
      title="Video Player"
      frameBorder="0"
      allowFullScreen
    ></SectionVideoPlayer>
  );
};

export default VideoPlayer;
