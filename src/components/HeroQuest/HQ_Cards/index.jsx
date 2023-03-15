import React, { useState } from "react";
import Carte1 from "../../../assets/Cartes/Arbalète.jpg";
import Carte2 from "../../../assets/Cartes/Armure.jpg";
import Carte3 from "../../../assets/Cartes/Bouclier.jpg";
import Carte4 from "../../../assets/Cartes/Cape.jpg";
import Carte5 from "../../../assets/Cartes/Casque.jpg";
import Carte6 from "../../../assets/Cartes/Dague.jpg";
import Carte7 from "../../../assets/Cartes/Glaive.jpg";
import Carte8 from "../../../assets/Cartes/Gourdin.jpg";
import Carte9 from "../../../assets/Cartes/Hache.jpg";
import Carte10 from "../../../assets/Cartes/Hachette.jpg";
import Carte11 from "../../../assets/Cartes/Lance.jpg";
import Carte12 from "../../../assets/Cartes/Remontant.jpg";
import Carte13 from "../../../assets/Cartes/Trousse.jpg";

const Cards = () => {
  const cards = [
    {
      id: 1,
      image: Carte1,
      chosen: false,
    },
    {
      id: 2,
      image: Carte2,
      chosen: false,
    },
    {
      id: 3,
      image: Carte3,
      chosen: false,
    },
    {
      id: 4,
      image: Carte4,
      chosen: false,
    },
    {
      id: 5,
      image: Carte5,
      chosen: false,
    },
    {
      id: 6,
      image: Carte6,
      chosen: false,
    },
    {
      id: 7,
      image: Carte7,
      chosen: false,
    },
    {
      id: 8,
      image: Carte8,
      chosen: false,
    },
    {
      id: 9,
      image: Carte9,
      chosen: false,
    },
    {
      id: 10,
      image: Carte10,
      chosen: false,
    },
    {
      id: 11,
      image: Carte11,
      chosen: false,
    },
    {
      id: 12,
      image: Carte12,
      chosen: false,
    },
    {
      id: 13,
      image: Carte13,
      chosen: false,
    },
  ];

  const handleClick = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          chosen: !card.chosen,
        };
      }
      return card;
    });
    setCards(updatedCards);
  };
  const [cardsState, setCards] = useState(cards);

  return (
    <div className="Cards">
      {cardsState.map((card) => (
        <div
          className={`${card.chosen ? "Card chosen" : "Card"}`}
          onClick={() => handleClick(card.id)}
          key={card.id}
        >
          <img src={card.image} alt={card.id} style={{ imageRendering: `auto`}} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
