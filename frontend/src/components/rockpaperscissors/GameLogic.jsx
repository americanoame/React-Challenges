import { useState } from "react";

const useGameLogic = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const possibleChoices = ["rock", "paper", "scissors"];

  const handlePlayerPick = (choice) => {
    setPlayerChoice(choice);

    const computerPick =
      possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    setComputerChoice(computerPick);

    determineWinner(choice, computerPick);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a draw");
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

  const reloadGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return {
    playerChoice,
    computerChoice,
    result,
    handlePlayerPick,
    reloadGame,
  };
};

export default useGameLogic;
