import { useState } from "react";

const RockPaperScissors = () => {
  const [playerChoice, setPrayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState([]);

  const possibleChoices = ["rock", "paper", "scissors"];

  const HandlePlayerPick = (choice) => {
    setPrayerChoice(choice);

    const computerPick =
      possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    setComputerChoice(computerPick);

    determiWinner(choice, computerPick);
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

  return (
    <div className="container flex flex-col items-center justify-center h-screen">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Pick your choice:</h2>
        <div className="flex space-x-4">
          {possibleChoices.map((choice) => (
            <button
              key={choice}
              onClick={() => HandlePlayerPick(choice)}
              className={`px-6 py-2 rounded text-white font-bold ${
                result && choice === playerChoice
                  ? result === "You win!"
                    ? "bg-green-500"
                    : result === "It's a draw!"
                    ? "bg-black"
                    : "bg-red-500"
                  : "bg-blue-500 hover:bg-blue-600"
              } `}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="text-xl font-semibold">Your Choice: {playerChoice}</h3>
        <h3 className="text-xl font-semibold">
          Computer&apos;s Choice: {computerChoice}
        </h3>
        <h2
          className={`text-2xl font-bold mt-4 ${
            result === "You win!"
              ? "text-green-500"
              : result === "You lose!"
              ? "text-red-500"
              : "text-black"
          }`}
        >
          {result}
        </h2>
      </div>
    </div>
  );
};

export default RockPaperScissors;
