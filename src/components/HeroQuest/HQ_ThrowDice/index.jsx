import React from "react";
import First from "../../../assets/white.png";
import Second from "../../../assets/black.png";
import Third from "../../../assets/skull.png";
import Fourth from "../../../assets/white.png";
import Fifth from "../../../assets/skull.png";
import Sixth from "../../../assets/black.png";

class DiceRoller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceValues: [1],
      numberOfDice: 1,
      isRolling: false,
    };
  }

  rollDice = () => {
    this.setState({
      isRolling: true,
    });
    let diceValues = [];
    for (let i = 0; i < this.state.numberOfDice; i++) {
      diceValues.push(Math.floor(Math.random() * 6) + 1);
    }
    setTimeout(() => {
      this.setState({
        diceValues: diceValues,
        isRolling: false,
      });
    }, 1000);
  };

  handleChangeNumberOfDice = (number) => {
    this.setState({
      numberOfDice: number
    });
  }


  render() {
    const { isRolling } = this.state;

    return (
      <div className="dice_master">
        <div className="dice_container">
        {this.state.diceValues.map((diceValue, i) => (
          <div
            className={`dice-div ${isRolling && "animated-dice"}`}
            key={i}
            onAnimationEnd={() => this.setState({ isRolling: false })}
          >
            <img
              src={`${
                diceValue === 1
                  ? First
                  : diceValue === 2
                  ? Second
                  : diceValue === 3
                  ? Third
                  : diceValue === 4
                  ? Fourth
                  : diceValue === 5
                  ? Fifth
                  : Sixth
              }`}
              className="dice_face"
              alt={`Dice ${i + 1} Value: ${diceValue}`}
            />
          </div>
        ))}
        <div></div>
        </div>
        <div className="selection_container">
            <div className="number_container">
        {[...Array(6).keys()].map(number => (
            <button
              className={`dice-btn ${this.state.numberOfDice === number + 1 && 'selected'}`}
              key={number}
              onClick={() => this.handleChangeNumberOfDice(number + 1)}
            >
              {number + 1}
            </button>
          ))}
        </div>
        <button className="roll-btn" onClick={this.rollDice}>Roll the dice!</button></div>
      </div>
    );
  }
}

export default DiceRoller;
