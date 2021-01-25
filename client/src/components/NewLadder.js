import React from "react";

const NewLadder = ({ladderData}) => {
    const levels = Object.keys(ladderData.activites).map(key => (
        {
            task: key, 
            anxiety: ladderData.activites[key].anxiety
        }
    ));
    const sortedLevels = levels.sort((a, b) => a.anxiety - b.anxiety);
    return (
        <div className="newLadder">
            {sortedLevels.map(level => (<li>{level}</li>))}
        </div>
    )
};

export default NewLadder;