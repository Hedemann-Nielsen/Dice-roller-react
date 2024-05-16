import { useState } from "react";
import { diceImages } from "../../Static/DiceImages";
import style from "./Dices.module.scss";

export const Dices = ({ setDiceSum, arePlayersEmpty, setPlayers, players }) => {
	const [dice1, setDice1] = useState(diceImages[0]);
	const [dice2, setDice2] = useState(diceImages[0]);

	// console.log(diceImages);

	const rollDices = () => {
		const randomNumer1 = Math.ceil(Math.random(1) * 6);
		const randomNumer2 = Math.ceil(Math.random(1) * 6);
		setDice1(diceImages[randomNumer1 - 1]);
		setDice2(diceImages[randomNumer2 - 1]);
		// console.log(`"Terning 1:" ${randomNumer1}, "Terning 2:" ${randomNumer2}`);

		let Sum = randomNumer1 + randomNumer2;
		setDiceSum(Sum);

		const currentPlayer = players.find((player) => player.isPlayersTurn);
		if (currentPlayer && currentPlayer.updateScore) {
			currentPlayer.updateScore(Sum);
		}

		PlayerTurn();
	};

	const PlayerTurn = () => {
		let clone = players.map((item) => {
			let a = { ...item };
			a.isPlayersTurn = !a.isPlayersTurn;
			return a;
		});
		setPlayers(clone);
	};

	const currentPlayer = players.find((player) => player.isPlayersTurn);

	// player skal holde øje med hvilken som er true og indsætte verdien her

	// console.log(diceSum);
	return (
		<>
			<img src={dice1} alt="" className={style.dice} />
			<img src={dice2} alt="" className={style.dice} />
			<button onClick={rollDices} disabled={arePlayersEmpty()}>
				Kast terningerne
			</button>
			{currentPlayer && <p> Det er nu {currentPlayer.name}.s tur</p>}
		</>
	);
};
