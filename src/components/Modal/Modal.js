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
  const [succes, setSucces] = useState(false);

  const isOpen = useSelector(state => state.isOpen);
  const dispatch = useDispatch();

  ReactModal.setAppElement('#root');

  async function getData(url = '') {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    return response.json();
  }

  useEffect(() => {
    const url = 'https://superheroapi.com/api/' + process.env.REACT_APP_API_KEY + '/303';
    getData(url)
      .then(data => data.powerstats)
      .then(powerstats => {
        setPowers(Object.keys(powerstats));
        setStats(Object.values(powerstats));
        setSucces(() => true);
      })
      .catch(error => {
        console.log(error);
        setSucces(() => false);
      });
  }, []);

  return (
    <ReactModal className="modal" isOpen={isOpen} onRequestClose={() => dispatch(open())}>
      <CloseButton close={() => dispatch(open())} />
      <h1 className="modal-title">About Groot</h1>
      {succes && (
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
      )}
      <p>
        Sentient and ambulatory plant-being Groot left his Flora colossus people behind on their
        native Planet X to travel out into the galaxy. Both before and after meeting the genetically
        enhanced creature known as Rocket, Groot racked up an impressive list of criminal charges
        from the Nova Corps police force while working for crime lords in various capacities.
      </p>
      <p>
        Together, Groot and Rocket finally concentrated on being bounty hunters, a job that took
        them to many exotic worlds. Upon tracking Peter Quill, AKA Star-Lord, to Xandar for the
        bounty on his head, Groot and Rocket ran afoul of the assassin Gamora and wound up arrested
        by the Nova Corps. They were incarcerated in the Kyln prison complex alongside Quill and
        Gamora, where they also met the warrior Drax.
      </p>
      <p>
        They teamed up with their fellow inmates to fence the Orb, a mysterious artifact that Quill
        claimed could be sold for immense wealth if Groot and the others would help him escape
        lock-up.
      </p>
      <p>
        Composed of matter resembling that of wood and possessing a fully functioning brain system,
        Groot can “grow” most anything he needs at any given time from his body, such as weapons for
        fighting, protective barriers for himself or others, and even flowers to give to special
        someones. Not usually overly talkative, he communicates with what appears to be a single
        phrase, “I am Groot,” but which can be translated to mean a multitude of things, as if
        stated in a full language format.
      </p>
      <p>
        Normally placid and friendly, Groot can handle himself well in combat and use deadly force
        if he feels the situation warrants it, and most especially if anyone endangers Rocket or his
        fellow Guardians of the Galaxy. In fact, in those moments, Groot can be called fierce and
        frightening.
      </p>
      <p>
        One of his greatest abilities is his ability to survive immense damage or even mortal injury
        by “regrowing” himself from even a small shard of his former self. During this reformative
        time, Groot follows a growth cycle similar to humans, from infant to adolescent and finally
        to adulthood, with each stage bringing with it evolving intelligence and temperament levels.
      </p>
      <p>
        When provoked or threatened, Groot transforms from peaceful tree-person into a mighty
        warrior with a hint of savagery—characteristics he exhibits regardless of what age he
        appears to be. As a member of the Guardians of the Galaxy, Groot joins the fight against
        cosmic threats like Ronan and Ego, and eventually Thanos and his followers.
      </p>
      <p>
        On a more personal level, the baby incarnation of Groot exacts his vengeance on the Ravager
        named Retch for abuses delivered by Retch during Groot’s brief tenure as the forced “mascot”
        of the pirates.
      </p>
      <p>
        Rocket stands as Groot’s closest companion and buddy, with all that such a relationship
        brings with it. Though the almost-raccoon often times seems frustrated or even irritable
        with the tree-being, they are in fact deeply aware of each other’s needs and feelings.
      </p>
      <p>
        Groot also apparently treasures his friendship and camaraderie with the other members of the
        Guardians of the Galaxy, especially Gamora and Peter Quill, the two of them often acting as
        parental figures after Groot is reborn in a baby-like form.
      </p>
      <p>
        While at first showing indifference to the Asgardian Thor, Groot ultimately comes to his aid
        at a crucial point, and fights alongside him and other Avengers and close allies of that
        Earth-bound team.
      </p>
      <p>
        Beyond his immediate circle of friends, Groot gravitates to the downtrodden he encounters in
        his travels, especially children.
      </p>
      <p>
        After escaping the Kyln, Groot traveled with Rocket and his new friends to the asteroid
        called Knowhere to meet the Collector, to whom Quill hoped to sell the Orb. Instead, Ronan
        the Kree Accuser captured the Orb, which housed an Infinity Stone, prompting Groot to urge
        Rocket to move to save his new comrades and follow the trail of the Stone. That path led
        them back to Xandar, where the band of friends made their way onto Ronan’s ship to try to
        recapture their lost artifact.
      </p>
      <p>
        Groot fought Ronan’s troops valiantly, and when the ship started to lose orbit and crash
        into Xandar, he formed a protective capsule out of his own body to ensure everyone would
        survive the impact. Sadly, he himself did not survive the crash, but when Rocket and the
        others finished their battle with Ronan, Groot began to regrow into a new life from a stick
        of his former existence.
      </p>
      <p>
        Not long after, the infant Groot traveled with his friends, now called the Guardians of the
        Galaxy, to complete a mission for the alien Sovereign race—though Rocket’s theft of valuable
        batteries from the Sovereign and the ensuing chase led to a crash land on a remote planet.
        When Quill, Gamora, and Drax left with Quill’s long-lost father, Ego, Rocket and Groot
        stayed behind for Rocket to fix the ship. They encountered Yondu Udonta’s Ravagers, who took
        the duo onto their ship and into captivity, while locking Yondu himself up following a
        mutiny. Abused by the crew, the little Groot, assisted by remorseful Ravager Kraglin, helped
        Rocket and Yondu escape to return to the company of their friends on Ego’s world.
      </p>
      <p>
        With Ego revealed as not only having been responsible for the death of Quill’s mother, but
        to have a terrifying “expansion” planned, which would turn the entire universe into an
        extension of himself, Rocket designed a bomb intended to blow up Ego’s consciousness at the
        core of the planet. While his friends fought both Ego and the returning Sovereign, Groot was
        tasked with delivering the explosive package to the core, a mission he readily accepted and,
        overcoming many questions about his ability to correctly remember what to do, carried out
        with success. Upon reaching the surface again, he learned of Yondu’s noble sacrifice to save
        Quill and later witnessed his moving funeral.
      </p>
      <p>
        In the years that followed, Groot continued to grow and upon reaching what would be
        adolescence for his race he entered into a period of sullenness and some slight rebellion
        against his fellow Guardians. Obsessed with a hand-held video game, Groot almost completely
        ignored his team’s plight against the tyrant Thanos, even as he accompanied Rocket and the
        Asgardian Thor to Nidavellir on a quest to forge a new weapon for the god of thunder.
        However, with Thor’s life on the line, when the Asgardian needed a stout handle for his
        newly forged magical axe, Stormbreaker, Groot gave his own arm to provide the weapon’s
        handle, an act that brought him some pain.
      </p>
      <p>
        Traveling through the Bifrost with Thor and Rocket to Earth, Groot landed in the African
        nation of Wakanda in the middle of a sprawling clash between Wakandan forces, many of
        Earth’s heroes, and Thanos’ army of followers. Groot destroyed many of Thanos’ forces, and
        even engaged Thanos himself when the tyrant suddenly appeared to end the fight and capture
        the last of the six Infinity Stones.
      </p>
      <p>
        When Thanos achieved that goal, he snapped his fingers and willed all six Stones to
        obliterate half of all sentient life in the universe. As Rocket looked on in anguish, Groot
        was among those who disintegrated away.
      </p>
    </ReactModal>
  );
};

export default Modal;
