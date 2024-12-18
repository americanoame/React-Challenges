import { useState } from "react";

const RockPaperScissors = () => {
 const [playerChoice, setPrayerChoice] = useState(null);
 const [computerChice, setComputerChoice] = useState(null);
 const [result, setResult] = useState([]);

 const possibleChoice = ["rock", "paper", "scissors"];

 const playerChoice = (choice) => {
    setPrayerChoice(choice)

    
 }

  return (
    <div>RockPaperScissors</div>
  )
}

export default RockPaperScissors