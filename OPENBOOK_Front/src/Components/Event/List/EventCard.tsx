import React from "react";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
  id: number;
  name: string;
  image: string;
  endDate: string;
}

export default function EventCard({
  id,
  name,
  image,
  endDate,
}: EventCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="border rounded overflow-hidden shadow-md w-full h-96 flex flex-col cursor-pointer"
    >
      <div className="flex-grow bg-gray-300 flex items-center justify-center h-56">
        <img src={image} alt={name} className="object-cover h-full w-full" />
      </div>
      <div className="p-4">
        <p className="text-gray-600">종료일: {endDate}</p>
        <p className="text-black font-bold">{name}</p>
      </div>
    </div>
  );
}
