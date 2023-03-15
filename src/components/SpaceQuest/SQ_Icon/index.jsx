import React, { useState } from 'react';
import Fenetre from '../../SpaceQuest/SQ_Fenetre/index';
import Icon from '../../../assets/iconaudio.png';

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
        <div className="iconName">Space Quest</div>
      </div>
      {showWindow && (
          <Fenetre />
      )}
    </div>
  );
};

export default ImageClick;
