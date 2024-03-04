import React, { useState } from 'react';
import { MusicPlayerProvider } from '../MusicPlayerContext';
import { useMusicPlayer } from '../MusicPlayerContext';
import MusicControls from '../MusicControls';
import Home from './home/page'; // Adjust import paths as necessary
import Art from './art/page';
import Dedication from './dedication/page';
import Book from './book/page';
import './../style.css';

function App() {
  const [route, setRoute] = useState('home');

  const renderSection = () => {
    switch (route) {
      case 'home':
        return <Home />;
      case 'art':
        return <Art />;
      case 'dedication':
        return <Dedication />;
      case 'book':
        return <Book />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <MusicPlayerProvider>
        <div>
          <nav>
            <button onClick={() => setRoute('home')}>Home</button>
            <button onClick={() => setRoute('art')}>Art</button>
            <button onClick={() => setRoute('dedication')}>Dedication</button>
            <button onClick={() => setRoute('book')}>Book</button>
          </nav>
          <MusicControls />
          {renderSection()}
        </div>
        <footer style={{ marginTop: '20px', textAlign: 'center', padding: '10px 0' }}>
          Made using Python and React using <a href="https://github.com/piercefreeman/mountaineer" target="_blank" rel="noopener noreferrer">Mountaineer</a> 🏔️
        </footer>
      </MusicPlayerProvider>
    </div>
  );
}

export default App;
