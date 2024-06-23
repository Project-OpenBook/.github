import { ReactEventHandler } from "react";

interface Props {
  text: string;
  action: () => void;
  color: string;
}

export default function ModalButton({ action, text, color }: Props) {
  return (
    <button
      onClick={() => {
        action();
      }}
      className={`w-1/4 bg-${color} text-white py-2 rounded`}
    >
      {text}
    </button>
  );
}
