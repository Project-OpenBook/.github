import { useState } from "react";

interface Props {
  numbers: number[];
  onClick: (number: number) => void;
}
export default function NumberLine({ numbers, onClick }: Props) {
  const [mouseEnterNumber, setMouseEnterNumber] = useState(0);
  const [clickNumber, setClickNumber] = useState(0);

  const onClickNumber = (number: number) => {
    setClickNumber(number);
    onClick(number);
  };

  return (
    <div
      className="border-blue-200 rounded-md"
      onMouseLeave={() => setMouseEnterNumber(0)}
    >
      {numbers.map((number) => (
        <div
          key={number}
          className={`inline-flex justify-center w-16 py-4 px-4 border border-blue-200 
          ${number <= clickNumber && "bg-orange-200"}
          ${number <= mouseEnterNumber && "bg-blue-100"} 
          `}
          onMouseEnter={() => setMouseEnterNumber(number)}
          onClick={() => onClickNumber(number)}
        >
          {number}
        </div>
      ))}
    </div>
  );
}
