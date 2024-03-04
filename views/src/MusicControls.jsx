import React, { useEffect, useRef } from 'react';
import { useMusicPlayer } from './MusicPlayerContext';

const MusicControls = () => {
  const { isPlaying, togglePlayPause, playNextSong, currentSong, currentSongIndex, setCurrentSongIndex, songList } = useMusicPlayer();
  const audioRef = useRef(new Audio(currentSong.src));

  // Play or pause the audio when isPlaying changes
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Change the audio source when currentSong changes
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(currentSong.src);
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  const handleSongChange = (event) => {
    const songIndex = parseInt(event.target.value, 10);
    setCurrentSongIndex(songIndex);
  };

  return (
    <div className="music-controls">
      <div className="now-playing">Now Playing: {currentSong.title} by {currentSong.artist}</div>
      <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <select onChange={handleSongChange} value={currentSongIndex}>
        {songList.map((song, index) => (
          <option key={index} value={index}>{song.title}</option>
        ))}
      </select>
      <a href={currentSong.src} download className="button download-link">Download Song</a>
      <a href="/music/album.zip" download className="button download-link">Download Album</a>
    </div>
  );
};

export default MusicControls;
