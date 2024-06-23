import React from "react";

interface RadioButtonsProps {
  sortOrder: string;
  onSortOrderChange: (order: string) => void;
}

export default function RadioButtons({
  sortOrder,
  onSortOrderChange,
}: RadioButtonsProps) {
  return (
    <div className="flex space-x-4">
      <label>
        <input
          type="radio"
          value="최신순"
          checked={sortOrder === "최신순"}
          onChange={() => onSortOrderChange("최신순")}
          className="mr-2"
        />
        최신순
      </label>
      <label>
        <input
          type="radio"
          value="오래된순"
          checked={sortOrder === "오래된순"}
          onChange={() => onSortOrderChange("오래된순")}
          className="mr-2"
        />
        오래된순
      </label>
    </div>
  );
}
