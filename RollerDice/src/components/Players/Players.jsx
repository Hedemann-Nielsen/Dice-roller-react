import { useState } from "react";
import { Player } from "./Player";

export const Players = ({ setPlayers, players }) => {
	const [newPlayerName, setNewPlayerName] = useState("");

	const handleAddPlayer = (e) => {
		e.preventDefault();
		if (newPlayerName.trim() !== "") {
			setPlayers([
				...players,
				{
					name: newPlayerName,
					score: 0,
					isPlayersTurn: players.length < 1 ? true : false,
				},
			]);

			setNewPlayerName("");
		}
	};

	return (
		<>
			<form onSubmit={handleAddPlayer}>
				<input
					type="text"
					value={newPlayerName}
					onChange={(e) => setNewPlayerName(e.target.value)}
					placeholder="Indtast spillerens navn"
				/>
				<button type="submit">Tilføj Spiller</button>
			</form>
			{players.map((player, index) => (
				<Player key={index} name={player.name} score={player.score} />
			))}
		</>
	);
};
