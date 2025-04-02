import React, { useState } from "react";
import Button from "./componenents/Button";

function Counter() {
  const [history1, setHistory1] = useState([]);
  const [history2, setHistory2] = useState([]);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const ajouterScore = () => {
    const parsedInput1 = Number(input1) || 0; // Default to 0 if input is invalid
    const parsedInput2 = Number(input2) || 0;

    if (parsedInput1 < 0 || parsedInput2 < 0) {
      alert("Scores cannot be negative!");
      return;
    }

    const newScore1 = score1 + parsedInput1;
    const newScore2 = score2 + parsedInput2;

    setHistory1([...history1, score1]);
    setHistory2([...history2, score2]);
    setScore1(newScore1);
    setScore2(newScore2);
    setInput1("");
    setInput2("");
  };

  const retour = () => {
    if (history1.length === 0 || history2.length === 0) return;

    const newHistory1 = [...history1];
    const newHistory2 = [...history2];

    setScore1(newHistory1.pop());
    setScore2(newHistory2.pop());

    setHistory1(newHistory1);
    setHistory2(newHistory2);
  };

  const resetScore = () => {
    setScore1(0);
    setHistory1([]);
    setScore2(0);
    setHistory2([]);
    setInput1("");
    setInput2("");
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-md p-6 rounded-2xl bg-white bg-opacity-10 backdrop-blur-md shadow-lg border border-white/20">
        {/* Score Display */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Belote Bilan by GOTZE
        </h1>
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          Score:{" "}
          <span className={score1 < 10 ? "text-red-400" : "text-green-300"}>
            {score1}
          </span>
          ||
          <span className={score2 < 10 ? "text-red-400" : "text-green-300"}>
            {score2}
          </span>
        </h1>

        {/* Input & Buttons */}
        <div className="flex flex-col gap-4">
          <input
            type="number"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="w-full p-3 text-lg text-blue-400 bg-transparent border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
            placeholder="Enter score team 1"
          />
          <input
            type="number"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="w-full p-3 text-lg text-blue-400 bg-transparent border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-black"
            placeholder="Enter score team 2"
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
          <div className="bg-white bg-opacity-20 p-4 rounded-xl max-h-32 overflow-y-auto shadow-inner">
            {history1.length === 0 && history2.length === 0 ? (
              <p className="text-black text-center">Aucun historique</p>
            ) : (
              <table className="w-full text-black text-left">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-white/30">
                      Team 1
                    </th>
                    <th className="py-2 px-4 border-b border-white/30">
                      Team 2
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {history1.map((value, index) => (
                    <tr key={index}>
                      <td className="py-1 px-4 border-b border-white/30">
                        {value}
                      </td>
                      <td className="py-1 px-4 border-b border-white/30">
                        {history2[index] !== undefined ? history2[index] : "-"}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-1 px-4 border-b text-blue-500 border-white/30">
                      {score1}
                    </td>
                    <td className="py-1 px-4 border-b text-blue-500 border-white/30">
                      {score2}
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
