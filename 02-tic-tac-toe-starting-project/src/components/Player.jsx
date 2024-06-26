import React, { useState } from "react";

function Player({ initialName, symbol, isAcitve }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    // changes the state on edit or save button click
    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
    };

    // handles the change in input

    const handleChangePlayerName = (e) => {
        setPlayerName(e.target.value)
    }

    // player name span

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    // checks if the player wants to change the name
    // if isEditing the editablePlayerName will be input field else it will the span 

    if (isEditing) {
        editablePlayerName = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handleChangePlayerName}
            />
        );
    }
    return (
        <li className={isAcitve ? 'active' : ""}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}

export default Player;
