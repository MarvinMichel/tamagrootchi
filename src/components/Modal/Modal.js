import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import CloseButton from '../Buttons/CloseButton';
import { useSelector, useDispatch } from 'react-redux';
import { open } from '../../actions';
import './index.css';
require('dotenv').config();

const Modal = () => {
  const [powers, setPowers] = useState([]);
  const [stats, setStats] = useState([]);

  const isOpen = useSelector(state => state.isOpen);
  const dispatch = useDispatch();

  ReactModal.setAppElement('#root');

  useEffect(() => {
    const url = 'https://superheroapi.com/api/' + process.env.REACT_APP_API_KEY + '/303';
    fetch(url)
      .then(response => response.json())
      .then(data => data.powerstats)
      .then(powerstats => {
        setPowers(Object.keys(powerstats));
        setStats(Object.values(powerstats));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <ReactModal className="modal" isOpen={isOpen} onRequestClose={() => dispatch(open())}>
      <CloseButton close={() => dispatch(open())} />
      <h1 className="modal-title">About Groot</h1>
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
      <p>
        Groot (/ɡruːt/) is a fictional character appearing in American comic books published by
        Marvel Comics. Created by Stan Lee, Larry Lieber and Jack Kirby, the character first
        appeared in Tales to Astonish #13 (November 1960). An extraterrestrial, sentient tree-like
        creature, the original Groot first appeared as an invader that intended to capture humans
        for experimentation.
      </p>
      <p>
        The character was reintroduced as a heroic, noble being in 2006, and appeared in the
        crossover comic book storyline "Annihilation: Conquest". Groot went on to star in its
        spin-off series, Guardians of the Galaxy, joining the team of the same name. Groot has been
        featured in a variety of associated Marvel merchandise, including animated television
        series, toys and trading cards. Vin Diesel voices Groot in the Marvel Cinematic Universe
        films Guardians of the Galaxy (2014), Guardians of the Galaxy Vol. 2 (2017), Avengers:
        Infinity War (2018), and Avengers: Endgame (2019), while Krystian Godlewski played the
        character via performance capture in the first film. Fred Tatasciore voices Groot on the
        Disney California Adventure ride Guardians of the Galaxy: Mission Breakout. Diesel will
        return to voice the character in Guardians of the Galaxy Vol. 3. Diesel also voiced Groot as
        a cameo in the 2018 Disney animated film Ralph Breaks the Internet. Since his film premiere
        and animated series debut, Groot has become a pop culture icon, with his repeated line "I am
        Groot" becoming an Internet meme.
      </p>
    </ReactModal>
  );
};

export default Modal;
