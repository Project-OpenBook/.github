import { useState } from "react";
interface Props {
  label: string;
  placeholder: string;
  value: string;
  type: "text" | "password";
  setValue: (value: string) => void;
  validate?: (value: string) => boolean;
}

export default function RegisterInput({
  label,
  placeholder,
  type,
  value,
  setValue,
  validate,
}: Props) {
  const [inputError, setInputError] = useState(false);

  const handleBlur = () => {
    if (validate) {
      const isValid = validate(value);
      setInputError(!isValid);
    }
  };

  return (
    <div className="flex flex-col h-20">
      <label htmlFor={label} className="font-bold">
        {label}{" "}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        className="h-1/2 w-full border-b-2 pl-1"
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
      />
      {inputError && type === "text" && (
        <div className="text-red-600">{`${label}의 형식이 올바르지 않습니다`}</div>
      )}
      {inputError && type === "password" && (
        <div className="text-red-600">비밀번호와 일치하지 않습니다</div>
      )}
    </div>
  );
}
