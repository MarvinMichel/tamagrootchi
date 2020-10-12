import React from 'react';
import KickButton from '../Buttons/KickButton';
import DanceButton from '../Buttons/DanceButton';
import WaveButton from '../Buttons/WaveButton';
import './index.css';

const Controls = () => (
  <form>
    <KickButton />
    <DanceButton />
    <WaveButton />
  </form>
);

export default Controls;
