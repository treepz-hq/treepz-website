'use client'
import React, { useState } from "react";
import PlayYouTubeIcon from '@/assets/svgs/Play-youtube-icon.svg'
import Image from 'next/image'

const VideoComponent: React.FC<{ src: string }> = ({ src }) => {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
  };

const getYoutubeEmbedUrl = (videoId: string) => {
  if (!videoId) return "";

  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

const embedUrl = getYoutubeEmbedUrl(src);

  return (
    <div className="relative h-[400px] w-full">
      {!playing && (
        <div
          className="w-full cursor-pointer h-[400px] absolute"
          onClick={handleClick}
        >
          <Image
            src="/media-thumbnail.png"
            alt="YouTube Thumbnail"
            fill
            sizes="100vw, 100vh"
            className="w-full h-full object-cover absolute"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PlayYouTubeIcon />
          </div>
        </div>
      )}
      {playing && (
        <iframe
          className="w-full cursor-pointer h-[400px] absolute object-cover"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onClick={handleClick}
        ></iframe>
      )}
    </div>
  );
};

export default VideoComponent;
