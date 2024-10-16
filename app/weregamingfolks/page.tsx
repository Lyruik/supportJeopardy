// imports
"use client";
import { useEffect, useState } from "react";
import questions from "../testData.json";
import { Question } from "../types";
import { openCard } from "./cardLogic";
// page

export default function Page() {
  const [quesos, setQuesos] = useState([
    {
      category: "",
      points: "Loading",
      question: "",
      answer: "",
    },
  ]);
  // I guess later we'll need players,setPlayers and like score,setScore somewhere just thinkin

  useEffect(() => {
    (async () => {
      setQuesos(questions);
    })();
  }, []);

  return (
    <main className="h-screen flex w-full">
      <div className="w-11/12">
        <div
          id="header"
          className="grid grid-flow-row grid-rows-1 grid-cols-5 gap-8 text-center text-3xl h-1/6 gameHeader"
        >
          <h1>EPIC</h1>
          <h1>VIEWpath</h1>
          <h1>Devices</h1>
          <h1>Miscellaneous</h1>
          <h1>Server Management</h1>
        </div>
        <div
          id="gameboard"
          className="grid grid-flow-row grid-rows-5 grid-cols-5 gap-8 h-4/5 items-center row-start-2 col-start-1"
        >
          {quesos.map((question: Question, idx) => {
            return (
              <div
                key={`questionBox#${idx}`}
                className="border-x-sky-300 border text-center content-center h-full hover:cursor-pointer"
                onClick={() => openCard(idx)}
              >
                <span className="text-6xl">{question.points}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div id="scoreboard" className="w-1/12 text-center">
        Scoreboard
      </div>
    </main>
  );
}
