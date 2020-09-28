import React, { useState } from 'react';
import './index.css';

const PlayButton = props => {
  const [play, setPlay] = useState(false);
  const playToggle = () => setPlay(play => !play);

  return (
    <i className={play ? 'button button--pause' : 'button button--play'} onClick={playToggle}></i>
  );
};

export default PlayButton;
