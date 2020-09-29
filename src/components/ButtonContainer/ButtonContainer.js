import React from 'react';
import PlayButton from '../Buttons/PlayButton';
import InfoButton from '../Buttons/InfoButton';
import HelloButton from '../Buttons/HelloButton';
import './index.css';

const ButtonContainer = () => (
  <form>
    <InfoButton />
    <PlayButton />
    <HelloButton />
  </form>
);

export default ButtonContainer;
