import React from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import { open } from '../../actions';

const InfoButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button className="info" onClick={() => dispatch(open())} title="Info">
        &#9432;
      </button>
    </>
  );
};

export default InfoButton;
