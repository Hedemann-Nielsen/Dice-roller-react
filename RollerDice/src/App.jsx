import { useState } from "react";
import "./App.scss";
import { Dices } from "./components/Dice/Dices";
import { Players } from "./components/Players/Players";
import { Score } from "./components/Score/Score";

//1. Lav en player - ok
//2. Lav en måde at holde styr på runder
//3. Lav en nåde at slå med en terning - ok
//4. Lav en måde at holde styr på score
//5. Lav en måde hvor player og score connectes

function App() {
	const [diceSum, setDiceSum] = useState();
	const [players, setPlayers] = useState([]);
	console.log(players);
	// console.log(diceSum);

	const arePlayersEmpty = () => {
		return players.length === 0;
	};

	return (
		<>
			<Players
				setPlayers={setPlayers}
				players={players}
				arePlayersEmpty={arePlayersEmpty}
			/>
			<Score diceSum={diceSum} />
			<Dices
				setDiceSum={setDiceSum}
				arePlayersEmpty={arePlayersEmpty}
				setPlayers={setPlayers}
				players={players}
			/>
		</>
	);
}

export default App;
