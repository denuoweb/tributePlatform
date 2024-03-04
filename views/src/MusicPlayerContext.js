import React, { createContext, useState, useContext } from 'react';

const MusicPlayerContext = createContext();

const songList = [
    { src: '/music/01 Lunatic Fringe.wav', title: 'Lunatic Fringe', artist: 'Naoto Sekiguchi' },
    { src: '/music/02 Impeach The Shithole In Chief.wav', title: 'Impeach The Shithole In Chief', artist: 'Naoto Sekiguchi' },
    { src: '/music/03 Waters On The Moon.wav', title: 'Waters On The Moon', artist: 'Naoto Sekiguchi' },
    { src: '/music/04 Rise Above The Digital Bonds.wav', title: 'Rise Above The Digital Bonds', artist: 'Naoto Sekiguchi' },
    { src: '/music/05 Dreams Begin To Fly.wav', title: 'Dreams Begin To Fly', artist: 'Naoto Sekiguchi' },
    { src: '/music/06 My People With The Hopi Go.wav', title: 'My People With The Hopi Go', artist: 'Naoto Sekiguchi' },
    { src: '/music/07 Meteor Hits The Earth.wav', title: 'Meteor Hits The Earth', artist: 'Naoto Sekiguchi' },
    { src: '/music/08 World On The Brink.wav', title: 'World On The Brink', artist: 'Naoto Sekiguchi' },
    { src: '/music/09 Voodoo Radio.wav', title: 'Voodoo Radio', artist: 'Naoto Sekiguchi' },
    { src: '/music/10 Phineas Gage Keeps Me Feeling Alright.wav', title: 'Phineas Gage Keeps Me Feeling Alright', artist: 'Naoto Sekiguchi' },
    { src: '/music/11 Our Dreams Now Converge.wav', title: 'Our Dreams Now Converge', artist: 'Naoto Sekiguchi' },
    { src: '/music/12 Waters Of the Mekong.wav', title: 'Waters Of the Mekong', artist: 'Naoto Sekiguchi' },
    { src: '/music/13 Temple In Ruins.wav', title: 'Temple In Ruins', artist: 'Naoto Sekiguchi' },
    { src: '/music/14 Riding The Wave.wav', title: 'Riding The Wave', artist: 'Naoto Sekiguchi' },
    { src: '/music/15 Sea Otters & The American Dream.wav', title: 'Sea Otters & The American Dream', artist: 'Naoto Sekiguchi' },
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
