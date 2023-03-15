import React, { Component } from "react";

class HeroQuest extends Component {
  state = {
    Heroes: [],
    Monsters: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/Heroquest.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          Heroes: data.HeroQuest.Heroes,
          Monsters: data.HeroQuest.Monsters,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { Heroes, Monsters } = this.state;

    return (
      <div>
        <h1>HeroQuest</h1>
        <h2>Heroes</h2>
        {Heroes.map((hero) => (
          <div key={hero.name}>
            <h3>{hero.name}</h3>
            <div className="Heroes">
              {hero.equipment.map((equipment) => (
                <div key={equipment.name} className="Heroes_Equipment">
                  <div>
                    {equipment.name} ({equipment.price})
                  </div>
                  <img src={equipment.img} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <h2>Monsters</h2>
        {Monsters.map((monster) => (
          <div key={monster.name}>
            <h3>{monster.name}</h3>
            <div className="Monsters">
              {monster.loot.map((loot) => (
                <div key={loot.name} className="Monsters_Equipment">
                  <div>
                    {loot.name} ({loot.price})
                  </div>
                  <img src={loot.img} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default HeroQuest;
