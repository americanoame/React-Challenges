import { useState } from "react";

const RockPaperScissors = () => {
  const [playerChoice, setPrayerChoice] = useState(null);
  const [computerChice, setComputerChoice] = useState(null);
  const [result, setResult] = useState([]);

  const possibleChoice = ["rock", "paper", "scissors"];

  const HandlePlayerPick = (choice) => {
    setPrayerChoice(choice);

    const computerPick =
      possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
    setComputerChoice(setComputerChoice);

    determiWinnew(choice, computerPick)
  };

  const determiWinner = (player, computer) => {
    if (player === computer) {
      setResult("it's a draw");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lost!");
    }
  };

  return <div>RockPaperScissors</div>;
};

export default RockPaperScissors;
