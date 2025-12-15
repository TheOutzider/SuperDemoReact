import React, { useEffect } from "react";

function ScriptSQ() {
  const [aliensInvaders, setAliensInvaders] = React.useState([]);
  const actualPosition = React.useRef(678);
  const laserPosition = React.useRef(500);
  let getDownRight = true;
  let getDownLeft = true;
  let direction = 1;

  const HandleKeyPress = (e) => {
    const allDiv = document.querySelectorAll(".container div");
    allDiv[actualPosition.current].className = " ";
    if (e.key === "ArrowRight") {
      if (actualPosition.current < 689) {
        actualPosition.current += 1; // Modifiez la valeur de la propriété current
      } else {
        actualPosition.current = 689;
      }
    }
    if (e.key === "ArrowLeft") {
      if (actualPosition.current > 667) {
        actualPosition.current -= 1; // Modifiez la valeur de la propriété current
      } else {
        actualPosition.current = 667;
      }
    }
    allDiv[actualPosition.current].className = "SQFenetre__shooter";
  };

  const AlienMoves = () => {
    const allDiv = document.querySelectorAll(".container div");
    for (let i = 0; i < aliensInvaders.length; i++) {
      if (allDiv[aliensInvaders[i]].hasAttribute("data-right") === true) {
        if (getDownRight) {
          direction = 23;
          // eslint-disable-next-line no-loop-func
          setTimeout(() => {
            getDownRight = false;
            console.log(getDownRight);
          }, 50);
        } else if (getDownRight === false) {
          direction = -1;
        }
      } else if (allDiv[aliensInvaders[i]].hasAttribute("data-left") === true) {
        if (getDownLeft) {
          direction = 23;
          // eslint-disable-next-line no-loop-func
          setTimeout(() => {
            getDownLeft = false;
            console.log(getDownLeft);
          }, 50);
        } else if (getDownLeft === false) {
          direction = 1;
        }
      }
    }
    for (let i = 0; i < aliensInvaders.length; i++) {
      allDiv[aliensInvaders[i]].className = " ";
    }
    for (let i = 0; i < aliensInvaders.length; i++) {
      aliensInvaders[i] += direction;
    }
    for (let i = 0; i < aliensInvaders.length; i++) {
      allDiv[aliensInvaders[i]].className = "SQFenetre__aliens";
    }
  };

  const HandleKeyLaser = (e) => {
    const allDiv = document.querySelectorAll(".container div");
    laserPosition.current = actualPosition;
    console.log("youpi.event");
    console.log(laserPosition);

    if (e.keyCode === 32) {
      setInterval(() => {
        console.log("youpi?");
        lasermoves();
      }, 100);
    }

    function lasermoves() {
      allDiv[laserPosition.current].className = " ";
      laserPosition.current -= 20;
      allDiv[laserPosition.current].className = "SQFenetre__laser";
      console.log(laserPosition)
      console.log("youpi!");
    }
  };

  useEffect(() => {
    const container = document.querySelector(".container");
    let allDiv;
    let index = 0;
    for (let i = 0; i < 690; i++) {
      if (index === 0) {
        const bloc = document.createElement("div");
        bloc.setAttribute("data-left", "true");
        container.appendChild(bloc);
        index++;
      } else if (index === 22) {
        const bloc = document.createElement("div");
        bloc.setAttribute("data-right", "true");
        container.appendChild(bloc);
        index = 0;
      } else {
        const bloc = document.createElement("div");
        container.appendChild(bloc);
        index++;
      }
    }

    for (let i = 52; i < 108; i++) {
      if (i === 62) {
        i = 75;
        aliensInvaders.push(i);
      } else if (i === 85) {
        i = 98;
        aliensInvaders.push(i);
      } else {
        aliensInvaders.push(i);
      }
    }
    allDiv = document.querySelectorAll(".container div");
    document.addEventListener("keydown", HandleKeyPress);
    document.addEventListener("keyup", HandleKeyLaser);
    aliensInvaders.forEach((invader) => {
      allDiv[invader].className = "SQFenetre__aliens";
    });

    allDiv[actualPosition.current].className = "SQFenetre__shooter";

    setAliensInvaders(aliensInvaders);
    setInterval(AlienMoves, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="container"
      style={{
        height: "766px",
        width: "584px",
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "3px",
      }}
    ></div>
  );
}

export default ScriptSQ;
