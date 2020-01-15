import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';
import Touche from './components/Touche';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [shouldReset, setShouldReset] = useState(false);

  const handleButtonClick = (x) => {
    setInputValue(shouldReset ? x : inputValue + x);
    setShouldReset(false);
  };

  const touches1to3 = [];
  for (let i = 0; i < 10; i++) {
    touches1to3.push(<Touche valeur={i.toString()} callback={handleButtonClick} />);
  }
  const operations = ['+', '-', '/', '*'];

  const evaluateInput = () => {
    let resultat;
    try {
      resultat = evaluate(inputValue);
    } catch (e) {
      resultat = 'Erreur ! tu es une erreur !';
    }

    setInputValue(`${inputValue} = ${resultat}`);
    setShouldReset(true);
  };

  return (
    <div>
      <div>
        <input value={inputValue} disabled />
        <br />
        {touches1to3.slice(0, 3)}
        <br />
        {touches1to3.slice(3, 6)}
        <br />
        {touches1to3.slice(6, 10)}
      </div>
      <div>
        {operations.map((o) => <Touche valeur={o} callback={handleButtonClick} />)}
      </div>
      <button type="button" onClick={evaluateInput}>=</button>
    </div>
  );
}

export default App;
