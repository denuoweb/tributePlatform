import React, { createContext, useState, useContext } from 'react';

const MusicPlayerContext = createContext();
const publicUrl = process.env.PUBLIC_URL || '';
const asset = (path) => `${publicUrl}${path}`;

const songList = [
    { src: asset('/audio/01 Lunatic Fringe.mp3'), title: 'Lunatic Fringe', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/02 Impeach The Shithole In Chief.mp3'), title: 'Impeach The Shithole In Chief', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/03 Waters On The Moon.mp3'), title: 'Waters On The Moon', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/04 Rise Above The Digital Bonds.mp3'), title: 'Rise Above The Digital Bonds', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/05 Dreams Begin To Fly.mp3'), title: 'Dreams Begin To Fly', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/06 My People With The Hopi Go.mp3'), title: 'My People With The Hopi Go', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/07 Meteor Hits The Earth.mp3'), title: 'Meteor Hits The Earth', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/08 World On The Brink.mp3'), title: 'World On The Brink', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/09 Voodoo Radio.mp3'), title: 'Voodoo Radio', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/10 Phineas Gage Keeps Me Feeling Alright.mp3'), title: 'Phineas Gage Keeps Me Feeling Alright', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/11 Our Dreams Now Converge.mp3'), title: 'Our Dreams Now Converge', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/12 Waters Of The Mekong.mp3'), title: 'Waters Of The Mekong', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/13 Temple In Ruins.mp3'), title: 'Temple In Ruins', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/14 Riding The Wave.mp3'), title: 'Riding The Wave', artist: 'Naoto Sekiguchi' },
    { src: asset('/audio/15 Sea Otters & The American Dream.mp3'), title: 'Sea Otters & The American Dream', artist: 'Naoto Sekiguchi' },
  ];

export const MusicPlayerProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const playNextSong = () => {
      setCurrentSongIndex((prevIndex) => 
        prevIndex + 1 >= songList.length ? 0 : prevIndex + 1
      );
      setIsPlaying(true); // Automatically play the next song
    };

    // Function to toggle play/pause
    const togglePlayPause = () => {
      setIsPlaying(!isPlaying);
    };

    // Provide the current song's metadata
    const currentSong = songList[currentSongIndex];

    return (
        <MusicPlayerContext.Provider value={{ isPlaying, togglePlayPause, playNextSong, currentSong, currentSongIndex, setCurrentSongIndex, songList }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};

export const useMusicPlayer = () => useContext(MusicPlayerContext);
