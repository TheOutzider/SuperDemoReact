import React, { useState } from 'react';
import Fenetre from '../Fenetres_Prompt';
import Icon from '../../../assets/iconprompt.png';

const ImageClick = () => {
  const [showWindow, setShowWindow] = useState(false);

  const handleClick = () => {
    setShowWindow(!showWindow);
  };

  return (
    <div className="icon_1">
      <div className="iconset">
      <div className="iconalone">
        <img
          className="image"
          alt="Ordinateur"
          src={Icon}
          onClick={handleClick}
        /></div>
        <div className="iconName">Demo ??</div>
      </div>
      {showWindow && (
          <Fenetre />
      )}
    </div>
  );
};

export default ImageClick;
