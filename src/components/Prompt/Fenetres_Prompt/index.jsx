import React, { useState } from "react";
import { XSquare } from "react-bootstrap-icons";
import Draggable from "react-draggable";
import PreFormattedCode from "./formatedCode";
import DevBy from "./dev";
import PromptPlayer from "../Prompt_PLayer/index";

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
          handle=".promptFenetre__top"
        >
          <div id="fenetre" className="promptFenetre">
            <div id="topfenetre" className="promptFenetre__top">
              <span className="promptFenetre__name"> prompt </span>
              <XSquare
                className="promptFenetre__close"
                onClick={() => setShowFenetre(false)}
              />
            </div>
            <div
              className="promptFenetre__interior"
              alt="fondNoir"
            > <PreFormattedCode/>
            
            <DevBy />
            <PromptPlayer />
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default Fenetre;
