import { useEffect, useState } from "react";
import { Player } from "../Player/Players";
import { Dice } from "../Dice/Dices";

export const GameManeger = () => {
	const [playerOneScore, setPlayerOneScore] = useState(0);
	const [playerTwoScore, setPlayerTwoScore] = useState(0);
	const [roll, setRoll] = useState(0);

	useEffect(() => {}, [roll]);
	// const updateScore {
	//     //hvem vinder?
	// }
	return (
		<>
			<Player name={"PlayerOne"} score={playerOneScore} />
			<Dice roll={roll} setRoll={setRoll} />
			<Player name={"PlayerTwo"} score={playerTwoScore} />
		</>
	);
};
