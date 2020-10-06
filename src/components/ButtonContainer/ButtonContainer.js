import React from 'react';
import PlayButton from '../Buttons/PlayButton';
import InfoButton from '../Buttons/InfoButton';
import StopButton from '../Buttons/StopButton';
import './index.css';

const ButtonContainer = () => (
  <form>
    <InfoButton />
    <PlayButton />
    <StopButton />
  </form>
);

export default ButtonContainer;
