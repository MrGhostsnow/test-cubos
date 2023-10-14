import React from "react";

interface VideoPlayerProps {
  videoKey: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoKey }) => {
  const videoBaseUrl = "https://www.youtube.com/embed/";

  return (
    <iframe
      width="1300"
      height="730"
      src={videoBaseUrl + videoKey}
      title="Video Player"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
