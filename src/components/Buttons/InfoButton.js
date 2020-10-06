import React from 'react';
import Modal from '../Modal/Modal';
import './index.css';
import { useDispatch } from 'react-redux';
import { open } from '../../actions';

const InfoButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <i className="button info" onClick={() => dispatch(open())}></i>
      <Modal />
    </>
  );
};

export default InfoButton;
