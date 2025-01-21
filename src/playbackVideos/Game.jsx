import React, { useState, useRef } from 'react';
import game_video from '../videos/game.mp4';
import game from '../images/game.png';
import playIcon from '../images/playButton.webp';
import './VideoStyle.css';

function NetflixClone() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
  };

  return (
    <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
      {!isPlaying ? (
        <>
          <img
            className="video-img"
            src={game}
            style={{ width: '350px', height: '200px', cursor: 'pointer' }}
            onClick={() => setIsPlaying(true)}
          />
          <img
            src={playIcon}
            alt="Play Button"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
            }}
            onClick={() => setIsPlaying(true)}
          />
        </>
      ) : (
        <video
          className="video-play"
          ref={videoRef}
          autoPlay
          loop
          width="350px"
          height="200px"
          onClick={handleVideoClick}
        >
          <source src={game_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default NetflixClone;
