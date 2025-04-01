import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  let [history, setHistory] = useState([]);
  let [score, setScore] = useState(0);

  const ajouterScore = () => {
    let input = parseInt(document.getElementById("input").value);
    if (isNaN(input) || input < 0) {
      alert("Entrer un score valide");
      document.getElementById("input").value = "";
      return;
    }

    let newScore = score + input;
    if (newScore < 0) newScore = 0;

    setHistory([...history, score]);
    setScore(newScore);
    document.getElementById("input").value = "";
  };

  const retour = () => {
    if (history.length === 0) return;

    let newHistory = [...history];
    let last = newHistory.pop();
    setHistory(newHistory);
    setScore(last);
  };

  const resetScore = () => {
    setScore(0);
    setHistory([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <div className="w-full max-w-md p-6 rounded-2xl bg-white bg-opacity-10 backdrop-blur-md shadow-lg border border-white/20">
        {/* Score Display */}
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          Score:{" "}
          <span className={score < 10 ? "text-red-400" : "text-green-300"}>
            {score}
          </span>
        </h1>

        {/* Input & Buttons */}
        <div className="flex flex-col gap-4">
          <input
            type="number"
            id="input"
            className="w-full p-3 text-lg text-blue-400 bg-transparent border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
            placeholder="Enter score"
          />
          <div className="flex justify-between gap-3">
            <Button action={ajouterScore} text="Ajouter" />

            <Button action={retour} text="Retour" />

            <Button action={resetScore} text="Reset" />
          </div>
        </div>

        {/* History */}
        <div className="mt-6">
          <h2 className="text-lg text-black font-semibold mb-2">
            Historique :
          </h2>
          <ul className="bg-white bg-opacity-20 p-4 rounded-xl max-h-32 overflow-y-auto shadow-inner">
            {history.length === 0 ? (
              <p className="text-black text-center">Aucun historique</p>
            ) : (
              history.map((value, index) => (
                <li
                  key={index}
                  className="text-black py-1 border-b border-white/30 last:border-none"
                >
                  {value}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Counter;
