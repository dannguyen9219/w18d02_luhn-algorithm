import { useState, useEffect } from 'react';
import './style.css'


export default function App() {
    const [answer, setAnswer] = useState("");
    const [input, setInput] = useState("");

    const luhnFunction = (value) => {
        if (value.length < 10) return "false";
        let num = value.split("").reverse();
        for (let i = 0; i < num.length; i++) {
          if (i % 2 !== 0) {
            num[i] *= 2;
          }
        }
        let sum = num
          .join("")
          .split("")
          .reduce((a, b) => a + parseInt(b), 0);
        if (sum % 10 === 0) {
          return `Card is valid`;
        } else {
          return `Card is invalid`;
        }
      };

      useEffect(() => {
        setAnswer(luhnFunction(input));
      }, [input]);

      return (
        <div className="App">
          <h1>Credit Card Check</h1>
          <input
            maxLength="16"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <h2>{answer}</h2>
        </div>
      );
};