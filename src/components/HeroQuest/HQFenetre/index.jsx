import React, { useState } from "react";
import { XSquare } from "react-bootstrap-icons";
import HQPLAYER from "../HQAudio/index";
import Draggable from "react-draggable";
import TheArmory from '../HQ_Grocery';
import ThrowDice from '../../HeroQuest/HQ_ThrowDice/'
import MonsterChart from "../HQ_Monsters";
import Cards from "../HQ_Cards";


function Fenetre() {

  const [showFenetre, setShowFenetre] = useState(true);

  function getX(min, max) {
    return Math.random() * (max - min) + min;
  }
  function getY(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <div>
      {showFenetre && (
        <Draggable
          handle=".hqFenetre__top"
          defaultPosition={{ x: getX(-800, -1200), y: getY(25, -230) }}
        >
          <div id="fenetre" className="hqFenetre">
            <div id="" className="hqFenetre__top">
              <span className="hqFenetre__name"> Hero Quest GROCERY STORE </span>
              <XSquare
                className="hqFenetre__close"
                onClick={() => setShowFenetre(false)}
              />
            </div>
            <div className="hqFenetre__interior">
            <TheArmory />
            <ThrowDice />
            <MonsterChart />
            <Cards />
            <HQPLAYER />

            </div>
           
            <div className="fenetre__footer"></div>
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default Fenetre;
