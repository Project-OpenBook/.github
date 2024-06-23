interface Props {
  text: string;
}

export default function Time({ text }: Props) {
  return (
    <div className="w-15 shadow-md px-2 rounded-md text-white text-center bg-green-400 text-wrap">
      {text}
    </div>
  );
}
