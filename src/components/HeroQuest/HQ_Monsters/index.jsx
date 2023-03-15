const MonsterData = [
  { name: "Goblin", Movement: 10, Attack: 2, Defense: 1, HP: 1, Spirit: 1 },
  { name: "Orc", Movement: 8, Attack: 3, Defense: 2, HP: 1, Spirit: 2 },
  { name: "Skeleton", Movement: 6, Attack: 2, Defense: 3, HP: 1, Spirit: 0 },
  { name: "Zombie", Movement: 5, Attack: 3, Defense: 2, HP: 1, Spirit: 0 },
  { name: "Abomination", Movement: 6, Attack: 3, Defense: 3, HP: 2, Spirit: 3 },
  { name: "Mummy", Movement: 4, Attack: 3, Defense: 2, HP: 2, Spirit: 0 },
  {
    name: "Dread Warior",
    Movement: 4,
    Attack: 4,
    Defense: 3,
    HP: 3,
    Spirit: 3,
  },
  { name: "Gargoyle", Movement: 6, Attack: 4, Defense: 5, HP: 3, Spirit: 4 },
];

function MonsterChart() {
  return (
    <div className="monster">
      <table>
        <tr>
          <th>Race</th>
          <th>Move</th>
          <th>Atk</th>
          <th>Def</th>
          <th>HP</th>
          <th>Mind</th>
        </tr>
        {MonsterData.map((val, key) => {
          return (
            <tr>
              <td>{val.name}</td>
              <td>{val.Movement}</td>
              <td>{val.Attack}</td>
              <td>{val.Defense}</td>
              <td>{val.HP}</td>
              <td>{val.Spirit}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default MonsterChart;
