import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { play } from '../../actions';

const PlayButton = () => {
  const isPlaying = useSelector(state => state.isPlaying);
  const dispatch = useDispatch();

  if (isPlaying) {
    return <i className="button pause" onClick={() => dispatch(play())}></i>;
  } else {
    return <i className="button play" onClick={() => dispatch(play())}></i>;
  }
};

export default PlayButton;
