import React, { useRef } from 'react';

const MusicPlayer = ({ src }) => {
  const audioRef = useRef(new Audio(src));
  const isPlayingRef = useRef(false);

  const toggleMusic = () => {
    isPlayingRef.current = !isPlayingRef.current;
    
    if (isPlayingRef.current) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <button onClick={toggleMusic}>Buka</button>
  );
};

export default MusicPlayer;