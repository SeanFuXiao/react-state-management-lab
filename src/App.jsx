import { useState } from "react";
import "./App.css";
const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [errorMessage, setErrorMessage] = useState("");

  const zombieFighters = [
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ];

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setErrorMessage("");
    } else {
      setErrorMessage("Dont have enough money");
    }
  };
  const handleSellFighter = (index) => {
    const fighterToSell = team[index];
    setTeam(team.filter((_, i) => i !== index));
    setMoney(money + fighterToSell.price);
  };

  return (
    <div className="app">
      <h1>Zombie Fighters</h1>
      <p>Money: {money}</p>
      <p>
        Team Strength:{" "}
        {team.reduce((acc, fighter) => acc + fighter.strength, 0)}
      </p>
      <p>
        Team Agility: {team.reduce((acc, fighter) => acc + fighter.agility, 0)}
      </p>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}

      <h2>Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members</p>
      ) : (
        <div className="team">
          {team.map((member, index) => (
            <div className="card" key={index}>
              <img src={member.img} alt={member.name} />
              <p>{member.name}</p>
              <p>Price: {member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleSellFighter(index)}>Sell</button>
            </div>
          ))}
        </div>
      )}

      <h2>Fighters</h2>
      <div className="fighters">
        {zombieFighters.map((fighter, index) => (
          <div className="card" key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <p>{fighter.name}</p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
