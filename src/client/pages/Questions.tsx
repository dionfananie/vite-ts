import { useCountdown } from "../hooks/useCountdown";
import React from "react";

const Questions = () => {
  const { hours, minutes, seconds } = useCountdown(new Date("Aug 19, 2023 19:31:30").getTime());
  const arrQuestions = new Array(10).fill(0);
  return (
    <div>
      <div className="fixed w-full p-4 top-0 left-0 bg-amber-400">
        <div className="flex justify-end items-center">
          {hours} : {minutes} : {seconds}
        </div>
      </div>
      <h1 className="text-center text-gray-950 text-4xl my-20">KOMPETENSI</h1>
      <ol className="list-decimal px-20 text-lg font-semibold">
        {arrQuestions.map((_, idx) => (
          <li key={idx} className="mb-12">
            <p className="text-lg font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, perferendis aliquid provident
            </p>
            <div className="grid grid-rows-2 grid-flow-col gap-4 mt-4">
              <div className="flex items-center">
                <input
                  id={`default-radio-1-${idx}`}
                  type="radio"
                  value=""
                  name={`default-radio-${idx}}`}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2 shrink-0  cursor-pointer"
                />
                <label htmlFor={`default-radio-1-${idx}`} className="ml-2 text-sm font-medium  cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id={`default-radio-2-${idx}`}
                  type="radio"
                  value=""
                  name={`default-radio-${idx}}`}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2 shrink-0  cursor-pointer"
                />
                <label htmlFor={`default-radio-2-${idx}`} className="ml-2 text-sm font-medium  cursor-pointer">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti deserunt doloremque ipsam a
                  perferendis iure odio iste odit nihil voluptas ab vel enim nobis ullam optio deleniti.
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id={`default-radio-3-${idx}`}
                  type="radio"
                  value=""
                  name={`default-radio-${idx}}`}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2 shrink-0  cursor-pointer"
                />
                <label htmlFor={`default-radio-3-${idx}`} className="ml-2 text-sm font-medium  cursor-pointer">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti deserunt doloremque ipsam a
                  perferendis iure odio iste odit nihil voluptas ab vel enim nobis ullam optio deleniti.
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id={`default-radio-4-${idx}`}
                  type="radio"
                  value=""
                  name={`default-radio-${idx}}`}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2 shrink-0  cursor-pointer"
                />
                <label htmlFor={`default-radio-4-${idx}`} className="ml-2 text-sm font-medium  cursor-pointer">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Questions;
