import React, { useState } from "react";
import { XSquare } from "react-bootstrap-icons";
import Image from "../../../assets/pres.png";
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
      {" "}
      {showFenetre && (
        <Draggable
          defaultPosition={{ x: getX(-665, -1200), y: getY(4, 335) }}
          handle=".presFenetre__top"
        >
          <div id="fenetre" className="presFenetre">
            <div id="topfenetre" className="presFenetre__top">
              <XSquare
                className="presFenetre__close"
                onClick={() => setShowFenetre(false)}
              />
            </div>
            <img
              className="presFenetre__interior"
              alt="ImageDeFond"
              src={Image}
            >
              

            </img>
            <div className="info">
            <div className="info_1"> Languages : HTML, CSS, JavaScript (Vanilla et React ⚛️ ) for the time being.</div>
            <div className="info_2"> Softwares : Vs Code, Photoshop, and many others.  </div>
            <div className="info_3"> Hardware : Computer Technician, Network Technician, Electronician.  </div>
            <div className="info_5"> My Interest: 70-80-90's, Magnum PI(1980), Roleplay, Games, and Music. </div>
            <div className="info_4"> The inspiration for this site comes from my personals references and mostly poolsuite.net !  </div>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default Fenetre;
