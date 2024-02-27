'use client'
import React, { useState } from "react";

const VideoComponent: React.FC<{ src: string }> = ({ src }) => {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
  };

  const getYoutubeEmbedUrl = (url: string) => {
    let videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const embedUrl = getYoutubeEmbedUrl(src);

  return (
    <div className="relative">
      {playing && (
        <iframe
          className="w-full cursor-pointer h-[500px] bg-red-500"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onClick={handleClick}
        ></iframe>
      )}
    </div>
  );
};

export default VideoComponent;
