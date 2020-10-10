import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { dance } from '../../actions';

const DanceButton = () => {
  const isDancing = useSelector(state => state.isDancing);
  const dispatch = useDispatch();

  return (
    <button className="button dance" tabIndex="1" onClick={() => dispatch(dance())}>
      <span role="img" aria-label="Dance" title="Dance">
        🕺
      </span>
    </button>
  );
};

export default DanceButton;
