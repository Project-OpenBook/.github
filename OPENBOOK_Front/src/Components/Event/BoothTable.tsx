import { getAlphabets, getNumbers } from "./AddEvent";
import NumberLine from "./NumberLine";

interface Props {
  boothType: "ALPHABET" | "NUMBER";
  alphabet: string;
  number: number;
  handleAreaTableChange: (alpha: string, number: number) => void;
}

export default function BoothTable({
  boothType,
  alphabet,
  number,
  handleAreaTableChange,
}: Props) {
  const alphabets = getAlphabets(alphabet);
  const numbers = getNumbers(number);

  const numberLines: number[][] = [];
  let tempArr: number[] = [];
  numbers.forEach((n, i, arr) => {
    tempArr.push(n);
    if (n % 5 === 0 || arr.length - 1 === i) {
      numberLines.push(tempArr);
      tempArr = [];
    }
  });

  return (
    <div className="flex flex-col w-full gap-2 p-2">
      {boothType === "ALPHABET"
        ? alphabets.map((alphabet) => (
            <div
              className="flex w-full items-center font-bold text-2xl gap-2 p-4"
              key={alphabet}
            >
              <span className="min-w-8">{alphabet}</span>
              <NumberLine
                numbers={numbers}
                onClick={(number) => handleAreaTableChange(alphabet, number)}
              />
            </div>
          ))
        : numberLines.map((numberline, i) => (
            <div
              className="flex justify-between border border-blue-200 rounded-md font-bold text-2xl text-center"
              key={i}
            >
              {numberline.map((number) => (
                <div
                  key={number}
                  className="p-4 border-r border-blue-200 last:border-none flex-1"
                >
                  {number}
                </div>
              ))}
            </div>
          ))}
    </div>
  );
}
