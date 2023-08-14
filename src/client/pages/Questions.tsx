import { useCountdown } from "../hooks/useCountdown";
import React from "react";

const Questions = () => {
  const { hours, minutes, seconds } = useCountdown(new Date("Aug 14, 2023 19:31:30").getTime());
  const arrQuestions = new Array(100).fill(0);
  return (
    <div>
      <div className="fixed w-full p-4 top-0 left-0 bg-amber-400">
        <div className="flex justify-end items-center">
          {hours} : {minutes} : {seconds}
        </div>
      </div>
      <h1 className="text-center text-gray-950 text-4xl mt-20">KOMPETENSI</h1>
      {arrQuestions.map((_, idx) => (
        <div key={idx}>
          <ol>
            <li>Pertanyaan ke-{idx + 1}</li>
          </ol>
        </div>
      ))}
    </div>
  );
};

export default Questions;
