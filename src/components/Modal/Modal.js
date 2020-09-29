import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import './index.css';
require('dotenv').config();

const Modal = props => {
  const [title, setTitle] = useState('');
  const [powers, setPowers] = useState([]);
  const [stats, setStats] = useState([]);

  ReactModal.setAppElement('#root');

  useEffect(() => {
    const url = 'https://superheroapi.com/api/' + process.env.REACT_APP_API_KEY + '/303';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setTitle(data.name);
        return data.powerstats;
      })
      .then(powerstats => {
        // console.log(powerstats);
        setPowers(Object.keys(powerstats));
        setStats(Object.values(powerstats));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <ReactModal isOpen={props.isOpen} onRequestClose={() => props.setOpen(!props.isOpen)}>
      <h1 className="modal-title">{title}</h1>
      <div className="flexbox">
        <ul>
          {powers.map((power, index) => (
            <li key={index}>{power}</li>
          ))}
        </ul>
        <ul>
          {stats.map((stat, index) => (
            <li className="level-bar" key={index}>
              <div className="level-bar--fill" style={{ width: stat + '%' }}>
                {stat}%
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ReactModal>
  );
};

export default Modal;
