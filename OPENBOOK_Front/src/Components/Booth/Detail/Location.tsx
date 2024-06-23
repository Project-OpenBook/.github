interface Props {
  text: string;
}

export default function Location({ text }: Props) {
  return (
    <div className="w-15 shadow-md px-2 rounded-md text-white text-center bg-red-400">
      {text}
    </div>
  );
}
