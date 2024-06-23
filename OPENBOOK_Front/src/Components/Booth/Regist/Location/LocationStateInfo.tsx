interface Props {
  state: string;
  color: string;
}

export default function LocationStateInfo({ state, color }: Props) {
  return (
    <div className="flex items-center mr-4">
      <div className={`w-4 h-4 bg-${color} mr-2`} />
      <span>{state}</span>
    </div>
  );
}
