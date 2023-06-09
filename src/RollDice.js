import React, { useState } from 'react';
const DiceRoll = ()=>{
    const [diceNumber1, setDiceNumber1]= useState(1);
    const [diceNumber2, setDiceNumber2]= useState(1);

    const refreshDice=()=>{
        const refNumber1 = Math.floor(Math.random() * 6) + 1;
        setDiceNumber1(refNumber1);

        const refNumber2 = Math.floor(Math.random() * 6) + 1;
        setDiceNumber2(refNumber2);
    }

    return(
        <div className="diceRoll">
            <h2>You Got: {diceNumber1 + diceNumber2}</h2>
        <img src={require(`./diceImage/dice${diceNumber1}.png`)} alt="DiceImage" />
        <img src={require(`./diceImage/dice${diceNumber2}.png`)} alt="DiceImage" />
        <br/>
        <button onClick={()=> refreshDice()}>Roll</button>
        </div>
    );
}

export default DiceRoll;