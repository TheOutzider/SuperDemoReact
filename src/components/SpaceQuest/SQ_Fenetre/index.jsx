import React, { useState } from "react";
import { XSquare } from "react-bootstrap-icons";
import Draggable from "react-draggable";
import ScriptSQ from '../SQ_Script'

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
      {" "}
      {showFenetre && (
        <Draggable
          defaultPosition={{ x: getX(-665, -1200), y: getY(4, 335) }}
          handle=".SQFenetre__top"
        >
          <div id="fenetre" className="SQFenetre">
            <div id="topfenetre" className="SQFenetre__top">
              <span className="SQFenetre__name"> Space Quest </span>
              <XSquare
                className="SQFenetre__close"
                onClick={() => setShowFenetre(false)}
              />
            </div>
            <div className="SQFenetre__score">Score :</div>
            <div
              className="SQFenetre__interior"
              alt="fondNoir"
            >
              <ScriptSQ />
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default Fenetre;
