export default function ServiceTimeInfo() {
  return (
    <div className="relative flex flex-col font-bold h-10 rounded-md w-20 items-center justify-center bg-blue-500 text-bold">
      09 : 00
      <button className="absolute top-[-6px] right-[-6px] h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
        x
      </button>
    </div>
  );
}
