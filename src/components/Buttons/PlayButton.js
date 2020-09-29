import React, { useState } from 'react';
import './index.css';

const PlayButton = props => {
  const [play, setPlay] = useState(false);
  const playToggle = () => setPlay(play => !play);

  if (play) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="button play" onClick={playToggle}>
        <path d="M9 9H11V15H9V9Z" fill="currentColor" />
        <path d="M15 15H13V9H15V15Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          fill="currentColor"
        />
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="button play" onClick={playToggle}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
          fill="currentColor"
        />
        <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
      </svg>
    );
  }
};

export default PlayButton;
