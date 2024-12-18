import { useState } from "react";

const RockPaperScissors = () => {
 const [playerChoice, setPrayerChoice] = useState(null);
 const [computerChice, setComputerChoice] = useState(null);
 const [result, setResult] = useState([]);

 const possibleChoice = ["rock", "paper", "scissors"];

 const playerPick= (choice) => {
    setPrayerChoice(choice)
 

    const computerPick = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
    setComputerChoice(setComputerChoice);

 }

 

  return (
    <div>RockPaperScissors</div>
  )
}

export default RockPaperScissors