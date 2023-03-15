import React, { useState } from "react";
import { XSquare } from "react-bootstrap-icons";
import YoutubePlayer from "../React-Player/";
import Draggable from "react-draggable";


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
          handle=".fenetre__top"
          defaultPosition={{ x: getX(-339, -1150), y: getY(4, 335) }}
        >
          <div id="fenetre" className="fenetre">
            <div id="" className="fenetre__top">
              <span className="fenetre__name"> Lecteur Audio </span>
              <XSquare
                className="fenetre__close"
                onClick={() => setShowFenetre(false)}
              />
            </div>
           <YoutubePlayer />
            <div className="fenetre__footer"></div>
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default Fenetre;
